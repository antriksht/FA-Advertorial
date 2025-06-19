import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';

// You can also host and use your own TopoJSON file for faster performance
const geoUrl = '../hooks/states-10m.json';

const USMap: React.FC = () => {
  const navigate = useNavigate();
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

  const handleClick = (geo: any) => {
    const stateName = geo.properties.name;
    navigate(`/find-advisor?state=${encodeURIComponent(stateName)}`);
  };

  const handleMouseMove = (
    geo: any,
    evt: React.MouseEvent<SVGPathElement, MouseEvent>
  ) => {
    setTooltip({
      name: geo.properties.name,
      x: evt.clientX,
      y: evt.clientY
    });
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-2xl font-bold mb-4">Find an Advisor by State</h2>
        <div className="mx-auto inline-block max-w-full">
          <ComposableMap projection="geoAlbersUsa" width={960} height={600}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleClick(geo)}
                    onMouseMove={(evt) => handleMouseMove(geo, evt)}
                    onMouseLeave={() => setTooltip(null)}
                    style={{
                      default: { fill: '#E0E0E0', outline: 'none' },
                      hover: { fill: '#B0B0B0', outline: 'none' },
                      pressed: { fill: '#7B7B7B', outline: 'none' }
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
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
