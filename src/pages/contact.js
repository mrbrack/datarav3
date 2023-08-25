import { Section, Button } from "@/components";
import Image from "next/image";
import { useState } from "react";
import { NextSeo } from "next-seo";

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
      <NextSeo
        title="contact | datarav3: creative technology and generative art"
        description="I'm always keen to hear from like-minded people. Drop me a message to schedule a coffee/call."
        canonical="https://www.datarav3.art/contact"
      />
      <Section
        type="header-page"
        img="/home_back.png"
        alt="hundres of purple, green and blue dots styled in the shape of a wave"
      >
        contact
      </Section>
      <Section type="two-column-top">
        <div>
          <Image
            src="/datarav3_contact_alt.jpg"
            alt="Nigel Fryatt wearing a white checked shirt looking at a presentation on a television"
            width="1080"
            height="1080"
            priority
          />
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
                <Button id="submit-button" type="submit">
                  submit
                </Button>
              </p>
            </form>
          )}
        </div>
      </Section>
    </>
  );
};

export default Contact;
