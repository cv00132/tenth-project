import $ from 'jquery';

function fetchData (callback) {
  $.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: callback
  })
}

function directoryInfo(database){
  for (var i = 0; i < database.results.length; i++) {
  var  data = database.results[i];

    $(".container").append(`
      <div class= "profile">
      <div><img src="${data.picture.large}"/>
      </div>
        <div class = "name">
        <span>${data.name.first}
        ${data.name.last}</span>
        </div>
        <div class= "email">
        ${data.email}
        </div>
        <div class= "street">
        ${data.location.street}
        </div>
        <div class= "address">
        ${data.location.city}
         ${data.location.state}
        ${data.location.postcode}
        </div>
        <div class= "phone">
        ${data.phone}
        </div>
        <div class= "cell">
        ${data.cell}
          </div>
        </div>`
      );  console.log(data);

    }
  };

    fetchData(directoryInfo);
