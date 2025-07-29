{
  // ********************************************* //
  // ? Type Assertion
  let input: any;
  input = 'Hello, TypeScript!';
  input as string;

  //! This will not cause an error, because `input` is converted to the type `string`
  // input = 42;
  console.log(`Input as string: ${(input as string).toUpperCase()}`);

  // ? Type Narrowing

  function processResult(value: string | number): string | number {
    if (typeof value === 'string') {
      return `String value: ${value.toUpperCase()}`;
    }

    return value * 2;
  }

  const result1 = processResult('hello') as string;
  const result2 = processResult(42) as number;

  console.log(`Result 1: ${result1}`);
  console.log(`Result 2:`, result2);

  // ? Interface, type vs interface

  // Type declaration

  // with type
  type User = {
    name: string;
    age: number;
  };

  const user: User = {
    name: 'Alice',
    age: 30,
  };

  // with interface

  interface UserInterface {
    name: string;
    age: number;
  }

  const userInt: UserInterface = {
    name: 'Bob',
    age: 25,
  };

  //  extending type and interface

  // with type
  type Admin = User & {
    role: string;
  };

  const adminUser: Admin = {
    name: 'Charlie',
    age: 35,
    role: 'Administrator',
  };

  //  with interface

  interface AdminInterface extends UserInterface {
    role: string;
  }

  const adminUserInt: AdminInterface = {
    name: 'Dave',
    age: 40,
    role: 'Moderator',
  };

  console.log({ user, userInt, adminUser, adminUserInt });

  // ? Aliasing types for different data types
  //  with type to an array of strings and numbers

  type StringArray = string[];
  type NumberArray = number[];
  const typeStringArray: StringArray = ['apple', 'banana', 'cherry'];
  const typeNumberArray: NumberArray = [1, 2, 3, 4, 5];

  // with interface to an array of strings and numbers
  interface StringIntArray {
    [index: number]: string;
  }

  interface NumberIntArray {
    [index: number]: number;
  }

  const interfaceStringArray: StringIntArray = ['apple', 'banana', 'cherry'];
  const interfaceNumberArray: NumberArray = [1, 2, 3, 4, 5];
}
