export default function homePage() {
  const content = document.querySelector("#content");
  content.innerHTML = `
  <div id="home-container">
  <div id="home-img"></div>
    <div id="home-about">
      <h1>Espetos Lima's</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cum
        suscipit unde facere dolor veniam itaque dolores ut expedita
        obcaecati? Voluptatum, nobis. Laborum enim ullam, quibusdam sapiente
        quaerat natus adipisci. lorem
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cum
        suscipit unde facere dolor veniam itaque dolores ut expedita
        obcaecati? Voluptatum, nobis. Laborum enim ullam, quibusdam sapiente
        quaerat natus adipisci. lorem
      </p>
    </div>
    <div id="home-hour">
      <h4>Horario de atendimento</h4>
      <p>Seg à sexta das 09:00h às 18:00h</p>
    </div>
    <div id="home-address">
      <h4>Endereço</h4>
      <p>Av. Paulista, 1000</p>
    </div>
  </div>`;
}
