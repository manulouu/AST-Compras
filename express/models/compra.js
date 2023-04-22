const mongoose = require("mongoose")

var compraSchema = new mongoose.Schema({
    
    idArticulo: { type: String },
    idCliente: { type: String },
    cantidad: { type: Number},
    nombre: { type: String },
    direccionEnvio: { type: String },

})

mongoose.model('compra', compraSchema);