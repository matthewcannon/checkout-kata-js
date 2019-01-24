// This style of testing is known as "concern, context, observation", which is closely related to "specification by example".
// Note the file name/suite name.
describe("scanning items", () => {
    // All refactoring is concerned with the removal of duplication.
    //
    // The 3 kinds of duplication: -
    //
    //      * Duplication within a test.
    //      * Duplication within the production code.
    //      * Duplication between the test and the production code.
    //
    const scan = code => {
        return code === "A" ? 50 : 0;
    };

    // This is an example of a "negative test" (Beck) and not recommended as a starting point.
    // TDD is not about *testing*, it's about evolving a *design*.
    // Negative tests don't move us forward. They don't give us an opportunity to consider design.
    xit("gives a total cost of 0 when nothing is scanned", () => {});

    // Baby steps ...

    // Axis: Giving a total cost.
    it("gives a total cost of 0 when something is scanned", () => {
        // Even with this first spec we have to consider a design that honours the domain ideas of "total",
        // "cost", and "scanning". The idea of "giving" steers our design towards the "tell, don't ask" principle.
        expect(scan()).toEqual(0);
    });

    // Axis: Scanning multiple times.

    // Axis: Knowing item codes and cost.
    it("gives a total cost of 50 when one 'A' is scanned", () => {
        expect(scan("A")).toEqual(50);
    });

    // Axis: Knowing multiple item codes and cost.
    it("gives a total cost of 30 when one 'B' is scanned", () => {
        expect(scan("B")).toEqual(30);
    });

    // Axis: Accumulating the cost.
    it("gives a total cost of 100 when 'A' scanned 2 times.", () => {});
});
