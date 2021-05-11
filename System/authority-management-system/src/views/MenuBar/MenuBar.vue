<template>
  <div class="menu-bar-container">
    <!-- logo -->
    <div class="logo" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'">
      <img src="@/assets/logo.png" />
      <div>
        <!-- {{isCollapse?'':sysName}} -->
        {{collapse?'':appName}}
      </div>
    </div>
    <!-- 导航菜单 -->
    <el-menu default-active="1" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'" @open="handleopen"
      @close="handleclose" @select="handleselect" :collapse="collapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单管理</span>
        </template>
        <el-menu-item index="1-1" @click="$router.push('list')">订单列表</el-menu-item>
        <el-menu-item index="1-2" @click="$router.push('recycle-bin')">订单回收站</el-menu-item>
        <el-menu-item index="1-3" @click="$router.push('commission')">销售提成</el-menu-item>
        <el-menu-item index="1-4" @click="$router.push('return')">回款记录</el-menu-item>
        <el-menu-item index="1-5" @click="$router.push('log')">业绩</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>
          <span slot="title">产品管理</span>
        </template>
        <el-menu-item index="2-1" @click="$router.push('net')">网站</el-menu-item>
        <el-menu-item index="2-2" @click="$router.push('online')">线上双选会</el-menu-item>
        <el-menu-item index="2-3" @click="$router.push('inline')">线下招聘会</el-menu-item>
        <el-menu-item index="2-4" @click="$router.push('wechat')">微信</el-menu-item>
        <el-menu-item index="2-5" @click="$router.push('recommend')">人才推荐</el-menu-item>
      <el-menu-item index="2-6" @click="$router.push('onpreach')">空中宣讲会</el-menu-item>
        <el-menu-item index="2-7" @click="$router.push('inpreach')">现场宣讲会</el-menu-item>
        <el-menu-item index="2-8" @click="$router.push('cooperation')">合作单位信息查询</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" @click="$router.push('salesman')">
        <i class="el-icon-s-custom"></i>
        <span slot="title">业务员管理</span>
      </el-menu-item>
      <el-menu-item index="4" @click="$router.push('contract')">
        <i class="el-icon-document"></i>
        <span slot="title">合同</span>
      </el-menu-item>
      <el-menu-item index="5" @click="$router.push('place')">
        <i class="el-icon-position"></i>
        <span slot="title">地区管理</span>
      </el-menu-item>
      <el-menu-item index="6" @click="$router.push('company')">
        <i class="el-icon-connection"></i>
        <span slot="title">单位类型管理</span>
      </el-menu-item>
      <el-menu-item index="7" @click="$router.push('form')">
        <i class="el-icon-folder"></i>
        <span slot="title">报表中心</span>
      </el-menu-item>
      <el-menu-item index="8" @click="$router.push('setting')">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>


<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    data() {
      return {
        isCollapse: false,
        sysName: "",
        logo: "",
      };
    },
    methods: {
      handleopen() {
        console.log('handleopen');
      },
      handleclose() {
        console.log('handleclose');
      },
      handleselect(a, b) {
        console.log('handleselect');
      }
    },
    computed: {
      ...mapState({
        appName: state => state.app.appName,
        collapse: state => state.app.collapse
      })
    }
  };

</script>

<style scoped lang="scss">
  .menu-bar-container {
    .el-menu {
      position: absolute;
      top: 60px;
      bottom: 0px;
      text-align: left;
    }

    .logo {
      position: absolute;
      top: 0px;
      height: 60px;
      line-height: 60px;
      background: #4b5f6e;

      img {
        width: 40px;
        height: 40px;
        border-radius: 0px;
        margin: 10px 10px 10px 10px;
        float: left;
      }

      div {
        font-size: 22px;
        color: white;
        text-align: left;
      }
    }

    .menu-bar-width {
      width: 286px;
    }

    .menu-bar-collapse-width {
      width: 65px;
    }
  }

</style>
