import { getRandomCommentary } from "../../utils/getRandomCommentary"

describe('validated Random commentary use cases', () => {
  it('Should return empty string if Array i', () => {
    expect(getRandomCommentary([])).toBe('')
  })

  it('should return an element from the array', () => {
    const commentary = ["Excellent running between the wickets.", "great to see converting ones into twos."]
    const result = getRandomCommentary(commentary);
    expect(commentary).toContain(result);
  });

  // simple test to check first iteration and second return us a different commentary
  it('should potentially return any element from the array', () => {
    const commentary = ['Excellent line and length.', 'Excellent effort on the boundary.', 'Convert ones into twos.'];
    const results = [];
    // Run the function multiple times to see the variety of outcomes
    for (let i = 0; i < 2; i++) {
      results.push(getRandomCommentary(commentary));
    }
    expect(results[0]).not.toBe(results[1]);
  });

})