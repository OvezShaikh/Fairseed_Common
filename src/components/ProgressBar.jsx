import React from 'react'

function ProgressBar() {
    function calculateProgress(total, actual) {
        return (actual / total) * 100;
      }
  
      // Function to update the progress bar on the screen
      function updateProgressBar(total, actual) {
        const progress = calculateProgress(total, actual);
        const progressBar = document.getElementById('progressFill');
        progressBar.style.width = `${progress}%`;
        progressBar.innerText = `${progress.toFixed(2)}%`;
      }
  
      // Total amount and actual amount
      const totalAmount = 6400;
      const actualAmount = 2700;
  
      // Display the progress bar for the given amounts
      updateProgressBar(totalAmount, actualAmount);
  
  return (
  
     <>
        <div class=" w-[400px] h-[30px] mb-[10px]" style={{border:'1px solid black'}}>
            <div class=" h-full bg-white text-center color-white" id="progressFill"></div>
        </div>


    </>    
      

  )
}

export default ProgressBar