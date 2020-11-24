'use strict'

/*
|--------------------------------------------------------------------------
| 40PostagenSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Postagen = use('App/Models/Postagen')

class PostagenSeeder {
    async run() {
        await Postagen.createMany([{
                id: 1,
                titulo: 'Stream de League of Legends com vários sorteios!',
                descricao: 'Fala galera, Faço Live de LOL todos os Dias atualmente Diamante e dou dicas, além de fazer sorteio diário a cada 2 horas para meus seguidores que estão no Chat, mas caso vocês Não tenham interesse na Live, Ficaria muito feliz se apenas me seguissem e me ajudassem a Bater a Meta, fazer boas ações nunca é demais né XD. Também tenho um sorteio bisemanal de 1820 de RP, para saber mais basta ler a "Sobre" no link que mandei.',
                anexo: 'https://mixer.com/juninXD',
                usuario_id: 1,
                categoria_plataforma_id: 1
            },
            {
                id: 2,
                titulo: 'Quais os melhores jogos de XBOX de 2018?',
                descricao: 'Fala galera, to levantando umas estatísticas e queria saber da parte de vocês abrindo uma enquete aqui, qual os melhores jogos de XBOX no ano de 2018 pra vocês?',
                anexo: '',
                usuario_id: 2,
                categoria_plataforma_id: 2
            }
        ])
    }
}

module.exports = PostagenSeeder