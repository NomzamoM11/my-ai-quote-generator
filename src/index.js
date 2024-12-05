function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "4507d3fa7d70aoadbteec32b558d1f39";
  let prompt = `User instructions: Generate a short quote about ${instructionInput.value}, ensure to strictly follow the user instructions`;
  let context =
    "You are a creative motivational speaker with a knack for giving inspiring short quotes. Your task is to generate a 4 line motivational quote using basic HTML, separating each line with <br />. The quote should be signed 'SheCodes AI' inside a <strong> element at the end, Strictly NO title at the beginning of the quote";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳Generating a quote about ${instructionInput.value}</div>`;

  axios.get(apiURL).then(displayQuote);
}

let poemFormElement = document.querySelector("#quote-generator-form");
poemFormElement.addEventListener("click", generateQuote);
