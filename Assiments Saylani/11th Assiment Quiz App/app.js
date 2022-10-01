function checkQuiz() {
    var score = 0
    var right1 = document.getElementById('right1')

    if (right1.checked == true) {
        score = score + 10
        alert('Q1.Correct Answer')
    } else {
        alert('Q1.Incorrect Answer')
    }
    var right2 = document.getElementById('right2')

    if (right2.checked == true) {
        score = score + 10
        alert('Q2.Correct Answer')
    } else {
        alert('Q2.Incorrect Answer')
    }
    var right3 = document.getElementById('right3')
    if (right3.checked == true) {
        score = score + 10
        alert('Q3.Correct Answer')
    } else {
        alert('Q3.Incorrect Answer')
    }
    var right4 = document.getElementById('right4')
    if (right4.checked == true) {
        score = score + 10
        alert('Q4.Correct Answer')
    } else {
        alert('Q4.Incorrect Answer')
    }
    var right5 = document.getElementById('right5')
    if (right5.checked == true) {
        score = score + 10
        alert('Q5.Correct Answer')
    } else {
        alert('Q5.Incorrect Answer')
    }
    alert('Your Score is ' + score + '/50')
}






























