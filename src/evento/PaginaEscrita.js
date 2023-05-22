import Nav from "../components/Nav+header"
import bg from './assets/Rectangle 17.png'
import fotofoot from './assets/Rectangle 21.png'
import Informacoes from "./informacoes"
export default function PagEvento(){

return(
    <>
    <img src={bg} className="image-background" alt="aaaa"/>
    <Nav></Nav>
    <h1 id="aaaa"><b><i>Evento</i></b></h1>
    <Informacoes></Informacoes>
    <img src={fotofoot} id='fotofoot' alt="quebrou"/>
    </>
)
}