'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Usuario = use('App/Models/Usuario')

/**
 * Resourceful controller for interacting with usuarios
 */
class UsuarioController {
    /**
     * Show a list of all usuarios.
     * GET usuarios
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        return Usuario.all()
    }


    /**
     * Create/save a new usuario.
     * POST usuarios
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const camposCadastro = Usuario.getCamposCadastro()
        const dados = request.only(camposCadastro)
        return await Usuario.create(dados)
    }

    /**
     * Display a single usuario.
     * GET usuarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        return Usuario.find(params.id)
    }

    /**
     * Update usuario details.
     * PUT or PATCH usuarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const camposCadastro = Usuario.getCamposCadastro()
        const dados = request.only(camposCadastro)
        const usuario = await Usuario.findOrFail(params.id)
        usuario.merge(dados)
        usuario.save()
        return usuario
    }

    /**
     * Delete a usuario with id.
     * DELETE usuarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const usuario = await Usuario.findOrFail(params.id)
        usuario.delete()
    }
}

module.exports = UsuarioController