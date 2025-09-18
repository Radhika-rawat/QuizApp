const question=[
 {
  question:"Which is largest animal in the world?",
  answers:[
   { text:"Lion" ,correct:false},
   {text: "Blue-Whale" , correct:true},
   {text: "Girrafe" , correct:false},
   {text:"Zebra" , correct:false}
   
  ]
 },
 {question:"Which is largest continent in the world?",
  answers:[
   { text:"Australia" ,correct:false},
   {text: "Asia" , correct:true},
   {text: "Artic" , correct:false},
   {text:"Africa" , correct:false}
   
  ]
 },{
  question:"Which is smallest continent in the world?",
  answers:[
   { text:"Australia" ,correct:true},
   {text: "Asia" , correct:false},
   {text: "Artic" , correct:false},
   {text:"Africa" , correct:false}
   
  ]
 },
 {
  question:"Which is largest country in the world?",
  answers:[
   { text:"Russia" ,correct:true},
   {text: "India" , correct:false},
   {text: "England" , correct:false},
   {text:"USA" , correct:false}
   
  ]
 },
 
];

const questionelement= document.getElementById("question");
const answerButton= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentquestionIndex=0;
let score=0;
function start() {
  currentquestionIndex=0;
 score=0;
 nextButton.innerHTML="Next"
 show();
}

function show(){
 resetState();
 let currentquestion= question[currentquestionIndex];
 let questionNo=currentquestionIndex + 1;
 questionelement.innerHTML=questionNo + "."+ currentquestion.question;

 currentquestion.answers.forEach(answer=>{
  const button=document.createElement("button");
   button.innerHTML=answer.text;
   button.classList.add("btn");
   answerButton.appendChild(button);
   if(answer.correct){
    button.dataset.correct=answer.correct
   }
   button.addEventListener("click",selectAnswer)
  
 });
}

function resetState(){
 nextButton.style.display="none";
 while(answerButton.firstChild){
  answerButton.removeChild(answerButton.firstChild)
 }
}


function selectAnswer(e){
 const selectBtn=e.target;
 const isCoreect=selectBtn.dataset.correct=="true";
 if(isCoreect){
  selectBtn.classList.add("correct");
  score++;

 }else{
  selectBtn.classList.add("incorrect")
 }

 Array.from(answerButton.children).forEach(button=>{
  if(button.dataset.correct=="true"){
   button.classList.add("correct")
  }
  button.disabled=true;
 });
 nextButton.style.display="block"

}
function handleNext(){
 currentquestionIndex++;
 if(currentquestionIndex<question.length){
  show();
 }else{
  showScore();
 }

 function showScore(){
  resetState();
  questionelement.innerHTML=`You scored ${score} out of ${question.length}`;
  nextButton.innerHTML="Play Again"
  nextButton.style.display="block";
 }
}
nextButton.addEventListener("click",()=>{
 if(currentquestionIndex <question.length){
  handleNext();

 }else{
  start();
 }
})

start();