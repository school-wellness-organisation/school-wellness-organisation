import React, { useState } from "react";

function App() {
  const [ideas, setIdeas] = useState([]);
  const [text, setText] = useState("");

  const addIdea = () => {
    if (text.trim() === "") return;
    setIdeas([...ideas, { text, votes: 0 }]);
    setText("");
  };

  const vote = (index, value) => {
    const newIdeas = [...ideas];
    newIdeas[index].votes += value;
    setIdeas(newIdeas);
  };

  return (
    <div style={{ margin: "40px" }}>
      <h1>💡 Zdrowa szkoła – pomysły</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Wpisz pomysł..."
      />
      <button onClick={addIdea}>Dodaj</button>

      <ul>
        {ideas.map((idea, i) => (
          <li key={i}>
            {idea.text} — Głosy: {idea.votes}
            <button onClick={() => vote(i, 1)}>👍</button>
            <button onClick={() => vote(i, -1)}>👎</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


