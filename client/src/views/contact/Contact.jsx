import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import "./Contact.css";

const Contact = ({ isDarkMode }) => {
  const handlerNotification = (name) => {
    toast.success(`El ${name} fue copiado al portapapeles`, {
      style: {
        padding: "16px",
        color: `${isDarkMode ? "white" : "#373a3c"}`,
        backgroundColor: `${isDarkMode ? "#373a3c" : "white"}`,
      },
      iconTheme: {
        primary: `${isDarkMode ? "#102f5c" : "#336fd6"}`,
      },
      position: "top-right",
    });
  };

  return (
    <footer
      className="container-fluid py-3"
      id="contact"
      style={{ backgroundColor: `${isDarkMode ? "#102f5c" : "#336fd6"}` }}
    >
      <h5>Contacto</h5>
      <div className="container d-flex flex-wrap justify-content-center">
        {/* linkedin */}
        <div className="mx-3">
          <p>
            <a
              href="https://www.linkedin.com/in/lucas-escudero-54195322b/"
              style={{ color: `${isDarkMode ? "white" : "#373a3c"}` }}
              target="_blank"
            >
              <FaLinkedin size={30} /> LinkedIn
            </a>
          </p>
        </div>
        {/* github */}
        <div className="mx-3">
          <p>
            <a
              href="https://github.com/LucasAEscudero"
              style={{ color: `${isDarkMode ? "white" : "#373a3c"}` }}
              target="_blank"
            >
              <IoLogoGithub size={30} /> GitHub
            </a>
          </p>
        </div>
        <div className="mx-3">
          <CopyToClipboard text="lucasescudero5629@gmail.com">
            <p
              className="mb-0 d-inline"
              id="info"
              onClick={() => handlerNotification("email")}
            >
              <CgMail size={30} /> lucasescudero5629@gmail.com
            </p>
          </CopyToClipboard>
        </div>
        {/* telephone */}
        <div className="mx-3">
          <CopyToClipboard text="+54 11 5512-8046">
            <p
              className="mb-0 d-inline"
              id="info"
              onClick={() => handlerNotification("número de teléfono")}
            >
              <BsFillTelephoneFill size={20} /> +54 11 5512-8046
            </p>
          </CopyToClipboard>
        </div>
      </div>
      <div
        className="my-2"
        style={{ borderTop: `1px solid ${isDarkMode ? "white" : "#373a3c"}` }}
      ></div>
      <p>© Copyright 2024. Lucas Escudero</p>
    </footer>
  );
};

export default Contact;
