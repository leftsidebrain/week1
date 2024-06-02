let dataBlog = [];
function handleInput(event) {
  let inputName = document.getElementById("inputName").value;
  let inputStartDate = document.getElementById("inputStartDate").value;
  let inputEndDate = document.getElementById("inputEndDate").value;
  let inputDescription = document.getElementById("inputDescription").value;
  let inputNodeJs = document.getElementById("inputNodeJs");
  let inputReactJs = document.getElementById("inputReactJs");
  let inputNextJs = document.getElementById("inputNextJs");
  let inputTypesricpt = document.getElementById("inputTypescript");
  let inputFile = document.getElementById("inputFile").files;

  event.preventDefault();

  if (!inputName) {
    alert("nama harus diisi");
  } else if (!inputDescription) {
    alert("Deskripsi harus diisi");
  } else if (!inputStartDate) {
    alert("Tanggal mulai harus diisi");
  } else if (!inputEndDate) {
    alert("Deskripsi harus diisi");
  } else if (inputFile == "") {
    alert("file harus diisi");
  } else {
  }
  inputFile = URL.createObjectURL(inputFile[0]);

  const node = inputNodeJs.checked ? true : false;
  const react = inputReactJs.checked ? true : false;
  const next = inputNextJs.checked ? true : false;
  const typescript = inputTypesricpt.checked ? true : false;

  let blog = {
    nama: inputName,
    startDate: inputStartDate,
    endDate: inputEndDate,
    desc: inputDescription,
    file: inputFile,
    node: node,
    react: react,
    next: next,
    typescript: typescript,
  };
  dataBlog.push(blog);
  console.log("data yng dikirim", dataBlog);
  insertBlog();
}

function insertBlog() {
  document.getElementById("content").innerHTML = "";
  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("content").innerHTML += `
            <div class="blog-list-items">
                <div class="blog-image">
                    <img src="${dataBlog[index].file}" alt="image upload" />
                </div>
                <div class="blog-content">
                <h1>
                <a href="blog-detail.html" target="_blank">${dataBlog[index].nama}</a>
                </h1>
                <div class="detail-blog">
                ${dataBlog[index].startDate} | ${dataBlog[index].nama}
                </div>
                <p>
                ${dataBlog[index].desc}
                </p>
                <p>
                ${dataBlog[index].endDate}
                </p>
                <div class="logo">
                ${dataBlog[index].node ? `<i class="fa-brands fa-node-js"></i>` : ""}
                ${dataBlog[index].react ? `<i class="fa-brands fa-react"></i>` : ""}
                ${dataBlog[index].next ? `<i class="fa-brands fa-jsfiddle"></i>` : ""}
                ${dataBlog[index].typescript ? `<i class="fa-solid fa-scroll"></i>` : ""}
                </div>
                <div class="btn-group">
                    <button class="btn-edit"> Edit Blog </button>
                    <button class="btn-post"> Post Blog </button>
                </div>
                </div>
            </div>
        `;
  }
}

setInterval(function () {
  insertBlog();
}, 1000);
