<template>
    <rpg-window :fullWidth="true" height="100%" class="shop-menu">
        <div class="row">
            <div class="title">
                <p>Iframe windows</p>
            </div>
            <div>
                <p @click="close" class="btn-text">Close</p>
            </div>
        </div>
        <div class="shop-content" >
                <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="100%"
                src="https://www.ubereats.com/">
                </iframe>
        </div>
    </rpg-window>
    <!--BackButton /-->
</template>

<script lang="ts">
import { Control } from '@rpgjs/client'

export default {
    name: 'iframe-gui',
    inject: ['rpgCurrentPlayer', 'rpgKeypress', 'rpgGuiClose', 'rpgSocket', 'rpgEngine', 'rpgGui'],
    props: ['items'],
    data() {
        return {
            player: {},
            inventory: [],
            currentItem: {},
            mode: 0,
            goldName: 'Gold',
            step: 0,
            quantity: 1,
            indexSelected: 0,
            doAction: false
        }
    },
    mounted() {
        if (this.rpgGui.exists('rpg-controls')) this.rpgGui.hide('rpg-controls') 
        this.rpgEngine.controls.stopInputs()
        this.obsCurrentPlayer = this.rpgCurrentPlayer.subscribe(({ object }) => {
            this.player = object
            // ignore deleted items
            this.inventory = Object.values(this.player.items).filter(item => item)
            // Wait for the return of the server to reset values
            if (this.doAction) {
                this.step = 0
                this.quantity = 1
                this.doAction = false
            }
            this.selected(this.indexSelected)
        })

        this.obsKeyPress = this.rpgKeypress.subscribe(({ control }) => {
            if (!control) return
            const name = control.actionName
            if (!this.mode) {
                if (name == Control.Back) {
                    this.close()
                }
            }
        })
    },
    computed: {
    },
    methods: {
        close() {
            this.rpgGuiClose()
            this.rpgEngine.controls.listenInputs()
            if (this.rpgGui.exists('rpg-controls')) this.rpgGui.display('rpg-controls') 
        }
    },
    components: {
        //BackButton
    },
    unmounted() {
        this.obsKeyPress.unsubscribe()
        this.obsCurrentPlayer.unsubscribe()
    }
}
</script>

<style scoped lang="scss">
@keyframes cursor {
  0% { opacity: 0.4 }
  100% { opacity: 0.7 }
}
.btn-text{
    cursor: pointer;
}
.shop-menu {
    display: flex;
    position: absolute;
    width: 100%;
     z-index: 100;
}

.shop-content {
    height: calc(100% - 50px);
    display: flex;
}

.shop-content > div:first-child {
    width: calc(100% - 300px);
    padding: 20px;
    padding-left: 0;
}

.shop-content > div:last-child {
    width: 300px;
    padding: 10px;
}

.shop-info {
    border-left: 1px solid white;
}

.space-between {
    justify-content: space-between;
    display: flex;
}

hr {
    margin: 0px 0px;
}

.row {
    flex-direction: row;
    display: flex;
}
.row .title{
    width:100%;
}

.row > * {
    flex-direction: column;
    flex-flow: row wrap;
}

.row > div:last-child {
    text-align: right;
    width: 100%;
    padding: 10px;
}

.can-not-buy {
    opacity: 0.5;
}

.item {
    margin: 0;
    position: relative;
    padding: 10px;
}

.item-quantity {
    display: flex;
    align-items: center;
}

.item-quantity > div {
    width: 100%;
    padding: 0px 20px;
}

.total {
    border-top: 1px solid white;
    margin-top: 14px;
    padding: 10px;
    padding-right: 0;
}

.cursor {
    position: relative;
}

.cursor > * {
    z-index: 10;
    padding: 10px;
    position: relative;
}

.cursor:before {
    content: '';
    position: absolute;
    background: $cursor-background;
    width: 100%;
    height: 100%;
    left: 0px;
    border: $cursor-border;
    animation: cursor 0.6s infinite alternate ease-in-out;
    z-index: 0;
}
</style>