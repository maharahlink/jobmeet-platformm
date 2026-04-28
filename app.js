function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("msg").innerText = "تم تسجيل الدخول ✔";
    })
    .catch(err => {
      document.getElementById("msg").innerText = err.message;
    });
}

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("msg").innerText = "تم إنشاء الحساب ✔";
    })
    .catch(err => {
      document.getElementById("msg").innerText = err.message;
    });
}
