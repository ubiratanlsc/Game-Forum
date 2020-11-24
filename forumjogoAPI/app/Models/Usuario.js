'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {
    static getCamposCadastro() {
        return [
            'nome',
            'apelido',
            'email',
            'telefone',
            'foto_perfil',
            'endereco',
            'cidade',
            'estado',
            'categoria_usuario_id',
            'senha'
        ]
    }
}

module.exports = Usuario