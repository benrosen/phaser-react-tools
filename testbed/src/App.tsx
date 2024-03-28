import "./App.css";
import { PhaserGame } from "phaser-react-tools";
import { Fragment, useEffect, useState } from "react";
import dudePath from "./assets/dude.png";
import platformPath from "./assets/platform.png";
import skyPath from "./assets/sky.png";

function App() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleScore = () => {
      setScore(score + 1);
    };

    document.body.addEventListener("score", handleScore);

    return () => {
      document.body.removeEventListener("score", handleScore);
    };
  }, []);

  return (
    <Fragment>
      <h1>Star Jumper</h1>
      <p>Click the start button to jump. Catch passing stars to earn points.</p>
      <p>
        Made with{" "}
        <a href="https://github.com/benrosen/phaser-react-tools">
          phaser-react-tools
        </a>
      </p>
      <PhaserGame
        config={{
          backgroundColor: 0xffffff,
          height: 500,
          physics: {
            default: "arcade",
            arcade: {
              gravity: { y: 1200 },
              debug: false,
            },
          },
          scene: {
            preload: function () {
              this.load.image("sky", skyPath);
              this.load.image("platform", platformPath);
              this.load.spritesheet("dude", dudePath, {
                frameWidth: 32,
                frameHeight: 48,
              });
            },
            create: function () {
              this.add.image(400, 300, "sky");
              const platforms = this.physics.add.staticGroup();
              platforms.create(400, 500, "platform").setScale(2).refreshBody();
              const player = this.physics.add.sprite(100, 400, "dude");
              player.setBounce(0.2);
              player.setCollideWorldBounds(true);
              this.anims.create({
                key: "left",
                frames: this.anims.generateFrameNumbers("dude", {
                  start: 0,
                  end: 3,
                }),
                frameRate: 10,
                repeat: -1,
              });
              this.anims.create({
                key: "turn",
                frames: [{ key: "dude", frame: 4 }],
                frameRate: 20,
              });
              this.anims.create({
                key: "right",
                frames: this.anims.generateFrameNumbers("dude", {
                  start: 5,
                  end: 8,
                }),
                frameRate: 10,
                repeat: -1,
              });
              this.physics.add.collider(player, platforms);
              player.anims.play("right", true);
              document.body.addEventListener("jump", () => {
                if (player.body.touching.down) {
                  player.setVelocityY(-500);
                }
              });
            },
          },
          width: 500,
        }}
        canvasStyle={{
          outline: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <button
            onClick={() => document.body.dispatchEvent(new Event("jump"))}
          >
            Jump
          </button>
          <p style={{ color: "white", fontWeight: "bold" }}>Score: {score}</p>
        </div>
      </PhaserGame>
    </Fragment>
  );
}

export default App;
