function function_name() {
  let a = prompt(" choose your print odd and even number");
  let b = prompt(" print your range");
  for (let i = 0; i < b; i++) {
    if (a == "even" && b % 2 == 0) {
      console.log(`${i * b} this is value is a even`);
    } else if (a == "odd" && b % 1 == 0) {
      console.log("your number is odd");
    } else {
      console.log("none validede value");
    }
  }
}

