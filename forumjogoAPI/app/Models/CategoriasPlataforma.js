'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CategoriasPlataforma extends Model {
    static getCamposCadastro() {
        return ['tipo']
    }
}

module.exports = CategoriasPlataforma