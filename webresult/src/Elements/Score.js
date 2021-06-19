const Score = (scores) => {
const score= scores.scores;
console.log(score);
  for (var i in score) {
    console.log("Key is "+i+". Value is "+score[i])
    return <div>
        <p>{i} : {score[i]} </p>
    </div>;
  }

};

export default Score;
