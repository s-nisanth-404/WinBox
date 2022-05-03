const btn_html = document.querySelector(".btn-html");
const html_content = document.querySelector(".html-content");
btn_html.addEventListener("click", () => {
  const htmlWinBox = new WinBox({
    title: "HTML",
    background: "linear-gradient(90deg, #ff00f0, #0050ff)",
    x: 75,
    y: 80,
    border: 10,
    width: 750,
    height: 665,
    mount: html_content,
  });
});

const btn_css = document.querySelector(".btn-css");
const css_content = document.querySelector(".css-content");
btn_css.addEventListener("click", () => {
  const cssWinBox = new WinBox({
    title: "CSS",
    background: "linear-gradient(90deg, #ff00f0, #0050ff)",
    x: 755,
    y: 80,
    border: 10,
    width: 750,
    height: 665,
    mount: css_content,
  });
});

const btn_JavaScript = document.querySelector(".btn-JavaScript");
const JavaScript_content = document.querySelector(".JavaScript-content");
btn_JavaScript.addEventListener("click", () => {
  const JavaScriptWinBox = new WinBox({
    title: "JavaScript",
    background: "linear-gradient(90deg, #ff00f0, #0050ff)",
    x: 755,
    y: 80,
    border: 10,
    width: 750,
    height: 665,
    mount: JavaScript_content,
  });
});
