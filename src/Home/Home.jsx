import React, { useEffect } from 'react';
// import svgImage from "../assets/image (1).svg";
import './Home.css';
import QuadRealText from './QuadRealText';
import QuadRealSpaces from './QuadRealSpaces';
import SpaceMgt from './SpaceMgt';
import ReportingAnalytics from './ReportingAnalytics';
import BookingDemo from './BookingDemo';
import Integrations from './Integrations';
import Inquire from './Inquire';
import HomeData from "./Home.json"



const Home = () => {

    const data = HomeData.response.data.data

    return (
        <>
            <div className="blurrable overflow-hidden">
                <QuadRealText QuadData={data.quad_real_text}/>
            </div>
            <div style={{ padding: '2rem', marginTop: '2rem' }} className="blurrable overflow-x-clip" 
            id='target-component'>
                <QuadRealSpaces QuadSpaceData={data.quad_real_space}/>
            </div>
            <div style={{ marginTop: '2rem' }} className="blurrable">
                <SpaceMgt SpaceMgtData={data.space_management} />
            </div>
            <div style={{ marginTop: '3rem' ,padding:'2rem'}} className='overflow-x-clip'>
                <ReportingAnalytics ReportingAnalyticsData={data.reporting_analytics}/>
            </div>
            <div style={{  backgroundColor:'rgb(241, 248, 248)' }} className="blurrable">
                <BookingDemo BookingDemoData={data.booking_demo}/>
            </div>
            <div className="blurrable overflow-x-clip">
            <Integrations IntegrationsData={data.integrations}/>
            <Inquire InquireData={data.inquires_text}/>
            </div>
         
        </>
    );
};

export default Home;
