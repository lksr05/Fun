document.getElementById("btn").addEventListener("click", function fibonacci() {
  const f0 = 0;
  const f1 = 1;
  const arr = [f0, f1]
  for (i = 0; i >= 0; i++) {
    const fx = arr[i] + arr[i + 1]
    arr.push(fx)
    console.log(fx)
  }
})