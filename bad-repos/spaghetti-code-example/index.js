// Spaghetti code - bad example
fetch("https://api.example.com/data").then(r => r.json()).then(data => {
  for (let i of data) {
    for (let j of i.items) {
      console.log(j.name);
    }
  }
});
