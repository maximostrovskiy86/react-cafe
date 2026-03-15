import React from "react";
import css from "./VoteOptions.module.css";

interface PropsVoteOptions {
  onVote: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: PropsVoteOptions) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onVote} name={"good"}>Good</button>
      <button className={css.button} onClick={onVote} name={"neutral"}>Neutral</button>
      <button className={css.button} onClick={onVote} name={"bad"}>Bad</button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
      )}
    </div>
  );
};

export default VoteOptions;
