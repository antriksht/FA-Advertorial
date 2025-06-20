import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';

interface GeoState {
  rsmKey: string;
  properties: {
    name: string;
    // Using more specific types for common properties
    state: string;
    postal: string;
    [key: string]: string | number;
  };
}

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const USMap: React.FC = () => {
  const navigate = useNavigate();
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleStateClick = (stateName: string) => {
    navigate(`/find-advisor?state=${encodeURIComponent(stateName)}`);
  };

  const handleMouseMove = (event: React.MouseEvent, stateName: string) => {
    setTooltipContent(stateName);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <section className="bg-primary-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Find and compare financial advisors near you</h2>
        <p className="text-lg text-secondary-700">
              Hear from people who found their perfect financial match through our service.
            </p>
        <div className="relative mx-auto" style={{ maxWidth: '800px' }}>
          <ComposableMap
            projection="geoAlbersUsa"
            projectionConfig={{
              scale: 1000
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: GeoState[] }) =>
                geographies.map((geo: GeoState) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleStateClick(geo.properties.name)}
                    onMouseMove={(event) => handleMouseMove(event, geo.properties.name)}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#b9ddfe",
                        outline: "none",
                        stroke: "#FFF",
                        strokeWidth: 0.5,
                      },
                      hover: {
                        fill: "#36a9f8",
                        outline: "none",
                        stroke: "#FFF",
                        strokeWidth: 0.5,
                        cursor: "pointer"
                      },
                      pressed: {
                        fill: "#0073c4",
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
        {tooltipContent && (
          <div
            className="fixed z-50 bg-white px-2 py-1 rounded-md shadow-md pointer-events-none"
            style={{
              left: tooltipPosition.x + 12,
              top: tooltipPosition.y + 12,
              transform: 'none'
            }}
          >
            {tooltipContent}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(USMap);
