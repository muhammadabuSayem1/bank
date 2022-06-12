//handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
  
   //get the amount depodite
   const depositInput = document.getElementById('deposit-input');

   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText);
  
  //update deposit total
   const depositTotal = document.getElementById('deposit-total');

   const perviousDepositText = depositTotal.innerText;
   const perviousDepositAmount = parseFloat(perviousDepositText);
  
   const  newDepositTotal = perviousDepositAmount + newDepositAmount;
   
   depositTotal.innerText = newDepositTotal;

  //update account blance
  const blanceTotal = document.getElementById('blance-total');
  
  const balanceTotalText = blanceTotal.innerText;
  const perviousBlanceTotal = parseFloat(balanceTotalText);

  const newBlanceTotal = perviousBlanceTotal + newDepositAmount ;

  blanceTotal.innerText =  newBlanceTotal;  
  // clear the deposit input field
  depositInput.value = '';
})  


//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click',function(){
  // get amount writhdraw
  const withdrawInput = document.getElementById('withdraw-input');

  const newWithdrawAmountText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountText);

  //update writhdraw total
   const withdrawTotal = document.getElementById('withdraw-total');
   const perviousWithdrawTex = withdrawTotal.innerText;

   const perviousWithdrawAmount = parseFloat(perviousWithdrawTex);
   const  newWrithdrawTotal = perviousWithdrawAmount  + newWithdrawAmount; 

   withdrawTotal.innerText = newWrithdrawTotal;
   
  
  //update account blance

  const blanceTotal = document.getElementById('blance-total');
  
  const balanceTotalText = blanceTotal.innerText;
  const perviousBlanceTotal = parseFloat(balanceTotalText);

  const newBlanceTotal = perviousBlanceTotal - newWithdrawAmount ;

  blanceTotal.innerText =  newBlanceTotal;  
  // clear the withdraw input field
  withdrawInput.value = '';
})