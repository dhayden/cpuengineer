import React from 'react';
import './HomePage.css'; // Make sure your CSS is adapted to new content

function HomePage() {
  return (
    <div className="home">
        <header className="hero">
            <h1>Derrick Hayden – Computer Programmer</h1>
            <p>Crafting robust software solutions that drive business innovation and performance.</p>
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Explore My Work</button>
        </header>

        <div className="section-container">
            <section className="skills">
                <h2>What I Do</h2>
                <ul>
                    <li>
                        <h3>Custom Software Development</h3>
                        <p>From small business solutions to enterprise applications, I build scalable, high-performance software tailored to your unique challenges using the latest frameworks and technologies.</p>
                    </li>
                    <li>
                        <h3>System Architecture Design</h3>
                        <p>Designing future-ready systems that are both scalable and efficient, ensuring they support your growth and adapt to evolving technological needs.</p>
                    </li>
                    <li>
                        <h3>Technical Consulting</h3>
                        <p>Offering expert advice on integrating advanced technology strategies to optimize your operational infrastructure and maximize productivity.</p>
                    </li>
                </ul>
            </section>

            <section className="about">
                <h2>About Me</h2>
                <p>I am Derrick Hayden, a freelance software developer based in Indiana, with over a decade of experience in building and scaling applications. I specialize in .NET frameworks, Python, JavaScript and am passionate about using my skills to help businesses innovate and grow.</p>
                <p>My approach combines a deep understanding of technology with a clear focus on meeting business needs, ensuring every solution not only meets but exceeds expectations.</p>
            </section>
        </div>

        <footer className="footer">
            <div className="footer-content">
                <p>Connect with me:</p>
                <ul className="social-links">
                    <li><a href="https://linkedin.com/in/derrickhayden">LinkedIn</a></li>
                    <li><a href="https://github.com/dhayden">GitHub</a></li>
                    <li>Email: hayden.programmer at gmail</li>
                </ul>
            </div>
        </footer>

    </div>
  );
}

export default HomePage;
