import React from 'react';
import './AboutPage.css';  // Make sure the CSS is linked to style the page

function AboutPage() {
  return (
    <div className="about-container">
      <h1>Derrick Hayden</h1>
      <section>
        <h2>About</h2>
        <p>With a focus on software architecture and .NET development, I approach my work with a commitment to craft thoughtful solutions that integrate solid architectural strategies with the capabilities of the .NET framework. My practical experience has nurtured a robust understanding of architecting scalable systems and leveraging .NET technology to efficiently meet complex business demands.</p>
      </section>
      <section>
        <h2>Professional Experience</h2>
        <h3>Recent Technical Leadership Roles (Special Project Focus) | July 2020 - Present</h3>
        <ul>
          <li>Senior Programmer, Advanced Networking Computer Services | Feb 2024 - Present</li>
          <li>Chief Software Architect, Clow Valve Company | Sep 2023 – Feb 2024</li>
          <li>Senior Software Engineer I, Principal Financial Group | Apr 2022 - Aug 2023</li>
          <li>Senior Software Developer, Sammons Financial Group | Jul 2020 - Apr 2022</li>
        </ul>
        <p>Key Contributions:</p>
        <ul>
          <li>Managed development teams and architectural planning for significant projects within financial services, manufacturing, and technology service sectors.</li>
          <li>Implemented comprehensive solutions using technologies including .NET, C#, Java, Angular, and React to enhance system functionality and operational processes.</li>
          <li>Concentrated on enhancing software scalability and maintainability, introducing robust coding standards, and promoting agile practices.</li>
        </ul>

        <h3>Senior Software Developer | American Equity | June 2018 - July 2020</h3>
        <p>Developed and managed a critical application for marketing data analysis using .NET and ASP.NET technologies, incorporating Angular for front-end development and SQL for database management.</p>

        <h3>Senior Applications Developer | Blue Cross Blue Shield | 2013 - June 2018</h3>
        <p>Developed applications and APIs to connect payer products with providers, with an emphasis on process automation and user interface enhancement.</p>

        <h3>Senior Web Developer | INTL FCStone | 2011 - 2013</h3>
        <p>Oversaw the technical design of SharePoint servers, sites, and server farms. Created custom SharePoint Web Parts and extensive web applications using ASP.NET MVC, enhancing financial reporting and compliance monitoring capabilities.</p>

        <h3>Web Developer | Wells Fargo | 2010 – 2011</h3>
        <p>Description of the role and responsibilities.</p>

        <h3>Graphic Designer & Web Developer | Metabank | 2008 – 2010</h3>
        <p>Description of the role and responsibilities, highlighting significant projects and achievements.</p>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li>Iowa State University, Ames, IA — Master of Computer Engineering (Expected Completion: 2025)</li>
          <li>Grand View University, Des Moines, IA — Bachelor of Arts</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
