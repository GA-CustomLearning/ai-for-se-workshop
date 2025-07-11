// clean-architecture-api/tests/test-api.js
import { getUsers, addUser } from "../src/services/userService.js";
test("adds and retrieves users", () => {
  addUser("Alice", "alice@example.com");
  expect(getUsers()).toEqual([{ name: "Alice", email: "alice@example.com" }]);
});
