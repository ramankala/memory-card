
const ScoreBoard = (props) => {
    const { currentScore, bestScore } = props;
    return (
        <div>
            {currentScore}
            {bestScore}
        </div>
    )
}

export default ScoreBoard;