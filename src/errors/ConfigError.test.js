import ConfigError from './ConfigError'
import InvalidPropertyNameError from './InvalidPropertyNameError'
import MissingArgumentError from './MissingArgumentError'

describe('The ConfigError', () => {
  it('should throw a MissingArgumentError if the Phaser config object whose property value is set incorrectly is not provided.', () => {
    expect(() => {
      const config = undefined
      const propertyName = 'title'
      throw new ConfigError(config, propertyName)
    }).toThrow(MissingArgumentError)
  })

  it('should throw a MissingArgumentError if the name of the property whose value is set incorrectly is not provided.', () => {
    expect(() => {
      const config = { title: 'My Phaser Game' }
      const propertyName = undefined
      throw new ConfigError(config, propertyName)
    }).toThrow(MissingArgumentError)
  })

  it('should throw an InvalidPropertyNameError if the property is not defined on the Phaser config object.', () => {
    expect(() => {
      const config = { title: 'My Phaser Game' }
      const propertyName = 'asdf'
      throw new ConfigError(config, propertyName)
    }).toThrow(InvalidPropertyNameError)
  })

  it('should be throwable.', () => {
    expect(() => {
      throw new ConfigError({ title: 'My Phaser Game' }, 'title')
    }).toThrow(ConfigError)
  })

  //   TODO test for stack trace
  //   it('should contain a stack trace.', () => {})

  describe('message', () => {
    const config = { title: 'My Phaser Game' }
    const propertyName = 'title'
    const configError = new ConfigError(config, propertyName)
    const message = configError.message

    it('should be defined.', () => {
      expect(message).toBeDefined()
    })

    it('should contain the name of the property whose value is set incorrectly.', () => {
      const expression = new RegExp(propertyName)
      expect(message).toMatch(expression)
    })

    it('should contain the value of the property whose value is set incorrectly.', () => {
      const value = config[propertyName]
      const expression = new RegExp(value)
      expect(message).toMatch(expression)
    })
  })
})
