<template>
  <div class="container" :class="$store.state.app.collapse?'menu-bar-collapse-width':'menu-bar-width'">
    <div class="left-container">
      <!-- 导航菜单显示隐藏切换 -->
      <!-- <span class="hamburger-container">
        <Hamburger :toggleClick="collapse" :isActive="$store.state.collapse"></Hamburger>
      </span> -->
      <!-- 导航菜单 -->
      <span class="nav-bar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" text-color="#fff" active-text-color="#ffd04b"
          mode="horizontal" @select="selectNavBar()">
          <el-menu-item class="nav-menu" index="1" @click="$router.push('/')">首页</el-menu-item>
          <el-menu-item class="nav-menu" index="2" @click="$router.push('/File')">文档</el-menu-item>
          <el-menu-item class="nav-menu" index="3" @click="$router.push('/Message')">消息中心</el-menu-item>
        </el-menu>
      </span>
    </div>
    <span class="tool-bar">
      <!-- 用户信息 -->
      <el-dropdown class="user-info-dropdown" trigger="hover">
        <span class="el-dorpdown-link">
          <img :src="this.userAvatar">
          {{username}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>
  import mock from "@/mock/index.js";
  import Hamburger from "@/components/Hamburger";
  /* import LangSelector from "@/components/LangSelector" */
  export default {
    components: {
      Hamburger
    },
    data() {
      return {
        isCollapse: false,
        username: "Louis",
        userAvatar: "",
        activeIndex: '1'
      };
    },
    methods: {
      selectNavBar(key, keyPath) {
        console.log(key, keyPath)
      },
      //折叠导航栏
      collapse: function () {
        this.$store.commit('collapse');
      },
      //退出登录
      logout: function () {
        var _this = this;
        this.$confirm("确认退出登录吗？", "提示", {
            type: "wraning"
          })
          .then(() => {
            sessionStorage.removeItem("user");
            this.$router.push("/login");
          })
          .catch(() => {});
      }
    },
    mounted() {
      this.sysName = "mySystem";
      var user = sessionStorage.getItem("user");
      if (user) {
        this.userName = user;
        this.userAvatar = require("@/assets/user.jpg");
      }
    }
  }

</script>

<style scoped lang="scss">
  .container {
    position: absolute;
    left: 200px;
    right: 0px;
    height: 60px;
    line-height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;

    .collapse-switcher {
      width: 40px;
      float: left;
      cursor: pointer;
      border-color: rgba(111, 123, 131, 0.8);
      border-left-width: 1px;
      border-left-style: solid;
      border-right-width: 1px;
      border-right-style: solid;
      color: white;
      background: #504e6180;
    }

    .left-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      display: -webkit-flex;
      -webkit-flex-direction: row;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
    }

    .nav-bar {

      .el-menu {
        background: #4b5f6e;
      }

      .nav-menu:hover{
        color:#ea6110!important;
      }
    }

    .tool-bar {
      float: right;

      .user-info-dropdown {
        font-size: 20px;
        padding-right: 20px;
        color: #fff;
        cursor: pointer;

        img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }

    .menu-bar-width {
      left: 286px;
    }

    .menu-bar-collapse-width {
      left: 65px;
    }
  }

</style>
