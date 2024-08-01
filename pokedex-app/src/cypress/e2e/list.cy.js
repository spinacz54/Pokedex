describe('list tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  })

  it('goes to pokemon details on details button click', () => {
    cy.contains('button', 'Details').first().click();
    cy.url().should('include', '/pokemon');
  })

  it('filters pokemons by type', () => {
    cy.get('.mat-expansion-panel-header').click();
    cy.get('.mat-mdc-form-field').first().click();
    cy.contains('Type').click();
    cy.get('.mat-mdc-form-field').eq(1).type('Grass');
    cy.get('button').contains("Filter").click();
    cy.get('.list__spinner', {timeout: 20000}).should('not.exist');
    cy.get('button').contains('Details').click();
    cy.get('.details__similar_spinner', {timeout: 20000}).should('not.exist');
    cy.get('.mat-mdc-input-element').eq(4).should('have.value', 'Grass');
  })

  it('clears the filter', () => {
    cy.get('.mat-expansion-panel-header').click();
    cy.get('.mat-mdc-form-field').first().click();
    cy.contains('Type').click();
    cy.get('.mat-mdc-form-field').eq(1).type('Grass');
    cy.get('button').contains("Filter").click();
    cy.get('button').contains('Clear').click();
    cy.get('.mat-mdc-form-field').first().should('have.value', '');
  })

  it('shows that there is no Pokemons', () => {
    cy.get('.mat-expansion-panel-header').click();
    cy.get('.mat-mdc-form-field').first().click();
    cy.contains('Type').click();
    cy.get('.mat-mdc-form-field').eq(1).type('XYZ');
    cy.get('button').contains("Filter").click();
    cy.get('.list__spinner', {timeout: 20000}).should('not.exist');
    cy.get('div').contains("No Pokemons found :(").should('exist');
  })
})
