// # JavaScript_Classwork4_If2
// ### Create a new file for each exercise

// #### Exercise 10
// Ask the user for 3 cards. If the sum equals 21 print BLACKJACK! If the sum is greater than 21 print BUST! If the sum is less than 21 print “The total is [TOTAL]”
//
// alert("Pick 3 cards!");
// var cardDeck1 =parseInt( prompt("First Card!"));
// var cardDeck2 = parseInt(prompt("Second card!"));
// var cardDeck3 = parseInt(prompt("Third card!"));
// var total = cardDeck1+cardDeck2+cardDeck3;
//
// alert(total);
//
// if (total===21)
//  {
//      alert("Backjack!");
//  }
//  else
// {
//     alert("You lose!");
// }



// #### Exercise 11
// Ask the user to enter their grade. Print their letter grade:
//     A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59

//
// var gradeN = parseInt(prompt("Please enter your grade"));
// var scoreA =
// var scoreC =
// var scoreD =
// var scoreF =
// var scoreB =
//
//
// if(gradeN === scoreA)
//     (gradeN === scoreA)
//     (gradeN === scoreA)
//     (gradeN === scoreA)
//
//
//



// ##### Extra Credit:
//     If it's negative or over 100 print an error.
//
// ### Exercise 12
// Ask the user to enter their age. Check if they entered a value between 0 and 125. If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”

var userAge = parseInt(prompt("what is your age?"));

if (userAge > 110)
{
    alert("This is not a real age!");
}
else
{
    alert('Real age!');
}