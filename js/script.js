/*
  REVIEW NOTES (script.js)
  - The original looked for #games-btn and #favourite-game. Neither id exists anywhere on the site, so querySelector returned null
    and addEventListener threw an error. The script was also loaded on pages where it could not work.
    The ids now match About.html: #joke-btn and #joke.
  - Added a check (if jokeBtn && joke) so the script does nothing instead of crashing if the elements are missing.
  - Removed the unused lines and the console.log debug messages. These are useful while building, but they should not stay in a finished site.
  - The joke is shown by setting joke.hidden = false, which matches the "hidden" attribute now used in About.html.
*/

const jokeBtn = document.querySelector("#joke-btn");
const joke = document.querySelector("#joke");

if (jokeBtn && joke) {
  jokeBtn.addEventListener("click", function () {
    joke.hidden = false;
  });
}
