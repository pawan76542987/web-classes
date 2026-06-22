fetch("https://hayes-bands-ham-configured.trycloudflare.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });