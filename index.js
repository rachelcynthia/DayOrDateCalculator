 window.onload=today;
            function today(){
            var tod=new Date();
            var day=String(tod.getDate()).padStart(2,'0');
            var month=String(tod.getMonth()+1).padStart(2,'0');
            var year=tod.getFullYear();
            var hour=String(tod.getHours()).padStart(2,'0');
            var min=String(tod.getMinutes()).padStart(2,'0');
            var sec=String(tod.getSeconds()).padStart(2,'0');

            var output=document.getElementById("today_date");
            output.innerHTML+=day+"-"+month+"-"+year;
            output.innerHTML+="   "+hour+":"+min+":"+sec;

            var mydate=document.querySelectorAll(".my_date");
            for(i=0;i<mydate.length;i++){
            mydate[i].value=year+'-'+month+'-'+day;

            var setyear=document.getElementById("get-year");
            setyear.innerHTML=year;

            var setyear=document.getElementById("get-year1");
            setyear.innerHTML=year;

            left(year);
            done(year);
            }
        }
        function new_date(){
            var output=document.getElementById("output1");
            curr_date = document.getElementById("mydate").value;
            var x=curr_date.split("-")
            var dat=new Date(Number(x[0]),Number(x[1]),Number(x[2]));
            //alert(dat.getDate()+"-"+dat.getMonth()+"-"+dat.getFullYear());
            var days=document.getElementById("days").value;
            var day=parseInt(days)+parseInt(x[2]);
            dat.setDate(day);
            output.innerHTML=dat.getDate()+"-"+dat.getMonth()+"-"+dat.getFullYear();
        }

        function get_days(){
            var output=document.getElementById("output2");
            from_date = document.getElementById("from_date").value;
            var x=from_date.split("-")
            var dat_from=new Date(Number(x[0]),Number(x[1]),Number(x[2]));
            to_date = document.getElementById("to_date").value;
            var x=to_date.split("-")
            var dat_to=new Date(Number(x[0]),Number(x[1]),Number(x[2]));
            var days=(dat_to.getTime()-dat_from.getTime())/(1000*60*60*24);
            output.innerHTML=days +" Days";
        }

        function left(year){
    
            var cur=new Date();
            var last=new Date(parseInt(year),11,31)
            var diff=(last.getTime()-cur.getTime())/(1000*60*60*24);
            var output=document.getElementById("output3.1");
            output.innerHTML=Math.round(diff)+" Days "+"<br>";
            output.innerHTML+=Math.round((diff/365)*100)+" %";
        }
        function done(year){
            var cur=new Date();
            var first=new Date(parseInt(year),0,1);
            var diff=(cur.getTime()-first.getTime())/(1000*60*60*24);
            var output=document.getElementById("output3.2");
            output.innerHTML=Math.round(diff)+" Days<br>";
            output.innerHTML+=Math.round((diff/365)*100)+" %";
        }
