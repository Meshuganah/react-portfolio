function Contact() {
    return (
        <section>
            <h3>Contact Me</h3>
            <form>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' row='5'></textarea>
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;