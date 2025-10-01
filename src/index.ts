{
  // ********************************************* //
  // Mapped Type

  type User = {
    id: number;
    name: string;
    age: number;
  };

  type CopyPerson<T> = {
    [K in keyof T]: T[K];
  };

  const copyUser: CopyPerson<User> = {
    id: 1,
    name: 'John',
    age: 30,
  };

  // Partial Type

  type PartialUser = Partial<User>;
  type MyPartial<T> = {
    [K in keyof T]?: T[K] | undefined;
  };

  // Pick Type

  type UserWithIdOnly = Pick<User, 'id'>;

  const userWithIdOnly: UserWithIdOnly = {
    id: 1,
  };

  type MyPick<T, K extends keyof T> = {
    [LoopingKey in K]: T[LoopingKey];
  };
  const userWithIdOnly2: MyPick<User, 'id'> = {
    id: 2,
  };

  // Readonly Type

  type ReadonlyUser = Readonly<User>;

  const readonlyUser: ReadonlyUser = {
    id: 1,
    name: 'John',
    age: 30,
  };

  // Record Type

  type UserRole = 'admin' | 'user' | 'guest';

  type UserRecord = Record<UserRole, User[]>;
  const userRoles: UserRecord = {
    admin: [{ id: 1, name: 'Admin1', age: 40 }],
    user: [
      { id: 2, name: 'User1', age: 25 },
      { id: 3, name: 'User2', age: 28 },
    ],
    guest: [{ id: 4, name: 'Guest1', age: 20 }],
  };

  // Required Type

  type OptionalUser = {
    id?: number;
    name?: string;
    age?: number;
  };

  type RequiredUser = Required<OptionalUser>;

  type MyRequiredUser<T> = {
    [K in keyof T]-?: T[K];
  };

  const requiredUser: RequiredUser = {
    id: 1,
    name: 'John',
    age: 30,
  };
  const myRequiredUser: MyRequiredUser<OptionalUser> = {
    id: 1,
    name: 'John',
    age: 30,
  };

  /* 

  ! Error: missing the following properties from type 'UserRecord': user, guest
  

  * error happens because Record<Keys, Type> is not optional. It creates a strict "contract" that requires the object to have every single key from the Keys type. explicitly telling TypeScript that any variable of type UserRecord must have these three properties:

* admin: with a value of type User[]
* user: with a value of type User[]
* guest: with a value of type User[]

  
  */
}
