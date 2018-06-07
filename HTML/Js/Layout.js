

function SkyPanel(fix,iAdd){
  this.Fixture = fix;
  this.Int = iAdd - 1;
  this.Color = iAdd;
}

var NumOfix = 16;
var Fix3 = new SkyPanel(3,1);
var Fix4 = new SkyPanel(4,21);
var Fix5 = new SkyPanel(5,41);
var Fix6 = new SkyPanel(6,61);
var Fix7 = new SkyPanel(7,81);
var Fix8 = new SkyPanel(8,101);
var Fix9 = new SkyPanel(9,121);
var Fix10 = new SkyPanel(10,141);
var Fix11 = new SkyPanel(11,161);
var Fix12 = new SkyPanel(12,181);
var Fix13 = new SkyPanel(13,201);
var Fix14 = new SkyPanel(14,221);
var Fix15 = new SkyPanel(15,241);
var Fix16 = new SkyPanel(16,261);
var Fix17 = new SkyPanel(17,281);
var Fix18 = new SkyPanel(18,301);


var changeLayout = function(select){
    var columnHand = 1;

    if (select == -1 ){
      $('#output').append(" Please Select a Format.");
    }

    if (select == 0){
      $('#output').text('');
      for (i in Dmx){
        if (i == 0|| i== 127 || i == 255 || i == 383 ){
        $('#output').append("<div class='column'><table id = 'column"+ columnHand + "'></table></div>");
        columnHand++;
        }
        var DC = parseInt(i)+1;
        var DV = Dmx[i];
        if(i<128){
          $('#column1').append("<tr><td><b>"+
          DC +"</b></td><td>"+ DV +"</td></tr>");
        }
        if (i >= 128 && i < 256){
          $('#column2').append("<tr><td><b>"+
          DC +"</b></td><td>"+ DV +"</td></tr>");
        }
        if (i >= 256 && i < 384){
            $('#column3').append("<tr><td><b>"+
            DC +"</b></td><td>"+ DV +"</td></tr>");
        }
        if (i >= 384 && i <512){
          $('#column4').append("<tr><td><b>"+
           DC +"</b></td><td>"+ DV +"</td></tr>");
        }
      }

    }
    if (select == 1){
    //  $('#output').text('');

      for (i in Dmx){
        var DC = parseInt(i)+1;
        var DV = ((parseInt(Dmx[i])*100)/255).toPrecision(3);
          if (i == 0|| i== 127 || i == 255 || i == 383 ){
          $('#output').append("<div class='column'><table id = 'column"+
          columnHand + "'></table></div>");
          columnHand++;
          }
          if(i<128){
            $('#column1').append("<tr><td><b style='font-size:80%'>"+
            DC +"</b></td><td style='font-size:80%'>"+ DV +"%</td></tr>");
          }
          if (i >= 128 && i < 256){
            $('#column2').append("<tr><td><b style='font-size:80%'>"+
             DC +"</b></td><td style='font-size:80%'>"+ DV +"%</td></tr>");
          }
          if (i >= 256 && i < 384){
              $('#column3').append("<tr><td><b style='font-size:80%'>"+
              DC +"</b></td><td style='font-size:80%'>"+ DV +"%</td></tr>");
          }
          if (i >= 384 && i <512){
            $('#column4').append("<tr><td><b style='font-size:80%'>"+
            DC +"</b></td><td style='font-size:80%'>"+ DV +"%</td></tr>");
          }
        }
    }
    if (select == 2){
        $('#output').append("<table id='paneltable'>");
        $('#paneltable').append("<tr><th>Fixture #</th><th>Intensity</th><th>Color Temp</th></tr>")
        $('#paneltable').append("<tr><td>"+ Fix3.Fixture +"</td><td>"+(((Dmx[Fix3.Int]*100)/255).toPrecision(3))+"%</td><td>"
            + Math.round(((Dmx[Fix3.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix4.Fixture +"</td><td>"+(((Dmx[Fix4.Int]*100)/255).toPrecision(3))+"%</td><td>"
            + Math.round(((Dmx[Fix4.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix5.Fixture +"</td><td>"+(((Dmx[Fix5.Int]*100)/255).toPrecision(3))+"%</td><td>"
            + Math.round(((Dmx[Fix5.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix6.Fixture +"</td><td>"+(((Dmx[Fix6.Int]*100)/255).toPrecision(3))+"%</td><td>"
            + Math.round(((Dmx[Fix6.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix7.Fixture +"</td><td>"+(((Dmx[Fix7.Int]*100)/255).toPrecision(3))+"%</td><td>"
            + Math.round(((Dmx[Fix7.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix8.Fixture +"</td><td>"+(((Dmx[Fix8.Int]*100)/255).toPrecision(3))+"%</td><td>"
            + Math.round(((Dmx[Fix8.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix9.Fixture +"</td><td>"+(((Dmx[Fix9.Int]*100)/255).toPrecision(3))+"%</td><td>"
            + Math.round(((Dmx[Fix9.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix10.Fixture +"</td><td>"+(((Dmx[Fix10.Int]*100)/255).toPrecision(3))+"%</td><td>"
                + Math.round(((Dmx[Fix10.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix11.Fixture +"</td><td>"+(((Dmx[Fix11.Int]*100)/255).toPrecision(3))+"%</td><td>"
                + Math.round(((Dmx[Fix11.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix12.Fixture +"</td><td>"+(((Dmx[Fix12.Int]*100)/255).toPrecision(3))+"%</td><td>"
                + Math.round(((Dmx[Fix12.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix13.Fixture +"</td><td>"+(((Dmx[Fix13.Int]*100)/255).toPrecision(3))+"%</td><td>"
                + Math.round(((Dmx[Fix13.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix14.Fixture +"</td><td>"+(((Dmx[Fix14.Int]*100)/255).toPrecision(3))+"%</td><td>"
                + Math.round(((Dmx[Fix14.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix15.Fixture +"</td><td>"+(((Dmx[Fix15.Int]*100)/255).toPrecision(3))+"%</td><td>"
                + Math.round(((Dmx[Fix15.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix16.Fixture +"</td><td>"+(((Dmx[Fix16.Int]*100)/255).toPrecision(3))+"%</td><td>"
                + Math.round(((Dmx[Fix16.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix17.Fixture +"</td><td>"+(((Dmx[Fix17.Int]*100)/255).toPrecision(3))+"%</td><td>"
                + Math.round(((Dmx[Fix17.Color]*28.2828282828)+2800))+"</td></tr>");
        $('#paneltable').append("<tr><td>"+ Fix18.Fixture +"</td><td>"+(((Dmx[Fix18.Int]*100)/255).toPrecision(3))+"%</td><td>"
                + Math.round(((Dmx[Fix18.Color]*28.2828282828)+2800))+"</td></tr>");
      }
  }
