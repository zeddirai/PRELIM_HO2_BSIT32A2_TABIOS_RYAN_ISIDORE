import React from "react";
import "./styles.css"; // Custom styles for your CV

function CV() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>TABIOS, RYAN ISIDORE P.</h1>
          <h5>BSIT-32A2</h5>
          <p>College | Academic Interests</p>
        </div>
      </header>
      {/* New Objectives Section */}
      <section id="objectives" className="section">
        <h2>Objectives</h2>
        <p>
          To build a career in Information Technology, specializing in software
          development, while continuously improving my skills, contributing to
          meaningful projects, and collaborating with diverse teams to grow as a
          tech professional
        </p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="row">
          <div className="col">
            <h3>Education</h3>
            <ul>
              <li>Elementary - Sampaguita Village Elemtery School</li>
              <li>High School - Sampaguita Village National High School</li>
              <li>Senior High School - Lcyeum Of Alabang</li>
              <li>College - Lyceum Of Alabang</li>
            </ul>
          </div>
          <div className="col">
            <h3>School Activities</h3>
            <ul>
              <li>School Varsity</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <form id="contact-form" action="submit_form.php" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Tabios Ryan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default CV;
