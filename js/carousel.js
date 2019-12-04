// This flag is declared to check whether number of times 'addImagesToCarousel' funnction is run. If it is the first time, active class should be added to the dots and carousel images
let flag = 0;

// The images to be used in carousel are stored in the form of javascript object array
let carouselImageData = [
  {
    name: 01,
    url:
      "https://res.cloudinary.com/ajithvault/image/upload/v1575439792/AAA/Main%20Carousel/01_ayfowk.jpg"
  },
  {
    name: 02,
    url:
      "https://res.cloudinary.com/ajithvault/image/upload/v1575439792/AAA/Main%20Carousel/02_ag5ucz.jpg"
  },
  {
    name: 05,
    url:
      "https://res.cloudinary.com/ajithvault/image/upload/v1575439791/AAA/Main%20Carousel/05_gfvgfu.jpg"
  },
  {
    name: 06,
    url:
      "https://res.cloudinary.com/ajithvault/image/upload/v1575439793/AAA/Main%20Carousel/06_ewmvfs.jpg"
  },
  {
    name: 07,
    url:
      "https://res.cloudinary.com/ajithvault/image/upload/v1575439793/AAA/Main%20Carousel/07_awlkwx.jpg"
  },
  {
    name: 09,
    url:
      "https://res.cloudinary.com/ajithvault/image/upload/v1575439792/AAA/Main%20Carousel/09_dkd57j.jpg"
  }
];

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
