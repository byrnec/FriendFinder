### File

* [`rps-2`](Unsolved/rps-2.html)

### Instructions

* In groups of 4, begin the process of coding out the rock-paper-scissors game.

**Rules for rock-paper-scissors**

Rock: wins against scissors, loses to paper, and ties against itself.
Paper: wins against rock, loses to scissors, and ties against itself.
Scissors: wins against paper, loses to rock, and ties against itself.

![3-RPS-Example-Picture](Images/9-RPS-example.png)

* Do as much as you can on your own, but don't be afraid to ask for help if you feel your team is struggling.

* **NOTE:** A `for-loop` is not technically necessary to make our RPS game, but could be used. Focus on the topics we have just covered when thinking about how to build out the game.

* **NOTE:** Don’t use `document.write` as it will delete the contents of your page including your JavaScript. Use `document.querySelector` or `document.getElementById`, alongside either `innerHTML` or `textContent`, to write to the DOM.

* **NOTE:** Don't worry. We know this is a very challenging assignment. We also know that you won't know where to start. In fact, we haven't shown you EVERYTHING you need yet, but that's okay. Part of being a developer is figuring things out on your own through trial and error.


---------------------------------------------------------------------------------------
### Rock Paper Scissors Pseudocode

1. User chooses r, p, or s on keyboard representing rock, paper, or scissors.

<!-- var computerChoices = ["r", "p", "s"]; -->

2. Computer chooses a random value in a list of r, p, or s.

3. We determine if the user wins or not.

   * If user picks rock and if computer picks scissors then user wins.

   * If user picks rock and if computer picks paper then user loses.

   * If user picks scissors and if computer picks rock then user loses.

   * If user picks scissors and if computer picks paper then user wins.

   * If user picks paper and if computer picks rock then user wins.

   * If user picks paper and if computer picks scissors then user loses.

   * If user picks the same as computer then they tie.

4. We then add to their score.

   * If user wins then we add one to their wins.
    
   * If user loses then we add one to their losses.
    
   * If user ties then we add one to their ties.

5. The user then presses r, p, or s to play again.