import {Hero} from '../components/Hero';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { useRef } from 'react';

const Home = () => {

    const projectRef =  useRef(null);

    return (
        <>
            <Hero projectRef={projectRef} />
            <Skills />
            <Projects projectRef={projectRef} />
            <Contact />
            <Footer />
        </>
    );
}
export default Home;