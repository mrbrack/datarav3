import { Section, Button } from "@/components";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

// 17:01 https://www.youtube.com/watch?v=Te4ESNxq_xU

const Contact = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.status === 200) {
        setSubmitted(true);
      }
    } catch (err) {
      console.log("ERR", err);
    }
  };

  return (
    <>
      <Head>
        <title>
          datarav3 - contact - generative artist based in Bristol, UK.
        </title>
        <meta
          name="description"
          content="I'm always keen to hear from like-minded people. Drop me a message to schedule a coffee/call."
        />
        <link rel="canonical" href="https://dararav3.art/contact" />
      </Head>
      <Section type="two-column-top">
        <div>
          <Image
            src="/datarav3_contact.jpg"
            alt="Nigel Fryatt working in the EMERGE creative studio at Sion Hill, Bath."
            width="1080"
            height="1080"
          />
          <small className="extra">Image © Bath Spa University (Niklas Aarre)</small>
        </div>
        <div className="inner-container">
          {isSubmitted ? (
            <h3 className="center">Thanks for your message!</h3>
          ) : (
            <form className="contact_form" onSubmit={onSubmit}>
              <p>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <label htmlFor="message">message</label>
                <textarea
                  class="form-control-text"
                  rows="10"
                  placeholder="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </p>
              <p>
                <button id="submit-button" type="submit">
                  submit
                </button>
              </p>
            </form>
          )}
        </div>
      </Section>
    </>
  );
};

export default Contact;
