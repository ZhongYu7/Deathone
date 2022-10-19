<template>
  <a style="color: white">注册功能待出</a>
  <div>
    <el-form
      label-position="right"
      label-width="100px"
      style="
        max-width: 460px;
        float: left;
        position: relative;
        left: 15%;
        margin: 15%;
      "
    >
      <el-form-item>
        <a style="color: white">邮箱：</a>
        <el-input v-model="registerForm.rEmail" />
      </el-form-item>
      <el-form-item>
        <a style="color: white">密码：</a>
        <el-input type="password" v-model="registerForm.rPassword" />
      </el-form-item>
      <el-form-item>
        <a style="color: white">确认密码：</a>
        <el-input
          type="password"
          v-model="registerForm.confirmPassword"
          @blur="confirmFunc"
        />
      </el-form-item>
      <el-form-item>
        <el-row>
          <a style="color: white">验证码：</a>
          <el-input type="password" v-model="registerForm.identifyCode" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button
            type="primary"
            @click="getIdentifyCode"
            plain
            style="
              margin: 5%;
              position: absolute;
              margin-left: 85px;
              margin-top: 80px;
            "
          >
            获取验证码
          </el-button>
        </el-row>
      </el-form-item>

      <el-row>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          @click="visible = true"
          style="
            color: white;
            font-size: 12px;
            margin: 5%;
            position: absolute;
            margin-left: 75px;
            margin-top: 30px;
          "
          >查看用户使用准则</a
        >
        <el-dialog v-model="visible" :show-close="false">
          <template #header="{ close, titleId, titleClass }">
            <div class="my-header">
              <h4 :id="titleId" :class="titleClass">用户准则!</h4>
              <el-button type="danger" @click="close">
                <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                关闭
              </el-button>
            </div>
          </template>
          这是一个用户准则！
        </el-dialog>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <el-checkbox
          v-model="registerForm.rAgree"
          label="同意用户使用准则"
          name="type"
          style="
            color: white;
            font-size: 12px;
            margin: 5%;
            position: absolute;
            margin-left: 240px;
            margin-top: 27px;
          "
        />
      </el-row>
      <el-button
        v-if="registerForm.rAgree"
        type="primary"
        @click="register"
        style="
          color: white;
          font-size: 12px;
          margin: 5%;
          position: absolute;
          margin-left: 30px;
          margin-top: 40px;
        "
      >
        注册
      </el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "@vue/reactivity";
import { ElMessage } from "element-plus";
import { ref, onBeforeMount, onBeforeUnmount } from "vue";

const visible = ref(false);
onBeforeMount(() => {
  document.getElementsByTagName("body")[0].className = "body-bg";
});
//DOM即将销毁
onBeforeUnmount(() => {
  document.getElementsByTagName("body")[0].className = "";
});
const form = reactive({
  Email: "",
  password: "",
  isAgree: 0,
});
const registerForm = reactive({
  rEmail: "",
  rPassword: "",
  confirmPassword: "",
  identifyCode: "",
  rAgree: 0,
});
// 注册
function register() {
  console.log("注册", registerForm);
}
// 获取验证码
function getIdentifyCode() {
  console.log("获取验证码");
}
// 确认密码
// function confirmFunc() {
//   if (registerForm.confirmPassword !== registerForm.rPassword)
//     alert("密码与确认密码不一致");
// }
const confirmFunc = () => {
  if (registerForm.confirmPassword !== registerForm.rPassword) {
    ElMessage.error("密码与确认密码不一致.");
  } else {
    return {
      ...toRefs(form),
      ...toRefs(registerForm),
      register,
      getIdentifyCode,
      confirmFunc,
    };
  }
};
</script>

<style>
.body-bg {
  background-image: url(../../assets/loginbackground.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0px -50px;
}
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>