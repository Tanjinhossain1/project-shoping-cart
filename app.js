function clickWork(input,values, value){
    const addInput = document.getElementById(input+ '-input');
    const inputValue = addInput.value;
    let inputValueNumber = parseInt(inputValue);
    if(value == true){
        inputValueNumber = inputValueNumber + 1;
    }
    if(value == false){
        if(inputValueNumber > 0 ){
            inputValueNumber = inputValueNumber - 1;
        }
    }
    addInput.value = inputValueNumber;
    const phonePrice = document.getElementById(input+'-price');
    phonePrice.innerText = inputValueNumber * values;
    const price = document.getElementById(input+'-price');
    price.innerText = inputValueNumber * values;
    subTotalPrice()
};
function getInputValue(product){
    const phoneInput = document.getElementById(product+'-input');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function subTotalPrice(){
    const phonePrice = getInputValue('phone') * 1219;
    const casePrice = getInputValue('case2') * 59;
    const subTotal = phonePrice + casePrice;
    const sub = document.getElementById('sub-total'); 
    sub.innerText = subTotal;
    const taxTotal = document.getElementById('tax-total');
    const totalSubTax = subTotal / 10
   taxTotal.innerText = totalSubTax ;
   const totalAmount = document.getElementById('total-amount');
   totalAmount.innerText = subTotal + totalSubTax;
} 