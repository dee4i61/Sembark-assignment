/// <reference types="cypress" />

describe("E-Commerce App - basic checks", () => {
  it("Loads Home Page", () => {
    cy.visit("/");
    cy.contains("Products"); 
  });

  it("Shows at least one product image", () => {
    cy.visit("/");
    cy.get("img").should("exist");
  });

  it("Opens Product Detail from first product", () => {
    cy.visit("/");
    cy.get("img").first().click();
    cy.url().should("include", "/product/");
    cy.contains("Add to Cart");
  });

  it("Opens Cart Page", () => {
    cy.visit("/cart");
    cy.contains("Shopping Cart");
  });
});
