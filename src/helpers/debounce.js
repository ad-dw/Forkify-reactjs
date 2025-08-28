export function debounce(callback, delay = 1000) {
  let timer; // Variable to store the timeout ID

  return function (event) {
    clearTimeout(timer); // Clear the previous timeout
    timer = setTimeout(() => callback(event), delay); // Set a new timeout
  };
}
