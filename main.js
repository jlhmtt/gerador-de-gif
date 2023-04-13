let palavras = [
  "amor",
  "beijo",
  "gato",
  "cat",
  "love",
  "family",
  "família",
  "i+love+you"
];

let palavra = palavras[Math.floor(Math.random(palavras.length))];

let div = $("divGif");
let gifUrl;

var xhr = $.get(
  `http://api.giphy.com/v1/gifs/search?q=${palavra}&api_key=GkJbthiCKiAn8NerjtSbyLX0WLqaOpAd&limit=1`
);

xhr.done(function (data) {
  console.log("success got data", data);
  gifUrl = data.data[0].images.original.url;
  $("#img").attr("src", gifUrl);
});
