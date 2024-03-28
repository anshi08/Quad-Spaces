import React from 'react';
// import svgImage from "../assets/image (1).svg";
// import './Home.css';
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

            <div>
                <QuadRealText />
            </div>
            <div style={{ padding: '2rem', marginTop: '2rem' }}>
                <QuadRealSpaces />
            </div>
            <div style={{ marginTop: '2rem' }}>
                <SpaceMgt />
            </div>
            <div style={{ marginTop: '3rem' }}>
                <ReportingAnalytics />
            </div>
            <div style={{ marginTop: '3rem', backgroundColor:'rgb(241, 248, 248)' }}>
                <BookingDemo />
            </div>
            <Integrations />
            {/* <Inquire /> */}
        </>
    );
};

export default Home;
