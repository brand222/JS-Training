/*
1. Calculate the average score for each team, using the test data below.
2. Compare the team's average scores to determine the 
winner of the competition, and print it to the console. Dont forget that
there can be a draw, so test for that as well (draw means they have same average score)

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team
only wins if it has a higher score than the other team, and the same time a score of 
at least 100 points. HINT: Use a logical operator to test minimum score, as well as
multiple else-if blocks :) 

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both
teams have the same score and both have a score greater than or equal to 100 points.
Otherwise, no team wins the trophy.


TEST DATA: Dolphins score 96, 108, and 89. Koalas score 88, 91, and 110
TEST DATA BONUS 1: Dolphins score 97, 112, and 101. Koalas score 109, 95, and 123.
TEST DATA BONUS 2: Dolphins score 97, 112, and 101. Koalas score 109, 95, and 106
GOOD LUCK!
*/

const averageScoreDolphins1 = (96 + 108 + 89) / 3;
const averageScoreKoalas1 = (88, 91, 110) / 3;

const averageScoreDolphins2 = (97 + 112 + 101) / 3;
const averageScoreKoalas2 = (109 + 95 + 123) / 3;

const averageScoreDolphins3 = (97 + 112 + 101) / 3;
const averageScoreKoalas3 = (109 + 95 + 106) / 3;

function determineWinner(dolphinsScore, koalasScore) {
  if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(
      `Dolphin's win with an average score of ${dolphinsScore} vs koalas score of ${koalasScore}`
    );
  } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
    console.log(
      `Koalas win with an average score of ${koalasScore} vs dolphins score of ${dolphinsScore}`
    );
  } else if (dolphinsScore === koalasScore && dolphinsScore >= 100) {
    console.log(
      `Its a draw! The dolphins scored ${dolphinsScore} and koalas scored ${koalasScore} which is the same!`
    );
  } else {
    console.log(
      `No one wins! Neither had a score of at least 100. Dolphins = ${dolphinsScore}, koalas score = ${koalasScore}`
    );
  }
}

//first scenario
determineWinner(averageScoreDolphins1, averageScoreKoalas1);
//second scenario
determineWinner(averageScoreDolphins2, averageScoreKoalas2);
//third scenario
determineWinner(averageScoreDolphins3, averageScoreKoalas3);
