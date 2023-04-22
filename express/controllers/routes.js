var mongoose = require("mongoose");
// var Pokemon = mongoose.model("pokemon");
var Compra = mongoose.model("compra");
const ObjectId = require('mongodb').ObjectId;

//GET - Return all pokemon in the DB
// exports.findAllpokemon = function (req, res) {
//   Pokemon.find(function (err, pokemon) {
//     if (err) res.status(500, err.message);

//     console.log("GET /pokemon");
//     res.status(200).jsonp(pokemon);
//   });
// };

//GET - Devuelve todas las compras realizadas por un cliente
exports.findAllCompras = function(req, res) {
    Compra.find(req.params.idCliente, function(err, compra) {
        if(err) return res.status(500, err.message);

        console.log("GET /compra");
        res.status(200).jsonp(compra);
    })
};

//GET - Return a pokemon with specified ID
exports.findCompraByID = function (req, res) {
  Compra.findById(req.params.id, function (err, compra) {
    if (err) return res.status(500, err.message);

    console.log('GET /compra/id/' + req.params.id);
    res.status(200).jsonp(compra);
  });
};

exports.findCompraByIDCliente = function (req, res) {
  var idCliente = req.params.idCliente;
  Compra.find({ idCliente: idCliente }, (err, compra) => {
    if (err) return res.status(500, err.message);

    console.log('GET /compra/idCliente/' + req.params.idCliente);
    res.status(200).jsonp(compra);
  });
};

exports.findCompraByIDClienteYNombre = function (req, res) {
  var idCliente = req.params.idCliente;
  var nombre = req.params.nombre;
  Compra.find({ idCliente: idCliente, nombre: nombre }, (err, compra) => {
    if (err) return res.status(500, err.message);

    console.log('GET /compra/idCliente/' + req.params.idCliente + '/nombre/' + req.params.nombre);
    res.status(200).jsonp(compra);
  });
};

//GET Return pokemon by name
// exports.findByName = function (req, res) {
//   var nombre = req.params.nombre;
//   Pokemon.find({ nombre: nombre }, (err, pokemon) => {
//     if (err) return res.status(500, err.message);
//     console.log('GET /pokemon/nombre/' + req.params.nombre);
//     console.log(req.body);
//     res.status(200).jsonp(pokemon);
//   })
// }


//POST - Insert new pokemon(s) in the DB
// exports.addpokemon = function (req, res) {
//   console.log("POST");
//   console.log(req.body);

//   var pokemonArr = req.body;

//   Pokemon.insertMany(pokemonArr, function (err, pokemon) {
//     if (err) return res.status(500).send(err.message);
//     res.status(200).jsonp(pokemon);
//   });
// };

//POST - Nuevas compras en la BD
exports.addCompra = function(req,res) {
    console.log("POST");
    console.log(req.body);
    
    var compraArr = req.body;

    Compra.insertMany(compraArr, function(err, compra) {
        if(err) return res.status(500).send(err.message);
        res.status(200).jsonp(compra);
    });
};


// //PUT - Update a register already exists
// exports.updatepokemon = function (req, res) {
//   console.log("PUT");
//   console.log(req.body);

//   let id = { _id: req.params.id };
//   // let result = await Pokemon.deleteOne({ _id: id })
//   var pokemonArr = req.body;

//   Pokemon.updateOne(id, pokemonArr, function (err, pokemon) {
//     if (err) return res.status(500).send(err.message);
//     res.status(200).jsonp(pokemon);

//   });
// };

//PUT - Update a register already exists
exports.updateCompra = function (req, res) {
    console.log("PUT");
    console.log(req.body);
  
    let id = { _id: req.params.id };
    // let result = await Pokemon.deleteOne({ _id: id })
    let compraArr = {
      nombre: req.body.nombre,
      direccionEnvio: req.body.direccionEnvio
    };
  
    Compra.updateOne(id, compraArr, function (err, compra) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(compra);
  
    });
};

//DELETE - Delete a pokemon with specified ID
////exports.deletepokemon = function (req, res) {
//pokemon.findById(req.params.id, function (err, pokemon) {
//pokemon.remove(function (err) {
//if (err) return res.status(500).send(err.message);
//res.status(200).send();
//});
//});
//};

//delete option

// exports.deletePokemon = async function (req, res) {
//   try {
//     let id = req.params.id;
//     let result = await Pokemon.deleteOne({ _id: id })
//     if (result) {
//       console.log('DELETE /pokemon/' + req.params.id);
//       return res.status(200).send({ result: "Pokemon has been deleted" });
//     }
//     return res.status(200).send({ result: "Not able to delete" })
//   } catch (error) {
//     return res.status(200).send({ message: error.message })
//   }

// }

exports.deleteCompra = async function (req, res) {
    try {
      let id = req.params.id;
      let result = await Compra.deleteOne({ _id: id })
      if (result) {
        console.log('DELETE /compra/' + req.params.id);

        return res.status(200).send({ result: "Compra has been deleted" });
      }
      return res.status(200).send({ result: "Not able to delete" })
    } catch (error) {
      return res.status(200).send({ message: error.message })
    }
  
};