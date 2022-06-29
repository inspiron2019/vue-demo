<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <vxe-table></vxe-table> -->
    <!-- <div v-resize:[arg]="val"></div> -->
    <!-- 滚动组件 -->
    <!-- <select-template>
        <div v-for="list in lists" :key="list">
            {{ list }}
        </div>
    </select-template> -->
    <!-- 动画组件 -->
    <!-- <i-transition></i-transition> -->
    <!-- 布局组件 -->
    <i-container></i-container>
    
    <!-- 项目基调 -->
    <!-- <i-basic></i-basic> -->
    <!-- 表单组件 -->
    <!-- <i-form></i-form> -->
    <!-- 展示组件 -->
    <!-- <i-data></i-data> -->
    <!-- 信息提示 -->
    <!-- <i-notice></i-notice> -->
    <!-- 导航 -->
    <!-- <i-navigation></i-navigation> -->
    <!-- 交互插件 -->
    <!-- <i-others></i-others> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VxeTable from '@/components/VxeTable.vue'
import appendCompToRoot from '@/hooks/use-component.js'
import Animal from "@/hooks/class-extend.js";
import SelectTemplate from '../components/selectTemplate.vue';
import ITransition from '@/components/i-transition.vue'
import IContainer from '../components/i-container.vue';
import IForm from '../components/i-form.vue';
import IBasic from '../components/i-basic.vue';
import IData from '../components/i-data.vue';
import INotice from '../components/i-notice.vue';
import INavigation from '../components/i-navigation.vue';
import IOthers from '../components/i-others.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    VxeTable,
    SelectTemplate,
    ITransition,
    IContainer,
    IForm,
    IBasic,
    IData,
    INotice,
    INavigation,
    IOthers,
  },
  data() {
    return {
      arg: 'a',
      val: '1',
      lists: []
    }
  },
  mounted() {
    appendCompToRoot(VxeTable)
    for(let i = 0; i < 1000; i++) {
      this.lists.push(i)
    }
  },
  methods: {
    handleBabel() {
      // 关于?? ??= ?.
      // 仅针对null undefined
      let a = null
      let b = 1
      a ?? b
      console.log('空合并：',a ?? b, a);
      let c = undefined 
      let d = 2
      c ??= d
      console.log('空赋值：', c);
      let e = undefined
      console.log(e?.length);
    }
  }
}
</script>
