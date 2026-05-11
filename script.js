 
    // This function runs every time the button is clicked
    function toggleDarkMode() {

      // Get the <body> element
      var body = document.body;

      // Check if dark mode is ON (body has class "dark")
      if (body.classList.contains("dark")) {

        // Dark mode is ON → turn it OFF
        body.classList.remove("dark");

      } else {

        // Dark mode is OFF → turn it ON
        body.classList.add("dark");

      }
    }
  
