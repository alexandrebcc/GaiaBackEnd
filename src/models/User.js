const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  }, 
  sobrenome: {
    type: String,
    required: true
  },
  logradouro: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);