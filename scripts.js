$.getJSON( "https://api.airtable.com/v0/appDfyDoNNK1cLLhG/Restaurants?api_key=keyud6f6RQFJhA9LP", function( data ) {
  // console.log(data.records);
 var items = [];
  $.each( data.records, function( index, val ) {
    //console.log(val.fields["Name"])
    items.push( "<li id='" + val.id + "'>" + 

  val.fields["Name"] + "</br>" + 
  val.fields["Location"] + "</br>" + 
  val.fields["Type"] + " -" + 
  val.fields["Cuisine"] + " -" + 
  val.fields["Good options for"] + " -" + 
  val.fields["Rating"] + " -" + 
  val.fields["Cost"] + " -" + 
  val.fields["Delivery"] + "'</li>" );
  });
 
  $( "<ol/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});