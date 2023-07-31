window.addEventListener('load', function () {
    try {
        const statusSite = document.querySelector('meta[name="robots"]');

        if (statusSite.getAttribute('content').match(/noindex/)) {
            document.body.insertAdjacentHTML('afterbegin', `
            <div class="notification show">
              <div class="notification-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" preserveAspectRatio="none">
                      <path fill="#EA4E2C" d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
                      <path fill="#EA4E2C"
                          d="M10 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z" />
                  </svg>
              </div>
              <div class="notification-text">
                  We are sorry, the site is temporarily not indexed
              </div>
              <div class="notification-button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" preserveAspectRatio="none">
                      <path fill="#000"
                          d="m10.41 9 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L9 7.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42L7.59 9l-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0L9 10.41l6.29 6.3a.998.998 0 0 0 1.42 0 .997.997 0 0 0 .219-1.095.998.998 0 0 0-.22-.325L10.41 9Z" />
                  </svg>
              </div>
          </div>
      `);

            setTimeout(function () {
                document.querySelector('.notification').classList.add('show');
            }, 3000)

            document.querySelector('.notification-button').addEventListener('click', function () {
                document.querySelector('.notification').classList.remove('show');
            });

            setTimeout(function () {
                document.querySelector('.notification').classList.remove('show');
            }, 10000)
        }

    } catch (error) {
        console.log(error)
    }
});