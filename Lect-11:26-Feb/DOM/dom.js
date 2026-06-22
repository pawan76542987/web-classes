// console.log(document);

//selectors
// const ele = document.querySelector(".cl1");
// console.log(ele);   //span

const eles = document.querySelectorAll(".cl1");
// console.log(eles);   //nodeList
const para = eles[1];

// //value getter
// console.log(ele.innerHTML);
// console.log(ele.innerText);
// console.log(ele.textContent);
// console.log(ele.className);
// console.log(ele.id);
// console.log(ele.classList);
// console.log(ele.getAttribute("name"));

// ele.classList.remove("cl2");
// console.log(ele.className);

// ele.classList.toggle("cl2");
// console.log(ele.className);

// ele.classList.add("cl5");
// console.log(ele.className);

// console.log(ele.parentElement.parentElement);
// console.log(ele.parentElement);
// console.log(ele.previousElementSibling);
// console.log(ele.nextElementSibling);

//create element
const anushka = document.createElement("Anushka");
anushka.style.display = "block";
anushka.style.fontSize = "36px";

// anushka.innerText = "<h3>This is h3 tag</h3>"
// anushka.innerHTML = "<h3>This is h3 tag</h3>"
// console.log(anushka);

//placement of tag
//before and after
para.after(anushka)

//inside an element
const div = eles.parentElement;
div.append(anushka)
div.prepend(anushka)
// div.insertAdjacentElement("beforeend", div);