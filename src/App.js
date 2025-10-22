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
        <div>
            {/* Pomysły */}
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

            {/* Header */}
            <header className="header">
                <nav className="nav">
                    <div className="logo">
                        <h2>Zdrowa Szkoła</h2>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#home">Strona Główna</a></li>
                        <li><a href="#about">O Nas</a></li>
                        <li><a href="#programs">Programy</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <h1>Witaj w Zdrowej Szkole!</h1>
                    <p>Promujemy zdrowy styl życia, edukację i radość z nauki. Dołącz do nas i buduj lepszą przyszłość.</p>
                </div>
                <div className="hero-image">
                    <div className="placeholder">Zdjęcie dzieci w ruchu</div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <h2>O Nas</h2>
                <p>Jesteśmy szkołą, która łączy edukację z dbałością o zdrowie fizyczne i psychiczne. Nasza misja to wychowanie świadomych i szczęśliwych uczniów.</p>
            </section>

            {/* Programs Section */}
            <section id="programs" className="programs">
                <h2>Nasze Programy</h2>
                <div className="programs-grid">
                    <div className="program-card">
                        <h3>Aktywność Fizyczna</h3>
                        <p>Lekcje WF, kluby sportowe i zajęcia na świeżym powietrzu.</p>
                    </div>
                    <div className="program-card">
                        <h3>Zdrowe Odżywianie</h3>
                        <p>Edukacja kulinarna i zdrowe posiłki w stołówce.</p>
                    </div>
                    <div className="program-card">
                        <h3>Wellness Psychiczne</h3>
                        <p>Ćwiczenia mindfulness i wsparcie psychologiczne.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <h2>Kontakt</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Imię" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Wiadomość" required></textarea>
                    <button type="submit">Wyślij</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Zdrowa Szkoła. Wszelkie prawa zastrzeżone.</p>
            </footer>
        </div>
    );
}

export default App;
