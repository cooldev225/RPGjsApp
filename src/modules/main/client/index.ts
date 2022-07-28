import { RpgClient, RpgModule, RpgGui } from '@rpgjs/client'
import { Characters } from './characters/characters';
import { MapTilesets, sceneMap } from './maps/map';
import iframeGUI from '../../task-1/client/gui/iframe.vue'
@RpgModule<RpgClient>({ 
    gui: [
        iframeGUI
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