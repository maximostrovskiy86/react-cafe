import css from "./VoteStats.module.css";

interface VoteStatsProps {
  good: number;
  neutral: number;
  bad: number;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats = ({ good, neutral, bad, totalVotes = 0, positiveRate = 0 }: VoteStatsProps) => {

  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{bad}</strong>
      </p>

      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
