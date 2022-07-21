import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { contact,about } from '../../portfolio';
import './Contact.css';

const Contact = () => {
  if (!contact.email) return null
  const {social } = about

  return (
    <section className='section contact center' id='contact' style={{paddingTop:"138px"}}>
      <h2 className='section__title'>Contact</h2>
      <div className='contact_section'>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                target='_blank'
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
    </section>
  )
}

export default Contact
