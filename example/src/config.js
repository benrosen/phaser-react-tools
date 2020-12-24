import create from './scenes/create'
import preload from './scenes/preload'
import update from './scenes/update'

export default {
  backgroundColor: '000000',
  height: 300,
  width: 400,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}
