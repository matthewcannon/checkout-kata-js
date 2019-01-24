// Trust your tests. They are a tool. "Feedback is the fundamental tool".
describe("testing", () => {
    it("tells me something is right", () => {
        expect(0).toEqual(0);
    });

    xit("tells me something is wrong", () => {
        expect(0).toEqual(1);
    });
});
