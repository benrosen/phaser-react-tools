import '@testing-library/jest-dom/extend-expect'

import React, { useContext } from 'react'

import ConfigError from '../errors/ConfigError'
import GameComponent from './GameComponent'
import { GameContext } from '../contexts/GameContext'
import Phaser from 'phaser'
import { render } from '@testing-library/react'

describe('The GameComponent component', () => {
  describe('children', () => {
    const childMessage = 'Hello world!'

    it('should render.', () => {
      const ChildComponent = () => <p>{childMessage}</p>
      const { getByText } = render(
        <GameComponent>
          <ChildComponent />
        </GameComponent>
      )
      expect(getByText(childMessage)).toBeInTheDocument()
    })

    it('should have access to a GameContext via the useContext hook.', () => {
      const ChildComponent = () => {
        useContext(GameContext)
        return <p>{childMessage}</p>
      }
      const { getByText } = render(
        <GameComponent>
          <ChildComponent />
        </GameComponent>
      )
      expect(getByText(childMessage)).toBeInTheDocument()
    })
  })

  describe('config', () => {
    it('should throw a ConfigError if the value of the type property is not Phaser.CANVAS.', () => {
      jest.spyOn(console, 'error')
      console.error.mockImplementation(() => {})

      expect(() =>
        render(
          <GameComponent
            config={{
              type: Phaser.AUTO
            }}
          />
        )
      ).toThrow(ConfigError)

      console.error.mockRestore()
    })

    it('should throw a ConfigError if the value of the canvas property is defined.', () => {
      jest.spyOn(console, 'error')
      console.error.mockImplementation(() => {})

      expect(() =>
        render(
          <GameComponent
            config={{
              canvas: 'Hello world!'
            }}
          />
        )
      ).toThrow(ConfigError)

      console.error.mockRestore()
    })
  })
})
