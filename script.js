// Get references to the input field, button, and output div
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Create a promise that resolves after 2 seconds with the number in the input
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = parseInt(input.value);
      if (isNaN(number)) {
        reject(new Error('Invalid input'));
      } else {
        resolve(number);
      }
    }, 2000);
  });

  // Chain promises to perform calculations on the number
  promise1
    .then(number => {
      // Print the initial number to the output div
      output.textContent = `Result: ${number}`;
      // Return a promise that multiplies the number by 2 and resolves after 1 second
      return new Promise(resolve => {
        setTimeout(() => resolve(number * 2), 1000);
      });
    })
    .then(number => {
      // Print the multiplied number to the output div
      output.textContent = `Result: ${number}`;
      // Return a promise that subtracts 3 from the number and resolves after 1 second
      return new Promise(resolve => {
        setTimeout(() => resolve(number - 3), 1000);
      });
    })
    .then(number => {
      // Print the subtracted number to the output div
      output.textContent = `Result: ${number}`;
      // Return a promise that divides the number by 2 and resolves after 1 second
      return new Promise(resolve => {
        setTimeout(() => resolve(number / 2), 1000);
      });
    })
    .then(number => {
      // Print the divided number to the output div
      output.textContent = `Result: ${number}`;
      // Return a promise that adds 10 to the number and resolves after 1 second
      return new Promise(resolve => {
        setTimeout(() => resolve(number + 10), 1000);
      });
    })
    .then(number => {
      // Print the final result to the output div
      output.textContent = `Final Result: ${number}`;
    })
    .catch(error => {
      // Print any errors to the output div
      output.textContent = `Error: ${error.message}`;
    });
});
