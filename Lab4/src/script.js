document.addEventListener("DOMContentLoaded", function () {
    // Задание 1: Проверка совпадения паролей
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

    // Задание 2: Рейтинг с звездами и модальным окном
    const stars = document.querySelectorAll(".st");
    const ratingModal = document.getElementById("ratingModal");
    const selectedRating = document.getElementById("selectedRating");
    const closeModal = document.querySelector(".close");

    if (stars.length > 0 && ratingModal && selectedRating && closeModal) {
        stars.forEach((star, index) => {
            star.addEventListener("click", function () {
                // Убираем выделение у всех звезд
                stars.forEach((s) => {
                    s.classList.remove("selected");
                });

                // Выделяем звезды до выбранной
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add("selected");
                }

                // Показываем модальное окно с выбранным рейтингом
                selectedRating.textContent = index + 1;
                ratingModal.style.display = "block";
            });
        });

        // Закрытие модального окна при клике на крестик
        closeModal.addEventListener("click", function () {
            ratingModal.style.display = "none";
        });

        // Закрытие модального окна при клике вне его области
        window.addEventListener("click", function (event) {
            if (event.target === ratingModal) {
                ratingModal.style.display = "none";
            }
        });
    }


    // Задание 3 и 4: Тесты с радиокнопками (test.html)
    const questionsRadio = document.querySelectorAll(".question-radio");
    const checkQuizButton = document.getElementById("checkQuizButton");
    const result = document.getElementById("result");

    const correctAnswersRadio = {
        q1: "JavaScript",
        q2: "a",
        q3: "h1",
        q4: "CSS",
        q5: "ul"
    };

    if (checkQuizButton && result) {
        checkQuizButton.addEventListener("click", function () {
            let score = 0;
            questionsRadio.forEach((question, index) => {
                const selected = question.querySelector(`input[name="q${index + 1}"]:checked`);
                if (selected && selected.value === correctAnswersRadio[`q${index + 1}`]) {
                    question.classList.add("correct");
                    question.classList.remove("incorrect");
                    score++;
                } else {
                    question.classList.add("incorrect");
                    question.classList.remove("correct");
                }
            });
            result.textContent = `Правильных ответов: ${score} из ${questionsRadio.length}`;
        });
    }

    // Задание 5: Тесты с ответами в тегах <p> (test2.html)
    const questionsParagraph = document.querySelectorAll(".question-paragraph");

    if (questionsParagraph.length > 0) {
        questionsParagraph.forEach((question) => {
            const answers = question.querySelectorAll(".answer");
            answers.forEach((answer) => {
                answer.addEventListener("click", function () {
                    // Убираем выделение у всех ответов в этом вопросе
                    answers.forEach((a) => {
                        a.classList.remove("selected");
                    });

                    // Выделяем выбранный ответ
                    answer.classList.add("selected");

                    // Проверяем правильность ответа
                    const correctAnswer = question.querySelector(".answer[data-correct='true']");
                    if (answer === correctAnswer) {
                        question.classList.add("correct");
                        question.classList.remove("incorrect");
                    } else {
                        question.classList.add("incorrect");
                        question.classList.remove("correct");
                    }
                });
            });
        });
    }

    // Задание 6: Галерея изображений
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