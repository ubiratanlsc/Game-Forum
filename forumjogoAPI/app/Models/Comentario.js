'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comentario extends Model {
    static getCamposCadastro() {
        return ['descricao', 'anexo', 'usuario_id', 'postagem_id']
    }
}

module.exports = Comentario