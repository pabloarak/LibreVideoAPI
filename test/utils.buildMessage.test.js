const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', () => { // .only for test one test
    describe('when receives an entity and an action', () => {
        it('Should return the respective message', () => {
            const result = buildMessage('movie', 'create');
            const expect = 'movie created';
            assert.strictEqual(result,expect);
        });
    });

    describe('when receives an entity and an action and is a list', () => {
        it('Should return the respective message with the entity in plural', () => {
            const result = buildMessage('movie', 'list');
            const expected = 'movies listed';
            assert.strictEqual(result,expected);
        });
    });
});