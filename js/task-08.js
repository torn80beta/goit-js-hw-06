const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        window.alert("All fields must be filled!");
    } else {
        const submitData = { 'email': email.value, 'password': password.value };
        console.log(submitData);
        event.currentTarget.reset();
    }
}
