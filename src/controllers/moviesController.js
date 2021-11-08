const db = require('../database/models');


module.exports = {
    list : (req,res) => {
        db.Pelicula.findAll()
        .then((movies) => res.render('moviesList',{ //muestra la vista
            movies
        }))
        .catch(error => console.log(error)) //en caso de error mostrar por consola
    },
    detail : (req,res) => {
        db.Pelicula.findByPk(req.params.id) // devuelve una pelicula
        .then(movie => res.render('moviesDetail',{  //la muestra en la vista
            movie //datos de la pelicula
        }))
        .catch(error => console.log(error))
    },
    new : (req,res) => {
        db.Pelicula.findAll({
            order : [
                ['release_date','DESC']
            ]
        })
        .then((movies) => res.render('newestMovies',{ 
            movies
        }))
        .catch(error => console.log(error)) 
    },
    recomended : (req,res) => { 
        db.Pelicula.findAll({
            order : [
                ['rating','DESC'],
                ['release_date','DESC']  
            ],
            limit : 5
        })
        .then((movies) => res.render('recommendedMovies',{ 
            movies
        }))
        .catch(error => console.log(error)) 
    },
   
}