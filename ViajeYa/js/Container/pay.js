window.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('.payment-method');
  
    paymentMethods.forEach((method) => {
      method.addEventListener('click', () => {
        console.log("Clic en payment-method");
        const cardDataFormContainer = document.querySelector('.card-data-form-container');
        cardDataFormContainer.style.display = 'block';
        setTimeout(() => {
          cardDataFormContainer.style.opacity = '1';
        }, 10);
      });
    });
  });