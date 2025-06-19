import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import USAMap from 'react-usa-map';
import '../hooks/USMap.css';

const stateNames: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
  DC: 'District of Columbia'
};

const USMap: React.FC = () => {
  const navigate = useNavigate();
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

  const mapHandler = (event: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    const stateAbbr = event.currentTarget.dataset.name;
    if (stateAbbr) {
      navigate(`/find-advisor?state=${encodeURIComponent(stateAbbr)}`);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    const target = event.target as SVGPathElement;
    const stateAbbr = target?.dataset?.name;
    if (stateAbbr) {
      setTooltip({
        name: stateNames[stateAbbr] || stateAbbr,
        x: event.clientX,
        y: event.clientY
      });
    } else {
      setTooltip(null);
    }
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-2xl font-bold mb-4">Find an Advisor by State</h2>
        <div className="mx-auto inline-block max-w-full">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <USAMap
              width="960"
              height="600"
              onClick={mapHandler}
            />
          </div>
        </div>

        {tooltip && (
          <div
            style={{
              top: tooltip.y + 15,
              left: tooltip.x + 15,
              position: 'fixed',
              background: '#fff',
              color: '#000',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: 500,
              border: '1px solid #ccc',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              pointerEvents: 'none',
              zIndex: 9999
            }}
          >
            {tooltip.name}
          </div>
        )}
      </div>
    </section>
  );
};

export default USMap;
