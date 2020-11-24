'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Comentario = use('App/Models/Comentario')

/**
 * Resourceful controller for interacting with comentarios
 */
class ComentarioController {
    /**
     * Show a list of all comentarios.
     * GET comentarios
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        return Comentario.all()
    }

    /**
     * Create/save a new comentario.
     * POST comentarios
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const camposCadastro = Comentario.getCamposCadastro()
        const dados = request.only(camposCadastro)
        return await Comentario.create(dados)
    }

    /**
     * Display a single comentario.
     * GET comentarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        return Comentario.find(params.id)
    }

    /**
     * Update comentario details.
     * PUT or PATCH comentarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const camposCadastro = Comentario.getCamposCadastro()
        const dados = request.only(camposCadastro)
        const comentario = await Comentario.findOrFail(params.id)
        comentario.merge(dados)
        comentario.save()
        return comentario
    }

    /**
     * Delete a comentario with id.
     * DELETE comentarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const comentario = await Comentario.findOrFail(params.id)
        comentario.delete()
    }
}

module.exports = ComentarioController