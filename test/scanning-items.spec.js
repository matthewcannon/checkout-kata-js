// This style of testing is known as "concern, context, observation", which is closely related to "specification by example".
// Note the file name/suite name.
describe("scanning items", () => {
    // This is an example of a "negative test" (Beck) and not recommended as a starting point.
    // TDD is not about *testing*, it's about evolving a *design*.
    // Negative tests don't move us forward. They don't give us an opportunity to consider design.
    xit("gives a total of 0 when nothing scanned", () => {});
});
