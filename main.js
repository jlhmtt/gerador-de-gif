let palavras = [
  "amor",
  "beijo",
  "gato",
  "kitten",
  "love",
  "family",
  "família",
  "i+love+you",
  "fofo",
  "cute",
  "kiss",
];

let div = $("divGif");
let gifUrl;

function gerarGif() {
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];

  var xhr = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${palavra}&api_key=GkJbthiCKiAn8NerjtSbyLX0WLqaOpAd&limit=5&rating=g`
  );

  xhr.done(function (data) {
    gifUrl = data.data[[Math.floor(Math.random() * 5)]].images.downsized.url;
    $("#img").attr("src", gifUrl);
    console.log(data);
  });
}
