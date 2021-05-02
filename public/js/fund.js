
function D5000() {
  var amount = document.getElementById("tamount")
  var prev = amount.innerHTML;
  var prevint = parseInt(prev);
  prevint += 5000;
  newstr = prevint.toString()
  amount.innerHTML = newstr;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated Rs. 5000"));
  ul.appendChild(li);
}
function D10000() {
  var amount = document.getElementById("tamount")
  var prev = amount.innerHTML;
  var prevint = parseInt(prev);
  prevint += 10000;
  newstr = prevint.toString()
  amount.innerHTML = newstr;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated Rs. 10,000"));
  ul.appendChild(li);
}
function D100000() {
  var amount = document.getElementById("tamount")
  var prev = amount.innerHTML;
  var prevint = parseInt(prev);
  prevint += 1000000;
  newstr = prevint.toString()
  amount.innerHTML = newstr;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated Rs. 1,00,000"));
  ul.appendChild(li);
}
function D500000() {
  var amount = document.getElementById("tamount")
  var prev = amount.innerHTML;
  var prevint = parseInt(prev);
  prevint += 500000;
  newstr = prevint.toString()
  amount.innerHTML = newstr;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated Rs. 5,00,000"));
  ul.appendChild(li);
}

function D500000() {
  var amount = document.getElementById("tamount")
  var prev = amount.innerHTML;
  var prevint = parseInt(prev);
  prevint += 500000;
  newstr = prevint.toString()
  amount.innerHTML = newstr;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated Rs. 5,00,000"));
  ul.appendChild(li);
}

function donatenow() {
  var amount = document.getElementById("tamount")
  var prev = amount.innerHTML;
  var prevint = parseInt(prev);
  var entered = document.getElementById("amountx").value
  var lol = parseInt(entered)
  prevint += lol;
  newstr = prevint.toString()
  amount.innerHTML = newstr;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated Rs. " + entered));
  ul.appendChild(li);
}