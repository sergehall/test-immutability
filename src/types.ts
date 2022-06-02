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