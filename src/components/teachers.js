import cido from './assets/cido.png'


export default function Teachers(){
    return(
        <section id="teachers">
        <div class="teachers-content">
          <h2>Conheça um pouco dos palestrantes</h2>
          <h1>PROFESSORES ESPECIALIZADOS</h1>

          <div class="all-teachers">
            <div class="card-teacher">
              <img src="./images/cido.png" alt="" />

              <div class="teacher-content">
                <strong>Aparecido Freitas</strong>
                <p>Engenheiro da computação</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>

            <div class="card-teacher">
              <img src="./images/cido.png" alt="" />

              <div class="teacher-content">
                <strong>Aparecido Freitas</strong>
                <p>Engenheiro da computação</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>
            
            <div class="card-teacher">
              <img src="./images/fabricio.png" alt="" />

              <div class="teacher-content">
                <strong>Fabricio Perella</strong>
                <p>Acessor de TI e professor</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>

            <div class="card-teacher">
              <img src="./images/mario-eugenio-longato.jpg" alt="" />

              <div class="teacher-content">
                <strong>Mario Longato</strong>
                <p>Professor e Engenheiro</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}