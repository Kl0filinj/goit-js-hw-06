const formRef = document.querySelector('.login-form');
// const

const submitingForm = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Заполните пожалуйста все поля !');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

formRef.addEventListener('submit', submitingForm);
