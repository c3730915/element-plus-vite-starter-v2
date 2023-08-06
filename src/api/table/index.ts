
import type {TableData, TableDataResponseData} from './types'
import request from "~/utils/request";
import {RecordEventResponse} from "~/api/table/ResponseType";


const VITE_API_BASE_PATH = 'https://vue3-backend-jsqf3vywwq-dt.a.run.app'

export const getTableListApi = () => request.get<any, RecordEventResponse>(VITE_API_BASE_PATH + '/dateCountRecord/get');

