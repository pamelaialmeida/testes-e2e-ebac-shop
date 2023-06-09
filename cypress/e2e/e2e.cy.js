/// <reference types="cypress" />
import ProdutosPage from "../support/page_objects/produtos.page";
import DetalhesProdutoPage from "../support/page_objects/detalhes-produto.page";
import CarrinhoPage from "../support/page_objects/carrinho.page";
import DetalhesFaturamentoPage from "../support/page_objects/detalhes-faturamento.page";

import { faker } from '@faker-js/faker'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        ProdutosPage.acessarPaginaDeProdutos()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        var produtos = ['shorts', 'hoodie', 'pants', 'top'];

        produtos.forEach(function(produto){
            cy.buscarEAdicionarProdutoAoCarrinho(produto, 3, 1)
        });

        DetalhesProdutoPage.verCarrinho()
        CarrinhoPage.clicarNoBotaoConcluirCompra()

        let nome = faker.name.firstName()
        let sobrenome = faker.name.firstName()
        let nomeEmpresa = faker.company.name()
        let endereco = faker.address.streetAddress()
        let complemento = faker.address.streetName()
        let telefone = faker.phone.number('## ##### ####')
        let email = faker.internet.email()
        let comentario = faker.lorem.text()

        DetalhesFaturamentoPage.preencherFormularioDetalhesFaturamentoTodosOsCampos(nome, sobrenome, nomeEmpresa, 'Brasil', endereco, complemento, 'Curitiba', 'Paraná', '06542089', telefone, email, comentario)

        DetalhesFaturamentoPage.clicarNoBotaoFinalizarCompra()

        cy.get('.page-title').should('contain', 'Pedido recebido')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido')
        cy.get('.woocommerce-order-details__title').should('contain', 'Detalhes do pedido')
        cy.get('td[class="woocommerce-table__product-name product-name"]').should('have.length', 4)

    });


})