import MissingArgumentError from './MissingArgumentError'

describe('The MissingArgumentError', () => {
  it('should be throwable.', () => {
    expect(() => {
      throw new MissingArgumentError()
    }).toThrow(MissingArgumentError)
  })

  it('should contain the message that was passed into its constructor.', () => {
    const message = 'Missing required argument.'
    const error = new MissingArgumentError(message)
    expect(error.message).toBe(message)
  })

  //   TODO test for stack trace
  //   it('should contain a stack trace.', () => {})
})
