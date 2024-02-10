# `phaser-react-tools`

Turn your game into a React component.

Build your UI in React and the rest of your game in Phaser.

Use vanilla browser events and custom React hooks to glue everything together asynchronously.

## Getting Started

> [!NOTE]
> `phaser-react-tools` is a TypeScript library.
> It will work just fine for JavaScript projects, but the docs will be easier to read if you're comfortable with TypeScript.

> [!TIP]
> If you're a little rusty on Phaser or React, you might want to brush up on those first.
> This guide assumes you're already familiar with both Phaser and React.

Install `phaser-react-tools` in your React project with `npm i phaser-react-tools`.

> [!IMPORTANT]
> Make sure your React project also has Phaser installed (and React);
> `phaser-react-tools` requires both React and Phaser as [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/).

To get started, create a configuration object for your Phaser game.

```typescript jsx
const gameConfig: Phaser.Types.Core.GameConfig = {
  // your config options go here
  // for information on what to put here, see the Phaser documentation:
  // https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig__anchor
};
```

> [!NOTE]
> There's nothing special here; it's just a regular Phaser configuration object.

Use the configuration object to create a React component from your Phaser game.

```typescript jsx
const MyGameComponent = () => {
  return <PhaserGame config={gameConfig} />;
}
```

Drop the component into your React app.

```typescript jsx
const App = () => {
  return (
    <div>
      <h1>My Game</h1>
      <MyGameComponent />
    </div>
  );
}
```

## Creating an event registry

`phaser-react-tools` uses events to glue Phaser and React together.

Even simple games will use many different events, representing UI interactions, physical collisions, game state changes, and more.

To avoid accidental naming collisions, typos, and other hard-to-debug problems, it's a good idea to create a central registry of event names.

```typescript
enum GameEvents {
  PauseModalMounted = 'pause-modal-mounted',
  ButtonClicked = 'button-clicked',
  LoadingAnimationFinished = 'loading-animation-finished',
  PlayerCollidedWithCollectible = 'player-collided-with-collectible',
  SceneStarted = 'scene-started'
  // etc.
}
```

> [!TIP]
> You don't have to use an event registry; plain old strings work just fine.

## Communicating between Phaser and React

Use the `useEmitter` hook to send events from React to Phaser.

```typescript jsx
const emit = useEmitter();

useEffect(() => {
  emit(GameEvents.PauseModalMounted)
}, []);
```

> [!TIP]
> This is useful when you want to:
> - pause the game in Phaser when a modal is opened in React
> - play a sound effect in Phaser when a button is clicked in React
> - start a Phaser scene when an animation finishes in React
> - etc.

Use the `useListener` hook to listen for events from Phaser in React.


```typescript jsx
const [hasSceneStarted, setHasSceneStarted] = useState(false);

useListener(GameEvents.SCENE_STARTED, () => {
  setHasSceneStarted(true);
});

return hasSceneStarted ? <HeadsUpDisplay /> : null;
```

> [!TIP]
> This is useful when you want to:
> - fade-in a heads-up-display in React when a scene starts in Phaser
> - update a stateful progress bar component when the player collides with a collectible in Phaser
> - etc.

Configure event handlers in Phaser to respond to events from React.

```typescript
this.game.events.on(GameEvents.PauseModalMounted, (data) => {
  pauseGame();
});
```

Publish events from a Phaser Scene to React.

```typescript
this.game.events.emit(GameEvents.SCENE_STARTED);
```

## Contributing to the project

Report bugs, find issues to work on, and suggest features [on GitHub](https://github.com/benrosen/phaser-react-tools/issues).

Chat with fellow contributors [on Discord](https://discord.gg/jKzEuh5BzZ).

The code lives in the [package](./package) folder.

The end-to-end tests live in the [testbed](./testbed) folder.
