let sendBtnEl = document.getElementById("sendGetRequestBtn");
let titleElement = document.getElementById("title");
let num_PagesElement = document.getElementById("num_pages");
let imageEl = document.getElementById("images");
let imageShow = document.getElementById("im");

function sendGetHttpRequest() {
  let options = {
    method: "GET",
  };
  let url =
    "https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json";

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      const myobj = jsonData;
      for (let v in myobj) {
        for (let i in myobj[v]) {
          //if ((myobj[v][i])=="authors"){
          if (i === "title") {
            //console.log(myobj[v][i])
            titleElement.textContent = myobj[v][i];
          }
          if (i === "number_of_pages") {
            //console.log(myobj[v][i])
            num_PagesElement.textContent = myobj[v][i];
          }
          if (i === "cover") {
            for (let cov in myobj[v][i]) {
              if (cov === "medium") {
                let url = myobj[v][i][cov];
                imageEl.src = url;
                //console.log(imageEl.src)
              }
            }
          }
        }
      }
    });
}
sendGetRequestBtn.addEventListener("click", sendGetHttpRequest);
