
async function loadMarkdown(file) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById("blogContent").innerHTML = marked.parse(text);
}
