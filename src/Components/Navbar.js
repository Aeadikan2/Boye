import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-0" src="" alt=""  />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/adeboye-bello-963b47243" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href= "https://github.com/Adeboye-lang" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href= "https://x.com/adeboyebello?s=21" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://www.instagram.com/chief_david_b" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
</div>
  </nav>
    
}

export default Navbar