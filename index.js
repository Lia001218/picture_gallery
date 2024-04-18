
 
function addImage(name, description, url) {
    let img = new Image();
    img.src = url;
    img.alt = description;
    img.title = name;
    document.getElementById('img_container').appendChild(img);
}

let loginForm = document.getElementById("imageForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("nameImage");
  let description= document.getElementById("description");
  let url = document.getElementById("url");
  if (title.value == "" || description.value == ""|| url.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    // perform operation with form input
    addImage(title.value, description.value, url.value);
    alert("This form has been successfully submitted!");

    title.value = "";
    description.value = "";
    url.value = "";
  }
});