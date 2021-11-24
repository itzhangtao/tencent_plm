<template>
  <div style="text-align:left;margin-top:16px;">
    <p style="font-size:15px;font-weight:bold;"><a-icon type="profile" style="font-size:20px;color:#1890ff" />&nbsp;个人待办</p>
    <a-list item-layout="horizontal" :data-source="userInfos">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta
            :description = item.deptMessage
          >
            <a slot="title">Hello,{{ item.userName }},开始你一天的工作吧！</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        :size="'small'"
        :bordered="false"
        :expanded-row-keys.sync="expandedRowKeys"
      >
        <span slot="name" slot-scope="text" style="font-weight:bold;">{{ text }}</span>
        <a-icon type="file-search" slot="details" slot-scope="text" style="font-size:18px" v-if="text != ''" />
      </a-table>
  </div>

</template>
<script>
const userInfos = [{
  userName:'潜龙勿动',
  deptMessage:'基金会项目管理部｜项目经理'
}]
const columns = [
  {
    title: '流程编号',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '流程类型',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: '流程状态',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: '流程详情',
    dataIndex: 'details',
    key: 'details',
    width: 100,
    scopedSlots: { customRender: 'details' },
  },
  {
    title: '申请人',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: '立项时间',
    dataIndex: 'age',
    key: 'age',
    width: 150,
  },
  {
    title: '项目编号',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: '项目名称',
    dataIndex: 'address',
    width: 100,
    key: 'address',
  },
  {
    title: '当前流程节点',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
];

const data = [
  {
    key: 1,
    name: '待处理',
    details:'',
    children: [
      {
        key: 11,
        name: 'PA-20210808-SGCRK',
        age: '项目立项申请',
        address: 5000,
        details:'详情',
      },
      {
        key: 12,
        name: 'PA-20210808-SGCRK',
        age: '项目立项申请',
        address: 5000,
        details:'详情',
      },
      {
        key: 13,
        name: 'PA-20210808-SGCRK',
        age: '项目立项申请',
        address: 5000,
        details:'详情',
      },
    ],
  },
  {
    key: 2,
    name: '已处理',
    details:'',
    children: [
      {
        key: 11,
        name: 'PA-20210808-SGCRK',
        age: '项目立项申请',
        address: 5000,
        details:'详情',
      },
      {
        key: 12,
        name: 'PA-20210808-SGCRK',
        age: '项目立项申请',
        address: 5000,
        details:'详情',
      },
      {
        key: 13,
        name: 'PA-20210808-SGCRK',
        age: '项目立项申请',
        address: 5000,
        details:'详情',
      },
    ],
  },
];

export default {
  data() {
    return {
      data,
      columns,
      userInfos,
      expandedRowKeys: [1,2],
    };
  },
  methods:{
    expandIcon(props){
       if(props.record.children.length > 0){
            if (props.expanded) {
                return <a style="color: 'black',margin-right:10px" onClick={e => {
                    props.onExpand(props.record, e);
                }}><a-icon type="caret-down" /></a>
            } else {
                return <a style="color: 'black' ,margin-right:10px" onClick={e => {
                    props.onExpand(props.record, e);
                }}><a-icon type="caret-right" /></a>
            }
        }else{
            return <span style="margin-right:10px"><a-icon type="smile" /></span>
        }
     
    },
  }
};
</script>

<style scoped>

</style>
