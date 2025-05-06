document.addEventListener('DOMContentLoaded', function() {
    const photoScreen = document.getElementById('photo-screen');
    const messageScreen = document.getElementById('message-screen');
    const letterScreen = document.getElementById('letter-screen');
    const mainPhoto = document.getElementById('main-photo');
    const readButton = document.getElementById('read-button');
    const backToPhoto = document.getElementById('back-to-photo');
    const backToMessage = document.getElementById('back-to-message');
    const openStoryButton = document.getElementById('open-story');
    const openPoemsButton = document.getElementById('open-poems');

    mainPhoto.addEventListener('click', function() {
        photoScreen.style.display = 'none';
        messageScreen.style.display = 'block';
        letterScreen.style.display = 'none';
    });

    readButton.addEventListener('click', function() {
        photoScreen.style.display = 'none';
        messageScreen.style.display = 'none';
        letterScreen.style.display = 'block';
    });

    backToPhoto.addEventListener('click', function() {
        photoScreen.style.display = 'block';
        messageScreen.style.display = 'none';
        letterScreen.style.display = 'none';
    });

    backToMessage.addEventListener('click', function() {
        photoScreen.style.display = 'none';
        messageScreen.style.display = 'block';
        letterScreen.style.display = 'none';
    });

    openStoryButton.addEventListener('click', function() {
        window.open('pdfs/HVD.pdf', '_blank');
    });

    openPoemsButton.addEventListener('click', function() {
        window.open('pdfs/POEMS.pdf', '_blank');
    });
});