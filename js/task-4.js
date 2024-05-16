
const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email.value === "" || password.value === "") {
      alert(`All form fields must be filled in`);
    return;
    }
  // const formData = {
  //   [email.name]: email.value.trim(),
  //   [password.name]: password.value.trim(),
  // };
    console.log(`email: ${email}, Password: ${password}`);
   event.currentTarget.reset();
  
  }
