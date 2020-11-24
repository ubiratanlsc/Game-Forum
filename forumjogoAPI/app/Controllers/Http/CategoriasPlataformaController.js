'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const CategoriasPlataforma = use('App/Models/CategoriasPlataforma')

/**
 * Resourceful controller for interacting with categoriasplataformas
 */
class CategoriasPlataformaController {
    /**
     * Show a list of all categoriasplataformas.
     * GET categoriasplataformas
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        return CategoriasPlataforma.all()
    }

    /**
     * Render a form to be used for creating a new categoriasplataforma.
     * GET categoriasplataformas/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */

    async store({ request, response }) {
        const camposCadastro = CategoriasPlataforma.getCamposCadastro()
        const dados = request.only(camposCadastro)
        return await CategoriasPlataforma.create(dados)
    }

    /**
     * Display a single categoriasplataforma.
     * GET categoriasplataformas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        return CategoriasPlataforma.find(params.id)
    }

    /**
     * Update categoriasplataforma details.
     * PUT or PATCH categoriasplataformas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const camposCadastro = CategoriasPlataforma.getCamposCadastro()
        const dados = request.only(camposCadastro)
        const categoriasPlataforma = await CategoriasPlataforma.findOrFail(params.id)
        categoriasPlataforma.merge(dados)
        categoriasPlataforma.save()
        return categoriasPlataforma
    }

    /**
     * Delete a categoriasplataforma with id.
     * DELETE categoriasplataformas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const categoriasPlataforma = await CategoriasPlataforma.findOrFail(params.id)
        categoriasPlataforma.delete()
    }
}

module.exports = CategoriasPlataformaController