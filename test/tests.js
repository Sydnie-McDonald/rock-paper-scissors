// IMPORT MODULES under test here:
import { score } from '../game.js';

const test = QUnit.test;

test('player rock, computer rock is tie!', (expect) => {
    //Arrange test 1
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'tie!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player scissors, computer is scissors is tie!', (expect) => {
    //Arrange test tie 2 (scissors & scissors)
    // Set up your arguments and expectations
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'tie!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
}); 

test('player paper, computer paper is tie!', (expect) => {
//Arrange test 3 (paper & paper)
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'paper';
    const expected = 'tie!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player scissors, computer is rock computer wins!', (expect) => {
    //Arrange variation 1 (scissors & rock)
    // Set up your arguments and expectations
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'computer wins!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player scissors, computer is paper player wins!', (expect) =>{
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'player wins!';
    
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player rock, computer is paper computer wins!', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const expected = 'computer wins!';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player rock, computer is scissors player wins!', (expect) => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'player wins!';

    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player rock, computer paper computer wins!', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const expected = 'computer wins!';

    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player rock,computer is scissors player wins!', (expect) => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'player wins!';

    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player paper,computer is rock computer wins!', (expect) => {
    const player = 'paper';
    const computer = 'rock';
    const expected = 'computer wins!';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player paper, computer is scissors computer wins!', (expect) => {
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'computer wins!';
    
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player scissor, computer is paper player wins!', (expect) => {
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'player wins!';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});