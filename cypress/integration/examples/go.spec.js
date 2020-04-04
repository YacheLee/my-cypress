context('risu Crawl', () => {
    it('gogo', () => {
        cy.visit('https://risu.io/5qN');
        cy.get(".form-control").type("0710");
        cy.get(".input-group-append > .btn").click();
    });
});
