// Get elements from the DOM

var elem = document.getElementsByClassName("myClass");
var elem = document.getElementById("myId");
var elem = document.querySelector(".mySelector > li");

// innerHTML parses content as HTML
var oldInnerHtml = elem.innerHTML;
elem.innerHTML = "<div>my new div</div>";

// textContent uses straight text, does not parse HTML
var oldTextContent = elem.textContent;
elem.textContent = "new div";

// Create a new node and append it to existing element
var listItem = document.createElement('li');
listItem.textContent = "first list item";
document.getElementById('listId').appendChild(listItem);

// Get element you need some interaction with
var myInput = document.getElementById('myInput');

// Listen to specific events, and call a
// handler function (callback function)
myInput.addEventListener('change', function (event) {
  var value = event.target.value;
  // do what you want with the value
});

// Useful events:
// 'click',
// 'blur' (when element looses focus),
// 'change' ('blur' + the value is changed)

// Get selected value or text from below

// <select id="mySelect">
// <option value="hello">Hello World</option>
// <option value="bob">Hello bob</option>
// </select>

var mySelect = document.getElementById('mySelect');
mySelect.addEventListener('select', function (e) {
  var value = e.target.options[e.target.selectedIndex].value;
  var text = e.target.options[e.target.selectedIndex].text;
});
