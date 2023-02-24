import React, { useContext } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
      <form action="https://api.web3forms.com/submit" method="POST" id="form">
      <fieldset style ={{display: 'flex', flexDirection: 'column', borderColor: 'black'}}>

        {/* <form ref={form} onSubmit={sendEmail}> */}
        <input type="hidden" name="access_key" value="9c09eac5-d891-4887-9495-67713750b19a" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <input type="checkbox" name="botcheck" id="" style={{display: 'none'}} />
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email" required/>
          <textarea name="message" className="user" placeholder="Message"/>
          <button type="submit"  className="button">   Send 
            </button>
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
      </fieldset>
        </form>

      </div>
    </div>
  );
};

export default Contact;
