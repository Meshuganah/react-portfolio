import { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            title: 'Go Together',
            category: 'Full Stack MERN Application',
            description: 'Full stack web application using the MERN technology stack. Users may search for specific events, venues, or even cities for events, and add them to a calendar so they may see what they have going on in the future. There is also a social media aspect where users may search other users and see what events they have added to their calendar, and decide if they would like to go to that event as well.',
            photo: 'go-together.JPG',
            repo: 'https://github.com/Meshuganah/go-together',
            liveLink: 'https://we-go-together.herokuapp.com/'
        },
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
        // {
        //     title: 'Password Generator',
        //     category: 'Basic JS',
        //     description: 'An early project that will generate a password for users using JS.',
        //     photo: 'Password-gen.JPG',
        //     repo: 'https://github.com/Meshuganah/password-gen',
        //     liveLink: 'https://meshuganah.github.io/password-gen/'
        // }
    ])

    return (
        <div className='text-light'>
            <h3 className='text-center'>Projects</h3>
            <div className='container d-flex flex-wrap'>
                {projects.map((project) => (
                    <div className='card text-dark my-3 mx-auto col-4 '>
                        <img 
                            className='card-img-top img'
                            src={require(`../../assets/projects/${project.photo}`)}
                            alt='Project Demo'
                        />
                        <h4 className='card-title text-center'>{project.title}</h4>
                        <h5 className='card-subtitle text-center'>{project.category}</h5>
                        <div className='card-body'>     
                            <p className='card-text'>{project.description}</p>
                                <button className='btn btn-primary mx-1'><a className='text-light' href={project.repo}>GitHub</a></button>
                                <button className='btn btn-primary mx-1'><a className='text-light' href={project.liveLink}>Project Page</a></button>                      
                        </div>
                    </div>
                ))}               
            </div> 
        </div>
    );
};

export default Project;