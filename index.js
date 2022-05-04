const body = document.getElementsByTagName("body")[0];
const h1 = document.createElement("h1");
h1.innerText = "Dynamic Table Display";
body.appendChild(h1);
var table = document.createElement("table");
body.appendChild(table);
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
table.appendChild(thead);
table.appendChild(tbody);

function Heads() {
  let row = document.createElement("tr");
  let name = document.createElement("th");
  name.innerText = "Name";
  let age = document.createElement("th");
  age.innerText = "Age";

  let dob = document.createElement("th");
  dob.innerText = "DOB";

  let email = document.createElement("th");
  email.innerText = "Email";

  let com = document.createElement("th");
  com.innerText = "Company";

  row.appendChild(name);
  row.appendChild(age);
  row.appendChild(dob);
  row.appendChild(email);
  row.appendChild(com);

  thead.appendChild(row);
}

function dataCreation() {
  const arr = [
    {
      name: "Shubh Purwar",
      age: "21",
      dob: "22-jun-2001",
      email: "shubhpurwar22@gmail.com",
      company: "Gemini Solutions Pvt Ltd",
    },
    {
      name: "Abc",
      age: "15",
      dob: "13-dec-2005",
      email: "abc@gmail.com",
      company: "Microsoft",
    },
    {
      name: "Xyz",
      age: "15",
      dob: "19-jan-2006",
      email: "xyz@gmail.com",
      company: "Google",
    },
    {
      name: "Pqr",
      age: "30",
      dob: "28-jul-1991",
      email: "pqr@gmail.com",
      company: "Apple",
    },
    {
      name: "Ghi",
      age: "10",
      dob: "11-dec-2011",
      email: "ghi@gmail.com",
      company: "Netflix",
    },
  ];

  arr.map((item) => {
    let row = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = item.name;
    let age = document.createElement("td");
    age.innerText = item.age;

    let dob = document.createElement("td");
    dob.innerText = item.dob;

    let email = document.createElement("td");
    email.innerText = item.email;

    let com = document.createElement("td");
    com.innerText = item.company;

    row.appendChild(name);
    row.appendChild(age);
    row.appendChild(dob);
    row.appendChild(email);
    row.appendChild(com);

    tbody.appendChild(row);
  });
}

(function createDynamicTable() {
  Heads();
  dataCreation();
  tableStyling();
})();

function tableStyling() {
  var body = document.getElementsByTagName("body")[0];
  body.style.height = "100vh";
  body.style.background = "black";
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.color = "whitesmoke";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";

  table.style.borderCollapse = "collapse";

  let th = document.getElementsByTagName("th");
  let td = document.getElementsByTagName("td");

  for (let i of th) {
    i.style.border = "1px solid whitesmoke";
    i.style.padding = "10px";
  }
  for (let i of td) {
    i.style.border = "1px solid whitesmoke";
    i.style.padding = "10px";
  }
}
