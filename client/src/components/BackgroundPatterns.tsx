// Travel-themed background patterns for LocalQR landing page

export const WorldMapPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <svg
      className="absolute top-0 left-0 w-full h-full opacity-[0.05]"
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* North America - More detailed shape */}
      <path
        d="M80 180 Q90 150 120 160 Q140 140 170 150 Q200 140 230 160 Q250 170 240 200 Q230 230 220 250 Q200 270 180 260 Q160 250 140 240 Q120 230 100 220 Q80 210 70 190 Q75 180 80 180 Z"
        fill="currentColor"
        opacity="0.06"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* Canada extension */}
      <path
        d="M120 130 Q150 120 180 130 Q200 125 220 135 Q240 140 235 160 Q230 180 220 170 Q200 165 180 160 Q160 155 140 150 Q125 145 120 130 Z"
        fill="currentColor"
        opacity="0.04"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* South America - More recognizable shape */}
      <path
        d="M180 320 Q190 310 200 330 Q205 360 200 390 Q195 420 190 450 Q185 480 180 510 Q175 530 170 520 Q165 490 160 460 Q155 430 160 400 Q165 370 170 340 Q175 320 180 320 Z"
        fill="currentColor"
        opacity="0.05"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* Europe - More detailed with peninsulas */}
      <path
        d="M500 160 Q520 150 540 155 Q560 160 575 170 Q590 180 585 200 Q580 220 570 215 Q560 210 550 205 Q540 200 530 195 Q520 190 510 185 Q500 180 495 170 Q498 160 500 160 Z"
        fill="currentColor"
        opacity="0.06"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* Scandinavia */}
      <path
        d="M520 130 Q530 120 540 125 Q550 130 545 140 Q540 150 535 145 Q530 140 525 135 Q522 130 520 130 Z"
        fill="currentColor"
        opacity="0.04"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* Africa - More recognizable with characteristic shape */}
      <path
        d="M480 220 Q500 210 520 220 Q540 230 545 260 Q550 290 545 320 Q540 350 535 380 Q530 410 525 440 Q520 460 515 450 Q510 420 505 390 Q500 360 495 330 Q490 300 485 270 Q480 240 475 220 Q477 215 480 220 Z"
        fill="currentColor"
        opacity="0.07"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* Madagascar */}
      <circle cx="565" cy="420" r="8" fill="currentColor" opacity="0.03" />
      
      {/* Asia - Large detailed continent */}
      <path
        d="M600 140 Q650 130 700 140 Q750 150 800 160 Q850 170 880 180 Q900 190 895 220 Q890 250 880 240 Q860 230 840 220 Q820 210 800 200 Q780 190 760 185 Q740 180 720 175 Q700 170 680 165 Q660 160 640 155 Q620 150 605 145 Q600 142 600 140 Z"
        fill="currentColor"
        opacity="0.08"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* India subcontinent */}
      <path
        d="M720 260 Q730 250 740 260 Q750 270 745 290 Q740 310 735 300 Q730 290 725 280 Q722 270 720 260 Z"
        fill="currentColor"
        opacity="0.05"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* China/Eastern Asia extension */}
      <path
        d="M820 180 Q840 170 860 180 Q880 190 875 210 Q870 230 860 225 Q850 220 840 215 Q830 210 825 200 Q822 190 820 180 Z"
        fill="currentColor"
        opacity="0.06"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* Australia - More detailed with characteristic shape */}
      <path
        d="M750 450 Q780 445 810 455 Q840 465 845 485 Q850 505 840 510 Q820 515 800 510 Q780 505 760 500 Q750 495 745 485 Q748 470 750 450 Z"
        fill="currentColor"
        opacity="0.06"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      
      {/* New Zealand */}
      <circle cx="880" cy="520" r="4" fill="currentColor" opacity="0.03" />
      <circle cx="885" cy="535" r="3" fill="currentColor" opacity="0.03" />
      
      {/* British Isles */}
      <circle cx="485" cy="140" r="6" fill="currentColor" opacity="0.04" />
      <circle cx="490" cy="150" r="3" fill="currentColor" opacity="0.03" />
      
      {/* Japan */}
      <circle cx="920" cy="220" r="5" fill="currentColor" opacity="0.04" />
      <circle cx="925" cy="235" r="3" fill="currentColor" opacity="0.03" />
      
      {/* Connection lines between continents */}
      <path
        d="M250 180 Q350 170 480 165"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeDasharray="1 3"
        opacity="0.25"
        fill="none"
      />
      <path
        d="M575 170 Q650 165 720 160"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeDasharray="1 3"
        opacity="0.25"
        fill="none"
      />
      <path
        d="M545 230 Q600 225 650 220"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeDasharray="1 3"
        opacity="0.25"
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