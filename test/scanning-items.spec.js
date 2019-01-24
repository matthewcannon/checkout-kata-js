// This style of testing is known as "concern, context, observation", which is closely related to "specification by example".
// Note the file name/suite name.
describe("scanning items", () => {
    // This is an example of a "negative test" (Beck) and not recommended as a starting point.
    // TDD is not about *testing*, it's about evolving a *design*.
    // Negative tests don't move us forward. They don't give us an opportunity to consider design.
    xit("gives a total cost of 0 when nothing is scanned", () => {});

    it("gives a total cost of 50 when something is scanned", () => {
        // Even with this first spec we have to consider a design that honours the domain ideas of "total",
        // "cost", "scanning". The idea of "giving" steers our desing towards the "tell, don't ask" principle.
    });

    it("total cost should be 50 when something is scanned", () => {
        // Using this language steers our design away from the "tell, don't ask" principle.
    });
});
