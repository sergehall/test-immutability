import {UserType} from "./types";

export function cutHair(user: UserType, power: number) {
  return {
    ...user,
    hairLength: user.hairLength / power
  }
}

export function changeAddress(user: UserType, city: string, street: string) {
  return  {
    ...user,
    address: {
      ...user.address,
      city,
      street
    }
  }
}