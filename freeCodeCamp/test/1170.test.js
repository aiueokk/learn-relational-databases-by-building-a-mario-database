/*const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  let lastQueryResult;
  before(async () => {
		lastQueryResult = await getLastQueryResult();
  });

  it('should view the "character_id" column from "characters" for only Yoshi\'s row', () => {
		const correctCharacterId = /\|7\|/.test(lastQueryResult);
		const correctNumberOfRows = /\(1$/.test(lastQueryResult);

    assert(correctCharacterId && correctNumberOfRows);
  });
});*/
