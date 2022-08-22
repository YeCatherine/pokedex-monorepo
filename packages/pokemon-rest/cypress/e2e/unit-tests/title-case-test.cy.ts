import toTitleCase from '../../../src/services/toTitleCase';

describe('Helpers | to title case ', () => {
  it('Check Text', () => {
    const cases = {
      'my long text.': 'My Long Text.',
      'mylongtext.text': 'Mylongtext.text',
      'mylongtext-text': 'Mylongtext-text'
    };

    for (const [key, value] of Object.entries(cases)) {
      expect(toTitleCase(key)).to.equal(value, `"${key}" equal "${value}"`);
    }
  });
});
