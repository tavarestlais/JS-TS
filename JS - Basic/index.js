function myScope() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  const people = [];

  function recieveEvent(e) {
    e.preventDefault();
    const name = form.querySelector(".name");
    const lastName = form.querySelector(".lastName");
    const weight = form.querySelector(".weight");
    const height = form.querySelector(".height");

    people.push({
      name: name.value,
      lastName: lastName.value,
      weight: weight.value,
      height: height.value,
    });
  }

  form.addEventListener("submit", function () {});
}

myScope();
w;
