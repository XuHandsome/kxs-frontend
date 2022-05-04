<template>
  <div>
    <div>
      <el-form :model="loginRuleForm" :rules="loginRules" ref="loginRuleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="账号" prop="username">
          <el-input v-model="loginRuleForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="loginRuleForm.password"></el-input>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
  // Vue 代码逻辑
  export default {
    data() {
      return {
        // 表单请求数据
        loginRuleForm: {
          username: '',
          password: '',
        },
        // 表单验证规则
        loginRules: {
          username: [
            {
              required: true, message: "请输入用户名", trigger: "blur"
            },
            {
              min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur",
            },
          ],
          password: [
            {
              required: true, message: "请输入密码", trigger: "blur"
            },
            {
              min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur",
            }
          ]
        }
      };
    }
  }
</script>