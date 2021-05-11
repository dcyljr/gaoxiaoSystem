<template>
  <div>
    <div style="margin-top: 20px" class="top-bar">
      <el-form label-width="80px" :model="formLabelAlign" class="t-form">
        <el-form-item label="订单编号">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="院校类型">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
        <el-form-item
          ><el-button @click="toggleSelection()" type="primary"
            >取消选择</el-button
          ></el-form-item
        >
        <el-form-item
          ><el-button type="primary" icon="el-icon-refresh-right"
            >恢复</el-button
          ></el-form-item
        >
        <el-form-item
          ><el-button type="danger" icon="el-icon-delete"
            >删除</el-button
          ></el-form-item
        >
      </el-form>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="订单编号" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="客户名称" width="120">
      </el-table-column>
      <el-table-column prop="salesman" label="业务员" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <el-button-group class="pageup">
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary"
        >下一页<i class="el-icon-arrow-right el-icon--right"></i
      ></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "123456",
          name: "北京大学",
          salesman: "张三",
        },
      ],
      multipleSelection: [],
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
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
  },
};
</script>

<style lang="less" scoped>
.t-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.pageup {
  margin-top: 30px;
}
</style>