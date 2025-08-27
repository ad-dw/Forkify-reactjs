export function debounce(callback, delay = 1000) {
  console.log("debounce", this);
  let timer; // Variable to store the timeout ID

  return function (args) {
    console.log(this);
    clearTimeout(timer); // Clear the previous timeout
    timer = setTimeout(callback(args), delay); // Set a new timeout
  };
}
