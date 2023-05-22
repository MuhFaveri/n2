import fabricio from './assets/fabricio.png'
import cido from './assets/cido.png'
import longato from './assets/longato.png'
import leila from './assets/leila.png'
import mecchi from './assets/mecchi.png'


export default function Teachers(){
    return(
        <section id="teachers">
        <div className="teachers-content">
          <h2>Conheça um pouco dos palestrantes</h2>
          <h1>PROFESSORES ESPECIALIZADOS</h1>

            <div className='all-teachers'>
            <div className="card-teacher">
              <img src={fabricio} alt="" />

              <div className="teacher-content">
                <strong>Fabrício Perella</strong>
                <p>Acessor de TI e professor</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>

            <div className="card-teacher">
              <img src={cido} alt="" />

              <div className="teacher-content">
                <strong>Aparecido Freitas</strong>
                <p>Engenheiro da computação</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>






            
            <div className="card-teacher">
              <img src={longato} alt="" />

              <div className="teacher-content">
                <strong>Marcelo Longato</strong>
                <p>Professor e Engenheiro</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>

            <div className="card-teacher">
              <img src={leila} alt="" />

              <div className="teacher-content">
                <strong>Leila Sanchez</strong>
                <p>PLACEHOLDER</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>
            


          </div>
          <div className='mecchi' id='mecchi2'>
          <div className='card-teacher' id='asd'>
              <img src={mecchi} alt="" />

              <div className="teacher-content">
                <strong>Marcelo Mecchi</strong>
                <p>PLACEHOLDER</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
                
              </div>
          </div>
          </div>
        </div>
      </section>
    )
}