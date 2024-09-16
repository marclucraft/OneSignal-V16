// Change the Notification Bell icon
function editBellIcon() {
    // Select the SVG element
    const svgElement = document.querySelector(".onesignal-bell-svg");

    if (svgElement) {
      // Select the existing <path> element
      const pathElement = svgElement.querySelector("path.foreground");

      // Remove the <path> element
      if (pathElement) {
        pathElement.remove();
      }

      // Create a new <image> element
      const imgElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "image"
      );

      // Set the attributes for the new image
      imgElement.setAttribute(
        "href",
        "https://www.svgrepo.com/show/271814/smile.svg"
      ); // Replace with the actual URL of your image
      imgElement.setAttribute("x", "0"); // Set the x position of the image
      imgElement.setAttribute("y", "0"); // Set the y position of the image
      imgElement.setAttribute("width", "99.7"); // Set the width of the image
      imgElement.setAttribute("height", "99.7"); // Set the height of the image

      // Append the new image to the SVG
      svgElement.appendChild(imgElement);

      // Clear the interval once the SVG container is found and modified
      clearInterval(checkExistence);
    }
  }

  // Check for the existence of the SVG container every 500 milliseconds
  const checkExistence = setInterval(editBellIcon, 500);