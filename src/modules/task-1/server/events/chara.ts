import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'chara',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class CharaEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {
        player.gui('iframe-gui').open({hover:true})
        player.showAttachedGui()

        // const gui = new MenuGui(<any>this)
        // this._gui[gui.id] = gui
        // return gui.open()

        // await player.showText('How are you?', {
        //     talkWith: this
        // })
    }
}