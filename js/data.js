const dati = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: `#${colorGenerator(6)}`,
  },
];

// Funzione per generare i colori in modo dinamico
function colorGenerator(length) {
  let result = "";
  let characters = "ABCDEF0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
