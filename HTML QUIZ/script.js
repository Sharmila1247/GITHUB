const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-container')

letShuffledQuestions,currectQuestionIndex;
let QuizScore =0;

startButton.addEventListener('click',startgame)
nextButton.addEventListener('click',()=> 
{
    currectQuestionIndex++
    setnextquestion()
})
function startgame(){
startButton.classList.add('hide')
ShuffledQuestions=questions.sort(() =>Math.random() -0.5)
currectQuestionIndex=0;
questionContainerElement.classList.remove( 'hide' )
setnextquestion()
QuizScore=0
}
function setnextquestion(){
    resetState();
    showquestion(ShuffledQuestions[currectQuestionIndex])
}
function showquestion(question)
{
    questionElement.innerText=question.question;
    question.answers.forEach((answer) =>
    {
        const button=document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct)
        {
            button.dataset.correct=answ.correct
        }
        button.addEventListener('click',selectanswer)
answerButtonsElement.appendChild(button)
    } )
}

function resetState()
{
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild)
    {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectanswer(e)
{
    const selectedbutton=e.target
    const correct=selectedbutton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>
    {
        setStatusClass(button,button.dataset.correct)
    })
    if(ShuffledQuestions.length > currectQuestionIndex +1 )
    {
        nextButton.classList.remove("hide")
    }
    else{
        startButton.innerText="restart"
        startButton.classList=remove("hide")
    }
    if(selectedbutton.dataset=correct)
    {
        QuizScore++
    }
document.getElementById('right-answers').innerHTML=QuizScore
}
function setStatusClass(element,correct)
{
    clearStatusClass(element);
    if(correct)
    {
        element.classList.add("correct")
    }
    else{
        element.classList.add("wrong")
    }
}
function clearStatusClass(element)
{
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions=[
    {
        question:'Which one of these is a java frame work',
        answers:[
            { text : 'Python',correct  : false },
            { text : 'Django',correct  : false },
            { text : 'React',correct  : true },
            { text : 'Eclipse',correct  : false }
        ],
    },
    {
        question:'Who is prime minister of india',
        answers:[
            { text : 'Naren',correct  : true },
            { text : 'Rahul',correct  : false }
        ],
    },
    {
        question:'What is 4+3',
        answers:[
            { text : '7',correct  : true },
            { text : '10',correct  : false }
        ]
    }
]
