'use strict'

/*
|--------------------------------------------------------------------------
| 50ComentarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Comentario = use('App/Models/Comentario')

class ComentarioSeeder {
    async run() {
        await Comentario.createMany([{
                descricao: 'Já compartilhei o link, eu e alguns amigos meus vamos marcar presença na live, boa sorte com sua meta! XD ',
                anexo: '',
                usuario_id: 2,
                postagem_id: 1
            },
            {
                descricao: 'Pra mim, os melhores jogos de 2018 foram Gears of War 3, Halo 3 e Forza Horizon',
                anexo: '',
                usuario_id: 3,
                postagem_id: 2
            }
        ])
    }
}

module.exports = ComentarioSeeder