var Restaurants = function(id, Name, Photos, Location, Type, Cuisine, goodOptionsFor, Rating, Cost, Delivery) {
  return `
  <div class="col-sm-6">
    <div class="card mb-4 box-shadow">
      <div class="card-body">
        <h2>${Name}</h2>
        <a href="taqueria.html?id=${id}"><img class="card-img-top" src="${Photos}"></a>
        <p class="card-text">${Type}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="Restaurants.html?id=${id}" class="btn btn-sm btn-outline-secondary">View details</a>
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to favorites</button>
          </div>
          <small class="text-muted">${Rating}</small>
        </div>
      </div>
    </div>
  </div>`;
}

$.getJSON( "https://api.airtable.com/v0/appDfyDoNNK1cLLhG/Restaurants?api_key=keyud6f6RQFJhA9LP", function( data ) {
  console.log(data.records);
  var items = [];
  items.push(`<div class="row">`);
  $.each( data.records, function( index, val ) {
    //console.log(val.fields["Name"])

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
    var itemHTML = Restaurants(id, Name, Photos, Type, Location, Cuisine, goodOptionsFor, Rating, Cost, Delivery);
    items.push(itemHTML);
  });
 items.push(`</div>`);
  $( ".Restaurants-list") .append(items.join(""));
});
    
   