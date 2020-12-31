import InvalidPropertyNameError from './InvalidPropertyNameError'
import MissingArgumentError from './MissingArgumentError'

/**
 * An error that occurs when a protected value on the Phaser config object is set incorrectly.
 *
 * @class
 * @module ConfigError
 * @extends TypeError
 */
export default class ConfigError extends TypeError {
  /**
   * Creates an instance representing an error that occurs when a protected value on the Phaser config object is set incorrectly.
   *
   * @param {Object} config The Phaser config object whose property value is set incorrectly.
   * @param {*} propertyName The name of the property whose value is set incorrectly.
   */
  constructor(config, propertyName) {
    if (!config) {
      throw new MissingArgumentError(
        'You must provide the Phaser config object whose property value is set incorrectly when attempting to create a ConfigError.'
      )
    }

    if (!propertyName) {
      throw new MissingArgumentError(
        'You must provide the name of the property whose value is set incorrectly when attempting to create a ConfigError.'
      )
    }

    const value = config[propertyName]

    if (value === undefined) {
      throw new InvalidPropertyNameError(
        `The Phaser config object does not have a property named ${propertyName}.`
      )
    }

    super(
      `phaser-react-tools sets the ${propertyName} property of the Phaser config object internally. As such, the user-provided value of ${value} will be overridden.`
    )

    Error.captureStackTrace(this, ConfigError)
  }
}
