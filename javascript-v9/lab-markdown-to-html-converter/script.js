const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  const h1Re = /^\s*#\s+(.*)\s*$/mg;
  const h2Re = /^\s*#{2}\s+(.*)\s*$/mg;
  const h3Re = /^\s*#{3}\s+(.*)\s*$/mg;
  const h4Re = /^\s*#{4}\s+(.*)\s*$/mg;
  const h5Re = /^\s*#{5}\s+(.*)\s*$/mg;
  const h6Re = /^\s*#{6}\s+(.*)\s*$/mg;
  const boldRe = /(\*\*|__)(.+)\1/mg;
  const italicRe = /(\*|_)(.+)\1/mg;
  const imgRe = /!\[(.*)\]\((.*)\)/mg;
  const aRe = /\[(.*)\]\((.*)\)/mg;
  const quoteRe = /^\s*>\s+(.*)$/mg;
  return markdownInput.value.replace(h1Re, "<h1>$1</h1>")
    .replace(h2Re, "<h2>$1</h2>")
    .replace(h3Re, "<h3>$1</h3>")
    .replace(h4Re, "<h4>$1</h4>")
    .replace(h5Re, "<h5>$1</h5>")
    .replace(h6Re, "<h6>$1</h6>")
    .replace(boldRe, "<strong>$2</strong>")
    .replace(italicRe, "<em>$2</em>")
    .replace(imgRe, '<img alt="$1" src="$2">')
    .replace(aRe, '<a href="$2">$1</a>')
    .replace(quoteRe, "<blockquote>$1</blockquote>");
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();
  htmlOutput.textContent = html;
  preview.innerHTML = html;
});