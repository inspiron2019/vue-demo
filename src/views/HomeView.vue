<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <vxe-table></vxe-table> -->
    <div v-resize:[arg]="val"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VxeTable from '@/components/VxeTable.vue'
import appendCompToRoot from '@/hooks/use-component.js'
import Animal from "@/hooks/class-extend.js";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    VxeTable
  },
  data() {
    return {
      arg: 'a',
      val: '1'
    }
  },
  mounted() {
    appendCompToRoot(VxeTable)
  }
}
</script>
