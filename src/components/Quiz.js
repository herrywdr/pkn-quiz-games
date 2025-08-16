import React, { useState } from 'react';
import { questions } from '../data/questions';
import { supabase } from '../api/supabaseClient';

export default function Quiz({ user }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = async (choiceIdx) => {
    if (choiceIdx === questions[current].answer) setScore(score+1);
    if (current < questions.length-1) setCurrent(current+1);
    else {
      setFinished(true);
      // Save progress to Supabase
      await supabase
        .from('progress')
        .upsert({ user_id: user.id, score, date: new Date().toISOString() });
    }
  };

  if (finished) return <div>Quiz Complete! Your Score: {score}/{questions.length}</div>;

  const q = questions[current];
  return (
    <div>
      <h3>{q.category}</h3>
      <p>{q.question}</p>
      {q.choices.map((choice, idx) =>
        <button key={idx} onClick={()=>handleAnswer(idx)}>{choice}</button>
      )}
      <p>Score: {score}</p>
    </div>
  );
}