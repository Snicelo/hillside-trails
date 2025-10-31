import "./App.css";
import TrailCard from "./components/TrailCard";
import type { Difficulty, Direction } from "./components/TrailCard";
import { useState } from "react";

const imageMap = import.meta.glob("./assets/Trail Img/*.{jpg,jpeg,png}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const img = (fileName: string) => imageMap[`./assets/Trail Img/${fileName}`];

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
      imageSrc: img("Drone Lane Landscape.jpg"),
      distanceMi: 0.1,
      elevationGain: 119,
      averageTimeMinSec: 3 * 60 + 29,
    },
    {
      name: "Queen Bee",
      difficulty: "beginner",
      direction: "two-way",
      imageSrc: img("Queen Bee Landscape.jpg"),
      distanceMi: 1,
      elevationGain: 200,
      averageTimeMinSec: 7 * 60 + 45,
    },
    {
      name: "Janice's Jive",
      difficulty: "intermediate",
      direction: "two-way",
      imageSrc: img("Janice's Jive Landscape.jpg"),
      distanceMi: 1,
      elevationGain: 215,
      averageTimeMinSec: 7 * 60 + 50,
    },
    {
      name: "The Hive",
      difficulty: "intermediate",
      direction: "two-way",
      imageSrc: img("The Hive Landscape.jpg"),
      distanceMi: 0.2,
      elevationGain: 32,
      averageTimeMinSec: 2 * 60 + 16,
    },
    {
      name: "Hornet's Nest",
      difficulty: "intermediate",
      direction: "two-way",
      imageSrc: img("Hornet's Nest Landscape.jpg"),
      distanceMi: 1,
      elevationGain: -97,
      averageTimeMinSec: 8 * 60 + 59,
    },
    {
      name: "Jeff's Whoop Whooop",
      difficulty: "intermediate",
      direction: "one-way-descending",
      imageSrc: img("Jeff's Whoop Whoop Landscape.jpg"),
      distanceMi: 2,
      elevationGain: -485,
      averageTimeMinSec: 8 * 60 + 50,
    },
    {
      name: "Yellow Jacket",
      difficulty: "intermediate",
      direction: "two-way",
      imageSrc: img("Yellow Jacket Landscape.jpg"),
      distanceMi: 0.92,
      elevationGain: -222,
      averageTimeMinSec: 7 * 60 + 58,
    },
    {
      name: "Gauer Power",
      difficulty: "expert",
      direction: "one-way-descending",
      imageSrc: img("Gauer Power Landscape.jpg"),
      distanceMi: 0.95,
      elevationGain: -326,
      averageTimeMinSec: 3 * 60 + 50,
    },
    {
      name: "Dig Deep",
      difficulty: "expert",
      direction: "one-way-descending",
      imageSrc: img("Dig Deep Landscape.jpg"),
      distanceMi: 0.9,
      elevationGain: -414,
      averageTimeMinSec: 5 * 60 + 30,
    },
    {
      name: "Eh Line",
      difficulty: "expert",
      direction: "one-way-descending",
      imageSrc: img("Eh Line Landscape.jpg"),
      distanceMi: 0.7,
      elevationGain: -302,
      averageTimeMinSec: 4 * 60 + 31,
    },
    {
      name: "Ticket to Ride",
      difficulty: "intermediate",
      direction: "one-way-ascending",
      imageSrc: img("Ticket to Ride Landscape.jpg"),
      distanceMi: 2,
      elevationGain: 430,
      averageTimeMinSec: 16 * 60 + 47,
    },
    {
      name: "Hemlock Burn",
      difficulty: "beginner",
      direction: "one-way-descending",
      imageSrc: img("Hemlock Burn Landscape.jpg"),
      distanceMi: 6,
      elevationGain: -1247,
      averageTimeMinSec: 43 * 60 + 15,
    },
    {
      name: "Huck Fenn",
      difficulty: "intermediate",
      direction: "one-way-ascending",
      imageSrc: img("Huck Fenn Landscape.jpg"),
      distanceMi: 0.746,
      elevationGain: 23,
      averageTimeMinSec: 0,
    },
    {
      name: "Endor",
      difficulty: "intermediate",
      direction: "one-way-descending",
      imageSrc: img("Endor Landscape.jpg"),
      distanceMi: 0.72,
      elevationGain: -43,
      averageTimeMinSec: 0,
    },
    {
      name: "Turn & Burn",
      difficulty: "intermediate",
      direction: "one-way-descending",
      imageSrc: img("Turn & Burn Landscape.jpg"),
      distanceMi: 0.57,
      elevationGain: -20,
      averageTimeMinSec: 0,
    },
    {
      name: "Millertime",
      difficulty: "intermediate",
      direction: "one-way-descending",
      imageSrc: img("Millertime Landscape.jpg"),
      distanceMi: 0.85,
      elevationGain: -117,
      averageTimeMinSec: 0,
    },
    {
      name: "Wheels Up",
      difficulty: "beginner",
      direction: "one-way-ascending",
      imageSrc: img("Wheels Up Landscape.jpg"),
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
    </>
  );
}

export default App;
