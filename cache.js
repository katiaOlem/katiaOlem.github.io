

localStorage.setItem("nombre", "Katia");

var hora = new Date(); 

localStorage.setItem("hora", hora);

var usuario = {
    nombre: "Katia",
    email: "1719110962@utectulancingo.edu.mx",
    web: "katia.com",
    hora: hora
};

localStorage.setItem("usuario", JSON.stringify(usuario));



var userjs = JSON.parse(localStorage.getItem("usuario"));



const customerData = [
    { ssn: "222-46-688", name: "KatiamD", age: 26, email: "abril1622@hotmail.com" },
    { ssn: "534-16-739", name: "LeoMD", age: 20, email: "leo4@gmail.com" },
    { ssn: "676-14-341", name: "MariDH", age: 50, email: "mari2@gmail.com" },
    { ssn: "287-15-422", name: "KevinMH", age: 22, email: "kevin4@gmail.com" }
];
  
const dbName = "the_name";

var request = indexedDB.open(dbName, 2);

request.onerror = function(event) {
   
};
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  var objectStore = db.createObjectStore("clientes", { keyPath: "ssn" });

  objectStore.createIndex("name", "name", { unique: false });

  objectStore.createIndex("email", "email", { unique: true });
  objectStore.transaction.oncomplete = function(event) {
    var customerObjectStore = db.transaction("clientes", "readwrite").objectStore("clientes");
    for (var i in customerData) {
      customerObjectStore.add(customerData[i]);
    }
  }
};

