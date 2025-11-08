import '../styles/header.css'

export default function Header() {
    return (
        <>
        <div className='header-container'>
            <div className='header-welcome-container'>
                <h2>Welcome To Memory Game!</h2>
                <h3>Don't click on the same picture twice to win the game!</h3>
            </div>
            <div className='info-container'>
                <p className='score'>Score: 0</p>
                <p className='max-score'>max Score: 0</p>
            </div>
        </div>
        </>
    )
}