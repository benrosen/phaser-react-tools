/**
 * An error that occurs when a required argument is missing.
 */
export default class MissingArgumentError extends TypeError {
  /**
   * Creates an instance representing an error that occurs when a required argument is missing.
   *
   * @param  {...any} [args] The error arguments.
   */
  constructor(...args) {
    super(...args)
    Error.captureStackTrace(this, MissingArgumentError)
  }
}
