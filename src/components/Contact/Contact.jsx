/*
import { ContactStyle, ContactFormStyle, ContactStyleWrapper } from "./Contact.style";
import React, { forwardRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = forwardRef((props, ref) => {
    const [name, setname] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [successMessge, setSuccessMessge] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [subjectError, setsubjectError] = useState('');
    const [bodyError, setbodyError] = useState('');
    const [isValid, setIsValid] = useState(false);

    function onNameChange(event) {
        setname(event.target.value)
    };

    function onSubjectChange(event) {
        setSubject(event.target.value)
    };

    function onEmailChange(event) {
        setEmail(event.target.value)
    };

    function onBodyChange(event) {
        setBody(event.target.value) 
    };

    useEffect(() => {
        const handleBlur = (event) => {
            const input = event.target;
            if (input.checkValidity()) {
                input.classList.add('valid');
                input.classList.remove('invalid');
            } else {
                input.classList.add('invalid');
                input.classList.remove('valid');
            }
        };

        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', handleBlur);
        });

        return () => {
            inputs.forEach(input => {
                input.removeEventListener('blur', handleBlur);
            });
        };
    }, []);

    const onFormSubmit = async (event) => {
        event.preventDefault();
        
        const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        let valid = true;
  
        if (!emailPattern.test(email)) {
          setEmailError("* Ugyldig email addresse");
          valid = false;
        } else {
          setEmailError("");
        }
  
        if (name.length < 3) {
          setNameError("* navn må være minst 2 bokstaver langt");
          valid = false;
        } else {
          setNameError("");
        }
  
        if (subject.length < 3) {
          setsubjectError("* Subjekt må være minst 3 bokstaver langt");
          valid = false;
        } else {
          setsubjectError("");
        }
  
        if (body.length < 15) {
          setbodyError("* Meldingen må inneholde minst 15 bokstaver"); 
          valid = false;
        } else {
          setbodyError("");
        }

        setIsValid(valid);
  
        if (valid) {
          
          console.log({ name: name, subject, email, body });
        
            try {
                setIsError(false);
                setIsLoading(true);
                const payload = { name, subject, email, body }; 
                const backendUrl = 'http://localhost:3001/send'; 
    
                const response = await fetch(backendUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
    
                if (response.ok) {
                    setSuccessMessge("Meldingen har blitt sendt og du vil motta svar innen 48 timer");
                    setIsError(false);
                    setname('');
                    setSubject('');
                    setEmail('');
                    setBody('');
                } else {
                    setIsError(true); 
                    setErrorMessage("En feil oppstod, vennligst prøv igjen senere.");
                    throw new Error('Network response was not ok');
                }

                try {
                    const data = await response.json();
                    console.log('Success:', data);
                } catch (jsonError) {
                    console.error('Error parsing JSON:', jsonError);
                    setIsError(true);
                    setErrorMessage("En feil oppstod parsing json, vennligst prøv igjen senere.");
                }

            } catch (error) {
                console.error('Error:', error);
                setIsError(true);
                setErrorMessage("En feil oppstod, vennligst prøv igjen senere.");
            } finally {
                setIsLoading(false); 
            }
        }
        
      }
  
    return (
        <ContactStyleWrapper ref={ref}>
            <ContactStyle>
                <h1>Kontakt Oss</h1>
                <ContactFormStyle>
                    <h2>Send Oss En Melding</h2>
                    <label htmlFor="name">Navn</label> 
                    <input id="name" 
                    value={name}
                    placeholder="Ditt navn.."
                    onChange={onNameChange} 
                    required
                    />
                    <span>{nameError}</span>

                    <label htmlFor="subject">Subjekt</label> 
                    <input id="subject"
                    value={subject}
                    placeholder="Subjekt.."
                    onChange={onSubjectChange}
                    required
                    />
                    <span>{subjectError}</span> 

                    <label htmlFor="email">Email</label>
                    <input id="email" 
                    value={email}
                    placeholder="Din email.."
                    onChange={onEmailChange}
                    required
                    />
                    <span>{emailError}</span> 

                    <label htmlFor="body">Melding</label> 
                    <textarea id="body" 
                    value={body}
                    placeholder="Din melding.."
                    onChange={onBodyChange}
                    required
                    />
                    <span>{bodyError}</span> 
                    {successMessge && <span>{successMessge}</span>}  
                    {errorMessage && <span>{errorMessage}</span>}

                    <button type="submit" onClick={onFormSubmit} disabled={isLoading}>
                        {isLoading ? 'Sender...' : 'Send'}  
                    </button>
                </ContactFormStyle> 
                <div className="kontakt">
                    <div>
                      <div>
                        <p>
                          <a href="tel:93271886"> 
                            <FontAwesomeIcon icon={faPhone} /> 93271886
                          </a>
                        </p>
                      </div>

                      <div>
                        <p>
                          <a href="https://www.instagram.com/trondheimboligstyling/?igsh=MWZhMW1hNm14OGY5bQ%3D%3D" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} /> Trondheimboligstyling
                          </a>  
                        </p>
                      </div>
                    </div>
                </div>
            </ContactStyle>
        </ContactStyleWrapper>
    )
})
*/


