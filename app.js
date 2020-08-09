function check() {
    var score = 0;
var q1_answer1 = document.getElementById('q1-a1')
var correct_answer_1 = document.getElementById('q1-a2')
var q1_answer3 = document.getElementById('q1-a3')
if (correct_answer_1.checked == true) {
score++;
alert('Q1: Your answer is correct')
}
else {
    alert("Q1: Your answer is wrong." + "\n" + "Correct answer is Mercury.")
}

var correct_answer_2 = document.getElementById('q2-a1')
var q2_answer2 = document.getElementById('q2-a2')
var q2_answer3 = document.getElementById('q2-a3')
if (correct_answer_2.checked == true) {
    score++;
    alert('Q2: Your answer is correct')
} 
else {
    alert("Q2: Your answer is wrong." + "\n" + "Correct answer is 12.")
}

var q3_answer1 = document.getElementById('q3-a1')
var q3_answer2 = document.getElementById('q3-a2')
var correct_answer_3 = document.getElementById('q3-a3')
if (correct_answer_3.checked == true) {
    score++;
    alert('Q3: Your answer is correct')
} 
else {
    alert("Q3: Your answer is wrong." + "\n" + "Correct answer is 1914.")
}

var q4_answer1 = document.getElementById('q4-a1')
var correct_answer_4 = document.getElementById('q4-a2')
var q4_answer3 = document.getElementById('q4-a3')
if (correct_answer_4.checked == true) {
    score++;
    alert('Q4: Your answer is correct')
} 
else {
    alert("Q4: Your answer is wrong." + "\n" + "Correct answer is Lightbulb.")
}

var q5_answer1 = document.getElementById('q5-a1')
var q5_answer2 = document.getElementById('q5-a2')
var correct_answer_5 = document.getElementById('q5-a3')
if (correct_answer_5.checked == true) {
    score++;
    alert('Q5: Your answer is correct')
} 
else {
    alert("Q5: Your answer is wrong." + "\n" + "Correct answer is 21.")
}

var correct_answer_6 = document.getElementById('q6-a1')
var q6_answer2 = document.getElementById('q6-a2')
var q6_answer3 = document.getElementById('q6-a3')
if (correct_answer_6.checked == true) {
    score++;
    alert('Q6: Your answer is correct')
} 
else {
    alert("Q6: Your answer is wrong." + "\n" + "Correct answer is Mount Everest.")
}

var q7_answer1 = document.getElementById('q7-a1')
var correct_answer_7 = document.getElementById('q7-a2')
var q7_answer3 = document.getElementById('q7-a3')
if (correct_answer_7.checked == true) {
    score++;
    alert('Q7: Your answer is correct')
} 
else {
    alert("Q7: Your answer is wrong." + "\n" + "Correct answer is Mount Resin.")
}

var q8_answer1 = document.getElementById('q8-a1')
var correct_answer_8 = document.getElementById('q8-a2')
var q8_answer3 = document.getElementById('q8-a3')
if (correct_answer_8.checked == true) {
    score++;
    alert('Q8: Your answer is correct')
} 
else {
    alert("Q8: Your answer is wrong." + "\n" + "Correct answer is North Atlantic Ocean.")
}

var correct_answer_9 = document.getElementById('q9-a1')
var q9_answer2 = document.getElementById('q9-a2')
var q9_answer3 = document.getElementById('q9-a3')
if (correct_answer_9.checked == true) {
    score++;
    alert('Q9: Your answer is correct')
} 
else {
    alert("Q9: Your answer is wrong." + "\n" + "Correct answer is Nose and Ears.")
}

var q10_answer1 = document.getElementById('q10-a1')
var q10_answer2 = document.getElementById('q10-a2')
var correct_answer_10 = document.getElementById('q10-a3')
if (correct_answer_10.checked == true) {
    score++;
    alert('Q10: Your answer is correct')
} 
else {
    alert("Q10: Your answer is wrong." + "\n" + "Correct answer is Mars.")
}

alert("Your score is: " + score++)
}
