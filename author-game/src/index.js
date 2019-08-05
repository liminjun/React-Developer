import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { isCombinator } from 'postcss-selector-parser';


const authors = [];

function getTurnData(authors) {
    return {
        books: fourRandomBooks,
        author: authors.some((title) => title === answer)
    }
}
const state = {
    turnData: getTurnData(authors),
    highlight: 'wrong'
};
function onAnswerSelected(answer) {
    const isCorrect = state.turnData.anthor.books.some((book) => book === answer);

    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}
function render() {
    ReactDOM.render(<App {...state} onAnswerSelected={onAnswerSelected} />, document.getElementById('root'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
