context('risu Crawl', () => {
    it('gogo', () => {
        cy.visit('https://risu.io/5qN');
        cy.get(".form-control").type("0710");
        cy.get(".input-group-append > .btn").click();
        cy.log('Login successful');
        cy.get("img").invoke("attr", "src").then(src=>{
            cy.writeFile('./go.txt', src);
        });
    });
});
