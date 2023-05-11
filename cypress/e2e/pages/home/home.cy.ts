/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => { cy.visit('http://127.0.0.1:5173/') })


  it('searches for a hero successfully', () => {
    const searchTerm = 'Spider-Man';

    // Find the hero name input field and type a hero name into it
    cy.get('[data-cy="searchText"]').type(searchTerm);

    // Find the search button and click it
    cy.get('[data-cy="searchButton"]').click();

    // Assert that the search results contain the expected hero name
    cy.get('[data-cy="heroNameOnList"]').should('contain', searchTerm);
  });



  it('searches for a hero and fail', () => {
    const searchTerm = 'potato';

    // Find the hero name input field and type a hero name into it
    cy.get('[data-cy="searchText"]').type(searchTerm);

    // Find the search button and click it
    cy.get('[data-cy="searchButton"]').click();

    // Assert that the search results doesnt contain the expected hero name
    cy.get('[data-cy="heroNameOnList"]').should('not.exist');

    // Assert that the search show no results text  
    cy.get('[data-cy="heroNameOnList"]').should("have.length", 0);
    cy.get('[data-cy="errorHeroNotFound"').should('exist');
  });


  it('searches for a spider-gwen as result for comicid search', () => {
    const searchTerm = '106153';
    const character = "Spider-Gwen"
    const filterOption = 'Comics';

    // Find the filter button and click it
    cy.get('#searchWrapper') // Find the searchWrapper container by its ID
      .contains('button', filterOption) // Find the buttons within the container with the text "comics"
      .should('exist').click();

    // Find the hero name input field and type a hero name into it
    cy.get('[data-cy="searchText"]').type(searchTerm);

    // Find the search button and click it
    cy.get('[data-cy="searchButton"]').click();

    //should contain characters available and find spider gwen
    cy.get('[data-cy="heroNameOnList"]').contains(character).click();
    // should check if url matches gwen hero id
    cy.url().should('include', '/hero/1017603')
  });
});

