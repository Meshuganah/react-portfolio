

function Navigation(props) {
    const {
        navSelected,
        setNavSelected
    } = props;
    return(
        <nav>
            <ul>
                <li onClick={() => setNavSelected('About')}>About</li>
                <li onClick={() => setNavSelected('Project')}>Project</li>
                <li onClick={() => setNavSelected('Resume')}>Resume</li>
                <li onClick={() => setNavSelected('Contact')}>Contact</li>
            </ul>

        </nav>
    );
};

export default Navigation;