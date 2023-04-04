// Get references to the input and output elements
const input = document.getElementById("ip");
const output = document.getElementById("output");

// Add a click event listener to the button
document.getElementById("btn").addEventListener("click", transformData);

function transformData() {
  // Create a promise that resolves after 2 seconds with the number in the input
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Number(input.value);
      if (isNaN(number)) {
        reject("Invalid input");
      } else {
        resolve(number);
      }
    }, 2000);
  });

  // Use promise chaining to transform the data
  promise1
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return number * 2; // multiply the number by 2
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return number - 3; // subtract 3 from the number
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return number / 2; // divide the number by 2
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return number + 10; // add 10 to the number
    })
    .then((number) => {
      output.textContent = `Final Result: ${number}`; // update the final result
    })
    .catch((error) => {
      output.textContent = error; // handle any errors
    });
}
