import React, { useEffect } from 'react';
// import svgImage from "../assets/image (1).svg";
import './Home.css';
import QuadRealText from './QuadRealText';
import QuadRealSpaces from './QuadRealSpaces';
import SpaceMgt from './SpaceMgt';
import ReportingAnalytics from './ReportingAnalytics';
import BookingDemo from './BookingDemo';
import Integrations from './Integrations';
// import Inquire from './Inquire';



const Home = () => {



    return (
        <>

            {/* <div className='relative' >
                <img src={svgImage} className='svgImage' style={{border:'2px solid red'}} />
            </div> */}

            <div className="blurrable">
                <QuadRealText />
            </div>
            <div style={{ padding: '2rem', marginTop: '2rem' }} className="blurrable">
                <QuadRealSpaces />
            </div>
            <div style={{ marginTop: '2rem' }} className="blurrable">
                <SpaceMgt />
            </div>
            <div style={{ marginTop: '3rem' ,padding:'2rem'}}>
                <ReportingAnalytics />
            </div>
            <div style={{  backgroundColor:'rgb(241, 248, 248)' }} className="blurrable">
                <BookingDemo />
            </div>
            <div className="blurrable">
            <Integrations />
            {/* <Inquire /> */}
            </div>
         
        </>
    );
};

export default Home;
