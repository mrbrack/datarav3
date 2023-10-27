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
          <p>Generative artist and freelance web developer.</p>
          <p>
            I use creative programming to explore the intersection between
            creativity, technology and human expression. I also facilitate
            workshops covering the topics of ethical marketing, future
            technologies, artificial intelligence ethics and website
            development.
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
      <Section type="block" className="portfolio">
        <h3>Exhibitions, Workshops and Performances</h3>
        <ul>
          <li>
            Exhibition. Selected. Generative Art. Print. “alternate spirals
            {" (moon)"}”. Bath Open Art Prize. 44AD artspace, Bath. 12th to 28th
            October 2023.
          </li>
          <li>
            Exhibition/Performance. Selected. Performance Art/Live Coding. “for
            them” live coding. EMERGE Showcase 2023, Bath. 18th October 2023.
          </li>
          <li>
            Workshop. Co-Facilitator with Patent Attorney Judith Coghlan
            {" (Script IP)"}. “From Algorithms to Artefacts”. Bath Digital
            Festival. Carpenter House, Bath. 13th July 2023.
          </li>
          <li>
            Exhibition. Group Exhibition. Generative Art. Video. “TUNN3L -
            1971”. EMERGE Summer Showcase 2023, Newark Works, Bath. 15th June,
            2023.
          </li>
          <li>
            Workshop. Facilitator. “Website Quick Hacks”. EMERGE, Bath Spa
            University. 10th May, 2023.
          </li>
          <li>
            Workshop. Facilitator. “Arts and Cultural Industries: Ethical
            Marketing for Growth”. EMERGE Bootcamp, Burdall's Yard, Bath. 28th
            March 2023.
          </li>
          <li>
            Workshop. Facilitator. “Entering the NFT Art Space”. Delivered to
            delegates from Namibia University. Sion Hill Campus, Bath Spa
            University. 20th January 2023.
          </li>
          <li>
            Workshop. Co-Facilitator with Creative Technologist Dave Webb. “Not
            Formed Tangibly: A critical and practical look at NFTs for artists
            and creators”. EMERGE, Bath Spa University. 23rd November, 2022.
          </li>
          <li>
            Presentation. Co-Presenter with Novelist Joanne Rush and Oil Painter
            Saffron Murray-Browne. “Entering the NFT Art Space: Challenges and
            Possibilities”. OxBAT 2022 - Oxford Blockchain, Art & Technology
            Conference. Magdalen College, University of Oxford. 26th September
            2022.
          </li>
        </ul>
      </Section>
      <Section type="block" className="portfolio">
        <h3>Residencies {"(Resident/Mentor)"}</h3>
        <ul>
          <li>
            Mentor in Creative Media. EMERGE, Bath Spa University. November 2023
            to present.
          </li>
          <li>
            Mentor in Creative Media. EMERGE, Bath Spa University. November 2022
            to November 2023.
          </li>
          <li>
            Resident in Creative Media. EMERGE, Bath Spa University. November
            2021 to November 2022.
          </li>
          <li>
            Resident in Creative Media. EMERGE, Bath Spa University. April 2021
            to October 2021.
          </li>
        </ul>
      </Section>
      <Section type="block" className="portfolio">
        <h3>Lecturing</h3>
        <ul>
          <li>
            Guest Lecturer. “Website Quick Hacks”. BA (Hons) Creative Arts
            Practice, Bath Spa University. May 2023.
          </li>
          <li>
            Associate Lecturer. “CodeLab” Module using C++. Bath Spa University.
            November 2022 to January 2023.
          </li>
          <li>
            Associate Lecturer. “Web Development” Module using Javascript, HTML
            CSS and p5.js. Bath Spa University. February 2022 to May 2023.
          </li>
        </ul>
      </Section>
    </>
  );
};

export default About;
