# phaser-react-tools

![npm](https://img.shields.io/npm/v/phaser-react-tools) ![Maintenance](https://img.shields.io/maintenance/yes/2020) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/benrosen/phaser-react-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/benrosen/phaser-react-tools) ![NPM](https://img.shields.io/npm/l/phaser-react-tools) ![GitHub issues](https://img.shields.io/github/issues-raw/benrosen/phaser-react-tools) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/benrosen/phaser-react-tools) ![GitHub language count](https://img.shields.io/github/languages/count/benrosen/phaser-react-tools) ![GitHub top language](https://img.shields.io/github/languages/top/benrosen/phaser-react-tools) ![npm](https://img.shields.io/npm/dw/phaser-react-tools)

By default, [Phaser][1] and [React][2] don't always get along. `phaser-react-tools` is here to help.

You can use `phaser-react-tools` to:

- Embed your Phaser game in a React application
- Build your game's UI with React
- Send events & data between Phaser and React

## Quickstart

To install, run:

`npm i phaser-react-tools`

## Config

The `GameComponent` is a [HOC][3] that can be configured [just like a normal Phaser game][4].

```jsx
import { GameComponent } from 'phaser-react-tools'

export default function App() {
  return (
    <GameComponent
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
    </GameComponent>
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
  useEventListener('BUTTON_CLICK_EVENT', (event) => {
    console.log(event)
  })
}
```

## Next steps

Check out the `/example` directory or [visit the docs][5].

If you find a bug or have ideas for improvements, please [create an issue][6] and/or [submit a pull request][7].

[1]: https://www.npmjs.com/package/phaser 'Phaser package'
[2]: https://www.npmjs.com/package/react 'React package'
[3]: https://reactjs.org/docs/higher-order-components.html 'Higher-order component'
[4]: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig 'Phaser config docs'
[5]: https://benrosen.github.io/phaser-react-tools 'phaser-react-tools docs'
[6]: https://github.com/benrosen/phaser-react-tools/issues 'create an issue'
[7]: https://github.com/benrosen/phaser-react-tools/pulls 'submit a pull request'
