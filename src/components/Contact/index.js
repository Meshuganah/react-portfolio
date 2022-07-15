import { useState} from 'react';
import { validateEmail } from '../../utils/index';

function Contact() {
    const [formState, setFormState] = useState( { name: '', email: '', message: ''});
    const { name,email,message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
            } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
            }

            if (!errorMessage) {
                setFormState({...formState, [e.target.name]: e.target.value });
            }  
        }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section>
            <h3 className="text-light text-center">Contact Me</h3>
            <form className="text-light text-center" action="https://formsubmit.co/kleinjjosh74@gmail.com" method="POST" onSubmit={handleSubmit}>
                <div className='my-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' onBlur={handleChange} defaultValue={name}/>
                </div>
                <div className='my-2'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' onBlur={handleChange} defaultValue={email} />
                </div>
                <div className='my-2'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' row='5' onBlur={handleChange} defaultValue={message}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className='text-light'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;