# phaser-react-tools

By default, [Phaser][1] and [React][2] don't always get along. `phaser-react-tools` is here to help.

You can use `phaser-react-tools` to:

- Embed your Phaser game in a React application
- Build your game's UI with React
- Send events & data between Phaser and React

## Quickstart

To install, run:

`npm i phaser-react-tools`

## Config

The `Game` component is a [HOC][3] that can be configured [just like a normal Phaser game][4].

```jsx
import { Game } from 'phaser-react-tools'

export default function App() {
  return (
    <Game
      config={{
        backgroundColor: '000000',
        height: 300,
        width: 400,
        scene: {
          preload: function () {
            console.log('preload')
          },
          create: function () {
            console.log('create')
          }
        }
      }}
    >
      {/* YOUR GAME UI GOES HERE */}
    </Game>
  )
}
```

## Events

The `useEventEmitter` hook can help you send messages from a React component to your Phaser game.

```jsx
import { useEventEmitter } from 'phaser-react-tools'

export default () => {
  const emit = useEventEmitter('BUTTON_CLICK_EVENT')

  return <button onClick={() => emit('Click!')}>Emit</button>
}
```

The `useEventListener` hook can help you handle game events in your React components.

```jsx
import { useEventListener } from 'phaser-react-tools'

export default () => {
  useEventListener('BUTTON_CLICK_EVENT', ({ detail }) => {
    console.log(detail)
  })
}
```

[1]: https://www.npmjs.com/package/phaser 'Phaser package'
[2]: https://www.npmjs.com/package/react 'React package'
[3]: https://reactjs.org/docs/higher-order-components.html 'Higher-order component'
[4]: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig 'Phaser config docs'
