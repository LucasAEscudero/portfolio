import type * as TestFunctions from "@/lib/utils";

const { validateString, getErrorMessage } =
  jest.requireActual<typeof TestFunctions>("../lib/utils.ts");

describe("Utils functions test", () => {
  describe("validateString function", () => {
    test("if receive a string, should return true", () => {
      const message = "this is a string";

      expect(validateString(message, message.length)).toBe(true);
    });

    test("if not receive a string, should return false", () => {
      const message = 13;

      expect(validateString(message, 12)).toBe(false);
    });
  });

  describe("getErrorMessage function", () => {
    test("if receive a error, should return the error message", () => {
      try {
        throw new Error("This is a error");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(getErrorMessage(error)).toBe("This is a error");
      }
    });

    test("if receive a string, should return the string", () => {
      expect(getErrorMessage("This is a string")).toBe("This is a string");
    });

    test("if receive a object with message key, should return the object message", () => {
      expect(
        getErrorMessage({ message: "This is a string in an object" })
      ).toBe("This is a string in an object");
    });

    test("if receive a number, should return 'Something error'", () => {
      expect(getErrorMessage(7)).toBe("Something error");
    });
  });
});
