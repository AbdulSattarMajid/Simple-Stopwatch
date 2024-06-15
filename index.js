    ///Iniatiliziation
    let hours=0.0,minutes=0.00,sec=.00;
    let time=document.querySelector('.time')
    let p =document.createElement('p')
    let set=null;

    /////////////////////////////////////
    //Functions
    function Start()
    {
        if (set!==null) {
            return;
        }
         set= setInterval(function()
    {
        p.innerText=`${hours} : ${minutes}: ${sec} `
        time.innerHTML=p.innerText   
        sec=sec+1;
        if(sec==60)
        {
            minutes=minutes+1;
            sec=0;
            if(minutes==60)
            {
                hours=hours+1;
                minutes=0;
            }
        }
    },1)}

    function Stop()
    {
        clearInterval(set);
        set=null;
        }
    function Reset()
    {

        hours=minutes=sec=0.0;
        time.textContent='00.00.00'
        clearInterval(set)
        set=null;
    }
