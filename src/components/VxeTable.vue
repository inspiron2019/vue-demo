<template>
  <div class="vxe-table-container" v-if="false">
      <!-- 配置表单 -->
    <vxe-form 
        :data="formData4" 
        :items="formItems4" 
        titleColon
        :rules="formRules2"
        :loading="loading2"
        @submit="searchEvent2"
        @reset="resetEvent2"
    >
        <template #myregion="{ data }">
            <vxe-input v-model="data.region" placeholder="自定义插槽模板"></vxe-input>
        </template>
        <template #buttonprop>
            <vxe-button type="submit" status="primary" content="保存" @click="searchEvent"></vxe-button>
            <vxe-button type="reset" content="重置" @click="resetEvent"></vxe-button>
        </template>
    </vxe-form>
  </div>
</template>

<script>
import VXETable from 'vxe-table'
export default {
  name: 'VxeTableForm',
  components: {
       VXETable
  },
  data() {
    return {
        loading2: false,
        formData4: {
            name: '',
            nickname: '',
            sex: '0',
            role: '',
            age: '',
            val1: [],
            val2: false,
            val3: '',
            flag: false
        },
        formItems4: [
            {
                title: '左侧',
                span: 24,
                children: [
                    { field: 'name', title: '名称', span: 8, itemRender: { name: '$input', props: { placeholder: '请输入名称' } } },
                    { field: 'sex', title: '性别', span: 8, itemRender: { name: '$select', options: [{ value: '0', label: '女' }, { value: '1', label: '男' }], props: { placeholder: '请选择性别' } } },
                    { field: 'role', title: '角色', span: 8, itemRender: { name: '$input', props: { placeholder: '请输入角色' } } },
                    { field: 'age', title: '年龄', span: 24, itemRender: { name: '$input', props: { type: 'number', placeholder: '请输入年龄' } } },
                    { field: 'val1', title: '复选框-组', span: 12, itemRender: { name: '$checkbox', options: [{ label: '爬山', value: '11' }, { label: '健身', value: '22' }] } },
                    { field: 'val2', title: '复选框', span: 12, itemRender: { name: '$checkbox' } },
                    { field: 'val3', title: '单选框', span: 12, itemRender: { name: '$radio', options: [{ label: '是', value: 'Y' }, { label: '否', value: 'N' }] } },
                    { field: 'flag', title: '开关', span: 24, itemRender: { name: '$switch', props: { openLabel: '是', closeLabel: '否' } } },
                    { field: 'region', title: '地区', span: 24, slots: { default: 'myregion' } }
                ]
            },
            // {
            //     title: '右侧',
            //     span: 12,
            //     children: [
            //         { field: 'nickname', title: '昵称', span: 24, itemRender: { name: '$input', props: { placeholder: '请输入昵称' } } }
            //     ]
            // },
            // { align: 'center', span: 6, itemRender: { name: '$buttons', children: [{ props: { type: 'submit', content: '配置式表单', status: 'primary' } }, { props: { type: 'reset', content: '重置' } }] } }
            {
                align: 'right',
                span: 24,
                slots: { default: 'buttonprop' }
            }
        ],
        formRules2: {
            name: [
                { required: true, message: '请输入名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            nickname: [
                { required: true, message: '请输入昵称' }
            ],
            sex: [
                { required: true, message: '请选择性别' }
            ],
            age: [
                { required: true, message: '请输入年龄' },
                {
                    validator ({ itemValue }) {
                        // 自定义校验
                        if (Number(itemValue) > 35 || Number(itemValue) < 18) {
                            return new Error('年龄在 18 ~ 35 之间')
                        }
                    }
                }
            ],
            date: [
                { required: true, message: '必填校验' }
            ],
            address: [
                { required: true, message: '必填校验' }
            ]
        }
    }
  },
  methods: {
    searchEvent() {
        // VXETable.modal.message({ message: '查询事件', status: 'info' })
        console.log(this.formData4, 'data')
    },
    searchEvent2() {
        console.log('sumbit');
    },
    resetEvent() {
        // VXETable.modal.message({ message: '查询事件2', status: 'info' })
    },
    resetEvent2() {
        console.log('reset');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.vxe-table-container {
    width: 50%;
}
</style>
