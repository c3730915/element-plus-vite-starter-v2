interface IResponse<T = any> {
  code: string
  data: T extends any ? T : T & any
}
