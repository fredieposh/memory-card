import '../styles/header.css'

export default function Header({ score, maxScore }) {
    return (
        <>
        <div className='header-container'>
            <div className='header-welcome-container'>
                <h2>Welcome To Memory Game!</h2>
                <h3>Don't click on the same picture twice to win the game!</h3>
            </div>
            <div className='info-container'>
                <p className='score'>Score: {score}</p>
                <p className='max-score'>Max Score: {maxScore}</p>
            </div>
        </div>
        </>
    )
}