function Skills () {
    return (
        <div className="my-2 text-light">
            <div className="container flex-duo">
                <h4 className="text-light col-6">Technical</h4>
                <h4 className="text-light col-6">Skills</h4>
            </div>
            <div className="container flex-duo">
                <ul className="col-6">
                    <li>Languages
                        <ul>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </li>
                    <li>Frameworks
                        <ul>
                            <li>React</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Express</li>
                            <li>Node.JS</li>
                        </ul>
                    </li>
                    <li>Core Concepts
                        <ul>
                            <li>MERN Stack</li>
                            <li>Model View Controller (MVC)</li>
                            <li>SQL Databases</li>
                            <li>NoSQL Databases</li>
                            <li>Creating/Navigating API routes</li> 
                            <li>Object Oriented Programming (OOP)</li>
                            <li>Test Driven Development (TDD)</li>
                        </ul>
                    </li>
                </ul>
                <ul className="col-6">
                    <li>Communication</li>
                    <li>Team Work</li>
                    <li>Leadership</li>
                    <li>Curious Learner</li>
                    <li>Adaptable</li>
                    <li>Creative Problem Solver</li>
                    <li>Mentorship</li>
                    <li>Organized</li>
                    <li>Time Management</li> 
                </ul>
            </div>
        </div>
    );
}

export default Skills;