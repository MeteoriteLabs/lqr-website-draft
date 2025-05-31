// Travel-themed background patterns for LocalQR landing page

export const WorldMapPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <svg
      className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified world map outline */}
      <path
        d="M200 300C220 280 280 260 350 280C420 300 480 320 550 300C620 280 680 290 750 310C820 330 880 320 950 340C1000 350 1050 360 1100 350"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M150 350C200 370 300 360 400 380C500 400 600 390 700 410C800 430 900 420 1000 440"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M100 400C180 420 260 410 340 430C420 450 500 440 580 460C660 480 740 470 820 490C900 510 980 500 1060 520"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      {/* Continents as simple shapes */}
      <circle cx="300" cy="300" r="40" fill="currentColor" opacity="0.02" />
      <circle cx="600" cy="320" r="60" fill="currentColor" opacity="0.02" />
      <circle cx="900" cy="340" r="50" fill="currentColor" opacity="0.02" />
      <circle cx="400" cy="450" r="35" fill="currentColor" opacity="0.02" />
      <circle cx="750" cy="480" r="45" fill="currentColor" opacity="0.02" />
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
      className="absolute inset-0 w-full h-full opacity-[0.02]"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Passport stamps scattered */}
      <g transform="rotate(15 200 150)">
        <rect x="180" y="130" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="200" cy="150" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="200" y="155" textAnchor="middle" fontSize="6" fill="currentColor">QR</text>
      </g>
      
      <g transform="rotate(-20 600 200)">
        <rect x="580" y="180" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="600" cy="200" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="600" y="205" textAnchor="middle" fontSize="6" fill="currentColor">LOCAL</text>
      </g>
      
      <g transform="rotate(25 150 400)">
        <rect x="130" y="380" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="150" cy="400" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="150" y="405" textAnchor="middle" fontSize="6" fill="currentColor">TRAVEL</text>
      </g>
      
      <g transform="rotate(-10 700 450)">
        <rect x="680" y="430" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="700" cy="450" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="700" y="455" textAnchor="middle" fontSize="6" fill="currentColor">DISCOVER</text>
      </g>
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