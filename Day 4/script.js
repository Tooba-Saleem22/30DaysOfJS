function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;

      // Hide image
      document.getElementById('uncleImage').style.display = 'none';

      // Show advice
      const adviceText = document.getElementById('adviceText');
      adviceText.innerText = advice;
      adviceText.style.display = 'block';
    })
    .catch(error => {
      console.error("Error fetching advice:", error);
    });

    document.getElementById('uncleImage').style.display = 'none';

}
