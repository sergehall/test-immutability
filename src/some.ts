import {UserType} from "./types";

export function cutHair(user: UserType, power: number) {
  return {
    ...user,
    hairLength: user.hairLength / power
  }
}