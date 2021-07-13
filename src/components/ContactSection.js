import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faVk, faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {
    return (
        <section className="main-section responsive-div" id="bodyDiv__contacts">
          <h2 className="responsive-text">So, what do you want to tell me?</h2>
          <div id="bodyDiv__contacts__contacts-wrapper">
            <div id="contacts-wrapper__grid_holder">
              <span className="contacts-info"><a href="https://vk.com/id232348886"><FontAwesomeIcon icon={faVk}/><span>VK</span></a></span>
              <span className="contacts-info"><a href="mailto:z12zt@bk.ru"><FontAwesomeIcon icon={faAt}/><span>Mail</span></a></span>
              <span className="contacts-info"><a href="https://github.com/z12zt0"><FontAwesomeIcon icon={faGithub}/><span>Github</span></a></span>
              <span className="contacts-info"><a href="https://www.freecodecamp.org/fcc7c80f0b9-3b4f-42ae-a1ba-330515ddd43c"><FontAwesomeIcon icon={faFreeCodeCamp}/><span>FCC</span></a></span>
            </div>
          </div>
          
        </section>
    )
};

export default ContactSection;