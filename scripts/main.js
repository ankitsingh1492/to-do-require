require([
  "text!../templates/header.html",
  "text!../templates/footer.html",
  "app",
], function (headerTemplate, footerTemplate, app) {
  document.body.insertAdjacentHTML("afterbegin", headerTemplate);
  document.body.insertAdjacentHTML("beforeend", footerTemplate);
  app.start();
});
