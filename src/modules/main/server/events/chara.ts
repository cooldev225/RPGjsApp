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
        player.gui('my-tooltip').open({hover:true})
        player.showAttachedGui()
        // await player.showText('How are you?', {
        //     talkWith: this
        // })
    }
}