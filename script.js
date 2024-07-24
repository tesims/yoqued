// Redirect button event listeners
document.querySelector('.fun-button.myself').addEventListener('click', function() {
    window.location.href = 'register-myself.html';
});

document.querySelector('.fun-button.friend').addEventListener('click', function() {
    window.location.href = 'register-friend.html';
});

// Modal handling code
var rulesModal = document.getElementById("rulesModal");
var openRulesModalBtn = document.getElementById("openRulesModal");
var closeModalSpan = document.getElementsByClassName("close")[0];

openRulesModalBtn.onclick = function() {
    rulesModal.style.display = "block";
}

closeModalSpan.onclick = function() {
    rulesModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == rulesModal) {
        rulesModal.style.display = "none";
    }
}

// Countdown Timer
function countdownTimer(eventDate) {
    var countDownDate = new Date(eventDate).getTime();

    var countdownFunction = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (document.getElementById("days")) {
            document.getElementById("days").innerHTML = days;
        }
        if (document.getElementById("hours")) {
            document.getElementById("hours").innerHTML = hours;
        }
        if (document.getElementById("minutes")) {
            document.getElementById("minutes").innerHTML = minutes;
        }
        if (document.getElementById("seconds")) {
            document.getElementById("seconds").innerHTML = seconds;
        }

        if (distance < 0) {
            clearInterval(countdownFunction);
            if (document.getElementById("countdown")) {
                document.getElementById("countdown").innerHTML = "Event Started";
            }
        }
    }, 1000);
}

countdownTimer("Dec 31, 2024 00:00:00");

