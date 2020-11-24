'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComentarioSchema extends Schema {
    up() {
        this.create('comentarios', (table) => {
            table.increments()
            table.text('descricao').notNullable()
            table.string('anexo', 45)
            table.integer('usuario_id').unsigned().references('id').inTable('usuarios')
            table.integer('postagem_id').unsigned().references('id').inTable('postagens')
            table.timestamps()
        })
    }

    down() {
        this.drop('comentarios')
    }
}

module.exports = ComentarioSchema