const tabs = document.querySelectorAll(".tab-button");
const editors = document.querySelectorAll(".editor");
const runBtn = document.getElementById("run-btn");
const outputFrame = document.getElementById("output");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Hide all editors, then show the selected
    const target = tab.getAttribute("data-target");
    editors.forEach(editor => {
      editor.classList.toggle("visible", editor.id === target);
    });
  });
});

runBtn.addEventListener("click", () => {
  const html = document.getElementById("html-editor").value;
  const css = document.getElementById("css-editor").value;
  const js = document.getElementById("js-editor").value;

  const content = `
    ${html}
    <style>${css}</style>
    <script>${js}<\/script>
  `;

  outputFrame.srcdoc = content;
});
