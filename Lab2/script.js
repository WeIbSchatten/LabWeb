document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
  
    // Функция для проверки поля
    function validateInput(input) {
      const pattern = input.pattern ? new RegExp(input.pattern) : null;
      
      if (pattern && !pattern.test(input.value)) {
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid");
      }
    }
  
    // Получаем все поля для ввода
    const inputs = form.querySelectorAll("input, select");
  
    // Обрабатываем событие на каждом поле
    inputs.forEach(input => {
      input.addEventListener("input", function () {
        validateInput(input);
      });
    });
  
    // Обработка отправки формы
    form.addEventListener("submit", function (event) {
      // Сначала проверим все поля
      inputs.forEach(input => {
        validateInput(input);
      });
  
      // Если есть невалидные поля, предотвратим отправку формы
      if (!form.checkValidity()) {
        event.preventDefault();
      }
    });
  });
  