"use client";

import { Stat } from "@/lib/schemas";
import { statesList } from "@/lib/states-data";
import { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface USAMapProps {
  stats: Stat[];
  onSelectState: (state: string) => void;
  selectedState: string | null;
}

export const USAMap = memo(
  ({ onSelectState, selectedState, stats }: USAMapProps) => {
    const available_states = [
      ...new Set(
        stats.map((stat) => {
          const state_obj = statesList.find(
            (state) => state.code === stat.state
          );
          return state_obj?.name;
        })
      ),
    ];

    return (
      <div className="w-full aspect-[4/3]">
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isSelected = geo.properties.name === selectedState;
                const isAvailable = available_states.includes(
                  geo.properties.name
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    label={geo.properties.name}
                    geography={geo}
                    onClick={() =>
                      isAvailable && onSelectState(geo.properties.name)
                    }
                    style={{
                      default: {
                        fill: isSelected
                          ? "#3b82f6"
                          : isAvailable
                          ? "hsl(var(--muted))"
                          : "hsl(var(--muted) / 0.3)",
                        stroke: "hsl(var(--background))",
                        strokeWidth: 1.5,
                        outline: "none",
                      },
                      hover: {
                        fill: isAvailable
                          ? "hsl(var(--primary))"
                          : "hsl(var(--muted) / 0.3)",
                        stroke: "hsl(var(--background))",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: isAvailable
                          ? "hsl(var(--primary-foreground))"
                          : "hsl(var(--muted) / 0.3)",
                        stroke: "hsl(var(--background))",
                        strokeWidth: 2,
                        outline: "none",
                      },
                    }}
                    className={`transition-colors duration-200 ${
                      isAvailable ? "cursor-pointer" : "cursor-not-allowed"
                    }`}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    );
  }
);

USAMap.displayName = "USAMap";
