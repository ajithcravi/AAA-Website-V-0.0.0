// This flag is declared to check whether number of times 'addImagesToCarousel' funnction is run. If it is the first time, active class should be added to the dots and carousel images
let flag = 0;

//Fetch the details of the images to be used in main carousel from the cloudinary cdn
fetch(
  "http://res.cloudinary.com/ajithvault/raw/upload/v1575472700/AAA/Data/carouselImages_kzwtiy.json"
)
  .then(response => response.json())
  .then(data => localStorage.setItem("carouselData", JSON.stringify(data)));

let carouselImageData = JSON.parse(localStorage.getItem("carouselData"));

// This function adds images to the carouselImageData. This is called in the array.map function
addImagesToCarousel = object => {
  if (flag == false) {
    // To increase the carousel dots
    $("#carouselDots").append(
      `<li
          data-target="#carouselExampleIndicators"
          data-slide-to="${object.name}"
          class="active"
        ></li>`
    );

    // To increase the carousel image
    $("#carousel-inner").append(
      `<div class="carousel-item active">
      <img
        class="d-block w-100"
        src="${object.url}"
        alt="Slide"
      />
    </div>`
    );
    flag = flag + 1;
  } else {
    // To increase the carousel dots
    $("#carouselDots").append(
      `<li data-target="#carouselExampleIndicators" data-slide-to="${object.name}"></li>`
    );

    // To increase the carousel image
    $("#carousel-inner").append(
      `<div class="carousel-item">
      <img
        class="d-block w-100"
        src="${object.url}"
        alt="Slide"
      />
    </div>`
    );
  }
};

// Each element from the 'carouselImageData' array is mapped and the 'addImagesToCarousel'function is performed
carouselImageData.map(addImagesToCarousel);
