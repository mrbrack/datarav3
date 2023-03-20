import { Section } from "@/components";
import Image from "next/image";

const About = () => {
    return (
    <Section type="two-column">
        <Image
          src="/datarav3_about_me.jpg"
          alt="Nigel Fryatt working in the EMERGE creative studio at Sion Hill, Bath."
          width="1080"
          height="1080"
        />
        <div>
        <p>“Algorithms have the potential to evoke powerful and intimate emotions, we just don’t talk about it enough. Or, perhaps, the types of conversations we have about algorithms don’t afford people to think in those ways. And to be honest, I find that disappointing.”</p>


<p>datarav3 (Nigel Fryatt) is a generative artist who uses creative programming to explore the intersection between technology and human emotion. Through his work, he questions whether code can create experiences that allow us to access feelings that are intimate and human. Broadly, his work acts as a criticism of the fascination capitalism has with technology, as he fiercely denies the world that this has created. </p>

<p>datarav3 started his programming journey at the age of thirteen, inspired by his father who was a server engineer. Now, he splits his time between making websites as a freelance web developer and creating generative art. He is based in Bath, UK and works out of the EMERGE creative studio where he is a Creative Mentor in Creative Media. </p>
<p>contact: nigel@enfiniti.xyz</p>
        </div>
    </Section>
    )
}

export default About