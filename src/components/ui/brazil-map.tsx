import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "/brazil-states.geojson";

// Nine states that form the Brazilian Northeast
const NE_STATES = new Set(["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"]);

// Recife/PE — HQ, pulse origin
const RECIFE_COORDS: [number, number] = [-34.9, -8.05];

// Coverage markers: approximate capital coordinates for each NE state except PE
const COVERAGE_MARKERS: { sigla: string; coords: [number, number] }[] = [
  { sigla: "MA", coords: [-44.3, -2.5]  },  // São Luís
  { sigla: "PI", coords: [-42.8, -5.1]  },  // Teresina
  { sigla: "CE", coords: [-38.5, -3.7]  },  // Fortaleza
  { sigla: "RN", coords: [-35.2, -5.8]  },  // Natal
  { sigla: "PB", coords: [-34.9, -7.1]  },  // João Pessoa
  { sigla: "AL", coords: [-35.7, -9.7]  },  // Maceió
  { sigla: "SE", coords: [-37.1, -10.9] },  // Aracaju
  { sigla: "BA", coords: [-38.5, -12.5] },  // Salvador
];

export function BrazilMap() {
  return (
    <div className="w-full relative flex items-center justify-center">
      <div className="relative w-full max-w-[400px]">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 52% 48%, hsl(var(--primary) / 0.16) 0%, transparent 75%)",
          }}
        />

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            // Center on the geographic centroid of the NE region
            // Lon range: -48.5 (MA W) to -34.8 (PB/RN E) → center -41.65
            // Lat range: -1.0 (MA N) to -18.4 (BA S) → center -9.7
            scale: 1050,
            center: [-41.5, -9.2],
          }}
          width={400}
          height={450}
          style={{ width: "100%", height: "auto" }}
        >
          <defs>
            <filter id="pe-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="ne-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="2"
                floodColor="hsl(var(--primary))" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* NE states — all 9 */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((geo) => NE_STATES.has(geo.properties.sigla))
                .map((geo) => {
                  const isPE = geo.properties.sigla === "PE";
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isPE ? "hsl(var(--primary) / 0.52)" : "hsl(var(--primary) / 0.17)"}
                      stroke="hsl(var(--primary) / 0.5)"
                      strokeWidth={isPE ? 1.2 : 0.65}
                      style={{
                        default: {
                          outline: "none",
                          filter: isPE ? "url(#pe-glow)" : "url(#ne-shadow)",
                        },
                        hover: {
                          fill: "hsl(var(--primary) / 0.36)",
                          outline: "none",
                          transition: "fill 0.25s",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
            }
          </Geographies>

          {/* Coverage wave rings radiating from Recife */}
          {[0, 0.7, 1.4].map((delay) => (
            <Marker key={delay} coordinates={RECIFE_COORDS}>
              <motion.circle
                r={0}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={0.9}
                initial={{ r: 0, opacity: 0.65 }}
                animate={{ r: 110, opacity: 0 }}
                transition={{ duration: 2.6, delay, repeat: Infinity, ease: "easeOut" }}
              />
            </Marker>
          ))}

          {/* Coverage markers — one per NE state (except PE) */}
          {COVERAGE_MARKERS.map(({ sigla, coords }) => (
            <Marker key={sigla} coordinates={coords}>
              {/* Subtle ring */}
              <motion.circle
                r={3}
                fill="none"
                stroke="hsl(var(--primary) / 0.7)"
                strokeWidth={0.8}
                initial={{ r: 3, opacity: 0.8 }}
                animate={{ r: [3, 7, 3], opacity: [0.7, 0, 0.7] }}
                transition={{
                  duration: 2.2,
                  delay: Math.random() * 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              {/* Dot */}
              <circle r={2.8} fill="hsl(var(--primary) / 0.85)" />
              <circle r={1.3} fill="white" />
              {/* State label below dot */}
              <text
                y={10}
                textAnchor="middle"
                fontSize={5.5}
                fontWeight="600"
                fill="hsl(var(--foreground) / 0.7)"
                style={{ pointerEvents: "none", userSelect: "none" }}
              >
                {sigla}
              </text>
            </Marker>
          ))}

          {/* PE / HQ marker — pulsing dot */}
          <Marker coordinates={RECIFE_COORDS}>
            <motion.circle
              r={5}
              fill="hsl(var(--primary) / 0.25)"
              animate={{ r: [5, 13, 5], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <circle r={5} fill="hsl(var(--primary))" />
            <circle r={2.4} fill="white" />
          </Marker>

          {/* "MATRIZ" label above PE dot */}
          <Marker coordinates={RECIFE_COORDS}>
            <text
              y={-13}
              textAnchor="middle"
              fontSize={7.5}
              fontWeight="700"
              letterSpacing="0.08em"
              fill="hsl(var(--primary))"
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              MATRIZ
            </text>
          </Marker>
        </ComposableMap>

        {/* Legend */}
        <div className="absolute bottom-3 right-3 flex flex-col gap-1.5 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
            <span>Sede — Pernambuco</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(var(--primary) / 0.75)" }}
            />
            <span>Atuação regional</span>
          </div>
        </div>
      </div>
    </div>
  );
}

