{
  // ********************************************* //

  // Asynchronous typescript

  const myPromise = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      const data = 'Hello, World!';
      setTimeout(() => {
        // Resolving the promise
        if (data) {
          resolve(data);
        }
        // Rejecting the promise in case of an error
        else {
          reject(new Error('No data found'));
        }
      }, 1000);
    });
  };

  // Using the promise
  const result = async () => {
    try {
      const data = await myPromise();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  result();
}
