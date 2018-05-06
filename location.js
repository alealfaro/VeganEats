var locationdetails = function(id, Name, Photos, Location, Type, Cuisine, goodOptionFor, Rating, Cost, Delivry) {
  return `<div class="col-sm-12">
    <div class="card mb-4 box-shadow">
      <a href="location.html?id=${id}"><img class="card-img-top" src="${Photos}"></a>
      <div class="card-body">
        <h2><a href="location.html?id=${id}">${Name}</a></h2>
        <p class="card-text">${Cuisine}</p>
        <p class="card-text">${Location}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="location.html?id=${id}" class="btn btn-sm btn-outline-secondary">View details</a>
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to favorites</button>
          </div>
          <small class="text-muted">${Rating}</small>
        </div>
      </div>
    </div>
  </div>`;
}
 function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var id = getParameterByName("id", window.location.href);


$.getJSON( `https://api.airtable.com/v0/appDfyDoNNK1cLLhG/Restaurants/${id}?api_key=keyud6f6RQFJhA9LP`, function( val ) {
  // console.log(data);
  var items = [];
  items.push(`<div class="row">`);

    var id = val.id;
    var Name = val.fields["Name"];
    var Photos = val.fields["Photos"] ? val.fields["Photos"][0].url : '';  
    var Type = val.fields["Type"];
    var Location = val.fields["Location"]
    var Cuisine = val.fields["Cuisine"];
    var goodOptionsFor = val.fields["Good options for"];
    var Rating = val.fields["Rating"];
    var Cost = val.fields["Cost"];
    var Delivery = val.fields["Delivery"]
    var itemHTML = locationdetails(id, Name, Photos, Type, Location, Cuisine, goodOptionsFor, Rating, Cost, Delivery);
    items.push(itemHTML);

  items.push(`</div>`);

  $(".location-details" ).append(items.join(""));
});
