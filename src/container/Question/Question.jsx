import React from 'react';
import './Question.scss'
import Quest from './Quest';

function Question() {
    const qaList = [
        {
          question: 'Why do we use it?',
          answer:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
        },
        {
            question: 'Why do we use it?',
            answer:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
          },
          {
            question: 'Why do we use it?',
            answer:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
          },
          {
            question: 'Why do we use it?',
            answer:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
          },
        // Add more questions and answers as needed
      ];
  return (
    <div id='question'>
    <div className='ques'>
        <h1>Questions and Answers</h1>
        {qaList.map((qa, index) => (
        <Quest key={index} question={qa.question} answer={qa.answer} />
         ))}
    
    </div>
    </div>
  )
}

export default Question