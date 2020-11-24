'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostagenSchema extends Schema {
    up() {
        this.create('postagens', (table) => {
            table.increments()
            table.string('titulo', 80).notNullable()
            table.text('descricao').notNullable()
            table.string('anexo', 45)
            table.integer('usuario_id').unsigned().references('id').inTable('usuarios')
            table.integer('categoria_plataforma_id').unsigned().references('id').inTable('categorias_plataformas')
            table.timestamps()
        })
    }

    down() {
        this.drop('postagens')
    }
}

module.exports = PostagenSchema