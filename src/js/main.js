import $ from 'jquery';

function fetchData (callback) {
  $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: callback
  })
}

function directoryInfo(database){
    var data = database.results[0];

    $(".container").append(`
      <div class="directory">
      <div class="profile">
      <div><img src="${data.picture.large}"/>
      </div>
        <div>
        ${data.name.first.toUpperCase()}
        ${data.name.last.toUpperCase()}
        </div>
        <div class="email">
        ${data.email.toUpperCase()}
        </div>
        <div class="street">
        ${data.location.street}
        </div>
        <div class="address">
        ${data.location.city} ${data.location.state} ${data.location.postcode}
        </div>
        <div class="phone">
        ${data.phone}
        </div>
        <div class="">
        ${data.cell}
          </div>
        </div>
      </div>`
    );
  };

 for(var count = 0; count < 12; count++){
    fetchData(directoryInfo);
};
