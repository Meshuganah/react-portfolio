import { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            title: 'Expense Tracker',
            category: 'Full Stack',
            description: 'Basic full stack application I worked on. Uses Mongodb and Mongoose. Allows users to create accounts, and track monthly expenses through a user friendly front end GUI.',
            photo: 'expenseTracker.png',
            repo: 'https://github.com/zachburkhart/invoice-tracker',
            liveLink: 'https://fast-plains-66827.herokuapp.com/'
        },
        {
            title: 'Sound Wavez',
            category: 'Front End API Showcase',
            description: 'A front end app, showcasing the use of API calls in order to randomly generate an image, based on a musical artist.',
            photo: 'Soundwavez.JPG',
            repo: 'https://github.com/FSchmidt292/project-one',
            liveLink: 'https://fschmidt292.github.io/project-one/'
        },
        {
            title: 'NoSQL Social Network API',
            category: 'NoSQL Back End',
            description: 'Back end framework for a social network app, using MongoDb and Mongoose. This project has no front end, and must be viewing either in repo, or by creating testing routes in a program such as Insomnia.',
            photo: 'socialNetworkAPI.JPG',
            repo: 'https://github.com/Meshuganah/noSQLSocialNetworkApi',
            liveLink: ''
        },
        {
            title: 'Tech Blog',
            category: 'Full Stack SQL',
            description: 'Full stack SQL application using a basic HTML front end for GUI. Users may create an account, and leave posts, which will be displayed on the homepage.',
            photo: 'techBlog.JPG',
            repo: 'https://github.com/Meshuganah/tech-blog',
            liveLink: 'https://mysterious-bayou-64063.herokuapp.com/'
        },
        {
            title: 'Weather Dashboard',
            category: 'Front End API Call/Dynamic JS Generation',
            description: 'This app I am particularly proud of, even if it is extremely basic. The makes calls to a weather API to give users a forecast in a searched city. What makes this app special is that just about everything in it is generated dynamically with vanilla JS.',
            photo: 'Weather-Dashboard.JPG',
            repo: 'https://github.com/Meshuganah/weather-dashboard',
            liveLink: 'https://meshuganah.github.io/weather-dashboard/'
        },
        {
            title: 'Password Generator',
            category: 'Basic JS',
            description: 'An early project that will generate a password for users using JS.',
            photo: 'Password-gen.JPG',
            repo: 'https://github.com/Meshuganah/password-gen',
            liveLink: 'https://meshuganah.github.io/password-gen/'
        }
    ])

    return (
        <div>
            <h3>Projects</h3>
            <div>
                {projects.map((project) => (
                    <div>
                        <h4>{project.title}</h4>
                        <h5>{project.category}</h5>
                        <img 
                            src={require(`../../assets/projects/${project.photo}`)}
                            alt='Project Demo'
                        />
                        <p>{project.description}</p>
                        <a href={project.repo}>GitHub</a>
                        <a href={project.liveLink}>Project Page</a>
                    </div>
                ))}               
            </div> 
        </div>
    );
};

export default Project;