import { Section } from "@/components";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";

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
          src="/datarav3_about_me_alt.jpg"
          alt="Nigel Fryatt dressed in a white checked shirt standing in front of blurred windows"
          width="1080"
          height="1080"
          ObjectFit="contain"
          priority
        />
        <div className="inner-container">
          <p>Generative artist and freelance web developer. </p>
          <p>
            I use creative programming to explore the intersection between
            creativity, technology and human expression. I also facilitate
            workshops covering the topics of ethical marketing, future
            technologies, artificial intelligence ethics and website design.
          </p>
          <p>
            My artworks find their roots in: the spectacle, environmental
            concern, ethics, nostalgic technologies and electronic music.
          </p>
          <p>
            I am based in Bristol, UK and work out of Bath Spa University&apos;s
            EMERGE creative studio where I am a mentor in Creative Media.
          </p>
          <p>
            I&apos;m really interested in developing collaborations with artists
            working in other mediums.
            {<Link href="/contact"> Get in touch </Link>}
            if you&apos;ve got an idea you&apos;d like to explore!
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
