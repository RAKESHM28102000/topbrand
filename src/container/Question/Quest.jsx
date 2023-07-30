import React, { useState } from 'react';
import './Question.scss';
import { FaLongArrowAltRight} from 'react-icons/fa';

const Quest = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
    <div className="question-container">
      <div className="question">
        {question} <button className='buttoninquestion'onClick={handleToggleAnswer}><FaLongArrowAltRight className='iconinques'/></button>
      </div>
      {showAnswer && <div className="answer">{answer}</div>}
    </div>
    <hr/>
    </div>
  );
};

export default Quest;
