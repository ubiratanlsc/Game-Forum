'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
    up() {
        this.create('usuarios', (table) => {
            table.increments()
            table.string('nome', 50).notNullable()
            table.string('apelido', 30).notNullable()
            table.string('email', 50).notNullable()
            table.integer('telefone')
            table.string('foto_perfil')
            table.string('endereco', 100)
            table.string('cidade', 25)
            table.string('estado', 2)
            table.integer('categoria_usuario_id').unsigned().references('id').inTable('categorias_usuarios')
            table.string('senha', 45).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('usuarios')
    }
}

module.exports = UsuarioSchema