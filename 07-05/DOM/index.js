// //Example 3
// const myClass3 = document.getElementsByClassName("myClass3");
// myClass3[3].classList.remove("myClass3");


// //Example 4
// const buttons = document.getElementsByClassName("toggle-button");
//     console.log(buttons);
//     function toggleClass() {
//         for(let i = 0; i < buttons.length; i++) {
//             buttons[i].classList.toggle("active")
//         }
// }

// toggleClass();




// // Example 1 - querySelector
// const element = document.querySelector("div");
// console.log(element);
// element.textContent = "New Text";

// // Example 2 - querySelectpr()
// const element2 = document.querySelector("#myElement");
// element2.style.backgroundColor = "pink";


// // Example 3- querySelector()
// const element3 = document.querySelector(".myClass");
// element3.style.fontSize = "100px";


// // Example 6 - 

// const image = document.querySelector("img");
// image.setAttribute("src", "images/...");
// image.setAttribute("href", ".com...");


// // Example 6 - querySelector()
// function getValue() {
//     const input = document.querySelector("#MyInput");
//     const value = input.value;
//     console.log(value);
// }



// function highlightItems() {
//     const listItems = document.querySelectorAll("#List li")
//     listItems.forEach(function(item){
//         item.style.backgroundColor = "yellow";
//     });

// }

// highlightItems();

// // Example 2
// function printText() {
//     console.log("clicking button");
// }

// function disableButtons() {
//     const nuttons = document.querySelectorAll(".containerbutton");
//     console.log(buttons);
//     buttons.forEach(function(b) {
//         b.disables = true;
//     });
// }


// // Example 3
// let randomNum = Math.trunc (Math.random() * 6) + 1; //1-6

// function changeMsg(text) {
//     document.querySelectorAll(".par").textContent = text;
// }

// function check() {
//     let inputFromUser = document.querySelector(".numInput").value; // e
//     if (!inputFromUser) {
//         changeMsg("Please enter a valid number");
//     }

//     if (inputFromUser === randomNum) {
//         changeMsg("You Win!");
//         document.querySelector("body").style.backgroundColor = "Green";
//     } else {
//         changeMsg("Try again! Wrong number");
//     }
// }


let newElement = document.createElement("p");
console.log(newElement);
newElement.textContent = "I just created this";

document.body.appendChild(newElement);

// Example 2
const div = document.createElement("div");
div.classList.add("box");
console.log(div);
document.getElementById("container").appendChild(div);

// Example 5

function removeMultipleChildElements() {
    const container = document.getElementById("container4");
    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach(function(paragraph) {
        container.removeChild(paragraph);
    })
}
removeMultipleChildElements();




