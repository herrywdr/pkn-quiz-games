import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { supabase } from '../api/supabaseClient';

export default function DailyChallenge({ user }) {
  const [q, setQ] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setQ(questions[Math.floor(Math.random()*questions.length)]);
  }, []);

  const handleAnswer = async (choiceIdx) => {
    setDone(true);
    await supabase.from('daily_challenges').upsert({
      user_id: user.id,
      question_id: q.id,
      correct: choiceIdx === q.answer,
      date: new Date().toISOString()
    });
  };

  if (!q) return <div>Loading...</div>;
  if (done) return <div>Challenge Complete!</div>;

  return (
    <div>
      <h3>Daily Challenge</h3>
      <p>{q.question}</p>
      {q.choices.map((c, idx) => <button key={idx} onClick={()=>handleAnswer(idx)}>{c}</button>)}
    </div>
  );
}