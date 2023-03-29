import ProdutosPage from "../support/page_objects/produtos.page";
import DetalhesProdutoPage from "../support/page_objects/detalhes-produto.page";

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('buscarEAdicionarProdutoAoCarrinho', (nomeProduto, posicao, quantidade) => {
    ProdutosPage.buscarProduto(nomeProduto)
    ProdutosPage.selecionarProdutodaLista(posicao)
    DetalhesProdutoPage.adicionarProdutoAoCarrinho(quantidade)
});
