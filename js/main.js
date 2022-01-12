const container = document.getElementById("content");
const selection = document.getElementById("tipo");

all();

selection.addEventListener("change", function () {
  container.innerHTML = "";
  if (selection.value == "animal") {
    filtro("animal");
  } else if (selection.value == "user") {
    filtro("user");
  } else if (selection.value == "vegetable") {
    filtro("vegetable");
  } else if (selection.value == "all") {
    all();
  }
});

function generaBox(box) {
  // Base
  /*
  container.innerHTML += `
  <div class="box">
    <i class="${box.family} ${box.prefix}${box.name} ${box.color}"></i>
    <h4>${box.name}</h4>
  </div>
  
  `;
  */

  // Bonus
  container.innerHTML += `
  <div class="box">
    <i class="${box.family} ${box.prefix}${box.name}" style="color:${box.color}"></i>
    <h4>${box.name}</h4>
  </div>
  
  `;
}

function filtro(tipo) {
  dati.forEach((element) => {
    if (element.type == tipo) {
      generaBox(element);
    }
  });
}

function all() {
  dati.forEach((element) => {
    generaBox(element);
  });
}
