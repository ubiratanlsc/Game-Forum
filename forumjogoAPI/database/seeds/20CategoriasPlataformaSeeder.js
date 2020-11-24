'use strict'

/*
|--------------------------------------------------------------------------
| 20CategoriasPlataformaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const CategoriasPlataforma = use('App/Models/CategoriasPlataforma')

class CategoriasPlataformaSeeder {
    async run() {
        await CategoriasPlataforma.createMany([
            { id: 1, tipo: 'PC' },
            { id: 2, tipo: 'XBOX' },
            { id: 3, tipo: 'PLAYSTATION' },
            { id: 4, tipo: 'NINTENDO' },
            { id: 5, tipo: 'MOBILE' },
        ])
    }
}

module.exports = CategoriasPlataformaSeeder