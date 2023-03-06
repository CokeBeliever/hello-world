<template>
  <div>
    <form action="#" method="post">
      <label for="username">用户名/邮箱:</label>
      <input
        id="username"
        v-model="username"
        type="text"
        name="username"
        required
      />
      <label for="password">密码:</label>
      <input
        id="password"
        v-model="password"
        type="password"
        name="password"
        required
      />
      <label for="remember">记住密码:</label>
      <input id="remember" type="checkbox" name="remember" />
      <button type="button" @click="onClickLogin">登录</button>
    </form>
    <div class="login-info">
      <p>还没有账号？<a href="#">注册</a></p>
      <p><a href="#">忘记密码</a></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { securityApis } from '@/apis'
const username = ref('')
const password = ref('')

const onClickLogin = () => {
  securityApis
    .postSecurityLogin({
      username: username.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res)
    })
  console.log(username.value, password.value)
}
</script>
