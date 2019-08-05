import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Book({ title,onClick }) {
  return (
    <div className="answer" onClick={()=>{onClick(title)}}>
      <h4>{title}</h4>
    </div>
  );
}
function Turn(author, books, highlight) {
  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  }
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"></img>
      </div>

      <div>
        {books.map((title) => <Book title={title} key={title} />)}
      </div>
    </div>
  );
}

function Continue() {
  return (<div />);
}
function App({ turnData, highlight,onAnswerSelected }) {
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
