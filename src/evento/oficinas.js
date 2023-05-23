import oficina from "./assets/oficina.png"
import palestra from "./assets/palestra.png"

export default function Oficinas() {

    return(
        <>
        
        <div className="cssOficinas" id="idOficina" >
            <img src={oficina} id="imagemOficina" alt="bugou" />
            <p>Em um dos dias do evento, 
                os professores, Aparecido e Leila, 
                realizarão em suas respectivas salas, 
                uma pequena palestra. Assim, a seguir, 
                os visitantes poderão experienciar o 
                novo assunto apresentado através de 
                atividades guiadas pelos mesmos, a fim
                 de faze-los aprender sobre novos 
                 assuntos na área de tecnologia e
                  sobre a vida no mercado de trabalho.</p>

        </div>

        <div className="cssOficinas" id="idPalestra" >
            <img src={palestra} id="imagemPalestra" alt="bugou" />
            <p>Além das oficinas oferecidas pelo evento, 
                também serão apresentadas por outros dois
                 professores duas palestras. Nelas, serão
                  abordados assuntos atuais sobre tecnologia
                   e o mundo no mercado de trabalho de TI.
                    Além de uma brimcadeira surpresa
                     oferecida por um dos professores.</p>
        </div>

        <button id="botaoProgramacao" >PROGRAMAÇÃO</button>

        </>
    )

}