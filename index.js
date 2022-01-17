console.log('your_score: ')
let stdin = process.openStdin()
let your_score
stdin.addListener("data", (num) => {
    // console.log(High.toString().trim())
    your_score = num
  if(your_score >= 80)
   console.log("Your grade is A");

  else if(your_score >= 75)
  console.log("Your grade is B+");
  else if(your_score >= 70)
  console.log("Your grade is B");

  else if(your_score >= 65)
  console.log("Your grade is C+");
  else if(your_score >= 60)
  console.log("Your grade is C");

  else if(your_score >= 55)
  console.log("Your grade is D+");
  else if(your_score >= 50)
  console.log("Your grade is D");

  else
  console.log("Your grade is E");
//stdin.destroy() จบการทำงาน
})