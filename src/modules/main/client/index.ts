import { RpgClient, RpgModule, RpgGui } from '@rpgjs/client'
import { Characters } from './characters/characters';
import { MapTilesets, sceneMap } from './maps/map';
import customGui from './custom-gui' 
@RpgModule<RpgClient>({ 
    gui: [
        customGui
    ],
    spritesheets: [
        MapTilesets,
        Characters
    ],
    scenes: {
        map: sceneMap
    },
})
export default class RpgClientEngine {}