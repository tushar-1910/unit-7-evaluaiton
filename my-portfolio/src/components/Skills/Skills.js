import uniqid from 'uniqid'
import Typewriter from 'typewriter-effect';
import { skills } from '../../portfolio'
import './Skills.css'

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
};

console.log(skills.skill)
const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills' style={{paddingTop:"138px"}}>
      <h2 className='section__title'>
      <Typewriter
                    options={{
                        loop: true,
                        autoStart: true,
                        strings: "SKILLS",
                    }}
                />
      </h2>
        {skills?.map((rows) => (
          <div key={rows.title}>
            <br />
            <h3>{rows.title}</h3>
            {rows.items.map((item) => (
              <div key={item.title} style={{ display: 'inline-block' }}>
                <img
                  style={styles.iconStyle}
                  src={item.icon}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        ))}
        {/* {skills.map((skill) => (
          <div>
            <img src={skill.icon} alt={skill.name} className='skills__list-item btn btn--plain' />
          </div>
        ))} */}
    </section>
  )
}

export default Skills
