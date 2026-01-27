function openPopup(name, price, desc) {
  document.getElementById("pname").innerText = name;
  document.getElementById("pprice").innerText = "Price: " + price;
  document.getElementById("pdesc").innerText = desc;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}