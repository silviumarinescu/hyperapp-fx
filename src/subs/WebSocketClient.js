import { makeRemoveListener } from "../utils.js"

var CONNECTING = 0
var connections = {}

function webSocketEffect(props, dispatch) {
  var connection = connections[props.url]
  if (!connection) {
    connection = {
      socket: new WebSocket(props.url, props.protocols),
      listeners: []
    }
    connections[props.url] = connection
  }
  function sendMessage() {
    connection.socket.send(props.send)
  }
  if (props.send) {
    if (connection.socket.readyState === CONNECTING) {
      connection.socket.addEventListener("open", sendMessage)
    } else {
      sendMessage()
    }
  }
  var removeListen
  if (props.listen) {
    removeListen = makeRemoveListener(
      connection.socket,
      dispatch,
      props.listen,
      "message"
    )
    connection.listeners.push(removeListen)
  }
  var removeError
  if (props.error) {
    removeError = makeRemoveListener(
      connection.socket,
      dispatch,
      props.error,
      "error"
    )
    connection.listeners.push(removeError)
  }

  return function() {
    removeListen && removeListen()
    removeError && removeError()
    connection.listeners = connection.listeners.filter(function(listener) {
      return listener !== removeListen && listener !== removeError
    })
    if (connection.listeners.length === 0) {
      connection.socket.close()
      delete connections[props.url]
    }
  }
}

/**
 * Describes an effect that will open a [`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) connection for a given URL and optional protocols. A message may be sent to the server on connection and messages to the client may be listened for. Connections will remain open until the last subscription for that URL are cancelled.
 *
 * @memberof module:subs
 * @param {object} props
 * @param {string} props.url - The URL to which to connect; this should be the URL to which the WebSocket server will respond
 * @param {string | string[]} props.protocols - Either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols (for example, you might want one server to be able to handle different types of interactions depending on the specified `protocol`). If you don't specify a protocol string, an empty string is assumed.
 * @param {*} props.send - data to send once connected
 * @param {*} props.listen - action to call with new incoming messages
 * @param {*} props.error - action to call if an error occurs
 * @example
 * import { WebSocketClient } from "hyperapp-fx"
 */
export function WebSocketClient(props) {
  return [webSocketEffect, props]
}
