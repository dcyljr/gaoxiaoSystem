<template>
  <div class="salesman">
    <el-row class="button-box">
      <el-button type="primary" icon="el-icon-edit">添加</el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" icon="el-icon-delete">删除</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="姓名" width="100">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="rank" label="职级" width="100"> </el-table-column>
      <el-table-column
        prop="date"
        label="入职时间"
        width="100"
      ></el-table-column>
      <el-table-column prop="branch" label="部门" width="100"></el-table-column>
      <el-table-column
        prop="basepay"
        label="底薪"
        width="“100"
      ></el-table-column>
      <el-table-column prop="customer" label="开发单位"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "张三",
          rank: "二级销售员",
          date: "2021-2-20",
          branch: "销售二部",
          basepay: "4000",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped lang="scss">
.salesman {
  .button-box {
    width: 100%;
    overflow: hidden;
    text-align: left;
    padding: 20px 10px;
  }
}
</style>