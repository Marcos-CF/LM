function Ejercicio2(...array){
    if (array.length == 0)
    {
        console.log("No hay datos para mostrar")
    }
    else {
        array.forEach(a => {
            console.log(a[0] + "-" + a[1] + "-" + "asignaturas:" + a.slice(2).join('/'))
        });
    }


    
}


Ejercicio2(["Sara", "DAMA", "Programación", "ED"],["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"],["Emma", "ASIR","ISO","BBDD","LM"])
Ejercicio2(["Álvaro","Semi","BBDD"])
Ejercicio2()