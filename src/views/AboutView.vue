<template>
  <div class="user-wrap">
      <el-button
        class="create-btn"
        type="success"
        size="small"
      click="handleCreate">新增用户 +</el-button>
      <el-table
        style="width: 100%">
        <el-table-column
            label="用户名"
            prop="username">
        </el-table-column>
        <el-table-column
            label="密码"
            prop="password">
        </el-table-column>
        <el-table-column
            align="right">
            <template #header>
                <el-input
                blur="searchUser"
                size="mini"
                placeholder="输入用户名搜索"/>
            </template>
            <template default="scope">
                <el-button
                size="mini"
                click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
      class="page-wrap">
    </el-pagination>
    <el-dialog title="用户信息">
        <el-form>
            <el-form-item label="用户名" label-width="">
                <el-input autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="">
                <el-input autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button click="dialogFormVisible">取 消</el-button>
                <el-button type="primary" click="confirmUser">确 定</el-button>
            </span>
        </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
  setup () {
    let status = ''
    const formLabelWidth = ref('120px')

    // 获取用户列表
    const tableData = ref([])


    const form = ref({
      username: '',
      password: ''
    })

    const dialogFormVisible = ref(false)

    // 提交用户信息
    async function confirmUser () {
      // 验证信息是否齐全
      if (!(form.value.username && form.value.password)) {
        ElMessage.error('表单信息不全')
        return
      }
      switch (status) {
        case 'create':
       
          break
        case 'edit':

          break
      }
    }

    // 添加用户
    async function handleCreate () {
      form.value = {
        username: '',
        password: ''
      }
      dialogFormVisible.value = true
      status = 'create'
    }}}
    // 添加用户信息
    
    // 编辑用户
   
    // 修改用户信息
  
    // 删除用户
   
    // 删除用户信息
    
    // 搜索用户

    // 分页相关

    // 超过一页就隐藏分页插件
</script>