import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home">
        <header className="hero">
            <h1>Empowering Innovation in Software Engineering</h1>
            <p>Explore next-generation solutions tailored to boost operational efficiency and technological growth.</p>
            <button>Discover More</button>
        </header>

        <section className="services">
            <h2>Our Services</h2>
            <ul>
                <li>
                    <h3>Software Development</h3>
                    <p>We provide comprehensive software development services, specializing in creating scalable,
                        high-performance applications using modern development frameworks and languages. Our team
                        ensures that your custom solutions are built to the highest standards.</p>
                </li>
                <li>
                    <h3>System Architecture</h3>
                    <p>Our system architecture services are designed to construct robust, efficient, and scalable
                        architectures. Whether upgrading existing infrastructures or designing new systems from scratch,
                        we focus on using cutting-edge technologies to meet your business needs.</p>
                </li>
                <li>
                    <h3>Consulting Services</h3>
                    <p>Leverage our expert consulting services to navigate complex technology landscapes. From strategy
                        and planning to implementation and optimization, our consultants provide insights and solutions
                        that drive innovation and competitive advantage.</p>
                </li>
            </ul>
        </section>

        <section className="about">
            <h2>About CPU Engineer</h2>
            <p>At CPU Engineer, we specialize in delivering bespoke software solutions that push the boundaries of
                technology and business. Founded by Derrick Hayden, a seasoned software architect with over a decade of
                experience in .NET frameworks and complex system integrations, our mission is to transform your
                operational challenges into streamlined, scalable solutions.</p>
            <p>Our expertise spans across designing robust system architectures, developing custom software tailored to
                unique business needs, and providing insightful consulting that drives technological advancement. We are
                passionate about innovation and committed to excellence, ensuring every solution is not just
                fit-for-purpose but a step towards future-proofing your business.</p>
        </section>


        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    {/*<li><a href="/">Home</a></li>*/}
                    {/*<li><a href="/about">About Us</a></li>*/}
                    {/*<li><a href="/services">Services</a></li>*/}
                    {/*<li><a href="/blog">Blog</a></li>*/}
                </ul>
            </div>
        </footer>

    </div>
  );
}

export default HomePage;
