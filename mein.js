const depozit = document.getElementById("depositBtn");

depozit.addEventListener('click', function(){
    // depozit blance section
    const InputDepozit = parseFloat(document.getElementById('currantDepositValue').value);
    const allDipozit = parseFloat(document.getElementById('currantDeposit').innerText);
     
    // total blance section
    const totalBlnce = parseFloat(document.getElementById('mainBalance').innerText);


    
    
    document.getElementById('currantDepositValue').value=' ';
    if(InputDepozit >= 5){
        const totalDepozit = allDipozit+InputDepozit;
        document.getElementById('currantDeposit').innerHTML=totalDepozit;
        alert('depozit blannce is succes');
        document.getElementById('mainBalance').innerText=totalBlnce+InputDepozit;

        if(totalDepozit===100 ){
            alert('your blance 100');
        }
        else if(totalDepozit=== 500){
            alert('your blance is 500')
        }
        else if(totalDepozit=== 1000){
            alert('your blance is 1000')
        }
     }

    else{
        alert('minmum blance is 5 taka ')
    }

})


// withdro section part

const withdro = document.getElementById('withdrawBtn');
withdro.addEventListener('click', function(){
    const withdroInput =parseFloat( document.getElementById("currantwithdrawValue").value);
    const withdroOutt = parseFloat(document.getElementById('currantwithdraw').innerText);
    const totalBlance = parseFloat(document.getElementById('mainBalance').innerText);

    if(withdroInput>=50 && totalBlance >= withdroInput ){
        const withdro = withdroOutt+withdroInput;
        document.getElementById('currantwithdraw').innerText=withdro;
        document.getElementById('mainBalance').innerText= totalBlance-withdroInput;

        alert('your withdrow is succes')
        


    }
    else if(withdroInput<5){
        alert('you minimum withdro blnace 5')
    }
    else if (totalBlance <= withdroInput){
        alert('your balance too low');
    }

    
    document.getElementById('currantwithdrawValue').value="";
    





} )

