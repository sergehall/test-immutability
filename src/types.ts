export type UserType ={
  name: string
  age: number
  hairLength: number
  address: {
    street: string
    city: string
  },
  hobbies?: string[]
}

export type VideosType = Array<{
  id: number
  title: string
  author: string
  channel?: {
    name: string
    description: string
  }
}>

export type ErrorType = {
  message: string
  field: string
}

export type VideoType =  {
  id: number,
  title: string,
  author: string
}

export type ReturnDataType = {
  data: VideoType | null
  errorsMessages: Array<ErrorType>
  resultCode: number
}