import domtoimage from "dom-to-image";
import { jsPDF } from "jspdf";

export const exportAsPNG = (domId) => {
  if (!domId) return;

  domtoimage
    .toPng(document.getElementById(domId), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "generated.png";
      link.href = dataUrl;
      link.click();
    });
};

export const exportAsJPEG = (domId) => {
  if (!domId) return;

  domtoimage
    .toJpeg(document.getElementById(domId), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "generated.jpeg";
      link.href = dataUrl;
      link.click();
    });
};

export const exportAsPDF = (domId) => {
  if (!domId) return;

  const node = document.getElementById(domId);

  domtoimage.toPng(node).then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;

    var doc = new jsPDF("p", "mm", "a3");
    doc.addImage(img, "PNG", 1, 2);
    doc.save("generated.pdf");
  });
};
