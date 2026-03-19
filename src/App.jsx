import './App.css'
import picture from './assets/images/avatar-jessica.jpeg'

const Links = () => {
    return (
        <div className='links'>
            <div className='link-container'>
                <a>GitHub</a>
            </div>
            <div className='link-container'>
                <a>Frontend Mentor</a>
            </div>
            <div className='link-container'>
                <a>Linkedin</a>
            </div>
            <div className='link-container'>
                <a>Twitter</a>
            </div>
            <div className='link-container'>
                <a>Instagram</a>
            </div>
        </div>
    )
}

const Description = () => {
    return (
        <div className='description'>"Front-end developer and avid reader"</div>
    )
}

const Address = () => {
    return (
        <div className='address'>London, United Kingdom</div>
    )
}

const Name = () => {
    return (
        <div className='name'>Jessica Randall</div>
    )
}

const Picture = () => {
    return (
        <div className='picture'>
            <img src={picture}></img>
        </div>
    )
}

const Card = () => {
    return (
        <div className='card'>
            <Picture />
            <Name />
            <Address />
            <Description />
            <Links />
        </div>
    )
}

const App = () => {
    return (
        <main>
            <Card />
        </main>
    )
}

export default App
