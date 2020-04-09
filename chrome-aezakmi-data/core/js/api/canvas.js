chrome.runtime.sendMessage({method: "current_profile"}, function (response) {
  if (JSON.parse(response) === null){
    return;
  } else {
   
    const canvasNoise = JSON.parse(response).canvasNoise;
    const webglNoiseR = JSON.parse(response).webglNoiseR;
    const webglNoiseG = JSON.parse(response).webglNoiseG;
    const webglNoiseB = JSON.parse(response).webglNoiseB;
    const webglNoiseA = JSON.parse(response).webglNoiseA;

if (canvasNoise == 1) {
  var injectCanvas = function (webglNoiseR, webglNoiseG, webglNoiseB, webglNoiseA) {
    var overwrite = function (name) {
      console.log("canvas")
      const OLD = HTMLCanvasElement.prototype[name];
      Object.defineProperty(HTMLCanvasElement.prototype, name, {
        "value": function () {
          var shift = {
            'r': webglNoiseR,
            'g': webglNoiseG,
            'b': webglNoiseB,
            'a': webglNoiseA
          };
          var width = this.width, height = this.height, context = this.getContext("2d");
          var imageData = context.getImageData(0, 0, width, height);
          for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
              var n = ((i * (width * 4)) + (j * 4));
              imageData.data[n + 0] = imageData.data[n + 0] + shift.r;
              imageData.data[n + 1] = imageData.data[n + 1] + shift.g;
              imageData.data[n + 2] = imageData.data[n + 2] + shift.b;
              imageData.data[n + 3] = imageData.data[n + 3] + shift.a;
            }
          }
          context.putImageData(imageData, 0, 0);
          return OLD.apply(this, arguments);
        }
      });
    };
    overwrite('toBlob');
    overwrite('toDataURL');
    document.documentElement.dataset.cbscriptallow = true;
  };



    var script_1 = document.createElement('script');
      script_1.textContent = "(" + injectCanvas + ")(" + webglNoiseR + "," + webglNoiseG + "," + webglNoiseB + "," + webglNoiseA + ")";

    document.documentElement.appendChild(script_1);

    if (document.documentElement.dataset.cbscriptallow !== "true") {
      var script_2 = document.createElement('script');
      script_2.textContent = `{
        const iframes = window.top.document.querySelectorAll("iframe[sandbox]");
        for (var i = 0; i < iframes.length; i++) {
          if (iframes[i].contentWindow) {
            if (iframes[i].contentWindow.HTMLCanvasElement) {
              let tb = iframes[i].contentWindow.HTMLCanvasElement.prototype.toBlob;
              if (tb !== HTMLCanvasElement.prototype.toBlob) {
                iframes[i].contentWindow.HTMLCanvasElement.prototype.toBlob = HTMLCanvasElement.prototype.toBlob;
                iframes[i].contentWindow.HTMLCanvasElement.prototype.toDataURL = HTMLCanvasElement.prototype.toDataURL;
              }
            }
          }
        }
      }`;
      window.top.document.documentElement.appendChild(script_2);
    }       
} else {}
}
});