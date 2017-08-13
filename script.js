/*global $*/
/*global key*/
$(document).ready(function(){
    
    var followers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "CHRISLAMO", "KNpain"];
    var url = "https://api.twitch.tv/kraken/streams/freecodecamp?";
    
    var data = {
       client_id: key
   };
   
   $.ajax({
       url: url,
       data: data,
       type: "GET",
       dataType: "json",
       success: function(response){
           console.log(response);
           if(response.stream === null) {
               $('#fccOn').html('...is offline.');
           } else {
               $('#fccOn').html(' is online!');
           }
       }
   });
   
  for(var i = 0; i < followers.length; i++) {
     //console.log(followers);
     var url1 = "https://api.twitch.tv/kraken/channels/" + followers[i]; 
     
     $.ajax({
       url: url1,
       data: data,
       type: "GET",
       dataType: "json",
       success: function(response){
           console.log(response);
           
           var channel = response.url;
           var logo = response.logo;
           var name = response.name;
           var url2 = "https://api.twitch.tv/kraken/streams/" + response.name;
           console.log(name);
           $.ajax({
              
               url: url2,
               data: data,
               type: "GET",
               dataType: "json",
               success: function(data1){
                   //console.log(data1);
                   if(data1.stream === null) {
                       $("#input").append('<img src=' + logo + '>' + '  ' + '<a href=' + channel + '>' + name + '</a> is offline...<br>');
                   } else {
                       $("#input").append('<img src=' + logo + '>' + '  ' + '<a href=' + channel + '>' + name + '</a> is online !!<br>');
                   }
                  
               },
               error: function(err) {
                   $("#input").append(name + ' doesn\'t exist'); //this doesn't work
               }
           });
       },
       error: function(err) {
         alert('no');
       }
     });//ajax
     
     
     
     
    }; //for loop
    
   
       
  
   
   
   
    
});//end