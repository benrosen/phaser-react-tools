/**
 * An error that occurs when an invalid property name is provided.
 *
 * @class
 * @module InvalidPropertyNameError
 * @extends TypeError
 */
export default class InvalidPropertyNameError extends TypeError {
  /**
   * Creates an instance representing an error that occurs when an invalid property name is provided.
   *
   * @param  {...any} [args] The error arguments.
   */
  constructor(...args) {
    super(...args)
    Error.captureStackTrace(this, InvalidPropertyNameError)
  }
}
