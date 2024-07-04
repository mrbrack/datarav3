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
          <p>
            Generative artist, creative technologist and independent Arts and
            Technology facilitator.
          </p>
          <p>
            I use creative programming to create art, websites and live
            experiences. I also facilitate workshops covering the topics of
            ethics, future technologies, website development and AI.
          </p>
          <p>
            I owe much of what I do to being surrounded by fine artists on an
            almost daily basis. A core part of my practice involves
            collaborating with them to bring their ideas to life using creative
            technology.
          </p>
          <p>
            My own artworks find their roots in: the spectacle, environmental
            concern, ethics, nostalgic technologies and electronic music. From
            time to time I enjoy sneaking my work into fine art environments.
          </p>
          <p>
            I am based in Bath, UK, and I work out of{" "}
            <Link href="https://thestudioinbath.co.uk" target="_blank">
              The Studio in Bath
            </Link>
            , where I am currently a resident.
          </p>
          <p>
            <Link href="/contact">Get in touch.</Link>
          </p>
        </div>
      </Section>
      <Section type="block" className="portfolio">
        <h3>Exhibitions, Workshops and Performances</h3>
        <ul>
          <li>
            Creative Technologist. &apos;Data Dealers&apos; designed by Coral
            Manton. &apos;InfluenZoo&apos; designed by Naomi Smyth. Glastonbury
            Festival. 24th June to 1st July 2024.
          </li>
          <li>
            Live Coding Performance at the opening night of Brian Gibson and
            Mathilde Salliou&apos;s &apos;Work&apos;. Roseberry Road Studios.
            3rd June, 2024.
          </li>
          <li>
            Immersive Art Installation. Executive Producer, Creative Director
            and Creative Technologist. &apos;alt_wilderness&apos;. Fringe Arts
            Bath Festival. 24th May to 8th June 2024.
          </li>
          <li>
            Workshop. Facilitator. &apos;Co-Creating the Future of Bath&apos;.
            Bath Digital Festival, The Studio in Bath. 16th May, 2024.
          </li>
          <li>
            Exhibition. Selected. Generative Art. Print.&apos;“alternate spirals
            {" (moon)"}&apos;.{" "}
            <Link
              href="https://www.fringeartsbath.co.uk/bathopen"
              target="_blank"
            >
              Bath Open Art Prize
            </Link>
            . 44AD artspace, Bath. 12th to 28th October 2023.
          </li>
          <li>
            Exhibition/Performance. Selected. Performance Art/Live Coding.
            &apos;for them&apos;. EMERGE Showcase 2023, Bath. 18th October 2023.
          </li>
          <li>
            Workshop. Co-Facilitator with Patent Attorney Judith Coghlan
            {" (Script IP)"}. &apos;From Algorithms to Artefacts&apos;.{" "}
            <Link href="https://techspark.co/bdf" target="_blank">
              Bath Digital Festival
            </Link>
            . Carpenter House, Bath. 13th July 2023.
          </li>
          <li>
            Exhibition. Group Exhibition. Generative Art. Video. &apos;TUNN3L -
            1971&apos;. EMERGE Summer Showcase 2023, Newark Works, Bath. 15th
            June, 2023.
          </li>
          <li>
            Workshop. Facilitator. &apos;Website Quick Hacks&apos;. EMERGE, Bath
            Spa University. 10th May, 2023.
          </li>
          <li>
            Workshop. Facilitator. &apos;Arts and Cultural Industries: Ethical
            Marketing for Growth&apos;. EMERGE Bootcamp, Burdall&apos;s Yard,
            Bath. 28th March 2023.
          </li>
          <li>
            Workshop. Facilitator. &apos;Entering the NFT Art Space&apos;.
            Delivered to delegates from Namibia University. Sion Hill Campus,
            Bath Spa University. 20th January 2023.
          </li>
          <li>
            Workshop. Co-Facilitator with Creative Technologist Dave Webb.
            &apos;Not Formed Tangibly: A critical and practical look at NFTs for
            artists and creators&apos;. EMERGE, Bath Spa University. 23rd
            November, 2022.
          </li>
          <li>
            Presentation. Co-Presenter with Novelist Joanne Rush and Oil Painter
            Saffron Murray-Browne. &apos;Entering the NFT Art Space: Challenges
            and Possibilities&apos;.{" "}
            <Link href="https://oxbat.web.ox.ac.uk" target="_blank">
              OxBAT 2022 - Oxford Blockchain, Art & Technology Conference.
              Magdalen College
            </Link>
            , University of Oxford. 26th September 2022.
          </li>
        </ul>
      </Section>
      <Section type="block" className="portfolio">
        <h3>Residencies {"(Resident/Mentor)"}</h3>
        <ul>
          <li>Resident. The Studio in Bath. December 2023 to present.</li>
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
            Associate Lecturer. &apos;User Experience Design&apos;. BSc (Hons)
            Computing, Bath Spa University. January 2024 to June 2024.
          </li>
          <li>
            Guest Lecturer. &apos;Website Quick Hacks for the Creative
            Industries&apos;. BA (Hons) Creative Arts Practice, Bath Spa
            University. May 2023.
          </li>
          <li>
            Associate Lecturer. &apos;CodeLab&apos; Module using C++. BA (Hons)
            Games Development, Bath Spa University. November 2022 to January
            2023.
          </li>
          <li>
            Associate Lecturer. &apos;Web Development&apos;. BSc (Hons)
            Computing, BSc (Hons) Cyber Security, BSc (Hons) Creative
            Computingusing Javascript. Bath Spa University. February 2022 to May
            2023.
          </li>
        </ul>
      </Section>
      <Section type="block" className="portfolio">
        <h3>Audio</h3>
        <ul>
          <li>
            Co-producer and co-presenter. &apos;The Arts Show Podcast&apos;.
            2023. Listen on:{" "}
            <Link
              href="https://open.spotify.com/show/6wzfctLEJ9CQi7S3N22PX3?si=908e870c1c1341cb"
              target="_blank"
            >
              Spotify,
            </Link>{" "}
            <Link
              href="https://podcasts.apple.com/gb/podcast/the-arts-show/id1669236704"
              target="_blank"
            >
              Apple Podcasts
            </Link>
            .
          </li>
          <li>
            Podcast partner {"(edit and distribution of episodes)"}. &apos;Bath
            Festivals Podcast&apos;. Bath Festivals, 2022.
          </li>
          <li>
            Co-producer and co-presenter. &apos;Friday Night Fry Up Radio
            Show&apos;. Radio Bath, 2020 - 2022.
          </li>
          <li>
            Co-producer and co-presenter. &apos;The Arts Show Radio Show&apos;.
            Radio Bath, 2020 - 2021.
          </li>
        </ul>
      </Section>
    </>
  );
};

export default About;
