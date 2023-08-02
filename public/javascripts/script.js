document.getElementById('palindrome')
    .addEventListener('submit', function (event) {
            event.preventDefault();
            const word = document.getElementById('word').value;
            const alert = document.getElementById('alert');
            if (word !== undefined && word !== '') {
                axios.get('palindrome/' + word)
                    .then(function (response) {
                        alert.classList = response.data.result ? 'alert success' : 'alert error';
                        alert.innerText = response.data.message
                    })
                    .catch(function () {
                        alert.innerText = 'Ocorreu um erro ao verificar se a palavra é um palíndromo';
                        alert.classList = 'alert error';
                    });
            } else {
                alert.innerText = 'Por favor, digite uma palavra';
                alert.classList = 'alert error';
            }
        }
    );

document.getElementById("word")
    .addEventListener("keyup", function (event) {
    event.preventDefault();
    input();
});

function input() {
    let word = document.getElementById("word").value;
    if (word === undefined || word === '') {
        const alert = document.getElementById('alert');
        alert.classList = 'alert info';
        alert.innerText = 'Digite uma palavra abaixo para verificar se ela é palindrome';
    }
}

input();