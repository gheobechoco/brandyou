document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch("https://formspree.io/f/mgvarkar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (res.ok) {
      document.getElementById("form-status").innerText = "Message envoyé !";
      form.reset();
    } else {
      document.getElementById("form-status").innerText = "Erreur d’envoi.";
    }
  });
});
