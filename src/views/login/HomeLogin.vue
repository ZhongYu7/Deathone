<template>
  <div class="login-page">
    <div class="login-header"></div>
    <div class="login-box">
      <div class="login-panel">
        <div class="logo">
          <el-image :src="require('../../assets/logo.png')" ></el-image>
        </div>
        <div class="login-text"><div>欢迎使用半个管理系统</div></div>
        <div class="form">
          <el-form :model="loginFormData" label-width="80px">
            <el-form-item label="用户名:">
              <el-input
                v-model="loginFormData.username"
                placeholder="请输入用户名"
              />
            </el-form-item>
            <el-form-item label="用户密码:">
              <el-input
                v-model="loginFormData.password"
                placeholder="请输入密码"
              /> </el-form-item
            ><el-row
              ><el-col span="12">
                <el-form-item>
                  <el-checkbox
                    v-model="loginFormData.rememberusername"
                    label="记住用户名"
                  />
                </el-form-item>
              </el-col>
              <el-col span="12">
                <el-form-item>
                  <el-checkbox
                    v-model="loginFormData.rememberpassword"
                    label="记住密码"
                  /> </el-form-item></el-col
            ></el-row>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item></el-form
          >
        </div>
      </div>
    </div>
    <div class="login-footer">
      版权: ZhongYu7--------联系方式：QQ：2213604654
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
//登录表单数据
const loginFormData = reactive({
  username: "",
  password: "",
  rememberusername: false,
  rememberpassword: false,
});
//登录点击事件
const onSubmit = () => {
  console.log("submit!");
};
</script>

<style>
.login-page {
  background: rgb(170, 139, 223);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  justify-content: center;
  justify-items: center;
  vertical-align: middle;
  align-items: center;
  display: flex;
}
.login-page.lgoin-box {
  border-style: solid;
  background: blue;
  width: 50%;
  height: 50%;
}
.login-page.lgoin-box.login-panel {
  margin: 0 auto;
  width: 30%;
  height: 30%;
}
.login-page.lgoin-box.login-panel.logo {
  text-align: center;
}
.login-page.lgoin-box.login-panel.logo.logo-img >>> img {
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: #fff;
  box-shadow: 0 0 10px #ffffff55;
}
.login-page.lgoin-box.login-panel.login-text {
  line-height: 6hv;
  text-align: center;
  font-size: 26px;
  color: #fff;
  letter-spacing: 5px;
}
.login-page.lgoin-box.login-panel.form >>> .el-form-item__label {
  color: #fff;
}
.login-page.lgoin-box.login-panel.form >>> .el-checkbox__label {
  color: #fff;
}
.login-page.lgoin-box.login-panel.form >>> .el-button {
  color: #fff;
  width: 100%;
  line-height: 45px;
  height: 45px;
}
.login-page.login-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4vh;
  font-size: 14px;
  text-align: center;
  color: #fff;
}
</style>