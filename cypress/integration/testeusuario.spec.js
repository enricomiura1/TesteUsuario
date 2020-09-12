describe('teste email e senha, senha ou email invalido', () =>{
    it('invalido', () =>{
  
       cy.visit('https://www.cursoemvideo.com/login/')  
  
       cy.get('.uabb-lf-username').type('enrico.epetro@gmail.com')
  
       cy.get('#uabb-password-field').type('Miura123')
       
       cy.get('.uabb-lf-submit-button').click()
  
    })  
  })

  
  describe('teste email e senha, usuario sem cadastro', () =>{
    it('sem cadastro', () =>{
  
       cy.visit('https://www.cursoemvideo.com/login/')  
  
       cy.get('.uabb-lf-username').type('enrico22222@gmail.com')
  
       cy.get('#uabb-password-field').type('160402bb')
       
       cy.get('.uabb-lf-submit-button').click()
  
    })
  })

  
  describe('teste email e senha validos', () =>{
    it('validos efetuar loguin', () =>{
  
       cy.visit('https://www.cursoemvideo.com/login/')  
  
       cy.get('.uabb-lf-username').type('enrico.epetro@gmail.com')
  
       cy.get('#uabb-password-field').type('160402bb')
       
       cy.get('.uabb-lf-submit-button').click()
  
    })
  })