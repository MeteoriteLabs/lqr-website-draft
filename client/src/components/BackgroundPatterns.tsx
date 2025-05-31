// Travel-themed background patterns for LocalQR landing page

export const WorldMapPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <svg
      className="absolute top-5 right-5 w-80 h-80 lg:w-96 lg:h-96 opacity-[0.4]"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Earth circle */}
      <circle cx="200" cy="200" r="180" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      
      {/* Recognizable continent silhouettes */}
      {/* North America - more recognizable shape */}
      <path
        d="M50 140 Q70 120 100 130 Q130 125 160 135 Q180 140 185 160 Q190 180 185 200 Q180 220 170 215 Q150 210 130 205 Q100 200 80 190 Q60 180 50 160 Z"
        fill="white"
        opacity="0.8"
      />
      
      {/* South America - elongated shape */}
      <path
        d="M120 240 Q125 230 130 250 Q135 270 132 290 Q130 310 128 330 Q125 350 120 340 Q115 320 118 300 Q120 280 120 260 Q120 250 120 240 Z"
        fill="white"
        opacity="0.8"
      />
      
      {/* Europe - small but visible */}
      <path
        d="M200 120 Q215 115 230 125 Q240 135 235 145 Q230 155 220 150 Q210 145 205 140 Q200 135 200 120 Z"
        fill="white"
        opacity="0.8"
      />
      
      {/* Africa - distinctive shape */}
      <path
        d="M190 160 Q205 155 220 165 Q230 175 228 195 Q225 215 222 235 Q220 255 218 275 Q215 295 210 285 Q205 265 208 245 Q210 225 210 205 Q210 185 205 175 Q195 165 190 160 Z"
        fill="white"
        opacity="0.8"
      />
      
      {/* Asia - large landmass */}
      <path
        d="M240 130 Q280 125 320 140 Q350 155 345 180 Q340 205 330 200 Q310 195 290 190 Q270 185 250 180 Q245 170 240 160 Q238 145 240 130 Z"
        fill="white"
        opacity="0.8"
      />
      
      {/* Australia - small but recognizable */}
      <path
        d="M300 280 Q320 275 340 285 Q350 295 345 305 Q340 315 330 310 Q315 305 305 300 Q295 295 300 280 Z"
        fill="white"
        opacity="0.8"
      />
      
      {/* Grid lines on the earth */}
      <ellipse cx="200" cy="200" rx="180" ry="90" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="3 6" />
      <ellipse cx="200" cy="200" rx="180" ry="60" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" strokeDasharray="3 6" />
      <ellipse cx="200" cy="200" rx="90" ry="180" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="3 6" />
      <ellipse cx="200" cy="200" rx="60" ry="180" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" strokeDasharray="3 6" />
      
      {/* Equator line */}
      <line x1="20" y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.8" opacity="0.25" strokeDasharray="4 8" />
    </svg>
  </div>
);

export const CompassPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <svg
      className="absolute top-4 right-4 w-32 h-32 md:w-48 md:h-48 opacity-[0.04]"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Compass outer circle */}
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      
      {/* Compass directions */}
      <line x1="100" y1="20" x2="100" y2="40" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="160" x2="100" y2="180" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="100" x2="40" y2="100" stroke="currentColor" strokeWidth="2" />
      <line x1="160" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="2" />
      
      {/* Compass needle */}
      <polygon
        points="100,50 110,100 100,150 90,100"
        fill="currentColor"
        opacity="0.3"
      />
      
      {/* Center point */}
      <circle cx="100" cy="100" r="5" fill="currentColor" opacity="0.6" />
    </svg>
  </div>
);

export const TravelPathPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03]"
      viewBox="0 0 1000 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dotted travel paths */}
      <path
        d="M100 200 Q300 150 500 200 T900 250"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 8"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M50 350 Q250 300 450 350 T850 400"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 8"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M150 500 Q350 450 550 500 T950 550"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 8"
        fill="none"
        opacity="0.2"
      />
      
      {/* Location pins along paths */}
      <circle cx="200" cy="180" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="400" cy="190" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="600" cy="210" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="800" cy="240" r="3" fill="currentColor" opacity="0.3" />
      
      <circle cx="150" cy="330" r="3" fill="currentColor" opacity="0.2" />
      <circle cx="350" cy="340" r="3" fill="currentColor" opacity="0.2" />
      <circle cx="550" cy="370" r="3" fill="currentColor" opacity="0.2" />
      <circle cx="750" cy="390" r="3" fill="currentColor" opacity="0.2" />
    </svg>
  </div>
);

export const PassportStampPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04]"
      viewBox="0 0 1000 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* World map silhouette for Refer & Earn section */}
      {/* Americas */}
      <path
        d="M100 180 Q130 160 160 180 Q180 200 170 240 Q160 280 150 320 Q140 360 130 390 Q120 410 110 390 Q100 360 105 320 Q110 280 115 240 Q120 200 100 180 Z"
        fill="currentColor"
        opacity="0.03"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* Europe & Africa */}
      <path
        d="M400 150 Q430 140 460 155 Q480 170 475 200 Q470 230 465 260 Q460 290 455 320 Q450 350 440 370 Q430 380 420 365 Q410 340 415 310 Q420 280 425 250 Q430 220 425 190 Q420 170 400 150 Z"
        fill="currentColor"
        opacity="0.04"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* Asia & Australia */}
      <path
        d="M650 120 Q720 110 780 130 Q820 150 810 180 Q800 210 790 240 Q780 270 770 300 Q760 330 750 350 Q740 360 730 345 Q720 320 725 290 Q730 260 735 230 Q740 200 735 170 Q730 150 720 140 Q700 130 680 125 Q665 120 650 120 Z"
        fill="currentColor"
        opacity="0.03"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* Small islands and connections */}
      <circle cx="250" cy="280" r="8" fill="currentColor" opacity="0.02" />
      <circle cx="550" cy="350" r="12" fill="currentColor" opacity="0.02" />
      <circle cx="750" cy="380" r="15" fill="currentColor" opacity="0.03" />
      
      {/* Dotted travel routes */}
      <path
        d="M180 200 Q300 190 420 180"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="1 3"
        opacity="0.25"
        fill="none"
      />
      <path
        d="M480 170 Q580 160 680 150"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="1 3"
        opacity="0.25"
        fill="none"
      />
    </svg>
  </div>
);

export const GridMapPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.02]"
      viewBox="0 0 1000 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid pattern like city blocks */}
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      {/* Street-like lines */}
      <line x1="0" y1="200" x2="1000" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="0" y1="400" x2="1000" y2="400" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="0" y1="600" x2="1000" y2="600" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      
      <line x1="250" y1="0" x2="250" y2="800" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="500" y1="0" x2="500" y2="800" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="750" y1="0" x2="750" y2="800" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    </svg>
  </div>
);

export const GlobePattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <svg
      className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-[0.03]"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globe outline */}
      <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Longitude lines */}
      <ellipse cx="150" cy="150" rx="140" ry="70" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <ellipse cx="150" cy="150" rx="140" ry="105" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      <ellipse cx="150" cy="150" rx="140" ry="35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      
      {/* Latitude lines */}
      <ellipse cx="150" cy="150" rx="70" ry="140" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <ellipse cx="150" cy="150" rx="105" ry="140" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      <ellipse cx="150" cy="150" rx="35" ry="140" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      
      {/* Equator */}
      <line x1="10" y1="150" x2="290" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  </div>
);