function Calculate() {

    const amount = document.getElementById("amt").value;
    const rate = document.getElementById("rate").value / 100;
    const time = document.getElementById("time").value;

    const totalAmount = amount * (1 + rate * time);
    document.getElementById("totamt").innerHTML = "Total Amount : "+totalAmount.toFixed(2);
  }