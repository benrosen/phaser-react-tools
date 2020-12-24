import events from '../events'

export default function create() {
  // do create stuff
  this.game.events.on(events.ON_BUTTON_CLICK, (event) => {
    console.log(event)
  })
}
