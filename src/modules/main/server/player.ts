import { RpgPlayer, RpgPlayerHooks, Control,RpgShape, Move, RpgClassMap, RpgMap } from '@rpgjs/server'
declare module "@rpgjs/server" {
    export interface RpgPlayer {
        wood: number;
        woodcuting_xp: number;
    }
}
export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.setGraphic('male012')
        player.setHitbox(16, 16)
        player.changeMap('simplemap')
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        await player.showText('Welcome to the start of TestingGameApp!')
        await player.showText('This app customized a RPG JS open-source by me.')
        //await player.showText('1. Open the map src/modules/main/server/maps/tmx/samplemap.tmx with Tiled Map Editor !')
        // await player.showText('2. All the modules are in src/modules/index.ts, it is a suite of systems to make a complete set. Remove modules or add some!')
        // await player.showText('3. The global configuration is done in src/config')
        // await player.showText('And, please, support the project on github https://github.com/RSamaium/RPG-JS ! :)')
        player.setVariable('AFTER_INTRO', true)

        player.gui('my-tooltip').open()
        player.showAttachedGui()
    },
    onInShape(player: RpgPlayer, shape: RpgShape) {
        console.log('in', player.name, shape.name)
    },
    onOutShape(player: RpgPlayer, shape: RpgShape) {
        console.log('out', player.name, shape.name)
    }
}