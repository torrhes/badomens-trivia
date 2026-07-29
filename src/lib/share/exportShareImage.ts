import { toPng } from "html-to-image";

export async function exportShareImage(node: HTMLElement, filename = "bad-omens-quiz-result.png") {
  const dataUrl = await toPng(node, {
    cacheBust: true,
    pixelRatio: 2,
    backgroundColor: "#0a0a0a",
  });
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
}
