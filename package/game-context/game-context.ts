import { Context, createContext } from 'react'

export const GameContext: Context<Phaser.Game | null> = createContext<Phaser.Game | null>(null)
