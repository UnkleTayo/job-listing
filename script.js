const itemContainer = document.getElementById('container__cards');

getData();

async function getData() {
  const res = await fetch('/data.json');
  const data = await res.json();

  displayData(data);
}

const displayData = (data) => {
  itemContainer.innerHTML = '';

  data.forEach((data) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('container__cards--item');
    function test(item, msg) {
      if (item == 'true') {
        console.log(msg);
        return msg;
      }
    }

    itemEl.innerHTML = `
    <div class="item-child" id="${data.id}">
    <div class="img-container">
      <img src="${data.logo}" alt="${data.company}" class="image">
    </div>
    <div>
      <div class='skills'>
        <span>${data.company}</span>
        <span class='${test(data.new, 'New')}'></span>
        <span class="features">Features</span>
      </div>
      <h4>${data.position}</h4>
      <div class='timeline'>
        <p class="posted">
          ${data.postedAt}
        </p>
        <p>${data.contract}</p>
        <p>${data.location}</p>
      </div>
    </div>
    <div></div>
  </div>

  <div class='slack'>
    <p>${data.role}</p>
    <p>${data.level}</p>
    <p>${[...data.languages].map((data) => data)}</p>
  </div>`;

    itemContainer.appendChild(itemEl);
  });
};
