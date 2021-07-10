const Score = ({scores,scorePriority}) => {
console.log(scores);
console.log(scorePriority);
  for (var i in scores) {
    console.log("Key is "+i+". Value is "+scores[i])
    return <div>
        <h3>{i} : {scores[i]}</h3>
    </div>;
  }

};

export default Score;
