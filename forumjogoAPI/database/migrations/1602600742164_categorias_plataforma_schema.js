'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriasPlataformaSchema extends Schema {
    up() {
        this.create('categorias_plataformas', (table) => {
            table.increments()
            table.string('tipo', 45).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('categorias_plataformas')
    }
}

module.exports = CategoriasPlataformaSchema