import React, { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../cafeInfo/CafeInfo.tsx";
import VoteOptions from "../voteOptions/VoteOptions.tsx";
import VoteStats from "../voteStats/VoteStats.tsx";
import type { Votes, VoteType } from "../types/votes.ts";
import Notification from "../notification/Notification.tsx";
const initialState: Votes = {
  good: 0,
  neutral: 0,
  bad: 0
};


export default function App() {
  const [votes, setVotes] = useState<Votes>(initialState);

  const handleVote = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const nameButton = event.currentTarget.name as VoteType;

    setVotes(prev => ({
      ...prev,
      [nameButton]: prev[nameButton] + 1
    }));
  };

  const countTotalVotes = (): number => {
    return Object.values(votes).reduce((sum, value) => sum + value, 0);
  };

  const countPositiveRate = (total: number): number => {
    return total ? Math.round((votes.good * 100) / total) : 0;
  };

  const totalVotes = countTotalVotes();
  const positiveRate = countPositiveRate(totalVotes);

  const resetVotes = () => setVotes(initialState);

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={!!totalVotes} />

      {totalVotes ? (
        <VoteStats
          good={votes.good}
          neutral={votes.neutral}
          bad={votes.bad}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}