<template>
  <a-layout id="components-layout-demo-top-side-2" class="mian_page_layout">
    <a-layout-header class="header">
      <!-- <div class="logo" /> -->
      <img src="/img/tencent.png" class="logo"/>
       <!-- <a-icon
          class="trigger mian_page_layout_menu"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        /> -->
      <!-- <a-menu
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          项目
        </a-menu-item>
        <a-menu-item key="2">
          流程
        </a-menu-item>
        <a-menu-item key="3">
          设置
        </a-menu-item>
      </a-menu> -->
      <div style="float:right;padding-right:16px">
        <a-avatar style="font-size:20px;margin-bottom:10px;" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <a-divider type="vertical" />
        <a-icon type="setting" style="font-size:20px;margin:0 10px;"/>
        <a-divider type="vertical" />
        <a-icon type="bell" style="font-size:20px;margin:0 10px;"/>
        <a-divider type="vertical" />
        <a-icon type="logout" style="font-size:20px;margin:0 10px;" @click="loginout"/>
      </div>
    </a-layout-header>
    <a-layout style="background:white;border-bottom:1px solid #f2f3f5;">
      <a-layout-sider width="250" class="mian_page_layout_left" v-model="collapsed" :trigger="null" collapsible>
        <a-menu
          :default-selected-keys="['todo']"
          mode="inline"
          :inline-collapsed="collapsed"
          style="text-align:left;height:100%"
          @click="leftMenuChange"
        >
          <a-menu-item key="todo">
            <a-icon type="profile" />
            <span>个人待办</span>
          </a-menu-item>
          <a-menu-item key="project">
            <a-icon type="desktop" />
            <span>项目管理</span>
          </a-menu-item>
          <a-menu-item key="startProject">
            <a-icon type="inbox" />
            <span>立项管理</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="mail" /><span>项目总览</span></span>
            <a-menu-item key="5">
              Option 5
            </a-menu-item>
            <a-menu-item key="6">
              Option 6
            </a-menu-item>
            <a-menu-item key="7">
              Option 7
            </a-menu-item>
            <a-menu-item key="8">
              Option 8
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="appstore" /><span>报表中心</span></span>
            <a-menu-item key="9">
              Option 9
            </a-menu-item>
            <a-menu-item key="10">
              Option 10
            </a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="11">
                Option 11
              </a-menu-item>
              <a-menu-item key="12">
                Option 12
              </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding:0px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <a-layout-content
          :style="{ padding: '0px 16px 16px 16px', margin: 0, background: 'white' }"
        >
          <MyToDo v-if="menukey === 'todo'" />
          <div v-else>
            <ProjectItemList v-if="type == 1" />
            <ProjectCardList v-else />
          </div>

        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {mapState,mapGetters} from 'vuex';
import MyToDo from './todo/MyToDo.vue';
import ProjectCardList from './project/ProjectCardList.vue';
import ProjectItemList from './project/ProjectItemList.vue';
export default {
  components: {
    MyToDo,
    ProjectCardList,
    ProjectItemList,
  },
  data() {
    return {
      collapsed: false,
      menukey:'todo'
    };
  },
     computed:{
        ...mapState(['type']),
        ...mapGetters({
            type:'getProjectViewStatus'
        })
    },
    methods:{
      leftMenuChange(item){
        this.menukey = item.key;
      },
      loginout(){
        this.$router.push({path: '/login'})
      }
    }
};
</script>

<style>
.header{
  padding: 0px;
  background: white;
  border-bottom: 1px solid #e8e8e8;
}
.mian_page_layout{
  height: 100%;
  width: 100%;
}
.mian_page_layout_menu{
  margin: 24px 0px;
}
.mian_page_layout_left{
  margin:  1px 0px;
  background: #fff;
}
#components-layout-demo-top-side-2 .logo {
  /* width: 120px; */
  height: 65px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 0px 10px 0px 0;
  float: left;
}
</style>
