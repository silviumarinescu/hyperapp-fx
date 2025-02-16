function consoleEffect(args) {
  // eslint-disable-next-line no-console
  console.log.apply(null, args)
}

/**
 * Describes an effect that will call [`console.log`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) with arguments. Useful for development and debugging. Not recommended for production.
 *
 * @memberof module:fx
 * @param {...*} args - arguments to log to the console
 * @example
 * import { Console } from "hyperapp-fx"
 */
export function Console() {
  return [consoleEffect, arguments]
}
