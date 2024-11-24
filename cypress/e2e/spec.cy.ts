describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Bookly');
  });
});

describe('Test Stephen King', () => {
  it('Visits the initial project page', () => {
    cy.visit('/authors/list');
    cy.contains('Stephen King');
  });
});

describe('Prueba Formulario', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Authors').click();
    cy.contains('Create').click();
  });
  it('Ir a la pagina de crear Author', () => {
    cy.url().should('include', '/authors/create');
  });
  it('Llenar el formulario y enviar', () => {
    cy.get('#name').type('Billy McBucket');
    cy.get('#image').type(
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infobae.com%2Fcripto247%2Faltcoins%2F2018%2F07%2F08%2Fdogecoin-que-hoy-vale-mas-de-300-millones-comenzo-por-el-meme-de-este-perro%2F&psig=AOvVaw3INeU-LRs6EaKaQoio041u&ust=1708717459547000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiKgt7av4QDFQAAAAAdAAAAABAE'
    );
    cy.get('#birthDate').type('06/11/2002');
    cy.get('#description').type('The greatest author ever.');
    cy.get('.btn-primary').click();
    cy.contains('Author created');
  });
  it('Llenar el formulario y borrar', () => {
    cy.get('#name').type('Billy McBucket');
    cy.get('#image').type(
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infobae.com%2Fcripto247%2Faltcoins%2F2018%2F07%2F08%2Fdogecoin-que-hoy-vale-mas-de-300-millones-comenzo-por-el-meme-de-este-perro%2F&psig=AOvVaw3INeU-LRs6EaKaQoio041u&ust=1708717459547000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiKgt7av4QDFQAAAAAdAAAAABAE'
    );
    cy.get('#birthDate').type('06/11/2002');
    cy.get('#description').type('The greatest author ever.');
    cy.get('.btn-danger').click();
    cy.get('#name').should('have.value', '');
  });
});
