chrome. tabs. query({currentWindow: true, active: true}, function(tabs){
    var tab=tabs[0];
    var url=tab.url;
    document.querySelector('h3').innerHTML="You are currently on"   
    document.getElementById("message").innerHTML=tab.title
    let li=document.createElement('a').href=url
    document.body.append(li)
    });
