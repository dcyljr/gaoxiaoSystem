<template>
  <div class="hello">
    <el-row :span="24">
      <el-col class="table-grid-content">
        <el-button type="primary" @click="addMembers()">新增订单</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" :stripe="true" :border="true" width="100%">
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="客户名称" prop="name"></el-table-column>
      <el-table-column label="客户类型" prop="type"></el-table-column>
      <el-table-column label="地区" prop="address"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="modifyData(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button type="danger" @click="deleteData(scope.$index, tableData)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="centerDialogVisible">
      <el-form :model="editForm">
        <el-form-item label="日期" :picker-options="pickerOptions">
          <el-date-picker
            v-model="editForm.date"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="客户名称">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="客户类型">
          <el-input v-model="editForm.type"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input v-model="editForm.address"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="closeDialog()">取消</el-button>
        <el-button type="primary" @click="sumbitEditRow()">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="isAddMembers">
      <el-form :model="addForm">
        <el-form-item label="日期" :picker-options="pickerOptions">
          <el-date-picker
            v-model="addForm.date"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="客户名称">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="客户类型">
          <el-input v-model="addForm.type"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input v-model="addForm.address"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="closeDialog()">取消</el-button>
        <el-button type="primary" @click="sumbitAddRow()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//import axios from 'axios'
var _index;
export default {
  name: "",
  data() {
    return {
      msg: "",
      centerDialogVisible: false,
      isAddMembers: false,
      editForm: [],
      addForm: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      tableData: [
        {
          date: "2020-05-02",
          name: "王小虎",
          type: "博士",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  /*	mounted() {
				this.getUsers()
			},*/
  methods: {
    deleteData(index, row) {
      //删除表格数据
      this.tableData.splice(index, 1);
    },
    modifyData(index, row) {
      //修改表格数据
      this.centerDialogVisible = true;
      this.editForm = Object.assign({}, row); //重置对象
      _index = index;
    },
    sumbitEditRow() {
      //提交并保存修改数据
      var editData = _index;
      this.tableData[editData].name = this.editForm.name;
      this.tableData[editData].type = this.editForm.type;
      this.tableData[editData].date = this.editForm.date;
      this.tableData[editData].address = this.editForm.address;
      this.centerDialogVisible = false;
    },
    closeDialog() {
      //关闭对话框
      this.centerDialogVisible = false;
      this.isAddMembers = false;
    },
    addMembers() {
      //新增表格数据
      this.isAddMembers = true;
      this.addForm = {
        name: "",
        type: "",
        date: "",
        address: "",
      };
    },
    sumbitAddRow() {
      //保存并提交新增数据
      this.tableData = this.tableData || [];
      this.tableData.push({
        name: this.addForm.name,
        type: this.addForm.type,
        date: this.addForm.date,
        address: this.addForm.address,
      });
      this.isAddMembers = false;
    },
  },
};
</script>

<style scoped>
.table-grid-content {
  border-radius: 4px;
  height: 50 px;
  background: #ebeef5;
  padding: 10px;
}
</style>
