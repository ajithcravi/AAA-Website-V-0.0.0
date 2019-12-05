// This flag is declared to check whether number of times 'addImagesToCarousel' funnction is run. If it is the first time, active class should be added to the dots and carousel images
let flag = 0;

//Fetch the details of the images to be used in main carousel from the cloudinary cdn
fetch(
  "http://res.cloudinary.com/ajithvault/raw/upload/v1575472700/AAA/Data/carouselImages_kzwtiy.json"
)
  .then(response => response.json())
  .then(data => localStorage.setItem("carouselData", JSON.stringify(data)));