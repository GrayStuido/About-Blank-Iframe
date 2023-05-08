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
