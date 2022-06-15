<template>
    <div class="wrapper" ref="wrapper">
        <ul class="content">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll';
export default {
  name: 'selectTemplate',
  components: {

  },
  data() {
    return {
        scroll: null
    }
  },
    mounted() {
        this.$nextTick(() => {
          this.scroll = new BetterScroll('.wrapper', {})
        })
    },
  methods: {
   
  },

}
</script>

<style scoped lang="scss">
.wrapper {
    width: 500px;
    height: 400px;
    position: absolute;
    left: 300px;
    top: 200px;
    overflow: hidden;
    border: 1px solid red;
}
</style>
