<template>
<div class="parent">


  <el-row justify="center" :gutter="10">
    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <el-card class="box-card" >
          <template #header>
            <el-alert
                title="日期统计"
                type="info"
                description="统计一些重要的日期，倒计时"
                show-icon
                :closable=false
            >
              <template #default style="display: flex;flex-direction: row;">
                统计一些重要的日期，倒计时
              </template>
            </el-alert>

          </template>
          <div v-for="o in table_data" :key="o" class="text item" style="text-align: left">距离{{o.title}} 已经过去了
            <el-tag class="ml-2 el-tag" size="default" round
                    :type="getLabelTypeByImportance(o.importance)">

              {{o.day_count}}天</el-tag>
            <el-divider style="margin-top: 10px" />
          </div>
          <div style="display: flex;flex-direction: row;justify-content: center">
            <div>
              <BaseHeader class="el-footer"/>
            </div>
            <div>
              <el-tag class="ml-2" type="success"><el-icon><Refresh /></el-icon> refresh</el-tag>
            </div>
          </div>
        </el-card>
    </el-col>
  </el-row>

</div>

</template>

<script lang="ts" setup>
import {onBeforeMount, onMounted, ref,} from "vue";
import {getTableListApi} from "~/api/table";
import {ElMessage} from "element-plus";
import {event_list, EventRecord, EventRecordList, RecordEventResponse} from "~/api/table/ResponseType";
import { isDark } from '~/composables/dark'
import {Refresh} from "@element-plus/icons-vue";


let table_data= ref<event_list>([])

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

  let res: RecordEventResponse = await getTableListApi();

  if (res) {
    table_data.value = res.object.list
    console.log(table_data.value)
    ElMessage.success("request success!")

  }
}
onBeforeMount(() =>{
  getTableData()
})



</script>

<style>


.el-footer {
/*margin-bottom: auto;*/
/*  justify-content: flex-end;*/
/*  align-items:flex-end;*/
  align-self:flex-end;
}


.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  /*width: 40vh;*/
  height: 70vh;
}
.el-tag{
  float: right;
  right: 5vh;
}
</style>