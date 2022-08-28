
function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = mm+'/'+dd;
    return date
 }
 
function getCookie(prefix) {
    var dict = {};
  let name = prefix + "_";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(prefix) == 0) {
      //document.writeln(c);
      var start_end = c.substring(prefix.length+1);
      //document.writeln(start_end);
      var start = parseInt(start_end.split('=')[0].trim());
      // document.writeln(start);
      var end = start_end.split('=')[1].trim();
      // document.writeln(end);
      var duration = (end-start)/60000;//duration in minutes
      var startdate = formatDate ( new Date(start));
       //document.writeln(startdate + ":", duration.toString());
      if(dict.hasOwnProperty(startdate)){
        dict[startdate] = dict[startdate]+duration;
      }else{
        dict[startdate] = duration;
      }
      
      
    }
  }
  return dict;
}

