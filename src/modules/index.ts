import main from './main'
import defaultGui from '@rpgjs/default-gui' 
import mobileGui from '@rpgjs/mobile-gui'
import gamepad from '@rpgjs/gamepad'
//import chat from '@rpgjs/chat'
import customGui from './main/client/custom-gui' 
export default [
    customGui,
    main,
  //  defaultGui,
    mobileGui,
    gamepad,
    //chat
    
]