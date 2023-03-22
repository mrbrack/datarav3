import { Section, Button } from "@/components";
import Image from "next/image";

const Contact = () => {

    async function handleOnSubmit(e) {
      e.preventDefault();

      const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
          if (!field.name) {
            return;
          }
          formData[field.name] = field.value;
        });

        console.log(formData);
    }

    return (
    <Section type="two-column">
        <Image
          src="/datarav3_contact.jpg"
          alt="Nigel Fryatt working in the EMERGE creative studio at Sion Hill, Bath."
          width="1080"
          height="1080"
        />
        <div className="inner-container">
          <style jsx> {`

            form {
              max-width: 100%;
              width: 100%;
            }

            label {
              display: block;
              margin-bottom: .5rem;
            }

            input, textarea {
              box-sizing: border-box;
              width: 100% !important;
              min-height: 2rem;
              font-family: "Poppins", sans-serif;
              font-size: 18px;
              padding: .5rem 1rem;
              border: none;
            }

            input:focus, textarea:focus {
              outline: none !important;
              border: 1px solid #FF99CF;
            }

            input::-webkit-input-placeholder { /* WebKit browsers */
              padding-left: 0rem;
              margin-left: 0rem;
            }
            
            input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
              padding-left: 0rem;
              margin-left: 0rem;
            }

            input::-moz-placeholder { /* Mozilla Firefox 19+ */
              padding-left: 0rem;
              margin-left: 0rem;
            }
            
            input:-ms-input-placeholder { /* Internet Explorer 10+ */
              padding-left: 0rem;
              margin-left: 0rem;
            }

            textarea {
              padding: 1rem 1rem;
            }

            button {
              width: 100%;
              background: #dbff99;
              padding: 0.5em 2em;
              font-weight: 500;
              font-family: "Poppins", sans-serif;
              font-size: 1.1rem;
              transition: all 0.3s;
              cursor: pointer;
              color: black;
            }

            button:hover {
              background: #dbff99;
              opacity: 0.8;
              transition: opacity 0.3s;
            }

            p {
              margin-bottom: 1rem;
            }
          `}
          </style>
        <form method="post" className="contact_form" onSubmit={handleOnSubmit}>
        <p>
        <label htmlFor="name">name</label>
        <input type="text" class="form-control" id="name" placeholder="  name" name="name" value="" required />
        </p>
        <p>
        <label htmlFor="email">email</label>
        <input type="email" class="form-control" id="email" placeholder="  email" name="email" value="" required />
        </p>
        <p>
        <label htmlFor="message">message</label>
        <textarea class="form-control-text" rows="10" placeholder="  message" name="message" required></textarea>
        </p>
        <p>
        <button id="submit-button" type="submit" value="SEND">submit</button>
        </p>
        </form>
        </div>
    </Section>
    )
}

export default Contact