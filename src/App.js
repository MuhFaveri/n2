
import './medias.css'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './components/home'
import PagEvento from './evento/PaginaEscrita'
import './global.css'
import './evento/eventocss.css'
import './styles.css'

export default function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/evento' element={<PagEvento />}/>
            </Routes>
        </Router>
        </>

    );
}