import ConfigError from '../errors/ConfigError'
import Phaser from 'phaser'
import { renderHook } from '@testing-library/react-hooks'
import usePhaser from './usePhaser'

describe('The usePhaser hook', () => {
  it('should throw a ConfigError if the value of config.canvas is defined.', () => {
    const config = { canvas: 'abc' }
    const { result } = renderHook(() => usePhaser(config))
    expect(result.error).toBeInstanceOf(ConfigError)
  })

  it('should throw a ConfigError if the value of config.type is not Phaser.CANVAS.', () => {
    const config = { type: Phaser.AUTO }
    const { result } = renderHook(() => usePhaser(config))
    expect(result.error).toBeInstanceOf(ConfigError)
  })

  it('should not throw a ConfigError if the the value of config.type is Phaser.CANVAS.', () => {
    const config = { type: Phaser.CANVAS }
    const { result } = renderHook(() => usePhaser(config))
    expect(result.error).not.toBeInstanceOf(ConfigError)
  })

  it('should return a setup object.', () => {
    const { result } = renderHook(() => usePhaser())
    expect(result.current).toBeDefined()
  })

  describe('setup object', () => {
    const userConfig = {
      height: 200,
      title: 'My Phaser Game',
      width: 300
    }

    const { result } = renderHook(() => usePhaser(userConfig))
    const [canvasRef, gameInstance] = result.current

    describe('canvas ref', () => {
      it('should be defined.', () => {
        expect(canvasRef).toBeDefined()
      })

      describe('current value', () => {
        it('should be undefined.', () => {
          expect(canvasRef.current).toBeUndefined()
        })
      })
    })

    describe('pre-boot game instance', () => {
      it('should be undefined.', () => {
        expect(gameInstance).toBeUndefined()
      })
    })

    //
    // TODO test post-boot game instance
    //
    // describe('post-boot game instance', () => {
    //   describe('config', () => {
    //     const gameConfig = game.config

    //     it('should be defined.', () => {
    //       expect(gameConfig).toBeDefined()
    //     })

    //     // TODO test that gameConfig contains all data from userConfig
    //     it('should contain the Phaser config object data.', () => {
    //       //
    //     })

    //     describe('canvas property', () => {
    //       const canvas = gameConfig.canvas

    //       it('should be defined.', () => {
    //         expect(canvas).toBeDefined()
    //       })

    //       // TODO test canvasRef reference
    //       // it('should reference the canvasRef.', () => {
    //       //   //
    //       // })
    //     })

    //     describe('type property', () => {
    //       const type = gameConfig.type

    //       it('should be defined.', () => {
    //         expect(type).toBeDefined()
    //       })

    //       it('should equal Phaser.CANVAS.', () => {
    //         expect(type).toBe(Phaser.CANVAS)
    //       })
    //     })

    //     describe('postBoot callback', () => {
    //       const postBootCallback = gameConfig.callbacks.postBoot

    //       it('should be defined', () => {
    //         expect(postBootCallback).toBeDefined()
    //       })
    //     })
    //   })
    // })
  })
})
