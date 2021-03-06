var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UsuarioSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    email: { type: String, index: true, unique: true}
})

UsuarioSchema.plugin(uniqueValidator, {message: 'El correo electrónico ya está en uso'});

module.exports = mongoose.model('Usuario', UsuarioSchema);