export interface BaseResponse  {
    "message_id":number,
    "message": string,
    "result": boolean,
    "object":any
}
export interface EventRecord  {
    id:number,
    title:string,
    day_count:number,
    importance:number,
    record_time:string,
    rec_create_time:string
}

export type event_list = EventRecord[]

export interface EventRecordList  {
    list:EventRecord[]
    total:number
}
export interface RecordEventResponse extends BaseResponse{
    object:EventRecordList
}