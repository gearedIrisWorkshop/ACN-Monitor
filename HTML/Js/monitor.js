//JavaScript ACN sniffer

(function update()
 {
   //-----------------------------------------------------------------------
   // 2) Send a http request with AJAX http://api.jquery.com/jQuery.ajax/
   //-----------------------------------------------------------------------
   $.ajax({
     type:"POST",
     url: '/SQLinterface.php',                  //the script to call to get data
     data: ({pass: getUni}),                        //you can insert url argumnets here to pass to api.php
                                      //for example "id=5&parent=6"
     dataType: 'json',                //data format
     success: function(rows)          //on recieve of reply
     {
       $('#output').text('');

      // $('#output').append("<div class='column'>"+"<table>"+
      //          "<tr><th>Channel</th><th>Value</th></tr>");
      //var Dmx = new Array();

       for (var i in rows){
         var row = rows[i];
         var Channel = row[0];

         Dmx[i] = row[1];
         //raw bytes or percentage
        // if (format == 1){
          // var Value = ((row[1] * 100)/255).toPrecision(3);
        // }else{
          // var Value = row[1];}
        //end of percentage check
        //collumn check

        //end of column check
    //   var DV = Dmx[i];
      //  var DC = parseInt(i)+1;
      //$('#output').append("<tr><td><b>"+ DC +"</b></td><td>"+ DV +"</td></tr>");
              //.append("<p>");
       }     //get name
       changeLayout(format);
     }
   }).then(function(){
      setTimeout(update, 10);
    });
 })();
