import './medias.css'
import './global.css'
import './styles.css'
import Nav from './components/Nav+header'
import Intro from './components/intro'
import Teachers from './components/teachers'
import bg from './components/assets/image-background-intro.png'
import Event from './components/event'
import Info from './components/info'

export default function App(){
    return(
    <main>
    <img className='image-background' src={bg} alt='beqgraund' />
    <Nav/>
    <Intro/>
    <Teachers />
    <Event/>
    <Info/>
    </main>
    );
}