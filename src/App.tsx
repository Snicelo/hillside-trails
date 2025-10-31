import "./App.css";
import TrailCard from "./components/TrailCard";
import type { Difficulty, Direction } from "./components/TrailCard";
import { useState } from "react";

function App() {
  const [sortBy, setSortBy] = useState<string | undefined>("");

  const trails: {
    name: string;
    difficulty: Difficulty;
    direction: Direction;
    imageSrc: string;
    distanceMi: number;
    elevationGain: number;
    averageTimeMinSec: number;
  }[] = [
    {
      name: "Drone Lane",
      difficulty: "beginner",
      direction: "two-way",
      imageSrc: "src/assets/Trail Img/Drone Lane Landscape.jpg",
      distanceMi: 0.1,
      elevationGain: 119,
      averageTimeMinSec: 3 * 60 + 29,
    },
    {
      name: "Queen Bee",
      difficulty: "beginner",
      direction: "two-way",
      imageSrc: "src/assets/Trail Img/Queen Bee Landscape.jpg",
      distanceMi: 1,
      elevationGain: 200,
      averageTimeMinSec: 7 * 60 + 45,
    },
    {
      name: "Janice's Jive",
      difficulty: "intermediate",
      direction: "two-way",
      imageSrc: "src/assets/Trail Img/Janice's Jive Landscape.jpg",
      distanceMi: 1,
      elevationGain: 215,
      averageTimeMinSec: 7 * 60 + 50,
    },
    {
      name: "The Hive",
      difficulty: "intermediate",
      direction: "two-way",
      imageSrc: "src/assets/Trail Img/The Hive Landscape.jpg",
      distanceMi: 0.2,
      elevationGain: 32,
      averageTimeMinSec: 2 * 60 + 16,
    },
    {
      name: "Hornet's Nest",
      difficulty: "intermediate",
      direction: "two-way",
      imageSrc: "src/assets/Trail Img/Hornet's Nest Landscape.jpg",
      distanceMi: 1,
      elevationGain: -97,
      averageTimeMinSec: 8 * 60 + 59,
    },
    {
      name: "Jeff's Whoop Whooop",
      difficulty: "intermediate",
      direction: "one-way-descending",
      imageSrc: "src/assets/Trail Img/Jeff's Whoop Whoop Landscape.jpg",
      distanceMi: 2,
      elevationGain: -485,
      averageTimeMinSec: 8 * 60 + 50,
    },
    {
      name: "Yellow Jacket",
      difficulty: "intermediate",
      direction: "two-way",
      imageSrc: "src/assets/Trail Img/Yellow Jacket Landscape.jpg",
      distanceMi: 0.92,
      elevationGain: -222,
      averageTimeMinSec: 7 * 60 + 58,
    },
    {
      name: "Gauer Power",
      difficulty: "expert",
      direction: "one-way-descending",
      imageSrc: "src/assets/Trail Img/Gauer Power Landscape.jpg",
      distanceMi: 0.95,
      elevationGain: -326,
      averageTimeMinSec: 3 * 60 + 50,
    },
    {
      name: "Dig Deep",
      difficulty: "expert",
      direction: "one-way-descending",
      imageSrc: "src/assets/Trail Img/Dig Deep Landscape.jpg",
      distanceMi: 0.9,
      elevationGain: -414,
      averageTimeMinSec: 5 * 60 + 30,
    },
    {
      name: "Eh Line",
      difficulty: "expert",
      direction: "one-way-descending",
      imageSrc: "src/assets/Trail Img/Eh Line Landscape.jpg",
      distanceMi: 0.7,
      elevationGain: -302,
      averageTimeMinSec: 4 * 60 + 31,
    },
    {
      name: "Ticket to Ride",
      difficulty: "intermediate",
      direction: "one-way-ascending",
      imageSrc: "src/assets/Trail Img/Ticket to Ride Landscape.jpg",
      distanceMi: 2,
      elevationGain: 430,
      averageTimeMinSec: 16 * 60 + 47,
    },
    {
      name: "Hemlock Burn",
      difficulty: "beginner",
      direction: "one-way-descending",
      imageSrc: "src/assets/Trail Img/Hemlock Burn Landscape.jpg",
      distanceMi: 6,
      elevationGain: -1247,
      averageTimeMinSec: 43 * 60 + 15,
    },
    {
      name: "Huck Fenn",
      difficulty: "intermediate",
      direction: "one-way-ascending",
      imageSrc: "src/assets/Trail Img/Huck Fenn Landscape.jpg",
      distanceMi: 0.746,
      elevationGain: 23,
      averageTimeMinSec: 0,
    },
    {
      name: "Endor",
      difficulty: "intermediate",
      direction: "one-way-descending",
      imageSrc: "src/assets/Trail Img/Endor Landscape.jpg",
      distanceMi: 0.72,
      elevationGain: -43,
      averageTimeMinSec: 0,
    },
    {
      name: "Turn & Burn",
      difficulty: "intermediate",
      direction: "one-way-descending",
      imageSrc: "src/assets/Trail Img/Turn & Burn Landscape.jpg",
      distanceMi: 0.57,
      elevationGain: -20,
      averageTimeMinSec: 0,
    },
    {
      name: "Millertime",
      difficulty: "intermediate",
      direction: "one-way-descending",
      imageSrc: "src/assets/Trail Img/Millertime Landscape.jpg",
      distanceMi: 0.85,
      elevationGain: -117,
      averageTimeMinSec: 0,
    },
    {
      name: "Wheels Up",
      difficulty: "beginner",
      direction: "one-way-ascending",
      imageSrc: "src/assets/Trail Img/Wheels Up Landscape.jpg",
      distanceMi: 0.93,
      elevationGain: 139,
      averageTimeMinSec: 0,
    },
  ];

  const filteredTrails = sortBy
    ? trails.filter((trail) => trail.difficulty === sortBy)
    : trails;

  return (
    <>
      <h1 className="fixed-title">Popular Hillside Trails</h1>
      <div style={{ height: "6rem" }} /> {/* Spacer to prevent overlap */}
      <select
        className="sort-control"
        aria-label="Sort trails by difficulty"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as string)}
      >
        <option value="">Sort by Difficulty</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
      </select>
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {filteredTrails.map((trail) => (
          <TrailCard
            key={trail.name}
            title={trail.name}
            imageSrc={trail.imageSrc}
            distanceMi={trail.distanceMi}
            difficulty={trail.difficulty}
            elevationGain={trail.elevationGain}
            direction={trail.direction}
            averageTimeMinSec={trail.averageTimeMinSec}
          />
        ))}
      </div>
      {/* sort select moved to top-left via .sort-control */}
    </>
  );
}

export default App;
