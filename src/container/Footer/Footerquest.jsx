import React, { useState } from 'react';
import './Footer.scss'
import { FaLongArrowAltRight} from 'react-icons/fa';

const Footerquest = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
    <div className="questioncontainer">
      <div className="que">
        {question} <button className='buttoninfooter'onClick={handleToggleAnswer}><FaLongArrowAltRight className='iconin'/></button>
      </div>
      {showAnswer && <div className="ans">{answer}</div>}
    </div>
    <hr/>
    </div>
  );
};

export default Footerquest;
