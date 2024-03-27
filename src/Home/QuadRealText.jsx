import React from 'react';
import { Grid } from '@mui/material';
import "./QuadReal.css";
import quadLogo from "../assets/screen-shot-2023-03-27-at-10-40-58-am-314_129_162_34-full.png";
import image from "../assets/quadreal-property-group-quadreal-property-group-launches-its-gre-320_318_0_0-half.jpeg";
import AvatarImage from "../assets/image (2).svg";
import Arrow from "../assets/ArrowImage.svg";
import GirlImage from "../assets/gettyimages.jpg"
import svgImage from "../assets/image (1).svg";

const QuadRealText = () => {
    return (
        <>
            <Grid container style={{ backgroundColor: 'rgb(241,248,248)' }}>
                <div>
                 <img src={svgImage} className='svgImage' style={{ position: 'absolute'}} />
                </div>
                <Grid item xs={12} md={7}>
                    <div className='relative'>
                        
                        <div className='flex'>
                            <img src={image} style={{ width: '51px', height: '50px' }} alt="Image" />
                            <img src={quadLogo} style={{ width: '99px', height: '41px' }} alt="Quad Logo" />
                        </div>
                        <p className='workplace'>An intuitive workplace experience platform</p>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} >

                                <div className='flex my-4'>
                                    <img src={AvatarImage} style={{ width: '41px', height: '41px' }} alt="Avatar" />
                                    <p className='space'>Flexible space management platform for Facilities management</p>
                                </div>
                                <div className='flex my-4'>
                                    <img src={AvatarImage} style={{ width: '41px', height: '41px' }} alt="Avatar" />
                                    <p className='RealTime'>Real time occupancy layers to understand how teams utilize your spaces and meeting rooms</p>
                                </div>
                            </Grid>
                            {/* 2nd part */}
                            <Grid item xs={12} md={6}>
                                <div className='flex my-4'>
                                    <img src={AvatarImage} style={{ width: '41px', height: '41px' }} alt="Avatar" />
                                    <p className='booking'>Space booking platform for desks, meeting rooms and common spaces</p>
                                </div>
                                <div className='flex my-4'>
                                    <img src={AvatarImage} style={{ width: '41px', height: '41px' }} alt="Avatar" />
                                    <p className='Data'>Data and analytics dashboard with valuable insights</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="arrow-animation">
                        <img src={Arrow} className="arrow"  />
                    </div>
                
                </Grid>
                <Grid item xs={12} md={5}>
                    <div style={{ mixBlendMode: 'normal', 
                    maskImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xNjQyMzk5N2U4NDkxMSIgdmlld0JveD0iMCAwIDM0NC4wMiAzNDMuNTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiBzdHlsZT0iZmlsbDogdXJsKCZxdW90OyNDZXJvc0dyYWRpZW50X2lkZDJhZjRhNGVhJnF1b3Q7KTsgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTsgb3BhY2l0eTogMTsiIHdpZHRoPSI3MTciIGhlaWdodD0iNzE1Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgY2xhc3M9ImNlcm9zZ3JhZGllbnQiIGRhdGEtY2Vyb3NncmFkaWVudD0idHJ1ZSIgaWQ9IkNlcm9zR3JhZGllbnRfaWRkMmFmNGE0ZWEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjQzgxMDJFIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQzgxMDJFIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQvPjwvZGVmcz48cGF0aCBkPSJtMzQ0LjAyLDE3Mi40M2MtLjc3LDEuNDgtMS4zMSwyLjY5LTIsMy44MS0yOC44MSw0Ny4wMy02NC4zOCw4OC4zMS0xMDcuMDQsMTIzLjE4LTE4LjE1LDE0Ljg0LTM3Ljg5LDI3LjcxLTU2LjgxLDQxLjYtNC42NSwzLjQyLTguMzgsMy4yMi0xMy40LjA0LTMwLjA4LTE5LjA3LTU4LjI1LTQwLjU3LTgzLjYzLTY1LjU3LTMwLjI1LTI5LjgtNTcuMzQtNjIuMi03OS40NC05OC42Mi0yLjIxLTMuNjMtMi4zMS02LjE3LS4wNC05Ljg2LDMwLjY4LTQ5LjczLDY4Ljk3LTkyLjc2LDExNC41NC0xMjkuMTQsMTYuNDktMTMuMTcsMzQuNTItMjQuNDIsNTEuOC0zNi42MSwyLjU3LTEuODIsNC43My0xLjU1LDcuMzEuMDIsMzEuODQsMTkuNDYsNjEuNDUsNDEuOTIsODcuNzgsNjguMzEsMjkuMzUsMjkuNCw1Ni4wOSw2MS4wNyw3Ny43MSw5Ni43NywxLjE5LDEuOTYsMi4xNiw0LjA3LDMuMjIsNi4wN1oiIHN0eWxlPSJmaWxsOnVybCgjQ2Vyb3NHcmFkaWVudF9pZGI3Y2E2MTk0Yyk7ZmlsbDp1cmwoI0Nlcm9zR3JhZGllbnRfaWRkMmFmNGE0ZWEpOyIvPjwvc3ZnPg==)', maskRepeat: 'no-repeat'}}>
                        <div >
                    <img src={GirlImage} style={{width:'100%',height:'auto', objectFit:'cover'}} />
                    </div>
                    </div>
                </Grid>

            </Grid>
        </>
    );
};

export default QuadRealText;
