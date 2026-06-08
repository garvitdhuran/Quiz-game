var questions = [
    {

    
    q: "whats 2+2 ?",
    answers:["3","4","5","6"],
    right: "4"

    },

    {
        q:"what color is the sky??",
        answers: ["Red","Blue","Green","Purple"],
        right: "Blue"
    },


    {
        q: "How many legs does a dog have ?",
        answers: ["1","2","3","4"],
        right: "4"
    }
]



var curr = 0 
var score = 0 






var questionThing = document.getElementById("question")
var btnArea = document.getElementById("answers-buttons")

var nextBtn = document.getElementById("next-btn")


nextBtn.style.display = "none"







function showQuestion() {
    var q = questions[curr]
    questionThing.innerText=q.q



    btnArea.innerHTML = ""


    for (var i = 0; i<q.answers.length; i++){
        var btn = document.createElement("button")
        btn.innerText = q.answers[i]
        btn.classList.add("btn")
        btn.onclick = function() { checkAnswer(this) } 
        btnArea.appendChild(btn)
    }
}



function checkAnswer(btn) {
    var picked = btn.innerText
    var rightAns = questions[curr].right

    if(picked == rightAns) {
        btn.style.background = "lightgreen"
        score++ 
    } else {
        btn.style.background = "salmon"
    }


    var allBtns = btnArea.querySelectorAll(".btn")
    for(var i = 0; i<allBtns.length; i++){
        allBtns[i].disabled = true 

        if(allBtns[i].innerText == rightAns){
            allBtns[i].style.background = "lightgreen"
        }

    }

    nextBtn.style.display = "block"



}



nextBtn.onclick = function(){
    curr++



    if(curr<questions.length){
        nextBtn.style.display = "none"
        showQuestion()
    }else {
        questionThing.innerText = "done!! score: " + score + "/" + questions.length
        btnArea.innerHTML = ""
        nextBtn.innerText = "play again"
        nextBtn.onclick = function(){
            curr = 0 
            score = 0
            nextBtn.innerText = "Next"
            nextBtn.style.display = "none"
            showQuestion()
            

        }
    }
}

showQuestion()




