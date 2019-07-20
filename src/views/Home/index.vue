<template>
  <el-container class="home-container">
    <!-- 页头部分 -->
    <el-header>
      <div>
        <img src="./heima.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏导航 -->
      <el-aside :width="width" >
        <!-- 菜单区域 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu :unique-opened="true" background-color="#333744" text-color="#fff" active-text-color="#409EFF" :collapse="isCollapse" :collapse-transition="false"
        router :default-active="activePath">
          <!-- 一级导航 -->
          <el-submenu :index="menu.id+''" v-for="menu in menus" :key="menu.id">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i :class="iconObject[menu.id]"></i>
              <span>{{menu.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+subMenu.path" v-for="subMenu in menu.children" :key="subMenu.id"
            @click="savedata('/'+subMenu.path)">
              <!--    二级菜单 模板 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{subMenu.authName}}</span>
              </template>

            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data: () => ({
    menus: [],
    iconObject: {
      '125': 'iconfont icon-user',
      '103': 'iconfont icon-tijikongjian',
      '101': 'iconfont icon-shangpin',
      '102': 'iconfont icon-danju',
      '145': 'iconfont icon-baobiao'
    },
    isCollapse: false,
    activePath: window.sessionStorage.getItem('activePath') || ''
  }),
  created () {
    this.getMenus()
  },
  methods: {
    logout () {
      sessionStorage.clear('token')
      this.$router.push('/login')
    },
    async getMenus () {
      const { data: { data, meta } } = await this.$http.get('menus')
      if (meta.status !== 200) return this.$message.err(meta.msg)
      this.menus = data
      console.log(data)
    },
    toggleCollapse (activePath) {
      this.isCollapse = !this.isCollapse
    },
    savedata (activePath) {
      this.activePath = activePath
      window.sessionStorage.setItem('activePath', activePath)
    }
  },
  computed: {
    width () {
      return this.isCollapse ? '64px' : '200px'
    }
  }
}
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  color: #fff;
  font-size: 20px;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
     border-right: none;
}
}
.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
