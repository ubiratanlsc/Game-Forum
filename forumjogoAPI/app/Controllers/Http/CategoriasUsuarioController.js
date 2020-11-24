'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const CategoriasUsuario = use('App/Models/CategoriasUsuario')

/**
 * Resourceful controller for interacting with categoriasusuarios
 */
class CategoriasUsuarioController {
    /**
     * Show a list of all categoriasusuarios.
     * GET categoriasusuarios
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        return CategoriasUsuario.all()
    }

    /**
     * Create/save a new categoriasusuario.
     * POST categoriasusuarios
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const camposCadastro = CategoriasUsuario.getCamposCadastro()
        const dados = request.only(camposCadastro)
        return await CategoriasUsuario.create(dados)
    }

    /**
     * Display a single categoriasusuario.
     * GET categoriasusuarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        return CategoriasUsuario.find(params.id)
    }

    /**
     * Update categoriasusuario details.
     * PUT or PATCH categoriasusuarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const camposCadastro = CategoriasUsuario.getCamposCadastro()
        const dados = request.only(camposCadastro)
        const categoriasUsuario = await CategoriasUsuario.findOrFail(params.id)
        categoriasUsuario.merge(dados)
        categoriasUsuario.save()
        return categoriasUsuario
    }

    /**
     * Delete a categoriasusuario with id.
     * DELETE categoriasusuarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const categoriasUsuario = await CategoriasUsuario.findOrFail(params.id)
        categoriasUsuario.delete()
    }
}

module.exports = CategoriasUsuarioController