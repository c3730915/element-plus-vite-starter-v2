<template>
<!--  <button @click="add_date">hide or show seconds</button>-->
<!--  <Countdown v-bind="flip_config" :dateReverse="true" :show-seconds="isShowSeconds"></Countdown>-->

  <el-row justify="center" :gutter="10">
    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <el-card class="box-card" >
          <template #header>
            <el-alert
                title="日期统计"
                type="info"
                effect="dark"
                description="统计一些重要的日期，倒计时"
                show-icon
                :closable=false
            />
          </template>
          <div v-for="o in table_data" :key="o" class="text item" style="text-align: left">距离{{o.title}} 已经过去了
            <el-tag class="ml-2 el-tag" size="default" round
                    :type="getLabelTypeByImportance(o.importance)">

              {{o.day_count}}天</el-tag>
            <el-divider style="margin-top: 10px" />
          </div>
          <BaseHeader class="el-footer"/>
        </el-card>
    </el-col>
  </el-row>


</template>

<script lang="ts" setup>
import moment from "moment/moment";
import {computed, onMounted, reactive, ref, watch} from "vue";
import {BaseResponse, TableData, TableDataResponseData} from "~/api/table/types";
import {getTableListApi} from "~/api/table";
import { get } from "lodash";
import {ElMessage} from "element-plus";

type Records = TableData[]

let table_data= ref<Records>([])

const getLabelTypeByImportance =  (importance:number) =>{
  if (importance === 1){
    return 'danger'
  }
  if (importance === 2){
    return 'success'
  }else {
    return 'info'
  }

}

const getTableData = async () => {


  let res: TableDataResponseData = await getTableListApi();


  if (res) {
    table_data.value.splice(0)
   res.object.list.forEach(a => table_data.value.push(a))

    console.log(table_data.value)
    // ElMessage.success("update info success:" + table_data.size)
  }
}
onMounted(() =>{
  getTableData()
})



</script>

<style>

.el-footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
}


.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;

}

.box-card {
  /*width: 40vh;*/
  height: 80vh;
}
.el-tag{
  float: right;
  right: 5vh;
}
</style>