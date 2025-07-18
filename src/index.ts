{
  // string
  const strValue: string = 'hello world';
  console.log(strValue);

  // number
  const numValue: number = 10;
  console.log(numValue);

  // boolean
  const booleanValue: boolean = true;
  console.log(booleanValue);

  // array
  const strArr: string[] = ['hello', 'world'];
  console.log(strArr);

  // tuple
  const tupleArr: [string, number] = ['hello', 10];
  console.log(tupleArr);

  // ********************************************* //

  // Object , Optional and Literal Types

  // Object

  const user: {
    company: string;
    location: string;
  } = {
    company: 'Google',
    location: 'Seoul',
  };

  console.log(user);

  // Optional

  const userOptional: {
    address?: string;
    email: string;
  } = {
    email: 'example@mail.com',
  };

  console.log(userOptional);

  // Literal Types
  const userLiteral: {
    companyName: 'Google';
    location: string;
  } = {
    companyName: 'Google',
    location: 'Seoul',
  };

  console.log(userLiteral);

  // ********************************************* //

  // Type alias in typescript

  type Student = {
    name: string;
    age: number;
    email: string;
    contact?: string;
  };

  const student: Student = {
    name: 'Robert',
    age: 25,
    email: 'example@mail.com',
    contact: '010-1234-5678',
  };

  const student2: Student = {
    name: 'John',
    age: 30,
    email: 'example@mail.com',
  };

  // ********************************************* //

  // Union and Intersection types

  // Union

  type BloodGroup = 'A' | 'B' | 'O' | 'AB';

  type Patient = {
    name: string;
    contactNo: string;
    gender: 'male' | 'female';
    bloodGroup: BloodGroup;
  };

  const patient: Patient = {
    name: 'John',
    contactNo: '010-1234-5678',
    gender: 'male',
    bloodGroup: 'A',
  };

  console.log(patient);

  // Intersection types

  type Mobile = {
    features: string[];
    name: string;
  };
  type Laptop = {
    features: string[];
    name: string;
  };

  type Device = Mobile & Laptop;

  const device1: Device = {
    features: ['camera', 'speaker'],
    name: 'iPhone',
  };

  const device2: Device = {
    features: ['camera', 'speaker'],
    name: 'Laptop',
  };

  console.log({ device1, device2 });
}
