function function_name() {
  let a = parseInt(prompt(" print your range"));
  let b = prompt(" choose your print odd and even number");

  // for (i = 0; i < a; i++) {
    if (b === "even" && a % 2 == 0) {
      console.log(` this is value is a even` + `<br>`);
    } else if (b == "odd" && a % 2 != 0) {
      // for (let i = 0; i < a; i++) {
      document.write(`${a}your number is odd` + `<br>`);
      // }
    } else {
      console.log("none validede value");
    }
//   }
// }

function ziakhan() {
  let div = parseInt(prompt(" divid your number"));
  let div1 = parseInt(prompt(" divid your number"));
  let divi = div / div1;
  document.write(divi);
}
