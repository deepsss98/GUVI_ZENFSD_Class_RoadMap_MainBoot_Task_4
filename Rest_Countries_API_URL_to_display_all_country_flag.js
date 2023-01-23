var request=new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v3.1/all",true);
        request.send();
        request.onload=function(){
            var data=request.response
            var res=JSON.parse(data);
            

            //Using REST Country API , displacy country flags in the console

           for(x in res)
           {
            console.log(res[x].name.common+" Flag: "+res[x].flag);
            //console.log(res[x].flags);
           }
        }