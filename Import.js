    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set the URL of the script you want to load from GitHub
    const url = "https://raw.githubusercontent.com/GrayStuido/About-Blank-Iframe/main/Notifacation.js";

    // Open the request with GET method and set the responseType to "text"
    xhr.open("GET", url);
    xhr.responseType = "text";

    // When the request is completed, check if the status is OK
    xhr.onload = function() {
      if (xhr.status === 200) {
        // If the status is OK, create a new script element and import the script
        const script = document.createElement("script");
        script.textContent = xhr.responseText;
        document.body.appendChild(script);
      }
    };

    // Send the request
    xhr.send();

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set the URL of the script you want to load from GitHub
    const url = "https://raw.githubusercontent.com/GrayStuido/About-Blank-Iframe/main/Notifacation.js";

    // Open the request with GET method and set the responseType to "text"
    xhr.open("GET", url);
    xhr.responseType = "text";

    // When the request is completed, check if the status is OK
    xhr.onload = function() {
      if (xhr.status === 200) {
        // If the status is OK, create a new script element and import the script
        const script = document.createElement("script");
        script.textContent = xhr.responseText;
        document.body.appendChild(script);
        
        // Also create a new script element in the body and import a different script
        const script2 = document.createElement("script");
        const url2 = "https://raw.githubusercontent.com/GrayStuido/About-Blank-Iframe/main/FpsCounter.js";
        const xhr2 = new XMLHttpRequest();
        xhr2.open("GET", url2);
        xhr2.responseType = "text";
        xhr2.onload = function() {
          if (xhr2.status === 200) {
            script2.textContent = xhr2.responseText;
            document.body.appendChild(script2);
          }
        };
        xhr2.send();
      }
    };

    // Send the request
    xhr.send();
  </script>
<div style="z-index: 99; opacity: 0.5; width: 100%; height: 10px; background-color: #333; position: fixed; top: 0; left: 0;"></div>
<div style="z-index: 9; position: fixed; top: 8px; left: 0; width: 100%; height: 0; background-color: #444; overflow: hidden; transition: height 0.3s ease;">
  <ul style="list-style: none; margin: 0; padding: 0;">
<label for="iframe-url-input">Enter URL:</label>
<input style="width: 220px;" type="text" id="iframe-url-input">
<button onclick="updateIframe()">Update IFrame URL</button>
  </ul>
      <div style="width: 70px; height: auto; background-color: black; color: white; font-size: 20px; padding: 5px; opacity: 0.7;" id="fps-counter">FPS: Calculating...</div>
</div>
<iframe style="overflow: hidden; allowfullscreen frameborder: 0; position: absolute; z-index: 1; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%; margin: 0; padding: 0;" id="my-iframe" src="https://replit.com/@Ironbrodiet/Inconspicuous-Browser?embed=1&output=1#main.py" ></iframe>
<script>
  const menu = document.querySelector('div:nth-of-type(2)');
  const menuToggle = document.querySelector('div:nth-of-type(1)');
  let menuOpen = false;
  
  menuToggle.addEventListener('click', () => {
    if (!menuOpen) {
      menu.style.height = '50px';
      menuOpen = true;
    } else {
      menu.style.height = '0';
      menuOpen = false;
    }
  });
