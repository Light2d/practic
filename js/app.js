

function getRandomNumber(){
    const min = 1000000; // Минимальное 9-значное число (100,000,000)
    const max = 99999999; // Максимальное 9-значное число (999,999,999)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

function get_id(){
    input = document.querySelector("#register__id").value = getRandomNumber();
}

function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    let formattedNumber;
    if (cleaned.length === 11) {
      formattedNumber = cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
    } else {
      formattedNumber = cleaned;
    }
    return formattedNumber;
  }

  function formatAndDisplay() {
    const inputElement = document.querySelector('.register__num');
    const formattedValue = formatPhoneNumber(inputElement.value);
    inputElement.value = formattedValue;
  }

function isValidEmail(email){
    var emailRegex = /^[^\s@]+@[^\s@]+[^\s@]+$/
    return emailRegex.test(email)
}

function check_post() {
    var p1 = document.getElementById('pass1').value;
    var p2 = document.getElementById('pass2').value; // Исправлено
    var email = document.getElementById('email').value;

    if (p1 === "" || p1 !== p2) { // Исправлено
        alert("Пароли должны совпадать");
    }
}

//==============captcha
 // Генерация случайной строки
 function generateRandomString(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
  }

  return result;
}

// Генерация случайной капчи
function generateCaptcha() {
  const captchaLength = 6; // Длина капчи
  return generateRandomString(captchaLength);
}

// Обновление текста капчи
function refreshCaptcha() {
  const captchaText = document.getElementById('captchaText');
  const captchaInput = document.getElementById('captchaInput');
  const captchaResult = document.getElementById('captchaResult');

  const newCaptcha = generateCaptcha();
  captchaText.textContent = newCaptcha;
  captchaInput.value = '';
  captchaResult.textContent = '';
}

// Проверка введенной капчи
function checkCaptcha() {
  const captchaText = document.getElementById('captchaText');
  const captchaInput = document.getElementById('captchaInput');
  const captchaResult = document.getElementById('captchaResult');

  if (captchaInput.value === captchaText.textContent) {
      console.log('Капча введена корректно');
  } else {
      // captchaResult.textContent = 'Капча введена неверно. Попробуйте снова';
      refreshCaptcha()
  }
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function () {
  refreshCaptcha();
});