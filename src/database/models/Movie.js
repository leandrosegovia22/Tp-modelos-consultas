module.exports = (sequelize, dataTypes) => { //se crea una función (arrow function) que recibe dos parametros (sequelize, dataTypes).

    let alias = "Pelicula"; //se crea la variable alias y se le da un valor: "Pelicula".

    let cols = { //se crea la variable cols y se le da como valor un ojeto literal. Las columnas van a hacer las propiedades del objeto.
        id : {
            type : dataTypes.INTEGER.UNSIGNED, //la columna id es un tipo de dato integer (INT) y no soporta signos.
            autoIncrement : true, //es autoincrementable.
            allowNull : false, //no soporta nulo.
            primaryKey : true //es una clave primaria.
        },
        title : {
            type : dataTypes.STRING(500), //es un string (varchar),
            allowNull : false //no soporta nulo.
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED, //es un decimal y no soporta signos.
            allowNull : false //no soporta nulo.
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED, //la columna id es un tipo de dato integer (INT) y no soporta signos.
            allowNull : false, //no soporta nulo.
            defaultValue : 0 //valor por defecto.
        },
        release_date : {
            type : dataTypes.DATE, // es un date (datatype)
            allowNull : false //no soporta nulo.
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED, //la columna id es un tipo de dato integer (INT) y no soporta signos.
            defaultValue : null //valor por defecto.
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED, //la columna id es un tipo de dato integer (INT) y no soporta signos.
            defaultValue : null //valor por defecto.
        }
    };

    let config = { //se crea la variable config y se le da como valor un ojeto literal
        tableName : 'movies', //nombre de la tabla. No es necesario si coincide con el plural del modelo
        timestamps : true, //si tiene o no fecha de creación y modificación. No es necesario si la tiene timestamps
        underscored : true //si se usa guión bajo
    };

    const Movie = sequelize.define(alias,cols,config); //se declara una variable (const) y se le asigna un nombre(el mismo que el modelo). Recibe de sequelize en su metodo .define, que va a devolver lo que reciva de alias, cols y config

    return Movie // la función retorna Movie
}


//si la columna no esta declarada en el modelo, no podemos acceder por mas que exista la tabla