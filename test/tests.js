// IMPORT MODULES under test here:
import { score } from '../game.js';

const test = QUnit.test;

test('player rock, computer rock is tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'tie';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
