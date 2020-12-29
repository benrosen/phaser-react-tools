import InvalidPropertyNameError from './InvalidPropertyNameError'

describe('The InvalidPropertyNameError', () => {
  it('should be throwable.', () => {
    expect(() => {
      throw new InvalidPropertyNameError()
    }).toThrow(InvalidPropertyNameError)
  })

  it('should contain the message that was passed into its constructor.', () => {
    const message = 'Missing required argument.'
    const error = new InvalidPropertyNameError(message)
    expect(error.message).toBe(message)
  })

  //   TODO test for stack trace
  //   it('should contain a stack trace.', () => {})
})
