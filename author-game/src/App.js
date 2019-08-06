import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero() {
  return (
    <div className="row">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p>
    </div>
  );
}
function Book({ title, onClick }) {
  return (
    <div className="answer" onClick={() => { onClick(title) }}>
      <h4>{title}</h4>
    </div>
  );
}
function Turn({author, books, highlight,onAnswerSelected}) {
  debugger;
  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  }
  return (
    <div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"></img>
      </div>

      <div className="col-6">
        {books.map((title) => <Book title={title} key={title}  onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}
Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};
function Continue() {
  return (<div />);
}
function Footer() {
  return (<div id="footer" className="row">
    <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
        </p>
    </div>
  </div>);
}
function App({ turnData, highlight, onAnswerSelected }) {
  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} >

      </Turn>
      <Continue></Continue>
      <Footer></Footer>
    </div>
  )
}

export default App;
