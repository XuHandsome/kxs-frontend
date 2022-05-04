<template>
  <div>
    <div>
      <el-form
        :model="loginRuleForm"
        :rules="loginRules"
        ref="loginRules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginRuleForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="loginRuleForm.password"></el-input>
        </el-form-item>

        <el-button type="primary" @click="login">登陆</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
// Vue 代码逻辑
export default {
  data() {
    // 不使用return包裹的数据会在项目的全局可见，会造成变量污染,使用return包裹后数据中变量只在当前组件中生效，不会影响其他组件。
    return {
      // 表单请求数据
      loginRuleForm: {
        username: "",
        password: "",
      },
      // 表单验证规则
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "blur",
          }
        ],
      },
    };
  },
  // 使用 methods 属性给 Vue 定义方法
  methods: {
    login() {
      // 登陆进行规则的校验，只有校验成功才能登陆,vaild=>所有的规则校验都成立才会进入到这里
      this.$refs.loginRules.validate((vaild) => {
        if (!vaild) return;
        // 请求数据，格式是formdata，需要添加 this.qs.stringify()进行格式转换
        this.$axios
          .get(
            "/cluster/list",
            this.qs.stringify(this.loginRuleForm)
          )
          .then((res) => {
            console.log(res);
            // &&逻辑与，都为True, ||逻辑或，其中一个为True, !逻辑非，反转一个表达式的“真相”。它使一个表达式从 true 变成了 false，或者从 false 变成了 true
            if (res.data.code != 200 && res.data.code != 201) {
              console.log(res.data.code);
              return this.$message.error(res.data.msg);
            }

            // 跳转到主页
            // this.$router.push("/");
            this.$message.success(
              "HI! " + this.loginRuleForm.username + " 欢迎来到KXS项目！"
            );
          });
      });
    },
  },
};
</script>