'use strict'

/*
|--------------------------------------------------------------------------
| 10CategoriasUsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const CategoriasUsuario = use('App/Models/CategoriasUsuario')

class CategoriasUsuarioSeeder {
    async run() {
        await CategoriasUsuario.createMany([
            { id: 1, tipo: 'usuário normal' },
            { id: 2, tipo: 'moderador' },
            { id: 3, tipo: 'administrador' }
        ])
    }
}

module.exports = CategoriasUsuarioSeeder