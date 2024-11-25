// Append value to the input field
function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
  }
  
  // Clear the input field
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  // Delete the last character
  function deleteLast() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
  }
  
  // Calculate the result
  function calculateResult() {
    const result = document.getElementById('result');
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  }
  