import { Section } from "@/components";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>
          datarav3 - about - generative artist based in Bristol, UK.
        </title>
        <meta
          name="description"
          content="datarav3 (Nigel Fryatt) is a generative artist who uses creative programming to discovers the intersection between technology and human emotion."
        />
        <link rel="canonical" href="https://dararav3.art/about" />
      </Head>
      <Section type="two-column-top">
        <Image
          src="/datarav3_about_me.jpg"
          alt="Nigel Fryatt working in the EMERGE creative studio at Sion Hill, Bath."
          width="1080"
          height="1080"
        />
        <div className="inner-container">
          <p>
            datarav3 (Nigel Fryatt) is a generative artist who uses creative
            programming to explore the intersection between technology and human
            emotion. Through his work, he questions whether code can create
            experiences that allow us to access feelings that are intimate and
            human. Broadly, his work acts as a criticism of the fascination
            capitalism has with technology, as he fiercely denies the world that
            this has created.
          </p>

          <p>
            datarav3 started his programming journey at the age of thirteen,
            inspired by his father who was forever tinkering with computers and
            servers throughout his childhood. Now, he splits his time between
            making websites as a freelance web developer and creating generative
            art. He is based in Bristol, UK and works out of the EMERGE creative
            studio where he is a mentor in Creative Media.
          </p>
          <p>
            “Algorithms have the potential to evoke powerful and intimate
            emotions, we just don’t talk about it enough. Or, perhaps, the types
            of conversations programmers tend to have about algorithms don’t
            afford people to think in those ways. Yes, computer science is
            important, but so is art.”
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
