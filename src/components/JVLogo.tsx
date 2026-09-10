import React from 'react';

interface JVLogoProps {
  className?: string;
  showText?: boolean;
  compact?: boolean;
}

export default function JVLogo({ className = 'h-16', showText = true, compact = false }: JVLogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`} id="jv-logo-wrapper">
      <svg
        id="jv-logo-svg"
        viewBox="0 0 800 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none drop-shadow-[0_8px_16px_rgba(0,229,255,0.15)]"
      >
        <defs>
          <linearGradient id="jv-cyan-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="40%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#092440" />
          </linearGradient>
          <linearGradient id="wave-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#0077b6" />
          </linearGradient>
          <linearGradient id="wave-navy" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0077b6" />
            <stop offset="100%" stopColor="#03045e" />
          </linearGradient>
          <radialGradient id="button-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Brand Background Grid Pattern Overlay (Visual flair) */}
        {!compact && (
          <pattern id="background-checker" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect width="15" height="15" fill="#040d1a" />
            <rect x="15" width="15" height="15" fill="#020710" />
            <rect y="15" width="15" height="15" fill="#020710" />
            <rect x="15" y="15" width="15" height="15" fill="#040d1a" />
          </pattern>
        )}

        {/* Main Logo Container */}
        <g id="jv-shapes-group">
          {/* Main J Character */}
          <path
            d="M 130 190 
               L 180 195 
               L 180 280 
               C 180 320, 220 330, 240 330 
               C 270 330, 290 310, 290 270 
               L 290 85 
               L 410 85 
               L 410 84 
               C 410 84, 380 150, 310 150 
               C 310 150, 215 155, 215 255 
               C 215 315, 235 345, 295 345 
               C 325 345, 345 330, 360 305
               L 360 215
               L 300 220
               L 300 170
               L 420 170
               L 420 310
               C 400 350, 360 395, 280 395
               C 170 395, 110 330, 110 250
               Z"
            fill="url(#jv-cyan-teal)"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Main V Character sitting in background */}
          <path
            d="M 440 85 
               L 520 85 
               L 590 295
               L 660 85 
               L 750 85 
               L 640 380 
               L 535 380 
               Z"
            fill="#092440"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Overlap J highlights */}
          <path
            d="M 110 250 
               C 110 330, 170 395, 280 395 
               C 305 395, 325 388, 340 380"
            stroke="#00e5ff"
            strokeWidth="4"
            fill="none"
          />

          {/* Curved Ocean Waves overlaying */}
          <path
            d="M 330 295 
               C 430 200, 520 225, 600 240 
               C 660 251, 690 240, 715 200 
               L 715 210
               C 685 270, 640 280, 590 270
               C 520 255, 450 250, 375 310
               Z"
            fill="url(#wave-cyan)"
            stroke="#ffffff"
            strokeWidth="2.5"
          />
          
          <path
            d="M 370 310 
               C 420 270, 480 270, 530 285 
               C 580 300, 630 330, 690 320 
               C 705 317, 712 312, 715 305
               L 715 310
               C 700 350, 610 375, 540 350
               C 480 330, 420 310, 370 310 
               Z"
            fill="url(#wave-navy)"
            stroke="#ffffff"
            strokeWidth="2.5"
          />

          {/* Tropical Palm Trees on right wing of the 'V' - Both rendered in crisp, clean solid white as per flyer */}
          <g id="palm-trees" transform="translate(580, 90)">
            {/* Left Palm Tree */}
            <path
              d="M 98 140 
                 Q 112 105, 115 35"
              stroke="#ffffff"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Right Palm Tree */}
            <path
              d="M 120 135 
                 Q 138 95, 155 45"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            {/* Left Palm Tree Fronds (White) */}
            <g transform="translate(115, 35)" id="fronds-left">
              <path d="M 0 0 C 12 -12, 28 -16, 38 -10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C 18 -4, 25 12, 26 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C -12 -12, -28 -16, -38 -10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C -18 -4, -25 12, -26 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C -4 -18, 6 -32, 10 -38" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C -12 -12, -6 -28, -2 -34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C 15 5, 10 25, 5 30" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="0" cy="0" r="4.5" fill="#ffffff" />
            </g>

            {/* Right Palm Tree Fronds (White) */}
            <g transform="translate(155, 45)" id="fronds-right">
              <path d="M 0 0 C 12 -8, 22 -8, 28 -3" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C 12 4, 18 18, 19 25" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C -8 -12, -20 -12, -26 -8" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C -12 -4, -18 12, -20 20" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M 0 0 C -2 -18, 4 -26, 6 -30" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <circle cx="0" cy="0" r="3.8" fill="#ffffff" />
            </g>
          </g>
        </g>

        {showText && (
          <>
            {/* White divider lines under logo */}
            <line x1="80" y1="415" x2="720" y2="415" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" id="divider-line" />

            {/* Text logo brand: MITIGATION & RESTORATION LLC with crisp white outline and navy fill */}
            <text
              x="400"
              y="452"
              className="text-center font-display fill-[#092440] font-sans font-black select-none"
              letterSpacing="1.2"
              fontSize="35px"
              fontWeight="900"
              style={{ textAnchor: 'middle' }}
              stroke="#ffffff"
              strokeWidth="5"
              paintOrder="stroke fill"
            >
              MITIGATION &amp; RESTORATION <tspan fontSize="22px" fontWeight="900" fill="#00e5ff" stroke="#ffffff" strokeWidth="2">LLC</tspan>
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
