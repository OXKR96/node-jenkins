const {Schema, model} = require('mongoose')

const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
        
    },
    direccion: {
        type: String,
        required: [true, 'Direccion requerida']
        
    },
    telefono: {
        type: String,
        required: [true, 'Numero Tel requerido']
        
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Universidad', UniversidadSchema)