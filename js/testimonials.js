const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GEt", "https://api.npoint.io/fe17e2cd5722e9a4bfc2", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("fail load data");
    }
  };
  xhr.onerror = function () {
    reject("404 Not Found");
  };

  xhr.send();
});

async function allTestimonial() {
  try {
    const response = await testimonial;
    let testimonialHtml = "";
    response.map((item) => {
      testimonialHtml += `
      <div class="testimonial">
      <img src="${item.image}" alt="testimonial" class="profile-img">
          <p class="caption">${item.content}</p>
          <p class="author">- ${item.author}</p>
          <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
  </div>`;
    });
    document.querySelector(".testimonials").innerHTML = testimonialHtml;
  } catch (error) {
    console.log(error);
  }
}

async function filterTestimonials(rating) {
  try {
    const response = await testimonial;
    let testimonialHtml = ``;
    const dataFilter = response.filter((item) => {
      item.rating === rating;
    });
    if (dataFilter.length === 0) {
      testimonialHtml += `<h1> Data did not found!</h1>`;
    } else {
      dataFilter.forEach((item) => {
        testimonialHtml += `
        <div class="testimonial">
        <img src="${item.image}" alt="testimonial" class="profile-img">
            <p class="caption">${item.content}</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>`;
      });
    }
    document.querySelector(".testimonials").innerHTML = testimonialHtml;
  } catch (error) {
    console.log(error);
  }
}
