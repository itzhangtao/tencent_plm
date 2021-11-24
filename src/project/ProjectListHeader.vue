<template>
  <div style="padding: 0px;">
    <div class="">
      <a-page-header title="项目管理" sub-title="" style="padding:16px 0px;">
        <template slot="tags">
          <a-tag color="blue">
            <span v-if="type == 1">列表模式</span>
            <span v-else>卡片模式</span>
          </a-tag>
        </template>
        <template slot="extra">
          <a-button-group>
            <a-button icon="unordered-list" @click="changeProjectTab(1)">
              列表
            </a-button>
            <a-button type= cardType icon="appstore" @click="changeProjectTab(2)">
              卡片
            </a-button>
          </a-button-group>
          
        </template>
      </a-page-header>
    </div>
    <div class="header_search">
      
    </div>
    
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex';

export default {
  
        data() {
            return {
               cardType:this.mapState.type === 2?"primary":"",
               listType:this.mapState.type === 1?"primary":""
            };
        },
        computed: {
            // 一般放 state he getter 
            ...mapState(['type']),
            ...mapGetters([
                'getprojectStutusType',
            ]),
        },

        methods: {
            // 对象就是函数
            ...mapMutations([
                'changeProjectTab', 
            ]),
        },
};
</script>
<style scoped>
.header_bar{
  height:40px;
}
</style>
