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
                for (i = 0; i < data.Search.length; i++) {          
                                              
                    text += "<div>" + data.Search[i].Title + "<div>";                

                //text += data.Search[i].Title + " - " + data.Search[i].Year + " - " + data.Search[i].Poster; + "<br>";
                
                                  
                //document.getElementById(i).innerHTML+=data.Search[i].Title + " - " + data.Search[i].Year + " - " + data.Search[i].Poster;     
                }                
                app.innerHTML=text;          
            }
            

            // Add links
            //document.getElementById(i).innerHTML+='<a href="#" onclick="showCard(' + data.Search + "," + i + ')">' + data.Search[i].Title + " - " + data.Search[i].Year + '</a>';

            //document.getElementById(i).innerHTML+=data.Search[i].Title + " - " + data.Search[i].Year + " - " + data.Search[i].Poster;     
            //document.getElementById(i).innerHTML+=data.Search[i].Title + " - " + data.Search[i].Year + "<br>";     
                
            //document.getElementById(i).innerHTML='<a href="#" onclick="showCard(' + data.Search + "," + i + ')">' + data.Search[i].Title + " - " + data.Search[i].Year + '</a>';
            //document.getElementById(i).innerHTML=data.Search[i].Title + " - " + data.Search[i].Year;     

            
        }
  
    }
    xmlhttp.open("GET","http://www.omdbapi.com/?apikey=2c7cac91&r=json&s="+str,true);
    xmlhttp.send();
}