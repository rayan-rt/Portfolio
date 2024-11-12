import { MdMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const ContactLinkItem = ({ name, url }) => {
  const [isDownload, setIsDownload] = useState(false);

  let IconComponent = null;
  let gradientStyle = null;

  // Set icon and gradient style based on the name
  switch (name) {
    case "Email":
      IconComponent = MdMailOutline;
      gradientStyle = {
        background: "linear-gradient(120deg,  #ffeb3b, #2196f3)",
      };
      break;
    case "LinkedIn":
      IconComponent = CiLinkedin;
      gradientStyle = {
        background: "linear-gradient(120deg, #0077b5, #005582)",
      };
      break;
    case "Github":
      IconComponent = FaGithub;
      gradientStyle = {
        background: "linear-gradient(120deg, #333, #555)",
      };
      break;
    case "Instagram":
      IconComponent = FaInstagram;
      gradientStyle = {
        background:
          "linear-gradient(120deg, #f58529, #dd2a7b, #8134af, #515bd4)",
      };
      break;
    case "Résumé":
      IconComponent = IoDocumentTextOutline;
      gradientStyle = {
        background: "linear-gradient(120deg, #4caf50, #81c784)",
      };
      break;
    default:
      IconComponent = null;
      gradientStyle = { background: "white" };
  }

  // Use useEffect to set isDownload based on the name prop
  useEffect(() => {
    if (name === "Résumé") {
      setIsDownload(true);
    } else {
      setIsDownload(false);
    }
  }, [name]);

  return (
    <a
      href={url}
      {...(isDownload ? { download: true } : {})}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center gap-2 p-4 lg:text-lg font-semibold rounded-lg duration-300 hover:scale-110 text-white"
      style={gradientStyle}
    >
      {IconComponent && <IconComponent size={30} />}
      <h3 className="font-semibold">{name}</h3>
    </a>
  );
};

export default ContactLinkItem;
