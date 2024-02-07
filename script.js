const responses = [
    "Are you sure? I have unlimited cuddles to offer!",
    "But we'd make such a great team! Change your mind?",
    "What if I throw in free chocolate? Yes or no?",
    "I promise to share my snacks! How about now?",
    "I've got endless funny jokes, give it a thought?",
    "Could a cute animal picture change your mind?",
    "What about a romantic dinner? Yes or no?",
    "I'll protect you from spiders. Reconsider?",
    "Imagine all the adventures we could have. Yes?",
    "I'll always let you control the TV remote!",
    "Unlimited hugs on offer. How about it?",
    "I can cook your favorite meal. Yes or no?",
    "We could star gaze together. Change your mind?",
    "I'll listen to all your stories. Yes or no?",
    "Let's make unforgettable memories. Yes?",
    "I promise to always make you smile. Reconsider?",
    "We can build a pillow fort. Interested?",
    "I'll be your personal cheerleader. Yes or no?",
    "We could share dreams and ambitions. Yes?",
    "Life's an adventure with you. Be my valentine?"
];
let responseIndex = 0;

document.getElementById('yesButton').addEventListener('click', function() {
    alert('Yay! You made my day!');
});

document.getElementById('noButton').addEventListener('click', function() {
    if (responseIndex < responses.length) {
        document.getElementById('question').innerText = responses[responseIndex++];
    } else {
        // Optionally, loop back to the start or handle the end of responses differently
        document.getElementById('question').innerText = "I guess you're really not convinced... But I'm still here if you change your mind!";
    }
});
