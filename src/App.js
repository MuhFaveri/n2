
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Sexo from './components/sexo'
import './medias.css'
import './global.css'
import './styles.css'

export default function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/sexo' element={<Sexo />}/>
            </Routes>
        </Router>
        </>

    );
}