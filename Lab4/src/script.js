document.addEventListener("DOMContentLoaded", function () {
    // Задание 1: Проверка совпадения паролей (оставляем без изменений)
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordMatch = document.getElementById("passwordMatch");

    if (password && confirmPassword && passwordMatch) {
        confirmPassword.addEventListener("input", function () {
            if (password.value === confirmPassword.value) {
                passwordMatch.classList.add("visible");
                passwordMatch.innerHTML = "&#10004;";
            } else {
                passwordMatch.classList.remove("visible");
            }
        });
    }

    // Задание 2: Рейтинг с звездами (оставляем без изменений)
    const stars = document.querySelectorAll(".st");
    const ratingModal = document.getElementById("ratingModal");
    const selectedRating = document.getElementById("selectedRating");
    const closeModal = document.querySelector(".close");

    if (stars.length > 0 && ratingModal && selectedRating && closeModal) {
        stars.forEach((star, index) => {
            star.addEventListener("click", function () {
                stars.forEach((s) => s.classList.remove("selected"));
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add("selected");
                }
                selectedRating.textContent = index + 1;
                ratingModal.style.display = "block";
            });
        });

        closeModal.addEventListener("click", function () {
            ratingModal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === ratingModal) {
                ratingModal.style.display = "none";
            }
        });
    }

    // Задание 3 и 4: Тесты с радиокнопками
    const correctAnswersRadio = {
        q1: "JavaScript",
        q2: "a",
        q3: "h1",
        q4: "CSS",
        q5: "ul"
    };

    function checkRadioQuiz() {
        let score = 0;
        const questionElements = document.querySelectorAll('.question-radio');
        
        questionElements.forEach((question, index) => {
            const questionId = `q${index + 1}`;
            const selectedRadio = question.querySelector(`input[name="${questionId}"]:checked`);
            
            // Сбрасываем классы перед проверкой
            question.classList.remove('correct', 'incorrect');
            
            if (selectedRadio) {
                if (selectedRadio.value === correctAnswersRadio[questionId]) {
                    score++;
                    question.classList.add('correct');
                } else {
                    question.classList.add('incorrect');
                }
            } else {
                question.classList.add('incorrect');
            }
        });
        
        const result = document.getElementById('result');
        if (result) {
            result.textContent = `Правильных ответов: ${score} из ${questionElements.length}`;
        }
    }

    // Инициализация кнопки проверки
    const checkQuizButton = document.getElementById('checkQuizButton');
    if (checkQuizButton) {
        checkQuizButton.addEventListener('click', checkRadioQuiz);
    }

    // Задание 5: Тесты с ответами в тегах <p> - переписываем по новому принципу
    const correctAnswersParagraph = {
        pq1: "true",  // ID вопроса : значение data-correct правильного ответа
        pq2: "true",
        pq3: "true",
        pq4: "true",
        pq5: "true"
    };

    function setupParagraphQuiz() {
        const paragraphQuestions = document.querySelectorAll('.question-paragraph');
        
        paragraphQuestions.forEach(question => {
            const answers = question.querySelectorAll('.answer');
            const questionId = question.id;
            
            answers.forEach(answer => {
                answer.addEventListener('click', function() {
                    // Снимаем выделение со всех ответов этого вопроса
                    answers.forEach(a => a.classList.remove('selected'));
                    // Добавляем выделение выбранному ответу
                    this.classList.add('selected');
                    
                    // Проверяем ответ сразу при клике (по аналогии с тестом 4)
                    const selectedAnswer = question.querySelector('.answer.selected');
                    if (selectedAnswer) {
                        if (selectedAnswer.dataset.correct === correctAnswersParagraph[questionId]) {
                            question.classList.add('correct');
                            question.classList.remove('incorrect');
                        } else {
                            question.classList.add('incorrect');
                            question.classList.remove('correct');
                        }
                    }
                });
            });
        });
    }

    // Инициализируем тест с параграфами
    setupParagraphQuiz();
    
    // Задание 6: Галерея изображений (оставляем без изменений)
    const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];
    let currentIndex = 0;

    const galleryImage = document.querySelector("#imageGallery img");
    if (galleryImage) {
        galleryImage.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            galleryImage.src = images[currentIndex];
        });
    }
});
