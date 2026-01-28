"use client";

import { useState } from "react";

interface CountryData {
  name: string;
  emoji: string;
  description: string;
  color: string;
}

const countries: Record<string, CountryData> = {
  japan: {
    name: "Japan",
    emoji: "🎌",
    description: "Tea ceremonies, anime, cherry blossoms, and ancient temples",
    color: "#ef4444"
  },
  india: {
    name: "India",
    emoji: "🪔",
    description: "Diwali festivals, yoga, Bollywood, and diverse traditions",
    color: "#f97316"
  },
  brazil: {
    name: "Brazil",
    emoji: "🎭",
    description: "Carnival, samba, capoeira, and vibrant street culture",
    color: "#22c55e"
  },
  egypt: {
    name: "Egypt",
    emoji: "🏛️",
    description: "Ancient pyramids, hieroglyphics, and pharaonic history",
    color: "#eab308"
  },
  spain: {
    name: "Spain",
    emoji: "💃",
    description: "Flamenco dancing, tapas, bullfighting, and fiestas",
    color: "#ec4899"
  },
  kenya: {
    name: "Kenya",
    emoji: "🦁",
    description: "Maasai warriors, safari wildlife, and tribal traditions",
    color: "#84cc16"
  },
  china: {
    name: "China",
    emoji: "🏮",
    description: "Dragon dances, kung fu, calligraphy, and lunar new year",
    color: "#dc2626"
  },
  mexico: {
    name: "Mexico",
    emoji: "🌮",
    description: "Day of the Dead, mariachi, ancient Mayan ruins",
    color: "#f59e0b"
  },
  australia: {
    name: "Australia",
    emoji: "🦘",
    description: "Aboriginal art, didgeridoo, and dreamtime stories",
    color: "#06b6d4"
  },
  france: {
    name: "France",
    emoji: "🥐",
    description: "Art, cuisine, fashion, and romantic architecture",
    color: "#6366f1"
  }
};

