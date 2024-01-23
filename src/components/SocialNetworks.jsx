import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/ricardo-barbosa-rodrigues/' },
  { name: 'github', icon: <FaGithub />, link: 'https://www.github.com/Cadozo' },
  { name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/cadozo' },
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        <a href={network.link} className='social-btn' id={network.name} key={network.name} target='_blank'>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
