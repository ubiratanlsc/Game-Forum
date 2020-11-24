'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Postagen extends Model {
    static getCamposCadastro() {
        return ['titulo', 'descricao', 'anexo', 'usuario_id', 'categoria_plataforma_id']
    }
}

module.exports = Postagen