export default function InteractiveWorldMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countryData = selectedCountry ? countries[selectedCountry] : null;

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-auto"
          style={{ maxHeight: "500px" }}
        >
          {/* Background */}
          <rect width="1000" height="500" fill="#e0f2fe" />
          
          {/* Continents (simplified shapes) */}
          
          {/* Asia */}
          <g
            onClick={() => setSelectedCountry("japan")}
            onMouseEnter={() => setHoveredCountry("japan")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="750"
              cy="150"
              rx="40"
              ry="35"
              fill={hoveredCountry === "japan" ? "#fca5a5" : "#ef4444"}
              opacity={hoveredCountry === "japan" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="750" y="155" textAnchor="middle" fontSize="24" className="pointer-events-none">
              🎌
            </text>
          </g>

          <g
            onClick={() => setSelectedCountry("china")}
            onMouseEnter={() => setHoveredCountry("china")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="680"
              cy="180"
              rx="60"
              ry="50"
              fill={hoveredCountry === "china" ? "#fca5a5" : "#dc2626"}
              opacity={hoveredCountry === "china" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="680" y="185" textAnchor="middle" fontSize="24" className="pointer-events-none">
              🏮
            </text>
          </g>

          <g
            onClick={() => setSelectedCountry("india")}
            onMouseEnter={() => setHoveredCountry("india")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="620"
              cy="240"
              rx="45"
              ry="55"
              fill={hoveredCountry === "india" ? "#fdba74" : "#f97316"}
              opacity={hoveredCountry === "india" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="620" y="245" textAnchor="middle" fontSize="24" className="pointer-events-none">
              🪔
            </text>
          </g>

          {/* Africa */}
          <g
            onClick={() => setSelectedCountry("egypt")}
            onMouseEnter={() => setHoveredCountry("egypt")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="520"
              cy="220"
              rx="35"
              ry="30"
              fill={hoveredCountry === "egypt" ? "#fde047" : "#eab308"}
              opacity={hoveredCountry === "egypt" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="520" y="225" textAnchor="middle" fontSize="24" className="pointer-events-none">
              🏛️
            </text>
          </g>

          <g
            onClick={() => setSelectedCountry("kenya")}
            onMouseEnter={() => setHoveredCountry("kenya")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="540"
              cy="280"
              rx="40"
              ry="45"
              fill={hoveredCountry === "kenya" ? "#bef264" : "#84cc16"}
              opacity={hoveredCountry === "kenya" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="540" y="285" textAnchor="middle" fontSize="24" className="pointer-events-none">
              🦁
            </text>
          </g>

          {/* Europe */}
          <g
            onClick={() => setSelectedCountry("france")}
            onMouseEnter={() => setHoveredCountry("france")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="480"
              cy="140"
              rx="30"
              ry="35"
              fill={hoveredCountry === "france" ? "#a5b4fc" : "#6366f1"}
              opacity={hoveredCountry === "france" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="480" y="145" textAnchor="middle" fontSize="24" className="pointer-events-none">
              🥐
            </text>
          </g>

          <g
            onClick={() => setSelectedCountry("spain")}
            onMouseEnter={() => setHoveredCountry("spain")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="450"
              cy="170"
              rx="35"
              ry="30"
              fill={hoveredCountry === "spain" ? "#f9a8d4" : "#ec4899"}
              opacity={hoveredCountry === "spain" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="450" y="175" textAnchor="middle" fontSize="24" className="pointer-events-none">
              💃
            </text>
          </g>

          {/* Americas */}
          <g
            onClick={() => setSelectedCountry("mexico")}
            onMouseEnter={() => setHoveredCountry("mexico")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="220"
              cy="240"
              rx="40"
              ry="35"
              fill={hoveredCountry === "mexico" ? "#fcd34d" : "#f59e0b"}
              opacity={hoveredCountry === "mexico" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="220" y="245" textAnchor="middle" fontSize="24" className="pointer-events-none">
              🌮
            </text>
          </g>

          <g
            onClick={() => setSelectedCountry("brazil")}
            onMouseEnter={() => setHoveredCountry("brazil")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="300"
              cy="320"
              rx="50"
              ry="55"
              fill={hoveredCountry === "brazil" ? "#86efac" : "#22c55e"}
              opacity={hoveredCountry === "brazil" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="300" y="325" textAnchor="middle" fontSize="24" className="pointer-events-none">
              🎭
            </text>
          </g>

          {/* Oceania */}
          <g
            onClick={() => setSelectedCountry("australia")}
            onMouseEnter={() => setHoveredCountry("australia")}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all"
          >
            <ellipse
              cx="820"
              cy="360"
              rx="55"
              ry="45"
              fill={hoveredCountry === "australia" ? "#67e8f9" : "#06b6d4"}
              opacity={hoveredCountry === "australia" ? 1 : 0.8}
              className="transition-all hover:opacity-100"
            />
            <text x="820" y="365" textAnchor="middle" fontSize="24" className="pointer-events-none">
              🦘
            </text>
          </g>

          {/* Decorative elements */}
          <text x="500" y="50" textAnchor="middle" fontSize="20" fill="#1e40af" fontWeight="bold">
            Click any country to explore! 🌍
          </text>
        </svg>
      </div>

      {/* Country Info Panel */}
      {countryData && (
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-xl border-4 border-dashed animate-fadeIn"
             style={{ borderColor: countryData.color }}>
          <div className="flex items-start gap-4">
            <div className="text-6xl">{countryData.emoji}</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {countryData.name}
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                {countryData.description}
              </p>
              <div className="flex gap-3">
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                  Explore Culture 🔍
                </button>
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all">
                  Watch Videos 🎬
                </button>
              </div>
            </div>
            <button
              onClick={() => setSelectedCountry(null)}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Hover Tooltip */}
      {hoveredCountry && !selectedCountry && (
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg animate-fadeIn">
          <p className="text-sm font-semibold text-gray-700">
            Click to explore {countries[hoveredCountry].name} {countries[hoveredCountry].emoji}
          </p>
        </div>
      )}
    </div>
  );
}
