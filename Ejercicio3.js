function Ejercicio3(array1, array2){

    let contador = 0;

    array1.forEach(a => { 
        array2.includes(a) ? ++contador : 0
    });

    console.log("Personas : " + array1.join('/'))
    console.log("Array donde buscar : " + array2.join('/'))
    if (contador == array1.length)
    {
        console.log("Todos estan incluidos")
    } else if (contador == 0)
    {
        console.log("Ninguno incluido")
    } else 
    {
        console.log("Alguno esta incluido")
    }

}






/*Array original*/
Ejercicio3( ["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"], ["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"])
/*Ninguno incluído*/
Ejercicio3(["Lina Armida Machado Iglesias","Apolonia Santiago Buendía","Poncio Cobo Herrera","Rafaela Seco Cañas","Fulgencio Alarcón Lloret"
],["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"])
/*Alguno incluido*/
Ejercicio3(["Elisabet Ricart Monreal","Poncio Cobo Herrera","Isaac Talavera Luna"],["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"])