var lastOnlineStatus = navigator.onLine;
setInterval(function() {
  if (navigator.onLine !== lastOnlineStatus) {
    lastOnlineStatus = navigator.onLine;
    if (lastOnlineStatus) {
      // User is online
      var notification = document.createElement("div");
      notification.style.cssText = "z-index: 999; position: fixed; top: -50px; left: 0; background-color: orange; color: white; padding: 10px; transition: top 0.5s ease-out; z-index: 9999;";
      notification.innerHTML = "You are online | Your tab is Visible";
      document.body.appendChild(notification);
      setTimeout(function() {
        notification.style.top = "0px";
        setTimeout(function() {
          notification.style.top = "-50px";
          setTimeout(function() {
            document.body.removeChild(notification);
          }, 500);
        }, 3000);
      }, 100);
    } else {
      // User is offline
      var notification = document.createElement("div");
      notification.style.cssText = "z-index: 999; position: fixed; top: -50px; left: 0; background-color: green; color: white; padding: 10px; transition: top 0.5s ease-out; z-index: 9999;";
      notification.innerHTML = "You are offline | Your tab is Hidden";
      document.body.appendChild(notification);
      setTimeout(function() {
        notification.style.top = "0px";
        setTimeout(function() {
          notification.style.top = "-50px";
          setTimeout(function() {
            document.body.removeChild(notification);
          }, 500);
        }, 3000);
      }, 100);
    }
  }
}, 100);
