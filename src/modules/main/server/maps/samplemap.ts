import { RpgMap, MapData } from '@rpgjs/server'
import { VillagerEvent } from '../events/villager'
import { CharaEvent } from '../../../task-1/server/events/chara'

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