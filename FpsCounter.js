      const fpsCounter = document.getElementById("fps-counter");

      let fps = 0;
      let framesThisSecond = 0;
      let lastFrameTime = performance.now();

      setInterval(() => {
        fpsCounter.innerText = `FPS: ${fps.toFixed(0)}`;
        fps = framesThisSecond;
        framesThisSecond = 0;
      }, 300);

      function updateFPS() {
        const now = performance.now();
        const delta = now - lastFrameTime;
        lastFrameTime = now;
        fps = 1000 / delta;
        framesThisSecond++;
        requestAnimationFrame(updateFPS);
      }

      updateFPS();
    </script>
    <script>
      const urlInput = document.getElementById("iframe-url-input");
      const iframe = document.getElementById("my-iframe");

      urlInput.value = window.location.href;
      addHttps();

      function addHttps() {
        let url = urlInput.value.trim();
        if (url && !url.startsWith("https://")) {
          url = "https://" + url + "/?igu=1";
          urlInput.value = url;
        }
      }

      function updateIframe() {
        const url = urlInput.value.trim();
        if (url) {
          iframe.src = url;
        }
      }
