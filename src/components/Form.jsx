import { useState } from 'react';

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());}

function Form() {

    const [userName, setUserName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        switch (inputType) {
            case 'userName':
                setUserName(inputValue);
                break;
            case 'email':
                setEmail(inputValue);
                break;
            case 'message':
                setMessage(inputValue);
                break;
                default:
                console.error('unknown key', inputType)
                break;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            return;
        }
        if (!checkMessage(message)) {
            setErrorMessage(
                `Message is required`
            );
            return;
        }
        setUserName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div className="container text-center">
        <h1>Hello {userName}</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
          />
          <button type="submit">
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
}

export default Form;