<template>
	<div>
        <a herf=";" onclick="close()">close</a>
        <iframe id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
        </iframe>
    </div>
</template>

<script lang="ts">
import { Control } from '@rpgjs/client'
export default {
  name: "my-tooltip",
  rpgAttachToSprite: true,
  props: ["spriteData","hover"],
  inject: ["rpgScene",'rpgEngine', 'rpgKeypress', 'rpgGuiClose', 'rpgGui','rpgCurrentPlayer'],
  data() {
    return {
      //hover: false,
    };
  },
  async mounted() {
    console.log('ddddddddddddddddd')
     const sprite = this.rpgScene().getSprite(this.spriteData.id)
     console.log(sprite)
     this.obsCurrentPlayer = this.rpgCurrentPlayer.subscribe(({ object }) => {
           console.log(object)
        })
    //setTimeout(() => { this.hover = true }, 100)
  },
  methods: {
    close() {
        console.log('dddddddd')
        this.hover=false
    }
    
  },
};
</script>

<style lang="scss">
a{
    position:absolute;
    right:5px;
    background-color:white;
    padding:5px 5px;
    top:5px;
}
</style>