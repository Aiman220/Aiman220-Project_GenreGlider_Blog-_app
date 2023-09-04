import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
    <section id='Footer'className={classes.body}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>Welcome to GenreGlider, your passport to a diverse world of captivating content. Our mission is to provide a platform where knowledge, creativity, and passion converge. 

GenreGlider is more than just a blog app; it's a portal to exploration and inspiration. With an array of meticulously curated categories, from tech innovations to travel diaries, we're here to spark your curiosity and fuel your interests.!
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 455 745</span>
          <span>Facebook: GenreGlider</span>
          <span>Twitter: GenreGlider</span>
        </div>
        <div> <div className={classes.col}>
          <h2>Some Links</h2>
          <ul>
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>

          </ul>
        </div></div>
        
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Europe</span>
          <span>Country: Bulgaria</span>
          <span>Current Location: Bulgaria</span>
        </div>
      </div>
      <div class= {classes. copyright}>
        <p>Copyright &copy; 2023 Aiman Developer</p>
      </div>
    </section>
    </footer>
  )
}

export default Footer