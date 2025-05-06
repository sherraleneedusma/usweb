document.addEventListener('DOMContentLoaded', function() {
    const questionScreen = document.getElementById('question-screen');
    const yesButton = document.getElementById('yes-button');
    const magicWordScreen = document.getElementById('magic-word-screen');
    const magicWordForm = document.getElementById('magic-word-form');
    const magicWordInput = document.getElementById('magic-word');
    const errorMessage = document.getElementById('error-message');
    const tryAgainButton = document.getElementById('try-again');
    const valentinePage = document.getElementById('valentine-page');
    const correctMagicWord = "032823"; // Replace with your desired magic word

    const photoScreen = document.getElementById('photo-screen');
    const messageScreen = document.getElementById('message-screen');
    const letterScreen = document.getElementById('letter-screen');
    const mainPhoto = document.getElementById('main-photo');
    const readButton = document.getElementById('read-button');
    const backToPhoto = document.getElementById('back-to-photo');
    const backToMessage = document.getElementById('back-to-message');
    const openStoryButton = document.getElementById('open-story');
    const openPoemsButton = document.getElementById('open-poems');

    // Initial question screen logic
    if (yesButton) {
        yesButton.addEventListener('click', function() {
            questionScreen.style.display = 'none';
            magicWordScreen.style.display = 'block';
        });
    }

    // Magic word submission logic
    if (magicWordForm) {
        magicWordForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const enteredWord = magicWordInput.value;
            if (enteredWord === correctMagicWord) {
                magicWordScreen.style.display = 'none';
                valentinePage.style.display = 'block';
                document.title = "ily"; // Change the title here
            } else {
                errorMessage.style.display = 'block';
            }
            magicWordInput.value = ''; // Clear the input field after submission
        });
    }

    // Try again button logic
    if (tryAgainButton) {
        tryAgainButton.addEventListener('click', function() {
            errorMessage.style.display = 'none';
        });
    }

    // Valentine's Day content interaction logic (only if on the valentine page)
    if (valentinePage) {
        if (mainPhoto) {
            mainPhoto.addEventListener('click', function() {
                photoScreen.style.display = 'none';
                messageScreen.style.display = 'block';
                letterScreen.style.display = 'none';
            });
        }

        if (readButton) {
            readButton.addEventListener('click', function() {
                photoScreen.style.display = 'none';
                messageScreen.style.display = 'none';
                letterScreen.style.display = 'block';
            });
        }

        if (backToPhoto) {
            backToPhoto.addEventListener('click', function() {
                photoScreen.style.display = 'block';
                messageScreen.style.display = 'none';
                letterScreen.style.display = 'none';
            });
        }

        if (backToMessage) {
            backToMessage.addEventListener('click', function() {
                photoScreen.style.display = 'none';
                messageScreen.style.display = 'block';
                letterScreen.style.display = 'none';
            });
        }

        if (openStoryButton) {
            openStoryButton.addEventListener('click', function() {
                window.open('pdfs/HVD.pdf', '_blank');
            });
        }

        if (openPoemsButton) {
            openPoemsButton.addEventListener('click', function() {
                window.open('pdfs/POEMS.pdf', '_blank');
            });
        }
    }
});
