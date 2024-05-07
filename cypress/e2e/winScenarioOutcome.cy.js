const selectBowlShotTiming = (selectID, optionID, value) => {
  cy.get(`[data-testid=${selectID}]`)
    .find(`option[data-testid=${optionID}]`)
    .invoke('attr', 'value')
    .then((value) => {
      // now that we know the value of the <option>
      cy.get(`[data-testid=${selectID}]`).select(value)
    })
  // confirm the selected option
  cy.get(`[data-testid=${selectID}] option:selected`).should(
    'have.text',
    `${value}`,
  )
}

describe('Should India win by scroring target 21 in 6 bowls', () => {
  it('India Won', () => {
    cy.visit('/');
    const NUM_BOWLS = 5
    const COMBINATION = [
      ["Bouncer", "Pull", "Perfect"],
      ["Bouncer", "Pull", "Perfect"],
      ["Doosra", "UpperCut", "Perfect"],
      ["Pace", "Straight", "Perfect"],
      ["Pace", "Straight", "Perfect"]
    ]
    for (let i = 0; i < NUM_BOWLS; i++) {
      const bowlOption = `bowl-select-option-${COMBINATION[i][0]}`;
      const shotOption = `shot-select-option-${COMBINATION[i][1]}`;
      const timingOption = `timing-select-option-${COMBINATION[i][2]}`
      selectBowlShotTiming(`bowl-select-${i}`, bowlOption, `${COMBINATION[i][0]}`)
      selectBowlShotTiming(`shot-select-${i}`, shotOption, `${COMBINATION[i][1]}`)
      selectBowlShotTiming(`timing-select-${i}`, timingOption, `${COMBINATION[i][2]}`)
      // ADD MORE
      if (i !== 4) cy.get(`[data-testid=add-more]`).click();
    }
    cy.get("[data-testid=win-or-loss-test]").contains(/^Match Result : Congratulation India Won the Match$/)

  });
});
