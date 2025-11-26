const args = process.argv; // Get command-line arguments

/* 

Here is the breakdown:

1.  process ➡ ➡ ➡ Node gives you a global object called process.
    It represents the current running Node program.

2.  process.argv ➡ ➡ ➡ .argv is an array.
    It holds the command-line arguments that were used when starting the script.

*/

/* 

1. The first element (index 0) is the path to the Node executable.
2. The second element (index 1) is the path to the JavaScript file being executed.
3. The remaining elements are the command-line arguments passed to the script.

For example, if you run the script like this:

node process.js arg1 arg2 arg3

The process.argv array will look like this:
[
  '/path/to/node',        // Index 0: Path to Node executable
  '/path/to/process.js',  // Index 1: Path to the script
  'arg1',                // Index 2: First argument
  'arg2',                // Index 3: Second argument
  'arg3'                 // Index 4: Third argument
]



*/

console.log('Arguments:', args);
