var readlineSync=require("readline-sync")
var score=0
var userName=readlineSync.question("What's your name?  ")
console.log("welcome! "+userName+" to 'DO YOU KNOW JAYESH?'");

function play(question,answer){
  userAnswer=readlineSync.question(question)
  if(userAnswer==answer)
  {
    console.log("right!")
    score=score+1
    console.log("score="+score)
  }
  else
  {
    console.log("wrong!")
    console.log("score="+score);
  }
  console.log("----------------")
 
  }
var question=[{
question:"where do I live? ",
answer:"dhamangaon rly"},
{question:"my favourite colour is? ",
answer:"black"},
{
  question:"which teachers's payment is still pending of mine? ",
  answer:"chirde"
},
{
  question:"Am I introvert or extrovert? ",
  answer:"extrovert"
},
{
  question:"who teacher slaped me in 11th? ",
  answer:"thombre"
},
{ 
  question:"Am I handsome than you or no? ",
  answer:"yes"
}]
for(var i=0;i<question.length;i++)
{
    currentQuestion=question[i];
    play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your final score is=",score)