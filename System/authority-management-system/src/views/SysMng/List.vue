<template>
  <div class="hello">
    <el-row :span="24" class="table-grid-content">
      <el-col :span="4" class="grid">
        <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
      </el-col>
      <el-col :span="3" class="grid" :gutter="1">
        <el-button type="success" icon="el-icon-search">搜索</el-button>
      </el-col>
      <el-col :span="2" class="grid" :gutter="15">
        <!-- <el-button type="primary" @click="addGoods()">增加</el-button> -->
        <el-button type="primary" @click="addMembers()">新增订单</el-button>
      </el-col>
      <!-- <el-col class="table-grid-content">
        <el-button type="primary" @click="addMembers()">新增订单</el-button>
      </el-col> -->
    </el-row>
    <el-table
      :data="tableData"
      :stripe="true"
      :border="true"
      style="width: 100%"
    >
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="客户名称" prop="name"></el-table-column>
      <el-table-column label="客户类型" prop="type"></el-table-column>
      <el-table-column label="销售员" prop="saleman"></el-table-column>
      <el-table-column label="订单编号" prop="orderid"></el-table-column>
      <el-table-column label="合同编号" prop="contractid"></el-table-column>
      <el-table-column label="产品类型" prop="product"></el-table-column>
      <el-table-column label="地区" prop="address"></el-table-column>
      <el-table-column label="合作金额" prop="cash"></el-table-column>
      <el-table-column label="已收款" prop="received"></el-table-column>
      <el-table-column label="未收款" prop="uncollected"></el-table-column>
      <el-tabel-column label="订单类型" prop="order"></el-tabel-column>
      <el-table-column label="是否续签" prop="renewal"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100" class="btn-box">
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
      <el-form :model="editForm" class="formbox">
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
        <el-form-item label="销售员">
          <el-input v-model="editForm.saleman"></el-input>
        </el-form-item>
        <el-form-item label="订单编号">
          <el-input v-model="editForm.orderid"></el-input>
        </el-form-item>
        <el-form-item label="合同编号">
          <el-input v-model="editForm.contractid"></el-input>
        </el-form-item>
        <el-form-item label="产品类型">
          <el-input v-model="editForm.product"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input v-model="editForm.address"></el-input>
        </el-form-item>
        <el-form-item label="合作金额">
          <el-input v-model="editForm.cash"></el-input>
        </el-form-item>
        <el-form-item label="已收款">
          <el-input v-model="editForm.received"></el-input>
        </el-form-item>
        <el-form-item label="未收款">
          <el-input v-model="editForm.uncollected"></el-input>
        </el-form-item>
        <el-form-item label="订单类型">
          <el-select v-model="editForm.order">
            <el-option label="销售单" value="sales-slip"></el-option>
            <el-option label="客服单" value="service-list"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否续签">
          <el-select v-model="editForm.renewal">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
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
        <el-form-item label="销售员">
          <el-input v-model="addForm.saleman"></el-input>
        </el-form-item>
        <el-form-item label="订单编号">
          <el-input v-model="addForm.orderid"></el-input>
        </el-form-item>
        <el-form-item label="合同编号">
          <el-input v-model="addForm.contractid"></el-input>
        </el-form-item>
        <el-form-item label="产品类型">
          <el-input v-model="addForm.product"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input v-model="addForm.address"></el-input>
        </el-form-item>
        <el-form-item label="合作金额">
          <el-input v-model="addForm.cash"></el-input>
        </el-form-item>
        <el-form-item label="已收款">
          <el-input v-model="addForm.received"></el-input>
        </el-form-item>
        <el-form-item label="未收款">
          <el-input v-model="addForm.uncollected"></el-input>
        </el-form-item>
        <el-form-item label="订单类型">
          <el-select v-model="addForm.order">
            <el-option label="销售单" value="sales-slip"></el-option>
            <el-option label="客服单" value="service-list"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否续签">
          <el-select v-model="addForm.renewal">
            <el-option label="是" value="yes"></el-option>
            <el-option label="否" value="no"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="closeDialog()">取消</el-button>
        <el-button type="primary" @click="sumbitAddRow()">确定</el-button>
      </div>
    </el-dialog>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 7, 10, 20, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
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
      isShow: false,
      isAddGoods: false,
      editForm: [],
      addForm: [],
      searchData: "",
      shopGoods: [],
      input: "",
      id: "",
      total: 0,
      pageSize: 5,
      currentPage: 1,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      tableData: [
        {
          date: "2020-05-02",
          name: "上海交通大学",
          type: "博士",
          saleman: "张三",
          orderid: "123456",
          contractid: "234567",
          product: "未知",
          address: "上海市普陀区金沙江路",
          cash: "10000",
          received: "9000",
          uncollected: "1000",
          order: "销售单",
          renewal: "是",
        },
      ],
    };
  },
  mounted() {
    this.getGoods();
    this.searchByPage(this.currentPage, this.pageSize);
  },
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
      this.tableData[editData].saleman = this.editForm.saleman;
      this.tableData[editData].orderid = this.editForm.orderid;
      this.tableData[editData].contractid = this.editForm.contractid;
      this.tableData[editData].product = this.editForm.product;
      this.tableData[editData].address = this.editForm.address;
      this.tableData[editData].cash = this.editForm.cash;
      this.tableData[editData].received = this.editForm.received;
      this.tableData[editData].uncollected = this.editForm.uncollected;
      this.tableData[editData].order = this.editForm.order;
      this.tableData[editData].renewal = this.editForm.renewal;
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
        saleman: "",
        orderid: "",
        contractid: "",
        product: "",
        address: "",
        cash: "",
        received: "",
        uncollected: "",
        order: "",
        renewal: "",
      };
    },
    sumbitAddRow() {
      //保存并提交新增数据
      this.tableData = this.tableData || [];
      this.tableData.push({
        name: this.addForm.name,
        type: this.addForm.type,
        date: this.addForm.date,
        saleman: this.addForm.saleman,
        orderid: this.addForm.orderid,
        contractid: this.addForm.contractid,
        product: this.addForm.product,
        address: this.addForm.address,
        cash: this.addForm.cash,
        received: this.addForm.received,
        uncollected: this.addForm.uncollected,
        order: this.addForm.order,
        renewal: this.addForm.renewal,
      });
      this.isAddMembers = false;
    },
    handleSizeChange: function (size) {
      this.pageSize = size;
      console.log(this.pageSize); //每页下拉显示数据
      this.searchByPage(this.currentPage, this.pageSize);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
      this.searchByPage(this.currentPage, this.pageSize);
    },
    searchByPage(currentPage, pageSize) {
      var demo = new URLSearchParams();
      demo.append("page", currentPage);
      demo.append("size", pageSize);
      axios
        .post("/test/findAllShopByPage", demo)
        .then((response) => {
          if (response.data.code == 0) {
            this.total = response.data.data.totalElements; //数据库中商品总条数
            console.log("分页查询的数据：", response.data.data.content);
            this.shopGoods = response.data.data.content;
          } else {
            console.log("查询失败原因：", response.data.message);
          }
        })
        .catch((error) => {});
    },
    closeDialog() {
      this.centerDialogVisible = false;
      this.isAddMembers = false;
    },
    getGoods() {
      axios
        .post("/test/findAllShop")
        .then((response) => {
          this.shopGoods = response.data.data;
        })
        .catch((error) => {});
    },
  },
  computed: {
    tables() {
      const input = this.input;
      if (input) {
        return this.shopGoods.filter((data) => {
          return Object.keys(data).some((key) => {
            return String(data[key]).toLowerCase().indexOf(input) > -1;
          });
        });
      }
      return this.shopGoods;
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

.el-table {
  color: #2c3e50;
  font-size: 15px;
  margin-top: 20px;
}

.el-dialog__body .el-form{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

</style>
