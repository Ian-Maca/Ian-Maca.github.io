function downloadFile(filename) {
    // Create a URL object for the file to be downloaded
    const url = new URL(filename, window.location.origin);
  
    // Send a GET request to the URL
    fetch(url)
      .then(response => {
        // Check if the response is successful
        if (response.ok) {
          // Get the file's content as a blob
          return response.blob();
        } else {
          // Handle the error
          throw new Error('Error downloading file.');
        }
      })
      .then(blob => {
        // Create a new anchor tag for downloading the file
        const anchor = document.createElement('a');
  
        // Set the anchor tag's href attribute to the blob URL
        anchor.href = URL.createObjectURL(blob);
  
        // Set the anchor tag's download attribute to the file's name
        anchor.download = filename;
  
        // Trigger the download by clicking the anchor tag
        anchor.click();
  
        // Remove the anchor tag from the DOM
        anchor.remove();
      })
      .catch(error => {
        // Handle the error
        console.error(error);
        alert('Error downloading file.');
      });
  }
  