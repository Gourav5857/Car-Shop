let cars = [
    {
      id:1,
      name: "Land Rover Range Rover Sport",
      description:
        "The Land Rover Range Rover Sport is a performance-focused SUV from the British brand, offering two powerful engine options: a 3-litre diesel and a 3-litre petrol engine, both supported by mild-hybrid technology for enhanced efficiency.",
      imgPath: "./redRover.avif",
      colors:"Choose colors from below:",
      availableColors: {
        red: "redRover.avif",
        black: "blackRover.avif",
        gray: "greyRover.avif",
      },

    },
  ];
//   console.log(cars.img);
  function saveToLocalStorage(){
      localStorage.setItem("Cars", JSON.stringify(cars));
  }
  saveToLocalStorage();
  
  
  function renderCars(){
      document.getElementById('car').innerHTML = cars.map((c)=>
      `<div class="card" style="width: 18rem;">
    <img src="./${c.imgPath}" class="card-img-top" alt="...">
    <div class="card-body">
    
      <h5 class="card-title">${c.name}</h5>
      <p class="card-text">${c.description}</p>
      <h4  class="card-text">${c.colors}</h4>
      <div>
      <button class="btn btn-dark color-btn" style="border-radius: 50%;" dataColor="black" dataId="${c.id}"></button>
          <button class="btn btn-danger color-btn" style="border-radius: 50%;" dataColor="red" dataId="${c.id}"></button>
          <button class="btn btn-secondary color-btn" style="border-radius: 50%;" dataColor="gray" dataId="${c.id}"></button>
        </div>
    </div>
  </div>`
      )
      .join("");
      addColorEventListeners();
  }
//   renderCars();
  function updateCarColor(id, color) {
    const car = cars.find((c) => c.id === id);
    if (car && car.availableColors[color]) {
      car.imgPath = car.availableColors[color];
      renderCars();
    }
  }  

  function addColorEventListeners() {
    const colorButtons = document.querySelectorAll(".color-btn");
    colorButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const color = e.target.getAttribute("dataColor");
        const id = parseInt(e.target.getAttribute("dataId"));
        updateCarColor(id, color);
      });
    });
  }
  renderCars();
