const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

  
const onInputName = (event) => {
  if (event.currentTarget.value.trim() !== '') {
     nameOutput.textContent = event.currentTarget.value.trim();
  } else {
     nameOutput.textContent = 'Anonymous';
  }
 
};

nameInput.addEventListener('input', onInputName);
