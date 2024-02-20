// export default `storage () { //入库
//   if(!this.searFormData.WarehouseId)return this.$msg.error('请选择入库仓库')
//   this.infoDialogType = 3;
//   this.infoDialogText = '确定入库吗？'
//   this.updateToApprovalDialog = true
// }`

export const vars = {
  template: {
    panes: [
      {
        name: 'all',
        label: '全部',
        permit: 'gyl_machining_return_list_all',
        tmplName: "All"
      },
      {
        name: 'unstorage',
        label: '待入库',
        permit: 'gyl_machining_return_list_unstorage',
        tmplName: "Unstorage"
      },
    ],
  },
  script: {
    imports: {
      apis: [
        {
          type: 'named',
          path: "@/utils/api.js",
          vars: []
        },
      ],
      components: [
        {
          path: "./all.vue",
          name: "All"
        },
        {
          path: "./unstorage.vue",
          name: "Unstorage"
        },
      ]
    },
    exports: {
      components: ["All", "Unstorage"],
      data: {
        activeName: "all",
        powerList: [
          {
            name: "gyl_machining_return_list_all",
            remark: ""
          }
        ]
      }
    }
  }
}

export const template = `\n<template>
  \t<div class="opMachiningReturn" v-if="permissionData">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-if="permissionData.gyl_machining_return_list_all" label="全部" name="all" :lazy="true">
        <All :permissionData="permissionData" :tdk="tdk"></All>
      </el-tab-pane>
      <el-tab-pane v-if="permissionData.gyl_machining_return_list_unstorage" label="待入库" name="unstorage" :lazy="true">
        <Unstorage :permissionData="permissionData" :tdk="tdk"></Unstorage>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {queryUserRights} from "@/utils/api.js";
import All from './all.vue';
import Unstorage from './unstorage.vue';
export default {
  components:{
    All,
    Unstorage,
  },
  data(){
    return {
      activeName:'all',
      permissionData:null,
      powerList: [
        'gyl_machining_return_list_all', // 全部页面
        'gyl_machining_return_func_all_export', // 全部-导出

        'gyl_machining_return_list_unstorage', // 已上架-页面
        'gyl_machining_return_func_unstorage_export', // 已上架-导出

        'gyl_machining_return_billdetail', // 详情-页面
        'gyl_machining_return_list_log', // 详情-操作记录
        'gyl_machining_return_func_add', // 详情-添加明细
        'gyl_machining_return_func_save', // 详情-保存
        'gyl_machining_return_func_cancel', // 详情-取消
        'gyl_machining_return_func_storage', // 详情-入库
      ],
      tdk: ""
    }
  },
  created(){
    this.getUserRights();
    this.activeName = this.$route.query.tp || 'all'
    this.tdk = this.$route.query.tdk || ''
  },
  methods:{
    //获取用户权限
    getUserRights() {
      queryUserRights(this.powerList).then(res => {
        if (res.status === 200) {
          this.permissionData = res.data||{};
        }
      })
    },
    handleClick(){
    }
  }
}
</script>

<style>

</style>
`