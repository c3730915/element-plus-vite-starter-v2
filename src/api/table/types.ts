import {reactive} from "vue";
import {Nullable} from "element-plus/es/utils";

export interface TableData {
  id: string
  title: string
  day_count: number
  importance: number
}

export interface TableDataResponseData extends BaseResponse {
  object: TableData[]
}
export type BaseResponse = {
  message_id:string,
  message:string,
  result:boolean,
}
interface TableObject<T = any> {
  pageSize: number
  currentPage: number
  total: number
  tableList: T[]
  params: any
  loading: boolean
  currentRow: Nullable<T>
}
