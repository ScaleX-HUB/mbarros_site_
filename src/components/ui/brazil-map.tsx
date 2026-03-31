import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/brazil-states.geojson";

export function BrazilMap() {
  return (
    <div className="w-full relative flex items-center justify-center -my-8 md:-my-12">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 650,
          center: [-52, -15] // roughly centers Brazil
        }}
        className="w-full max-w-[500px]"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="hsl(var(--primary) / 0.15)"
                  stroke="hsl(var(--border))"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "hsl(var(--primary) / 0.3)", outline: "none", transition: "all 0.3s" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

