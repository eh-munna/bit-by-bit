{
  // ********************************************* //
  // Introduction to generics

  const staticStrArr: string[] = ['apple', 'banana', 'cherry'];

  type ArrGeneric<T> = Array<T>;

  type ArrGenericDifferent<T> = T[];

  const genStrArr: ArrGeneric<string> = ['apple', 'banana', 'cherry'];

  const genNumArr: ArrGenericDifferent<number> = [1, 2, 3];

  type ArrDynamic<T> = T[];

  type User = {
    name: string;
    age: number;
    isActive: boolean;
  };

  const user: ArrDynamic<User> = [
    {
      name: 'John Doe',
      age: 30,
      isActive: true,
    },
    {
      name: 'Jane Smith',
      age: 25,
      isActive: false,
    },
  ];

  type GenericTuple<T, K> = [T, K];

  const pair: GenericTuple<string, number> = ['apple', 1];

  // Using generics with interfaces

  interface Developer<T> {
    name: string;
    age: number;
    skills: T[];
  }

  const mobileDeveloper: Developer<string> = {
    name: 'Alice',
    age: 28,
    skills: ['React Native', 'Flutter'],
  };

  // Default Parameters in Generics

  interface Config<V, U = null> {
    options?: U;
    value: V;
  }
  
  const settings: Config<string> = {
    value: 'dark',
  };

  // Using Generics with Functions

  function processInput<T>(input: T): T[] {
    return [input];
  }

  const strArr = processInput<string>('Hello TS');
  const numArr = processInput<number>(42);

  function matchCouple<T, K>(person1: T, person2: K): [T, K] {
    return [person1, person2];
  }

  const couple = matchCouple<string, string>('Alice', 'Jane');
  console.log({ couple });
}
