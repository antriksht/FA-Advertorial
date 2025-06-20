import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import { US_STATES } from '../data/usStates';

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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");

  const handleStateClick = (stateName: string) => {
    navigate(`/find-advisor?state=${encodeURIComponent(stateName)}`);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setSearchError("Please enter a state");
      return;
    }
    const match = US_STATES.find(
      (s) =>
        s.name.toLowerCase() === query ||
        s.abbreviation.toLowerCase() === query
    );
    if (match) {
      setSearchError("");
      handleStateClick(match.name);
    } else {
      setSearchError("State not found");
    }
  };

  const handleMouseMove = (event: React.MouseEvent, stateName: string) => {
    const abbr = US_STATES.find(s => s.name === stateName)?.abbreviation;
    setTooltipContent(abbr ? `${stateName} (${abbr})` : stateName);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <section className="bg-primary-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Find and compare financial advisors near you</h2>
        <p className="text-lg text-secondary-700">
              Hear from people who found their perfect financial match through our service.
            </p>
        <form onSubmit={handleSearchSubmit} className="flex justify-center mb-4 space-x-2">
          <input
            type="text"
            className="border rounded-md p-2 w-48"
            placeholder="Search state"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="cta-button px-4 py-2">Go</button>
        </form>
        {searchError && <p className="text-red-600 mb-2">{searchError}</p>}
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
