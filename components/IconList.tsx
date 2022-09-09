import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBandcamp,
  faFacebook,
  faInstagram,
  faSoundcloud,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import IconLink from './IconLink';

type Props = {
  urls: Array<string>;
};

const IconList = ({ urls }: Props) => {
  const printIcons = () => {
    return urls.map((link, index) => {
      if (index === 0) {
        return (
          <IconLink key={index} link={link}>
            Official
          </IconLink>
        );
      }

      if (link.match(/bandcamp/)) {
        return (
          <IconLink key={index} link={link} className="icon">
            <FontAwesomeIcon icon={faBandcamp} />
          </IconLink>
        );
      }

      if (link.match(/facebook/)) {
        return (
          <IconLink key={index} link={link} className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </IconLink>
        );
      }

      if (link.match(/instagram/)) {
        return (
          <IconLink key={index} link={link} className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </IconLink>
        );
      }

      if (link.match(/twitter/)) {
        return (
          <IconLink key={index} link={link} className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </IconLink>
        );
      }

      if (link.match(/soundcloud/)) {
        return (
          <IconLink key={index} link={link} className="icon">
            <FontAwesomeIcon icon={faSoundcloud} />
          </IconLink>
        );
      }

      if (link.match(/youtube/)) {
        return (
          <IconLink key={index} link={link} className="icon">
            <FontAwesomeIcon icon={faYoutube} />
          </IconLink>
        );
      }
    });
  };

  return <ul className="icon-list">{printIcons()}</ul>;
};

export default IconList;
