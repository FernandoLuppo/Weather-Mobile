export interface IResult {
  content: any
  error: [string]
  isError: boolean
}

export interface IResponse {
  data: {
    content: any
    error: [string]
    isError: boolean
  }
  headers: {
    "set-cookie": [string]
  }
}
