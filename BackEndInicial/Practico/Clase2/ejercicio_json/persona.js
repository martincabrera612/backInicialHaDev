// class Persona {
//     constructor(firstname, lastname, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }



// }

// const persona = new Persona("Maria", "Lopez", 45);

const persona = {
    fistname: "Maria",
    lastname: "Lopez",
    age: 45
};

module.exports = persona;

//Si quisiera exportar varios objetos o funciones deberia hacer asi: 
// module.exports {
//     persona,
//     otroObjeto
// };