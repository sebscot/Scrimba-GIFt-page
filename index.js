import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

document.getElementById("celebrate-button").addEventListener("click", fireConfetti)

function fireConfetti() {
    jsConfetti.addConfetti({
        confettiRadius: 4,
        confettiColors: [
            '#FE486C', '#1BCA8D', '#AEBCCD'
        ],
        confettiNumber: 100,
        emojis: ['🎉', '🎁', '🪅', '🎊', '🥳'],
        emojiSize: 25,
    })

}