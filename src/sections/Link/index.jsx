import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Link = () => {
  const handleClick = (link) => {
    window.open(link);
  };
  const handleClickSendEmail = () => {
    const gmailUrl = "https://mail.google.com/mail/?view=cm&to=Namprung16122547@gmail.com";
    window.open(gmailUrl, "_blank");
  };
  return (
    <div className="flex items-end gap-x-4 text-2xl">
      <FontAwesomeIcon
        onClick={() => handleClick("https://github.com/NpSoHs")}
        className="hover:scale-125 duration-200 hover:text-primaryTitle"
        icon={faGithub}
      />
      <FontAwesomeIcon
        onClick={() => handleClickSendEmail()}
        className="hover:scale-125 duration-200 hover:text-primaryTitle"
        icon={faGoogle}
      />
      <FontAwesomeIcon
        onClick={() => handleClick("https://github.com/NpSoHs")}
        className="hover:scale-125 duration-200 hover:text-primaryTitle"
        icon={faLinkedin}
      />
    </div>
  );
};

export default Link;
