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
export default {
  setup () {
    console.log("sadas")
  }
}
</script>