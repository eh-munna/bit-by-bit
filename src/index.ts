{
  //   Class Basics
  /*
  
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`${this.name} the ${this.species} says ${this.sound}`);
    }
  }

  const cat = new Animal('Whiskers', 'Cat', 'Meow');
  cat.makeSound();
  
  */
  //   Inheritance in OOP
  /*
  class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
      this.make = make;
      this.model = model;
      console.log(`Created a vehicle: ${this.make} ${this.model}`);
    }

    start() {
      console.log(`${this.make} ${this.model} is starting`);
    }
  }

  class Car extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model);
    }

    start(): void {
      console.log('Checking seatbelt...');
      super.start();
    }

    honk() {
      console.log('Beep beep!');
    }
  }

  const myCar = new Car('Toyota', 'Corolla');
  myCar.start();
  myCar.honk();

  */
  //   Type Guards with instanceof
  /* 
  
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    makeSound() {
      console.log(`${this.name} makes a sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }

    makeBark() {
      console.log(`${this.name} says Woof! Woof!`);
    }
  }

  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }

    makeMeow() {
      console.log(`${this.name} says Meow! Meow!`);
    }
  }

  const isBarking = (animal: Animal) => {
    return animal instanceof Dog;
  };

  const isMeowing = (animal: Animal) => {
    return animal instanceof Cat;
  };

  const checkAnimalSound = (animal: Animal) => {
    if (isBarking(animal)) {
      animal.makeBark();
    } else if (isMeowing(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog('Buddy');
  const cat = new Cat('Whiskers');
  checkAnimalSound(dog);
  checkAnimalSound(cat);
  
  
  */
  // Access Modifiers in Classes
  // Getter and Setter

  class User {
    name: string;
    private password: string;

    protected _checkPassword(password: string): boolean {
      return this.password === password;
    }

    constructor(name: string, password: string) {
      this.name = name;
      this.password = password;
    }
  }

  class Admin extends User {
    role: string = 'admin';

    constructor(name: string, password: string) {
      super(name, password);
    }

    set setUserRole(role: string) {
      this.role = role;
    }

    get getUserRole() {
      return `${this.name} is an "${this.role}"`;
    }

    login(password: string) {
      if (this._checkPassword(password)) {
        console.log('Access granted to admin panel');
      } else {
        console.log('Access denied');
      }
    }
  }

  const admin = new Admin('Alice', 'secret');
  admin.login('secret');
  admin.setUserRole = 'super-admin';
  console.log(admin.getUserRole);

  // Practical Example of OOP: Payment System using Polymorphism
  class PaymentMethod {
    methodName: string = 'Generic Payment Method';
    pay(amount: number) {
      return amount;
    }
  }

  class CreditCard extends PaymentMethod {
    methodName: string;
    constructor(methodName: string) {
      super();
      this.methodName = methodName;
    }
    pay(amount: number) {
      return (amount = amount * 0.9);
    }
  }
  class PayPal extends PaymentMethod {
    methodName: string;
    constructor(methodName: string) {
      super();
      this.methodName = methodName;
    }
    pay(amount: number) {
      return (amount = amount * 0.8);
    }
  }
  class BankTransfer extends PaymentMethod {
    methodName: string;
    constructor(methodName: string) {
      super();
      this.methodName = methodName;
    }
    pay(amount: number) {
      return amount;
    }
  }

  const paymentMethods = (method: PaymentMethod) => {
    console.log(
      `The amount to be paid for — ${method.methodName} is: ${method.pay(100)}`
    );
  };
  const creditCard = new CreditCard('Credit Card');
  const payPal = new PayPal('PayPal');
  const bankTransfer = new BankTransfer('Bank Transfer');
  paymentMethods(payPal);
  paymentMethods(creditCard);
  paymentMethods(bankTransfer);
}
