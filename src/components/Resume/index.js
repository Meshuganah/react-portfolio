
function Resume() {
    return(
        <div>
            <h3 className='text-light text-center'>
                <a href={require('../../assets/resume.pdf')}
                    download
                >
                Resume  
                </a>
            </h3>
        </div>

    );
};

export default Resume;