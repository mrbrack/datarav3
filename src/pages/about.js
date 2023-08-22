import { Section } from "@/components";
import Image from "next/image";
import { NextSeo } from "next-seo";

const About = () => {
  return (
    <>
      <NextSeo
        title="about | datarav3: creative technology and generative art"
        description="Using creative programming to explore the intersection between technology and human expression."
        canonical="https://www.datarav3.art/about"
      />
      <Section
        type="header-page"
        img="/home_back.png"
        alt="hundres of purple, green and blue dots styled in the shape of a wave"
      >
        about
      </Section>
      <Section type="two-column-top">
        <Image
          src="/datarav3_about_me.jpg"
          alt="Nigel Fryatt working in the EMERGE creative studio at Sion Hill, Bath."
          width="1080"
          height="1080"
        />
        <div className="inner-container">
          <p>
            I use creative programming to explore the intersection between
            technology and human expression.{" "}
          </p>
          <p>
            Through my work, I question whether code can create experiences that
            allow us to access feelings that are intimate and human. Broadly, my
            work acts as a criticism of the fascination capitalism has with
            technology.
          </p>

          <p>
            I started my programming journey at the age of thirteen, inspired by
            my father who was forever tinkering with computers and servers
            throughout my childhood. Now, I split my time between making
            websites as a freelance web developer, delivering workshops and
            creating generative art. I am based in Bristol, UK and work out of
            Bath Spa University&apos;s EMERGE creative studio where I am a
            mentor in Creative Media.
          </p>
          <p>
            “Algorithms have the potential to evoke powerful and intimate
            emotions, we just don&apos;t talk about it enough. Or, perhaps, the
            types of conversations programmers tend to have about algorithms
            don&apos;t afford people to think in those ways. Yes, computer
            science is important, but so is art.”
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
