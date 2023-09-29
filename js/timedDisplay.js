var date=new Date();
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate(); // fixed

function SetDivContent() {

    if (year==2022 && month==12) { 
        if (day>=3 && day<29) { 
            $("#first").css("display","block");
        }
        else if (day==11 || day==12) { 
            $("#second").css("display","block");
        }
        else if (day>12) { 
            $("#third").css("display","block");
        }
    }
    else if (year==2021 && month>=12 && day>=20) { 
            $("#dateHid").css("display","block");
        }
    }