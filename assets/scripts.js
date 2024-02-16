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
        // create new anchor for download
        const anchor = document.createElement('a');
  
        // set link url for href
        anchor.href = URL.createObjectURL(blob);
  
        // tell anchor we are downloading a file
        anchor.download = filename;
  
        // triggers anchor download
        anchor.click();
  
        // remove anchor
        anchor.remove();
      })
      .catch(error => {
        // Handle the error
        console.error(error);
        alert('File download error!');
      });
  }
  