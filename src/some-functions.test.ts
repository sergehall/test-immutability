import {UserType} from "./types";
import {changeAddress, cutHair} from "./some-functions";

test('cutting hair', () => {
  const user: UserType = {
    name: "John",
    age: 20,
    hairLength: 60,
    address: {
      city: "New York",
      street: "Wall Street"
    },
    hobbies: ["running", "swimming"]
  };

  const newUser = cutHair(user, 2);

  expect(user.hairLength).toBe(60);
  expect(user.hobbies).toEqual(["running", "swimming"]);
  expect(newUser.hairLength).toBe(30);
  expect(newUser).not.toEqual(user);
});

test('change address', () => {
  const user: UserType = {
    name: "John",
    age: 20,
    hairLength: 60,
    address: {
      city: "New York",
      street: "Wall Street"
    },
    hobbies: ["running", "swimming"]
  };

  const newAddress = changeAddress(user, "Los Angeles", "405 Freeway");

  expect(user.address.street).toBe("Wall Street");
  expect(newAddress.address).toEqual({
    city: "Los Angeles",
    street: "405 Freeway"
  });
  expect(newAddress).not.toEqual(user);
});