class DetalhesFaturamentoPage{

    preencherFormularioDetalhesFaturamentoTodosOsCampos(nome, sobrenome, nomeEmpresa, pais, endereco, complemento, cidade, estado, cep, telefone, email, comentario){
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(nomeEmpresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(complemento)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#order_comments').clear().type(comentario)
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').check()
    }

    clicarNoBotaoFinalizarCompra(){
        cy.get('#place_order').click()
    }


}

export default new DetalhesFaturamentoPage()