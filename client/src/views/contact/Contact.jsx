import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const handlerNotification = (name) => {
    toast.success(`El ${name} fue copiado con exito!`, {
      style: {
        padding: "16px",
        color: "#373a3c",
      },
      iconTheme: {
        primary: "#2780e3",
      },
      position: "top-right",
    });
  };

  return (
    <footer className="container-fluid bg-primary py-3" id="contact">
      <h5>Contacto</h5>
      <div className="container">
        <div className="mb-3">
          <div className="d-flex justify-content-center">
            {/* linkedin */}
            <div className="mx-1">
              <a
                href="https://www.linkedin.com/in/lucas-escudero-54195322b/"
                style={{ color: "#373a3c" }}
                target="_blank"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            {/* github */}
            <div className="mx-1">
              <a
                href="https://github.com/LucasAEscudero"
                style={{ color: "#373a3c" }}
                target="_blank"
              >
                <IoLogoGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div>
          {/* email */}
          <div>
            <CopyToClipboard text="lucasescudero5629@gmail.com">
              <p
                className="mb-0 d-inline"
                id="info"
                onClick={() => handlerNotification("email")}
              >
                <CgMail size={25} /> lucasescudero5629@gmail.com{" "}
              </p>
            </CopyToClipboard>
          </div>
          {/* telephone */}
          <div>
            <CopyToClipboard text="+54 11 5512-8046">
              <p
                className="mb-0 d-inline"
                id="info"
                onClick={() => handlerNotification("telefono")}
              >
                <BsFillTelephoneFill size={20} /> +54 11 5512-8046
              </p>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
