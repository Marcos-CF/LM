let alumnos = [
    { nombre: 'Juan', edad: 25},
    { nombre: 'Ana', edad: 30},
    { nombre: 'Pedro', edad: 40}
  ]

    let alumnos1 = alumnos.map(a => {
        return {
            ...a, curso: "DamB"
        }
    });
    console.log(alumnos1)
    

