function About () {
    return (
        <div>
            <h3>About Me</h3>
            <p>
                Hello, and welcome to my portfolio! I began my coding journey late 2021 by taking a  3 month Coursera course on Java. After finishing the course
                I decided I needed more, and so enrolled in a full stack web development boot camp through Case Western Reserve University. The last 6 months have been quite the journey, and I am about to graduate July 27th 2022.
                One of my biggest passions outside of programming is rock climbing. And believe it or not, I believe the two to be related. As a rock climber I push msyelf to complete routes, or "problems", named so because not only
                are they physically taxing, but also require unique solutions that one cannot brute force their way through. No matter the difficulty of the problem, I will keep throwing myself at it, until I have conquered it and reached it's summit!
                The same can be said for the problems that are faced every day by software developers. So if you or your company has a problem that needs solved by a developer, go ahead and check out my resume, and the rest of my portfolio. 
                I just might be the solution you need.   
            </p>
            <img src={require('../../assets/profile.JPG')} alt="Josh Looking his best in a suit and tie"></img>
        </div>
    );
}

export default About;