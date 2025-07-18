{
  // ********************************************* //
  // Function in typescript

  const expenseTracker = (value: number, type: string): number => {
    let balance = 1000;

    if (value < 1) {
      return balance;
    }

    if (type === 'add') {
      balance = balance + value;
    } else if (type === 'subtract') {
      if (value > balance) {
        return balance;
      }
      balance = balance - value;
    }

    return balance;
  };

  console.log(expenseTracker(1200, 'add'));

  // Function Default Parameter

  function greet(
    name: string,
    age?: number,
    salutation: string = 'Hello'
  ): string {
    if (age) {
      return `${salutation}, ${name}. You are ${age} years old.`;
    }
    return `${salutation}, ${name}`;
  }

  console.log(greet('Alice'));
  console.log(greet('Bob', 30));

  // Void & Never Return Types

  function logMessage(message: string): void {
    console.log(message);
  }
  logMessage('Hello, world!');

  // function throwError(message: string): never {
  //   throw new Error(message);
  // }
  // throwError('An error occurred');
}
