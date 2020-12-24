import Phaser from 'phaser'
import events from '../events'

export default function create() {
  this.game.events.on(events.ON_BUTTON_CLICK, (event) => {
    console.log(event)
    const { width, height } = this.game.config
    const color = new Phaser.Display.Color().random().color
    const radius = Phaser.Math.Between(0, Math.max(width, height) / 2)
    this.add.circle(width / 2, height / 2, radius, color)
  })
}
