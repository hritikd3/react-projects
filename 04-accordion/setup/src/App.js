import React, { Fragment, useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions]=useState(data);
  return (
    <main>
      <div className="container">
      
          <h3 style={{ color: "#FF9900 ", fontWeight: "400" }}>
            AWS & <span style={{ color: "#00a1f1" }}>Microsoft</span>
          </h3>
       
        <br />
        <h2 style={{ fontFamily: "cursive" }}>
          Have Questions ? get your Answers
        </h2>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
