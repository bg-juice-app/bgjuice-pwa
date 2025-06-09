
const pointsMap = {
  "zonkoum-1l": 10,
  "zonkoum-0.5l": 5,
  "gingembre-1l": 10,
  "gingembre-0.5l": 5
};

const clients = {};

document.getElementById("loyalty-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("client-name").value.trim();
  const phone = document.getElementById("client-phone").value.trim();
  const juice = document.getElementById("juice-type").value;

  const key = `${name} (${phone})`;

  if (!clients[key]) {
    clients[key] = 0;
  }

  clients[key] += pointsMap[juice];

  if (clients[key] >= 100) {
    alert(`${name} a atteint ${clients[key]} points ! 🎁 Récompense disponible !`);
  }

  updateClientList();
});

function updateClientList() {
  const list = document.getElementById("clients-data");
  list.innerHTML = "";
  Object.entries(clients).forEach(([key, points]) => {
    const li = document.createElement("li");
    li.textContent = `${key} — ${points} points`;
    list.appendChild(li);
  });
}
