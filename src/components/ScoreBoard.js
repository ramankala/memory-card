import '../styles/ScoreBoard.css';

const ScoreBoard = (props) => {
    const { currentScore, bestScore } = props;
    return (
        <div id='scoreBoard'>
            <p id='currentScore'>Score: {currentScore}</p>
            <p id='bestScore'>Best Score: {bestScore}</p>
        </div>
    )
}

export default ScoreBoard;