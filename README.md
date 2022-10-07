# odin-rock-paper-scissors-game
This is the first JavaScript program built from scratch, from the Odin project.
Here I will try to implement the problem solving techniques from the previous lessons.

## Understand the problem
Rock-paper-scissors game
1. The game is played between 2 players
2. There are 3 shapes to play namely "rock" (played with a closed fist ✊) , "paper" (played with a flat hand 🫲) and "scissors" (played with a fist with the index and middle finder extended forming a V ✌️)
3. It has 3 possible outcomes: a draw, a win or a loss.
4. There are multiple scenarios:
  - rock ✊ will beat scissors ✌️ but lose to paper 🫲
  - scissors ✌️ will beat paper 🫲 but lose to rock ✊
  - paper 🫲 will beat rock ✊ but lose to scissors ✌️
  - if both players choose the same shape, then its a draw
  
## Plan
Some questions to answer before coding:

<details>
<summary>Does your program have a UI?</summary>
<p>
No UI for now.
</p>
</details>
<details>
<summary>What are the functionalities?</summary>
<p>
1. Allow users to select either rock ✊, paper 🫲 or scissors ✌️

2. Determine outcome (either a draw, a win or a loss)
</p>
</details>
<details>
<summary>What are the input and output?</summary>
<p>
Input - either rock ✊, paper 🫲 or scissors ✌️
Output - either a draw, a win or a loss
</p>
</details>

## Algorithm using Pseudocode
```
When player1 inputs a shape (either rock ✊, paper 🫲 or scissors ✌️)
Store into a variable (e.g. player1_Input)
Get input from computer function
Store into a variable (e.g. computer_Input)
Compare player1_Input with computer_Input
If player1_Input equals to computer_Input
Print ("Its a tie!")
If player1_Input is rock ✊ and computer_Input is scissors ✌️
Print ("You won! Rock beats scissors")
If player1_Input is rock ✊ and computer_Input is paper 🫲
Print ("You lost! Paper beats rock")
If player1_Input is scissors ✌️ and computer_Input is rock ✊
Print ("You lost! Rock beats scissors")
If player1_Input is scissors ✌️ and computer_Input is paper 🫲
Print ("You won! Scissors beats paper")
If player1_Input is paper 🫲 and computer_Input is rock ✊
Print ("You won! Paper beats rock")
If player1_Input is paper 🫲 and computer_Input is scissors ✌️
Print ("You lost! Scissors beats paper")
```

