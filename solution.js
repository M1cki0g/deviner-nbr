let n = Math.floor(Math.random() * 19) + 1;
function deviner(n) {
  let input = document.getElementById("inp1");
  let result = document.getElementById("msg");
  console.log(n);

  if (n < input.value) {
    result.textContent = "Trop grand";
    // console.log("Trop Grand");
  } else if (n > input.value) {
    result.textContent = "Trop petit";
  } else {
    result.textContent = "Bravo!";
  }
}
