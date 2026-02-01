export function downloadCV() {
  const link = document.createElement("a");
  link.href = "/cv/CV-YusupBudiman.pdf";
  link.download = "CV-YusupBudiman.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
