$.getJSON( "https://api.airtable.com/v0/appDfyDoNNK1cLLhG/Restaurants?api_key=keyud6f6RQFJhA9LP", function( data ) {
  // console.log(data.records);
 var items = [];
  $.each( data.records, function( index, val ) {
    //console.log(val.fields["Name"])
    items.push( "<li id='" + val.id + "'>" + 

  val.fields["Name"] + "</br>" + 
  val.fields["Location"] + "</br>" + 
  val.fields["Type"] + " </br>" + 
  val.fields["Cuisine"] + " </br>" + 
  val.fields["Good options for"] + " </br>" + 
  val.fields["Rating"] + " </br>" + 
  val.fields["Cost"] + " </br>" + 
  val.fields["Delivery"] + "'</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});