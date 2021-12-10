import { facebook, email, phone } from "../../img/exports";
import style from "./style.module.scss";

const contacts = [
  { icon: facebook, text: "dołącz do nas na Facebooku" },
  { icon: email, text: "sp.rekin@op.pl" },
  { icon: phone, text: "+48 502 996 448" },
];

const Footer = () => {
  return (
    <div className={style.footerSection}>
      <div className={style.contacts}>
        {contacts.map((contact) => (
          <div className={style.contact}>
            <img
              className={style.contactIcon}
              src={contact.icon}
              alt="contact"
            />
            <a href="/#" className={style.contactText}>
              {contact.text}
            </a>
          </div>
        ))}
      </div>
      <div className={style.logoContainer}>
        <div className={style.logoImg} />
        <div className={style.logoName} />
      </div>
    </div>
  );
};

export default Footer;
