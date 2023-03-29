class ProdutosPage {

    acessarPaginaDeProdutos(){
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .tbay-search').clear().type(nomeProduto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    }

    selecionarProdutodaLista(posicao){
        cy.get('[class="product-block grid"]').eq(posicao).click()
    }

}

export default new ProdutosPage()