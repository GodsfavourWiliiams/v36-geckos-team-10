import React from 'react'
import Hero from '../pageElements/landingPage/Hero'
import Features from '../pageElements/landingPage/Features'
import Newsletter from '../pageElements/landingPage/Record';
import Footer from '../pageElements/Footer';
import Showcase from '../pageElements/landingPage/Showcase';
import ScrollToTop from '../pageElements/landingPage/ScrollToTop';
import Banner from '../pageElements/Banner';
import Navbar from '../pageElements/Navbar';
import Faq from '../pageElements/landingPage/Faq';

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
            <Footer/>   
            <ScrollToTop/>         
        </div>
    )
}

export default LandingPage
