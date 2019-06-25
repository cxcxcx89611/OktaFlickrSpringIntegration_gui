<template>
  <div class="login-container">
    <div style="text-align: center">
      <el-button :loading="loading" type="primary" style=" width:50%;margin-top: 100px; "
                 @click.native.prevent="login">
        Login Button
      </el-button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {}
    },
    methods: {
      login() {
        location.href =  "https://35.188.162.0:8443"
      },
    }
  }
</script>

<style>
  /* correct the background color */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
  @supports (-webkit-mask: none) and (not (cater-color: #fff)) {
    .login-container .el-input input {
      color: #fff;
    }

    .login-container .el-input input::first-line {
      color: #eee;
    }
  }

  /* reset element-ui css */
  .login-container .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }

  .login-container .el-input input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #eee;
    height: 47px;
    caret-color: #fff;
  }

  .login-container .el-input input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #283443 inset !important;
    -webkit-text-fill-color: #fff !important;
  }

  .login-container .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
</style>

<style>
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #2d3a4b;
  }

  .login-container .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }

  .login-container .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }

  .login-container .tips span:first-of-type {
    margin-right: 16px;
  }

  .login-container .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .login-container .title-container {
    position: relative;
  }

  .login-container .title-container .title {
    font-size: 26px;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  .login-container .title-container .set-language {
    color: #fff;
    position: absolute;
    top: 5px;
    right: 0px;
  }

  .login-container .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }

  .login-container .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
</style>
