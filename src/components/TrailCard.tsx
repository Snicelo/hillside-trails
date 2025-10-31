import "./TrailCard.css";

export type Difficulty = "beginner" | "intermediate" | "expert";
export type Direction = "two-way" | "one-way-ascending" | "one-way-descending";

export interface TrailCardProps {
  title: string;
  imageSrc: string;
  distanceMi?: number;
  difficulty?: Difficulty;
  direction?: Direction;
  elevationGain?: number;
  averageTimeMinSec?: number;
  tags?: string[];
  onClick?: () => void;
}

const difficultyColor: Record<Difficulty, string> = {
  beginner: "var(--beginner-color, #4caf50)",
  intermediate: "var(--intermediate-color, #0084ffff)",
  expert: "var(--expert-color, #000000ff)",
};

export default function TrailCard({
  title,
  imageSrc,
  distanceMi,
  difficulty = "intermediate",
  direction = "two-way",
  elevationGain,
  averageTimeMinSec,
  tags = [],
  onClick,
}: TrailCardProps) {
  const elevationGainText =
    typeof elevationGain === "number"
      ? `${elevationGain >= 0 ? "+" : ""}${elevationGain} ft`
      : "—";
  return (
    <article
      className="trail-card"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="trail-image-wrap">
        <img src={imageSrc} alt={title} className="trail-image" />
      </div>
      <div className="trail-body">
        <div className="trail-header">
          <h3 className="trail-title">{title}</h3>
          <span
            className="trail-difficulty"
            style={{ backgroundColor: difficultyColor[difficulty] }}
          >
            {difficulty}
          </span>
        </div>

        <div className="trail-meta">
          <div className="meta-item">
            <strong>
              {direction === "two-way"
                ? "↔️"
                : direction === "one-way-ascending"
                ? "⬆️"
                : "⬇️"}
            </strong>
            <span className="meta-label">Direction</span>
          </div>
        </div>

        <div className="trail-meta">
          <div className="meta-item">
            <strong>{distanceMi != null ? `${distanceMi} mi` : "—"}</strong>
            <span className="meta-label">Distance</span>
          </div>
          <div className="meta-item">
            <strong>{elevationGainText}</strong>
            <span className="meta-label">Elevation Gain</span>
          </div>
        </div>

        <div className="trail-meta">
          <div className="meta-item">
            <strong>
              {averageTimeMinSec == null
                ? "—"
                : averageTimeMinSec === 0
                ? "N/A"
                : `${Math.floor(averageTimeMinSec / 60)} min ${
                    averageTimeMinSec % 60
                  } sec`}
            </strong>
            <span className="meta-label">Average Time</span>
          </div>
        </div>

        {tags.length > 0 && (
          <div className="trail-tags">
            {tags.map((t) => (
              <span key={t} className="trail-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
