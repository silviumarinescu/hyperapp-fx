## Modules

<dl>
<dt><a href="#module_fx">fx</a></dt>
<dd></dd>
<dt><a href="#module_subs">subs</a></dt>
<dd></dd>
</dl>

<a name="module_fx"></a>

## fx

* [fx](#module_fx)
    * [.exports.BatchFx(...fx)](#module_fx.exports.BatchFx)
    * [.exports.Console(...args)](#module_fx.exports.Console)
    * [.exports.Debounce(props)](#module_fx.exports.Debounce)
    * [.exports.Http(props)](#module_fx.exports.Http)
    * [.exports.Merge(action)](#module_fx.exports.Merge)
    * [.exports.Random(props)](#module_fx.exports.Random)
    * [.exports.Throttle(props)](#module_fx.exports.Throttle)

<a name="module_fx.exports.BatchFx"></a>

### fx.exports.BatchFx(...fx)
**Kind**: static method of [<code>fx</code>](#module_fx)  

| Param | Type | Description |
| --- | --- | --- |
| ...fx | <code>\*</code> | FX to run together in a batch |

**Example**  
```js
import { BatchFx } from "hyperapp-fx"
```
<a name="module_fx.exports.Console"></a>

### fx.exports.Console(...args)
Describes an effect that will call [`console.log`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) with arguments. Useful for development and debugging. Not recommended for production.

**Kind**: static method of [<code>fx</code>](#module_fx)  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>\*</code> | arguments to log to the console |

**Example**  
```js
import { Console } from "hyperapp-fx"
```
<a name="module_fx.exports.Debounce"></a>

### fx.exports.Debounce(props)
Describes an effect that will call an action after waiting for a delay to pass. The delay will be reset each time the action is called.

**Kind**: static method of [<code>fx</code>](#module_fx)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.wait | <code>number</code> | delay to wait before calling the action |
| props.action | <code>\*</code> | action to debounce |

**Example**  
```js
import { Debounce } from "hyperapp-fx"
```
<a name="module_fx.exports.Http"></a>

### fx.exports.Http(props)
Describes an effect that will send an HTTP request using [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) and then call an action with the response. If you are using a browser from the Proterozoic Eon like Internet Explorer you will want one of the [available](https://github.com/developit/unfetch) `fetch` [polyfills](https://github.com/github/fetch). Supports the same [options as `fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#Parameters) plus the following additional properties:

**Kind**: static method of [<code>fx</code>](#module_fx)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.response | <code>string</code> | Specify which method to use on the response body, defaults to "json" |
| props.action | <code>\*</code> | Action to call with the results of a successful HTTP response |
| props.error | <code>\*</code> | Action to call if there is a problem making the request or a not-ok HTTP response, defaults to the same action defined for success |

**Example**  
```js
import { Http } from "hyperapp-fx"
```
<a name="module_fx.exports.Merge"></a>

### fx.exports.Merge(action)
**Kind**: static method of [<code>fx</code>](#module_fx)  

| Param | Type | Description |
| --- | --- | --- |
| action | <code>function</code> | an action function that takes state and returns a partial new state which will be shallow-merged with the previous state |

**Example**  
```js
import { Merge } from "hyperapp-fx"
```
<a name="module_fx.exports.Random"></a>

### fx.exports.Random(props)
Describes an effect that will call an action with a [randomly generated number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) within a range. If provided the range will be `[min, max)` or else the default range is `[0, 1)`. The random number will be provided as the action `data`.

Use [`Math.floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) if you want a random integer instead of a floating-point number. Remember the range will be `max` exclusive, so use your largest desired int + 1.

**Kind**: static method of [<code>fx</code>](#module_fx)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.action | <code>\*</code> | action to call with the random number result |
| props.min | <code>number</code> | minimum random number to generate |
| props.max | <code>number</code> | maximum random number to generate |

**Example**  
```js
import { Random } from "hyperapp-fx"
```
<a name="module_fx.exports.Throttle"></a>

### fx.exports.Throttle(props)
Describes an effect that will call an action at a maximum rate. Where `rate` is one call per `rate` milliseconds.

**Kind**: static method of [<code>fx</code>](#module_fx)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.rate | <code>number</code> | minimum time between action calls |
| props.action | <code>\*</code> | action to throttle |

**Example**  
```js
import { Throttle } from "hyperapp-fx"
```
<a name="module_subs"></a>

## subs

* [subs](#module_subs)
    * [.exports.Animation(action)](#module_subs.exports.Animation)
    * [.exports.Keyboard(props)](#module_subs.exports.Keyboard)
    * [.exports.Time(props)](#module_subs.exports.Time)
    * [.exports.WebSocketClient(props)](#module_subs.exports.WebSocketClient)

<a name="module_subs.exports.Animation"></a>

### subs.exports.Animation(action)
Describes an effect that will call an action from inside a [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) loop, which is also where the render triggered by the action will run. A relative timestamp will be provided as the action `data`.

**Kind**: static method of [<code>subs</code>](#module_subs)  

| Param | Type | Description |
| --- | --- | --- |
| action | <code>\*</code> | action to call inside a requestAnimationFrame loop |

**Example**  
```js
import { Animation } from "hyperapp-fx"
```
<a name="module_subs.exports.Keyboard"></a>

### subs.exports.Keyboard(props)
Describes an effect that can capture [keydown](https://developer.mozilla.org/en-US/docs/Web/Events/keydown), [keyup](https://developer.mozilla.org/en-US/docs/Web/Events/keyup), and [keypress](https://developer.mozilla.org/en-US/docs/Web/Events/keypress) events for your entire document. The [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) will be provided as the action `data`.

**Kind**: static method of [<code>subs</code>](#module_subs)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.downs | <code>boolean</code> | listen for keydown events |
| props.ups | <code>boolean</code> | listen for keyup events |
| props.presses | <code>boolean</code> | listen for keypress events |
| props.action | <code>\*</code> | action to call when keyboard events are fired |

**Example**  
```js
import { Keyboard } from "hyperapp-fx"
```
<a name="module_subs.exports.Time"></a>

### subs.exports.Time(props)
Describes an effect that can provide timestamps to actions using [`performance.now`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) or dates using the [`new Date()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Syntax) API. The action can be fired now, after a delay, or at a regular interval. The timestamp/date will be provided as the action `data`.

**Kind**: static method of [<code>subs</code>](#module_subs)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.now | <code>boolean</code> | get the current time immediately |
| props.after | <code>number</code> | get the time after a delay |
| props.every | <code>number</code> | get the time repeatedly after waiting a set interval |
| props.asDate | <code>boolean</code> | use a Date object instead of a timestamp |
| props.action | <code>\*</code> | action to call with the time |

**Example**  
```js
import { Time } from "hyperapp-fx"
```
<a name="module_subs.exports.WebSocketClient"></a>

### subs.exports.WebSocketClient(props)
Describes an effect that will open a [`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) connection for a given URL and optional protocols. A message may be sent to the server on connection and messages to the client may be listened for. Connections will remain open until the last subscription for that URL are cancelled.

**Kind**: static method of [<code>subs</code>](#module_subs)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| props.url | <code>string</code> | The URL to which to connect; this should be the URL to which the WebSocket server will respond |
| props.protocols | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols (for example, you might want one server to be able to handle different types of interactions depending on the specified `protocol`). If you don't specify a protocol string, an empty string is assumed. |
| props.send | <code>\*</code> | data to send once connected |
| props.listen | <code>\*</code> | action to call with new incoming messages |
| props.error | <code>\*</code> | action to call if an error occurs |

**Example**  
```js
import { WebSocketClient } from "hyperapp-fx"
```
