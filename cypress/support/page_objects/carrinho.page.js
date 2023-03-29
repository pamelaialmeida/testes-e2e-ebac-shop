class CarrinhoPage{

    clicarNoBotaoConcluirCompra(){
        cy.get('.checkout-button').click()
    }

}

export default new CarrinhoPage()