function getMovieResult(str) {
    if (str.length==0) { 
        document.getElementById('movielist').innerHTML="";    
      
      return;
    }
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    } else {  // code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {

            // Parse the json result
            var data = JSON.parse(this.response);
        
            // Clear the movielist  
            const app = document.getElementById('movielist');              
            app.innerHTML="";    

            // Create the movielist
            if (data.Search.length > 0) {
                var text = "";          
                var poster_no = "<img src='images/no_image.svg'>";
                
                for (i = 0; i < data.Search.length; i++) {          
                  var poster_yes = "<img src=" + data.Search[i].Poster + ">";

                  text += "<div class='card'>";                
                  text +=     "<div class='card-img'>";

                  // Check if there is a poster available
                  if (data.Search[i].Poster == "N/A") {
                    text +=   poster_no;                      
                  } else {
                    text +=   poster_yes;
                  }                  
                  
                  text +=     "</div>";
                  text +=     "<div class='card-header'>";                
                  text +=         data.Search[i].Title;                    
                  text +=     "</div>";
                  text +=     "<div class='card-year'>";                
                  text +=         "(" + data.Search[i].Year + ")";
                  text +=     "</div>";
                  text += "</div>";                
                }                
                // Print the movielist
                app.innerHTML=text;                   
            }
        }
    }
    xmlhttp.open("GET","https://www.omdbapi.com/?apikey=2c7cac91&r=json&s="+str,true);
    xmlhttp.send();
}