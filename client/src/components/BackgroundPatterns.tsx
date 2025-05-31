// Travel-themed background patterns for LocalQR landing page

export const WorldMapPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <svg
      className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
      viewBox="0 0 1000 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* North America */}
      <path
        d="M50 150 Q80 120 120 140 Q160 130 200 150 Q220 160 200 200 Q180 220 150 210 Q100 200 80 180 Q60 170 50 150 Z"
        fill="currentColor"
        opacity="0.06"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      
      {/* South America */}
      <path
        d="M150 280 Q170 270 180 300 Q185 340 175 380 Q170 420 160 450 Q150 470 140 450 Q130 420 135 380 Q140 340 145 300 Q148 280 150 280 Z"
        fill="currentColor"
        opacity="0.05"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      
      {/* Europe */}
      <path
        d="M450 120 Q480 110 510 125 Q530 135 525 155 Q520 175 500 170 Q470 165 450 155 Q440 145 450 120 Z"
        fill="currentColor"
        opacity="0.06"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      
      {/* Africa */}
      <path
        d="M420 180 Q450 170 480 185 Q500 200 495 240 Q490 280 485 320 Q480 360 470 390 Q460 410 450 395 Q440 370 445 330 Q450 290 455 250 Q460 210 450 190 Q445 180 420 180 Z"
        fill="currentColor"
        opacity="0.05"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      
      {/* Asia */}
      <path
        d="M550 100 Q620 90 690 110 Q750 130 780 150 Q800 170 790 200 Q780 230 750 220 Q700 210 650 200 Q600 190 570 180 Q540 160 545 130 Q548 110 550 100 Z"
        fill="currentColor"
        opacity="0.06"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      
      {/* Australia */}
      <path
        d="M700 380 Q730 375 760 385 Q780 395 775 415 Q770 435 750 430 Q720 425 700 415 Q690 405 695 390 Q698 380 700 380 Z"
        fill="currentColor"
        opacity="0.05"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      
      {/* Connection lines between continents */}
      <path
        d="M220 170 Q300 160 420 150"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 4"
        opacity="0.3"
        fill="none"
      />
      <path
        d="M530 140 Q600 135 680 130"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 4"
        opacity="0.3"
        fill="none"
      />
      <path
        d="M480 200 Q520 195 560 190"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 4"
        opacity="0.3"
        fill="none"
      />
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