const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'numero requerido'],
        unique: [true, 'numero en uso']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido'],
    },
    fechaIniciacion: {
        type: Date
    },
    fechaEntrega: {
        type: Date
    },
    valor: {
        type: Number
    },
    fechaCreacion: {
        type: Date
    },
    fechaActualizacion: {
        type: Date
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    }
})

module.exports = model('Proyecto', ProyectoSchema)
