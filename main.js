const depozit = document.getElementById("DepositBtn");

depozit.addEventListener('click', function(){
    // Deposit blance section
    const InputDepozit = parseFloat(document.getElementById('currantDepositValue').value);
    const allDipozit = parseFloat(document.getElementById('currantDeposit').innerText);



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

        alert('Your Withdrow is Succes')
        


    }
    else if(withdroInput<5){
        alert('Your Minimum Withdro Balnace 5')
    }
    else if (totalBlance <= withdroInput){
        alert('Your Balance Too Low');
    }

    
    document.getElementById('currantwithdrawValue').value="";
    





} )    
     
    // main blance section
    const totalBlnce = parseFloat(document.getElementById('mainBalance').innerText);


    
    
    document.getElementById('currantDepositValue').value=' ';
    if(InputDepozit >= 5){
        const totalDepozit = allDipozit+InputDepozit;
        document.getElementById('currantDeposit').innerHTML=totalDepozit;
        alert('Deposit Blannce is Succes');
        document.getElementById('mainBalance').innerText=totalBlnce+InputDepozit;

        if(totalDepozit===100 ){
            alert('Your Blance 100');
        }
        else if(totalDepozit=== 500){
            alert('Your Blance is 500')
        }
        else if(totalDepozit=== 1000){
            alert('Your Blance is 1,000')
        }
     }

    else{
        alert('Minmum Balance is 5 taka ')
    }

})




