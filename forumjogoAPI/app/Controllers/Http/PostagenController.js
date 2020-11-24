'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Postagen = use('App/Models/Postagen')

/**
 * Resourceful controller for interacting with postagens
 */
class PostagenController {
    /**
     * Show a list of all postagens.
     * GET postagens
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        return Postagen.all()
    }

    /**
     * Create/save a new postagen.
     * POST postagens
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const camposCadastro = Postagen.getCamposCadastro()
        const dados = request.only(camposCadastro)
        return await Postagen.create(dados)
    }

    /**
     * Display a single postagen.
     * GET postagens/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        return Postagen.find(params.id)
    }

    /**
     * Update postagen details.
     * PUT or PATCH postagens/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const camposCadastro = Postagen.getCamposCadastro()
        const dados = request.only(camposCadastro)
        const postagen = await Postagen.findOrFail(params.id)
        postagen.merge(dados)
        postagen.save()
        return postagen
    }

    /**
     * Delete a postagen with id.
     * DELETE postagens/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const postagen = await Postagen.findOrFail(params.id)
        postagen.delete()
    }
}

module.exports = PostagenController