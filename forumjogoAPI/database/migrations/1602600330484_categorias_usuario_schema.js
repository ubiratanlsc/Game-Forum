'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriasUsuarioSchema extends Schema {
    up() {
        this.create('categorias_usuarios', (table) => {
            table.increments()
            table.string('tipo', 45).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('categorias_usuarios')
    }
}

module.exports = CategoriasUsuarioSchema