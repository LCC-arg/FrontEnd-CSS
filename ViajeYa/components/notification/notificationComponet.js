export default function generateNotification(imgUrl, message) {
    const body = `
      <body class="notifi__login">
        <main class="notifi__main__login">
          <img class="img_logo_atardecer" id="img_logo_atardecer" src="/assets/img/avionNube.jpg" alt="atardecer_login">
          <img class="img_logo" id="img_logo" src="${imgUrl}" alt="success">
          <div class="login_container">
            <form>
              <h3>${message}</h3>
            </form>
          </div>
        </main>
      </body>
    `;
    return body;
  }
  