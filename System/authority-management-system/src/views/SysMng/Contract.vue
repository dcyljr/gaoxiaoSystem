<template>
  <div>
    <div class="operation-bar">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <div class="block">
            <span class="demonstration">选择日期</span>
            <el-date-picker
              v-model="value1"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="合作单位">
          <el-input
            v-model="formInline.user"
            placeholder="请输入合作单位"
          ></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-select v-model="formInline.region" placeholder="地区">
            <el-option label="广东" value="shanghai"></el-option>
            <el-option label="广西" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="合同编号">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" @click="onSubmit">查询</el-button> -->
          <el-button type="primary">查询</el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline"
            >新增合同</el-button
          >
          <el-button type="primary" icon="el-icon-top">导入合同</el-button>
          <el-button type="primary" icon="el-icon-bottom">导出合同</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
          <el-button type="danger" icon="el-icon-delete">删除</el-button>
        </el-form-item>
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
      <el-table-column label="签约日期" width="80">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="客户回协议日期" width="120">
        <template slot-scope="scope">{{ scope.row.cdate }}</template>
      </el-table-column>
      <el-table-column prop="num" label="合同编号" width="120">
      </el-table-column>
      <el-table-column prop="name" label="客户名称" width="120">
      </el-table-column>
      <el-table-column prop="money" label="合作金额"> </el-table-column>
      <el-table-column prop="develop" label="是否主动开发"> </el-table-column>
      <el-table-column prop="salesman" label="业务员"> </el-table-column>
      <el-table-column prop="department" label="业务部门"> </el-table-column>
      <el-table-column label="操作" fixed="right" width="200">
        <template slot-scope="scope">
          <div class="handle">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >导入</el-button
            >
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >导出</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      formInline: {
        user: "",
        region: "",
      },
      formLabelAlign: {
        name: "",
      },
      tableData: [
        {
          date: "2021-3-2",
          cdate: "2021-3-3",
          num: "123456",
          name: "北京大学",
          money: "12345",
          develop: "是",
          salesman: "张三",
          department: "销售一部",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    onsubmit() {
      console.log("submit!");
    },
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

<style lang="scss" scoped>
.operation-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
}

.el-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.handle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  button{
      margin-left: 0;
      margin-bottom: 5px;
  }
}
</style>