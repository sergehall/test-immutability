import {UserType} from "./types";
import {cutHair} from "./some";



describe('some tests', () => {
  it('should pass', () => {
    let user: UserType = {
      name: "John",
      age: 20,
      hairLength: 60,
      address: {
        city: "New York",
        street: "Wall Street"
      },
      hobbies: ["running", "swimming"]
    };

    const newUser  = cutHair(user, 2);

    expect(user.hairLength).toBe(60);
    expect(user.hobbies).toEqual(["running", "swimming"]);
    expect(newUser.hairLength).toBe(30)
    expect(newUser).not.toEqual(user);
  });
});