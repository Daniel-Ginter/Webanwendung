
  const runCallback = (cb) => {
    return cb();
  };

const Score = ({scores,scorePriority}) => {
console.log(scores);
console.log(scorePriority);
return (
  <div>
    {runCallback(() => {
        const row = [];
        for (var i in scores) {
          console.log(i +" hat Score " +scores[i])
          row.push(<p key={i}>{i} hat <span className="blueHighlight tooltip">Score<p className="tooltiptext">Elementstatus ist {scorePriority[i]}</p></span> {scores[i]}</p>);
        }
        return row;
      })}
  </div>
);


};

export default Score;
