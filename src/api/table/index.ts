
import type {TableData, TableDataResponseData} from './types'
import request from "~/utils/request";
import {RecordEventResponse} from "~/api/table/ResponseType";


const VITE_API_BASE_PATH = 'http://124.223.28.66:8081'

export const getTableListApi = () => request.get<any, RecordEventResponse>(VITE_API_BASE_PATH + '/dateCountRecord/get');

