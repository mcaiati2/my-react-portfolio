function Resume() {
  return (
    <>
      <section id="resume-output">
        <h4 className="text-center">Front-End Profencies</h4>
        <ul className="bulleted-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <br></br>
        <h4 className="text-center">Back-End Profencies</h4>
        <ul className="bulleted-list">
          <li>Node</li>
          <li>REST APIs</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>MongoDB & Mongoose</li>
          <li>GraphQL</li>
          <h4 className="text-center">
            <a href="/docs/michael-caiati-resume.pdf" download="michael-caiati-resume.pdf" id="resume-download" className="text-center">Download My Full Resume!</a>
          </h4>
        </ul>
      </section>
    </>
  );
}

export default Resume;