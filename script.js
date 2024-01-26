document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('no-button').style.display = 'none';
    document.getElementById('no-to-yes').style.display = 'block';
});

document.getElementById('no-to-yes').addEventListener('click', function() {
    document.getElementById('no-button').style.display = 'block';
    document.getElementById('no-to-yes').style.display = 'none';
});
document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
    document.querySelector('.congratulations').style.display = 'block';
});
document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
    document.querySelector('.congratulations').style.display = 'block';

    const heartsContainer = document.querySelector('.hearts-container');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heartsContainer.appendChild(heart);
    }
});
