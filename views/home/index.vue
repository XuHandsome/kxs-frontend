<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" stype="margin-top: 20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg" />
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登陆时间: <span>2022-05-07</span></p>
                    <p>上次登陆地点: <span>上海</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px; height: 460px">
                <el-table :data="tableData">
                    <el-table-column
                    v-for="(val, key) in tableLabel"
                    :key="key"
                    :prop="key"
                    :label="val"
                    >
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'home',
    data () {
        return {
            userImg: require('../../src/assets/images/user.png'),
            tableData: [
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '苹果',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '小米',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '三星',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '魅族',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }
            ],
            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买',
            }
        }
    }
}
</script>