import { ContactStyle, ContactFormStyle, ContactStyleWrapper } from "./Contact.style";
import React, { forwardRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = forwardRef((props, ref) => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const [errors, setErrors] = useState({
        name: '',
        subject: '',
        email: '',
        body: '',
    });

    const [touched, setTouched] = useState({
        name: false,
        subject: false,
        email: false,
        body: false,
    });

    const validateInput = (name, value) => {
        switch (name) {
            case 'name':
                return value.length >= 3 ? '' : "* navn må være minst 2 bokstaver langt";
            case 'subject':
                return value.length >= 3 ? '' : "* Subjekt må være minst 3 bokstaver langt";
            case 'email':
                const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
                return emailPattern.test(value) ? '' : "* Ugyldig email addresse";
            case 'body':
                return value.length >= 15 ? '' : "* Meldingen må inneholde minst 15 bokstaver";
            default:
                return '';
        }
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case 'name':
                setName(value);
                break;
            case 'subject':
                setSubject(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'body':
                setBody(value);
                break;
            default:
                break;
        }
    };

    const handleBlur = (event) => {
        const { id, value } = event.target;
        const errorMessage = validateInput(id, value);

        setTouched({ ...touched, [id]: true });
        setErrors({ ...errors, [id]: errorMessage });
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();

        const newErrors = {
            name: validateInput('name', name),
            subject: validateInput('subject', subject),
            email: validateInput('email', email),
            body: validateInput('body', body),
        };

        setErrors(newErrors);

        const isValidForm = Object.values(newErrors).every(error => !error);

        if (isValidForm) {
            try {
                setIsError(false);
                setIsLoading(true);
                
                const payload = { name, subject, email, body };
                const backendUrl = 'http://localhost:3001/send';

                const response = await fetch(backendUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (response.ok) {
                    setSuccessMessage("Meldingen har blitt sendt og du vil motta svar innen 48 timer");
                    setIsError(false);
                    setName('');
                    setSubject('');
                    setEmail('');
                    setBody('');
                    setTouched({ name: false, subject: false, email: false, body: false });
                } else {
                    setIsError(true);
                    setErrorMessage("En feil oppstod, vennligst prøv igjen senere.");
                    throw new Error('Network response was not ok');
                }

            } catch (error) {
                console.error('Error:', error);
                setIsError(true);
                setErrorMessage("En feil oppstod, vennligst prøv igjen senere.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <ContactStyleWrapper ref={ref}>
            <ContactStyle>
                <h1>Kontakt Oss</h1>
                <ContactFormStyle>
                    <h2>Send Oss En Melding</h2>
                    <label htmlFor="name">Navn</label>
                    <input
                        id="name"
                        value={name}
                        placeholder="Ditt navn.."
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={touched.name && errors.name === '' ? 'valid' : touched.name ? 'invalid' : ''}
                        autoComplete="name"
                    />
                    <span>{touched.name && errors.name}</span>

                    <label htmlFor="subject">Subjekt</label>
                    <input
                        id="subject"
                        value={subject}
                        placeholder="Subjekt.."
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={touched.subject && errors.subject === '' ? 'valid' : touched.subject ? 'invalid' : ''}
                    />
                    <span>{touched.subject && errors.subject}</span>

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        value={email}
                        placeholder="Din email.."
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={touched.email && errors.email === '' ? 'valid' : touched.email ? 'invalid' : ''}
                        autoComplete="email"
                        
                    />
                    <span>{touched.email && errors.email}</span>

                    <label htmlFor="body">Melding</label>
                    <textarea
                        id="body"
                        value={body}
                        placeholder="Din melding.."
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={touched.body && errors.body === '' ? 'valid' : touched.body ? 'invalid' : ''}
                    />
                    <span>{touched.body && errors.body}</span>
                    {successMessage && <span>{successMessage}</span>}
                    {errorMessage && <span>{errorMessage}</span>}

                    <button type="submit" onClick={onFormSubmit} disabled={isLoading}>
                        {isLoading ? 'Sender...' : 'Send'}
                    </button>
                </ContactFormStyle>
                <div className="kontakt">
                    <div>
                      <div>
                        <p>
                          <a>
                            <FontAwesomeIcon icon={faPhone} /> 93271886
                          </a>
                        </p>
                      </div>

                      <div>
                        <p>
                          <a href="https://www.instagram.com/trondheimboligstyling/?igsh=MWZhMW1hNm14OGY5bQ%3D%3D" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} /> Trondheimboligstyling
                          </a>  
                        </p>
                      </div>
                    </div>
                </div>
            </ContactStyle>
        </ContactStyleWrapper>
    );
});

