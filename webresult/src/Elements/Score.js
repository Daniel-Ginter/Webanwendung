const Score = (scores) => {
const score= scores.scores;
console.log(score);
  for (var i in score) {
    console.log("Key is "+i+". Value is "+score[i])
    return <div>
        <h3>{i} : {score[i]}</h3>
    </div>;
  }

};

export default Score;
