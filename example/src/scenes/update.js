import events from '../events'

export default function update() {
  // do update stuff
  this.game.events.emit(events.ON_UPDATE)
}
