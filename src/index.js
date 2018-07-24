/* Example Code
The following is just some example code for you to play around with.
No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

let sort = new Sort([6, 4, 3, 7, 5, 9, 1, 8, 2]);

const button = document.getElementById("exeSort");
button.addEventListener("click", updateHTML);

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", reset);

function reset() {
  const prevDiv = document.getElementById("result");
  if (prevDiv) {
    prevDiv.remove();
  }
  sort = new Sort([6, 4, 3, 7, 5, 9, 1, 8, 2]);
}

function updateHTML() {
  let one = document.getElementById("1").cloneNode();
  let two = document.getElementById("2").cloneNode();
  let three = document.getElementById("3").cloneNode();
  let four = document.getElementById("4").cloneNode();
  let five = document.getElementById("5").cloneNode();
  let six = document.getElementById("6").cloneNode();
  let seven = document.getElementById("7").cloneNode();
  let eight = document.getElementById("8").cloneNode();
  let nine = document.getElementById("9").cloneNode();

  const prevDiv = document.getElementById("result");
  if (prevDiv) {
    prevDiv.remove();
  }

  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", "result");
  sort.stepSort();
  for (let i = 0; i < sort.array.length; i++) {
    if (sort.array[i] === 1) {
      one = newDiv.appendChild(one);
    } else if (sort.array[i] === 2) {
      two = newDiv.appendChild(two);
    } else if (sort.array[i] === 3) {
      three = newDiv.appendChild(three);
    } else if (sort.array[i] === 4) {
      four = newDiv.appendChild(four);
    } else if (sort.array[i] === 5) {
      five = newDiv.appendChild(five);
    } else if (sort.array[i] === 6) {
      six = newDiv.appendChild(six);
    } else if (sort.array[i] === 7) {
      seven = newDiv.appendChild(seven);
    } else if (sort.array[i] === 8) {
      eight = newDiv.appendChild(eight);
    } else if (sort.array[i] === 9) {
      nine = newDiv.appendChild(nine);
    }
  }
  document.body.appendChild(newDiv);
}

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle(sort.returnValue("Cocktail Sort"));
document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
function changeTitle(event) {
  event.preventDefault();
  console.log("What is an event?", event);
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});
