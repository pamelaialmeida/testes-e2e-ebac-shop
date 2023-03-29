class DetalhesProdutoPage {

    adicionarProdutoAoCarrinho(quantidade){
        cy.get(':nth-child(1) > .value > .variable-items-wrapper > li').first().click()
        //cy.get('[class="value woo-variation-items-wrapper"] > ul[data-attribute_name="attribute_size"] > li').first().click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > li').last().click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    verCarrinho(){
        cy.get('.woocommerce-message > .button').click()
    }

}

export default new DetalhesProdutoPage()