function Resume() {
    return (
      <section className="my-5">
        <div className="my-2">
          <p>
            Download my <a href="https://www.linkedin.com/in/joseph-norris-a9a491229/">RESUME</a>
          </p>
          {/* Added gap for spacing */}
          <div className="flex flex-row py-4" style={{ gap: "30px" }}>
            <ul className="skills">
              <h3>Front-end Proficiencies</h3>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>responsive design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
  
            <ul className="skills">
              <h3>Back-end Proficiencies</h3>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>PostgreSQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
  
            <ul className="skills">
              <h3>Other Proficiencies</h3>
              <li>Blender</li>
              <li>Animation</li>
              <li>3D Modeling</li>
              <li>Unreal Engine</li>
              <li>Creative Design</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Resume;
  