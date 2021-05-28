<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.date"
            v-if="scope.row.id == editId"
            value-foemat="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
          <span v-else>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      
    </el-table>
  </div>
</template>