<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <vxe-table></vxe-table> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VxeTable from '@/components/VxeTable.vue'
import appendCompToRoot from '@/hooks/useComponent.js'
import Animal from "@/hooks/class-extends.js";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    VxeTable
  },
  mounted() {
    appendCompToRoot(VxeTable)
  }
}
</script>
