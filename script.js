// Selecting elements from the DOM
document.getElementById('firstNumber');
document.getElementById('secondNumber');
document.getElementById('addBtn');
document.getElementById('subBtn');
document.getElementById('mulBtn');
document.getElementById('divBtn');
document.getElementById('result');

addBtn.addEventListener('click', () => {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);
    const sum = num1 + num2;
    result.textContent = `Answer: ${sum}`;
});
