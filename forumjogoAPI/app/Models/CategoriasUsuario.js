'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CategoriasUsuario extends Model {
    static getCamposCadastro() {
        return ['tipo']
    }
}

module.exports = CategoriasUsuario