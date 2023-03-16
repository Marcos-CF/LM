function Ejercicio1(cadena, boolean, array, funcion){

if (typeof(cadena) == "string" && typeof(boolean) == "boolean" && Array.isArray(array) && typeof(funcion) == 'function') 
{
    
    if (boolean == true)
    {
        let producto = 0

        array.forEach(n => {producto *= n});
        if (producto > 100)
        {
            if (cadena.includes("a"))
            {
                console.log("La letra a no esta permitida")
            } else {console.log("Muy bien no has usado la a")}
        } else {console.log("El resultado de tu array es insuficiente para comprobar la cadena")}

        
        
    } else {
        funcion()
    }
    
} else {
    console.log("Error: los tipos de parámetros no son los esperados");
}

}

Ejercicio1()
Ejercicio1("hola mundo", true, [1,2,3,4],()=>{alert("Se acabo el juego")})
Ejercicio1("Si", true, [10,20,30,40],()=>{alert("Se acabo el juego")})
Ejercicio1("Si", false, [10,20,30,40],()=>{alert("Se acabo el juego")})