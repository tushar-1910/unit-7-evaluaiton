import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Typewriter from 'typewriter-effect';
import { about } from '../../portfolio'
import './Name.css'

const Name = () => {
    const { photo, name, role, resume, social } = about

    return (
        <div className='about center'>
            {photo && (
                <img height="200px" alt="Avatar placeholder" src={photo} />
            )}
            {name && (
                <h1>
                    Hi, I am <span className='about__name'>{name}.</span>
                </h1>
            )}

            {role && <h2 className='about__role'>
                <Typewriter
                    options={{
                        loop: true,
                        autoStart: true,
                        strings: role,
                    }}
                /></h2>}
            <div className='about__contact center'>
                {resume && (
                    <a href={resume} target="_blank" rel="noreferrer">
                        <span type='button' className='btn btn--outline'>
                            Resume
                        </span>
                    </a>
                )}

                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label='github'
                                target="_blank"
                                rel="noreferrer"
                                className='link link--icon'
                            >
                                <GitHubIcon />
                            </a>
                        )}

                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label='linkedin'
                                target="_blank"
                                rel="noreferrer"
                                className='link link--icon'
                            >
                                <LinkedInIcon />
                            </a>
                        )}
                    </>
                )}
            </div>

        </div>
    )
}

export default Name
