import PollWidget from "./PollWidget.js";

const options = [
    { id: 1, option: 'Ramen', count: 30 },
    { id: 2, option: 'Soba', count: 20 },
    { id: 3, option: 'Udon', count: 20 },
    { id: 4, option: 'Somen', count: 20 },
    { id: 5, option: 'Hiyamugi', count: 5 },
    { id: 6, option: 'Torokoten', count: 5 }
]

const pollQuestion = 'Which Japanese noodle is your favourite?';
const pollContainer = document.getElementById('pollContainer');
const pollWidget = new PollWidget(pollContainer, options, pollQuestion);