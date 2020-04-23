let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });
  fetchToys();

});


function fetchToys() {
  fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(toyArray =>
      toyArray.forEach(toy => {
        renderToy(toy)
      })
    )
}

function renderToy(toy) {

  // create card
  let div = document.createElement("div")
  div.className = "card"

  //img
  let img = document.createElement("img")
  img.className = "toy-avatar"

  img.src = toy.image
  //btn
  let btn = document.createElement("button")
  btn.className = "like-btn"
  btn.innerText ="Like <3"
  //h2 tag
  let h2 = document.createElement("h2")
  h2.innerText = toy.name
  //p tag
  let p = document.createElement("p")
  p.innerText = toy.likes
  // append card to toy-collection div
  let toyCollection = document.getElementById("toy-collection")
  toyCollection.appendChild(div)

  div.append(img, btn, h2, p)


}