'use strict'

/*
|--------------------------------------------------------------------------
| 30UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Usuario = use('App/Models/Usuario')

class UsuarioSeeder {
    async run() {
        await Usuario.createMany([{
                id: 1,
                nome: 'Junior Silva',
                apelido: 'juninXD',
                email: 'juninXD2020@gmail.com',
                telefone: 91885154,
                foto_perfil: 'https://pbs.twimg.com/media/EjcpPO7WoAIl8VT.jpg',
                endereco: 'Rua Augusta Avenida 2 casa 107',
                cidade: 'São Bernardo do Campo',
                estado: 'SP',
                categoria_usuario_id: 1,
                senha: 'juninhoplay'
            },
            {
                id: 2,
                nome: 'Yan Rodrigues',
                apelido: 'monkeyDrangon',
                email: 'YanMON@gmail.com',
                telefone: 95723234,
                foto_perfil: 'https://i.pinimg.com/originals/6a/9d/cb/6a9dcb6688e1d3d6dfb56a97f6d8b578.jpg',
                endereco: 'Vila Rezende rua 24 Casa 86 ',
                cidade: 'Osasco',
                estado: 'SP',
                categoria_usuario_id: 2,
                senha: 'skypiea1997'
            },
            {
                id: 3,
                nome: 'Rodrigo Sales',
                apelido: 'TheXModerator',
                email: 'rodrigoadmin@gmail.com',
                telefone: 92655225,
                foto_perfil: 'https://vignette.wikia.nocookie.net/ben10/images/5/52/AlienXUAF.png/revision/latest/scale-to-width-down/340?cb=20170627193037&path-prefix=pt',
                endereco: 'Condomínio Iguatemi Bloco G apartamento 707',
                cidade: 'Piracicaba',
                estado: 'SP',
                categoria_usuario_id: 3,
                senha: '1y2x3z'
            },


        ])
    }
}

module.exports = UsuarioSeeder