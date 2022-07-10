

function Navigation(props) {
    const {
        setNavSelected
    } = props;
    return(
        <nav>
            <ul className='d-flex flex-row navbar-nav'>
                <li 
                    className='nav-item mx-3 ' 
                    onClick={() => setNavSelected('About')}>
                        About
                </li>
                <li 
                    className='nav-item mx-3' 
                    onClick={() => setNavSelected('Project')}>
                        Project
                </li>
                <li 
                    className='nav-item mx-3' 
                    onClick={() => setNavSelected('Resume')}>
                        Resume
                </li>
                <li 
                    className='nav-item mx-3' 
                    onClick={() => setNavSelected('Contact')}>
                        Contact
                </li>
            </ul>

        </nav>
    );
};

export default Navigation;