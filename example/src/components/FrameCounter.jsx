import React, { useState } from 'react'

import events from '../events'
import { useEventListener } from 'phaser-react-tools'

export default () => {
  const [frame, setFrame] = useState(0)
  useEventListener(events.ON_UPDATE, (event) => {
    setFrame((frame) => (frame += 1))
  })
  return <p style={{ color: '#fff' }}>Frame: {frame}</p>
}
