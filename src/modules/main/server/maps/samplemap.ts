import { RpgMap, MapData } from '@rpgjs/server'
import { VillagerEvent } from '../events/villager'
import { CharaEvent } from '../events/chara'

@MapData({
    id: 'simplemap',
    file: require('./tmx/simplemap.tmx'),
    name: 'Forest',
    events: [
        VillagerEvent,
        CharaEvent
    ]
})
export class SampleMap extends RpgMap {}