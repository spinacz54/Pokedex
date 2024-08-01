describe('details tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.contains('button', 'Details').first().click();
    cy.url().should('include', '/pokemon');
    cy.get('.details__spinner', {timeout: 20000}).should('not.exist');
  })

  it('goes back to list', () => {
    cy.contains('button', 'Back').first().click();

    cy.url().should('include', '/list');
  })

  it('edits Pokemons data', () => {
    cy.contains('button', 'Edit').first().click();
    cy.get('.mat-mdc-input-element').eq(0).clear().type('testName');
    cy.get('.mat-mdc-input-element').eq(1).clear().type('testId');
    cy.get('.mat-mdc-input-element').eq(2).clear().type('testHp');
    cy.get('.mat-mdc-input-element').eq(3).clear().type('testEvolvesFrom');
    cy.get('.mat-mdc-form-field-type-mat-select').eq(0).click();
    cy.get('.mdc-list-item--selected').first().click();
    cy.get('.mat-mdc-option').contains('Fire').click();
    cy.get('body').click(0, 0);
    cy.get('.mat-mdc-form-field-type-mat-select').eq(1).click();
    cy.get('.mdc-list-item--selected').first().click();
    cy.get('.mat-mdc-option').contains('Basic').click();
    cy.get('body').click(0, 0);
    cy.get('.mat-mdc-form-field-type-mat-select').eq(2).click();
    cy.get('.mat-mdc-option').contains('Energy').click();
    cy.get('body').click(0, 0);

    cy.contains('button', 'Save').first().click();

    cy.get('.mat-mdc-input-element').eq(0).should('have.value', 'testName');
    cy.get('.mat-mdc-input-element').eq(1).should('have.value', 'testId');
    cy.get('.mat-mdc-input-element').eq(2).should('have.value', 'testHp');
    cy.get('.mat-mdc-input-element').eq(3).should('have.value', 'testEvolvesFrom');
    cy.get('.mat-mdc-input-element').eq(4).should('have.value', 'Fire');
    cy.get('.mat-mdc-input-element').eq(5).should('have.value', 'Basic');
    cy.get('.mat-mdc-input-element').eq(6).should('have.value', 'Energy');
  })

  it('shows links to similar pokemons', () => {
    cy.get('.details__similar_spinner', {timeout: 20000}).should('not.exist');
    cy.get('.details__similar_link').should('exist');
  })
})
