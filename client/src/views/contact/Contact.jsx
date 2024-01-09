import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
// import { FaRegCopy } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";

import "./Contact.css";

const Contact = () => {
  const handlerNotification = (name) => {
    toast.success(`El ${name} fue copiado al portapapeles`, {
      style: {
        padding: "16px",
        color: "var(--text)",
        backgroundColor: "var(--base-color)",
      },
      iconTheme: {
        primary: "var(--background-color)",
      },
      position: "top-right",
    });
  };

  return (
    <footer className="container-fluid py-3" id="contact">
      <h5>Contacto</h5>
      <div className="container d-flex flex-wrap justify-content-center">
        {/* linkedin */}
        <div className="mx-3">
          <p>
            <a
              href="https://www.linkedin.com/in/lucas-escudero-54195322b/"
              target="_blank"
              id="contact-text"
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
              target="_blank"
              id="contact-text"
            >
              <IoLogoGithub size={30} /> GitHub
            </a>
          </p>
        </div>
        <div className="mx-3">
          <CopyToClipboard text="lucasescudero5629@gmail.com">
            <p
              className="mb-0 d-inline"
              onClick={() => handlerNotification("email")}
              id="contact-text"
            >
              <CgMail size={30} /> lucasescudero5629@gmail.com{" "}
              {/* <FaRegCopy size={20} /> */}
            </p>
          </CopyToClipboard>
        </div>
        {/* telephone */}
        <div className="mx-3">
          <CopyToClipboard text="+54 11 5512-8046">
            <p
              className="mb-0 d-inline"
              onClick={() => handlerNotification("número de teléfono")}
              id="contact-text"
            >
              <BsFillTelephoneFill size={20} /> +54 11 5512-8046{" "}
              {/* <FaRegCopy size={20} /> */}
            </p>
          </CopyToClipboard>
        </div>
      </div>
      <div
        className="my-2"
        style={{ borderTop: `1px solid var(--border)` }}
      ></div>
      <p>© Copyright 2024. Lucas Escudero</p>
    </footer>
  );
};

export default Contact;
