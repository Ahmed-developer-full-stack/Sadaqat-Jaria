document.addEventListener("DOMContentLoaded", () => {
  const countBtn = document.querySelector(".count-button");
  const resetBtn = document.querySelector(".reset-button");
  const tasbeehSelect = document.querySelector(".tasbeeh-select");
  const counterSpan = document.getElementById("counter");
  const fieldset = document.querySelector(".field");
  const tasbeehInfo = document.querySelector(".tasbeeh-info");

  const loadCounts = () => {
      tasbeehInfo.innerHTML = ''; // Clear existing data
      const options = tasbeehSelect.querySelectorAll('option');
      options.forEach(option => {
          const count = parseInt(localStorage.getItem(option.value)) || 0;
          const div = document.createElement('div');
          div.innerHTML = `${option.textContent}: <span id="count-${option.value}">${count}</span>`;
          tasbeehInfo.appendChild(div);
      });
  };

  // Load counts on page load
  loadCounts();

  countBtn.addEventListener("click", () => {
      const selectedValue = tasbeehSelect.value;
      let count = parseInt(localStorage.getItem(selectedValue)) || 0;
      count++;
      localStorage.setItem(selectedValue, count);
      loadCounts();
  });

  resetBtn.addEventListener("click", () => {
      const selectedValue = tasbeehSelect.value;
      localStorage.setItem(selectedValue, 0);
      loadCounts();
      addShakeEffect();
  });

  function addShakeEffect() {
      fieldset.classList.add("shake");
      setTimeout(() => {
          fieldset.classList.remove("shake");
      }, 820);
  }
});