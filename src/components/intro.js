import img from './assets/image-intro.png'


function Intro(){
    return (
    <section id="intro">
    <div className="intro-content">
      <div>
        <h2>Semana da Computação</h2>
        <h1>Explorando a inovação</h1>
        <p>
          Um evento de computação animado que reune várias mentes
          brilhantes, cheio de discussões aprofundadas e troca de
          conhecimentos sobre tecnologia e inovação.
        </p>
      </div>

      <img src={img} alt="Baisinai" />

    </div>
  </section>)
}

export default Intro