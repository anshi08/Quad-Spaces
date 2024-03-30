import React from 'react';

const LeftSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 99.999">
            <defs>
                <linearGradient id="a" x1="50%" x2="50%" y1="100%" y2="0%" className="cerosgradient" data-cerosgradient="true" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0F6764" style={{stopColor: '#0F6764', transitionProperty: 'none'}} />
                    <stop offset="100%" stopColor="#0F6764" style={{stopColor: '#0F6764', transitionProperty: 'none'}} />
                    <animate fill="freeze" attributeName="x1" begin="89815.828125s" calcMode="spline" dur="0.0546875s" keySplines="0.125 0.05 0.1875 0.3;0.4375 0.775 0.625 1" keyTimes="0;0.5;1" values="50%;50%;50%" />
                    <animate fill="freeze" attributeName="y1" begin="89815.828125s" calcMode="spline" dur="0.0546875s" keySplines="0.125 0.05 0.1875 0.3;0.4375 0.775 0.625 1" keyTimes="0;0.5;1" values="100%;100%;100%" />
                    <animate fill="freeze" attributeName="x2" begin="89815.828125s" calcMode="spline" dur="0.0546875s" keySplines="0.125 0.05 0.1875 0.3;0.4375 0.775 0.625 1" keyTimes="0;0.5;1" values="50%;50%;50%" />
                    <animate fill="freeze" attributeName="y2" begin="89815.828125s" calcMode="spline" dur="0.0546875s" keySplines="0.125 0.05 0.1875 0.3;0.4375 0.775 0.625 1" keyTimes="0;0.5;1" values="0%;0%;0%" />
                </linearGradient>
            </defs>
            <path d="m24.916 60.761 4.242 4.24 20.8-20.764 20.8 20.764L75 60.761 49.99 35.796l-.032.031-.032-.031z" style={{fill: 'url(#a)', transform: 'rotate(-90deg)', transitionProperty: 'none'}} />
        </svg>
    );
}

export default LeftSvg;
