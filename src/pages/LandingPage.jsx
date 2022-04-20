import React from 'react'
import Hero from '../pageElements/landingPage/Hero'
import Features from '../pageElements/landingPage/Features'
import Newsletter from '../pageElements/landingPage/Record';
import Footer from '../pageElements/Footer';
import Showcase from '../pageElements/landingPage/Showcase';
import ScrollToTop from '../pageElements/landingPage/ScrollToTop';
import Banner from '../pageElements/Banner';
import Navbar from '../pageElements/Navbar';
import CTA from '../pageElements/landingPage/CTA';
import Faq from '../pageElements/landingPage/Faq';
import Contact from '../pageElements/landingPage/Contact';

function LandingPage() {
    return (
        <div className=''>
             <Banner/>
             <Navbar/>
            <Hero/>
            <Features/>
            <Newsletter/>
            <Showcase/>
            <Faq/>
            <Contact/>
            <CTA/>
            <Footer/>   
            <ScrollToTop/>         
        </div>
    )
}

export default LandingPage
