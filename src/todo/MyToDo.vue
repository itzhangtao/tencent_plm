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
      />
  </div>

</template>
<script>
const userInfos = [{
  userName:'张涛',
  deptMessage:'基金会项目管理部｜项目经理'
}]
const columns = [
  {
    title: '流程编号',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '流程类型',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: '流程状态',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: '待办',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
      },
    ],
  },
  {
    key: 2,
    name: '已办',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
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
      expandedRowKeys: [],
    };
  },
};
</script>

<style scoped>

</style>
