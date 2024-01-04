import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <footer className="container-fluid bg-primary py-3" id="contact">
      <h5>Contacto</h5>
      <div className="container">
        <div className="row mb-3">
          <div className="d-flex justify-content-center">
            <div className="mx-1">
              <FaLinkedin size={30} />
            </div>
            <div className="mx-1">
              <IoLogoGithub size={30} />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="mb-0">
            <CgMail size={25} /> lucasescudero5629@gmail.com
          </p>
          <p>
            <BsFillTelephoneFill size={20} /> +54 11 5512-8046
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
