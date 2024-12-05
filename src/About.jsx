import proImage from './assets/cover/Joseph Norris.jpg';

function About() {
    return (
        <section>
            <div>
                <div>
                    <div
                        className="profile-circle" 
                        style={{
                          boxShadow: "3px 6px 6px rgba(0, 0, 0, 0.6)",
                          width: "126px",
                          height: "126px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#fff",
                        }}
                        >       <img 
                        src={proImage} 
                        alt="Joseph Norris" 
                        className="profile-image" 
                    />
                    </div>
                </div>
                <p>
                    Hello, and thank you for visiting my portfolio! I'm Joseph Norris, a passionate programmer/developer, specializing in front-end and back-end web development. With a strong foundation in problem-solving and creative design, I strive to create solutions and products that are not only functional but also innovative and user-centric.
                </p>

                <p>
                    This portfolio showcases my journey, expertise, and some of the projects I've had the privilege of bringing to life. Here, you'll find a collection of web applications, design concepts, and other works that highlight my skills, dedication, and approach to challenges.
                </p>

            </div>
        </section>
    );
}

export default About;