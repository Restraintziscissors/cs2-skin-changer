const skinImages = {
  "AWP | Asiimov": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0",
  "AK-47 | Redline": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-RHGavzedxuPUnFniykEtzsWWBzoyuIiifaAchDZUjTOZe4RC_w4buM-6z7wzbgokUyzK-0H08hRGDMA",
  "M4A1-S | Printstream": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0",
  "USP-S | Kill Confirmed": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0",
  "Desert Eagle | Code Red": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6OGRbKFsJ_yWMWaXxvxzo_JmXRa_nBovp3PRmNj4c3mTb1RxC5cjF-EItRnrlNzkYrnk5gaI3Y0UmyX52H9K7ixs_a9cBsGEcOCn",
  "Glock-18 | Neo-Noir": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0",
  "M4A4 | The Emperor": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0",
  "P90 | Death by Kitty": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0",
  "MP9 | Starlight Protector": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0",
  "Five-SeveN | Hyper Beast": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0",
  "AWP | Lightning Strike": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0",
  "AK-47 | Fire Serpent": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_u13ve5WSDu2jCIrujqNjsH_InuUaQQmDJd2Fu4NshO7kIGyYeu24Affg98UxCX_iXhJ5i465bwHT-N7rXbV3WG0"
};

const skins = [
  { name: "AWP | Asiimov", rarity: "Covert", color: "#e8783e", collection: "The Phoenix Collection", exterior: "Field-Tested", float: "0.21", pattern: "787", price: "$118.40", type: "awp", description: "High risk and high reward. The iconic orange-and-white finish makes this AWP a timeless classic." },
  { name: "AK-47 | Redline", rarity: "Classified", color: "#cc4c4b", collection: "The Phoenix Collection", exterior: "Field-Tested", float: "0.19", pattern: "412", price: "$74.12", type: "rifle", favorite: true, description: "A clean black body with racing stripes. A reliable favorite for every loadout." },
  { name: "M4A1-S | Printstream", rarity: "Covert", color: "#e7e8dd", collection: "The Fracture Collection", exterior: "Minimal Wear", float: "0.08", pattern: "91", price: "$218.00", type: "rifle", favorite: true, description: "Pearlescent white, sleek black accents and a little bit of gold." },
  { name: "USP-S | Kill Confirmed", rarity: "Covert", color: "#dc5d4e", collection: "The Shadow Collection", exterior: "Minimal Wear", float: "0.11", pattern: "303", price: "$109.64", type: "pistol", description: "A bold comic-book finish for the quietest pistol in your inventory." },
  { name: "Desert Eagle | Code Red", rarity: "Covert", color: "#e34850", collection: "The Spectrum Collection", exterior: "Field-Tested", float: "0.24", pattern: "821", price: "$49.80", type: "pistol", description: "A high-contrast red and black finish with a graphic edge." },
  { name: "Glock-18 | Neo-Noir", rarity: "Classified", color: "#bc60d4", collection: "The Clutch Collection", exterior: "Field-Tested", float: "0.27", pattern: "102", price: "$32.40", type: "pistol", description: "Neon lines and noir character make this a striking sidearm." },
  { name: "M4A4 | The Emperor", rarity: "Covert", color: "#3e79d6", collection: "The Prisma Collection", exterior: "Field-Tested", float: "0.20", pattern: "54", price: "$83.25", type: "rifle", description: "A royal blue finish fit for the top of the leaderboard." },
  { name: "P90 | Death by Kitty", rarity: "Classified", color: "#e96c91", collection: "The Chroma Collection", exterior: "Minimal Wear", float: "0.09", pattern: "32", price: "$18.22", type: "smg", description: "A playful pink print with significantly less playful firepower." },
  { name: "MP9 | Starlight Protector", rarity: "Classified", color: "#a16be6", collection: "The Dreams & Nightmares Collection", exterior: "Factory New", float: "0.03", pattern: "204", price: "$26.75", type: "smg", description: "A cosmic finish that lights up close-range fights." },
  { name: "Five-SeveN | Hyper Beast", rarity: "Restricted", color: "#2f9fbd", collection: "The Wildfire Collection", exterior: "Field-Tested", float: "0.22", pattern: "711", price: "$14.88", type: "pistol", description: "A vivid beastly design for players who like their colors loud." },
  { name: "AWP | Lightning Strike", rarity: "Covert", color: "#9a55da", collection: "The Gods and Monsters Collection", exterior: "Factory New", float: "0.01", pattern: "19", price: "$476.20", type: "awp", favorite: true, description: "A purple lightning flash with an exceptionally clean float." },
  { name: "AK-47 | Fire Serpent", rarity: "Covert", color: "#55a96d", collection: "The Bravo Collection", exterior: "Field-Tested", float: "0.25", pattern: "436", price: "$362.10", type: "rifle", description: "A legendary serpent wrapped around a battle-worn classic." }
];

const grid = document.querySelector("#skinGrid");
const searchInput = document.querySelector("#searchInput");
const previewFields = { name: document.querySelector("#previewName"), collection: document.querySelector("#previewCollection"), exterior: document.querySelector("#previewExterior"), float: document.querySelector("#previewFloat"), pattern: document.querySelector("#previewPattern"), description: document.querySelector("#previewDescription") };
let currentRarity = "all";
let selectedIndex = 0;

function weaponShape(type, color, name) {
  const image = skinImages[name];
  if (image) return `<img class="weapon-image" src="${image}" alt="" loading="lazy" onerror="this.remove()" />`;
  const classes = { awp: "awp-shape", pistol: "pistol-shape", smg: "smg-shape", knife: "knife-shape" };
  return `<div class="weapon-shape ${classes[type] || ""}" style="--skin-color:${color}"></div>`;
}

function filteredSkins() {
  const query = searchInput.value.trim().toLowerCase();
  return skins.filter((skin) => (currentRarity === "all" || skin.rarity === currentRarity) && `${skin.name} ${skin.collection}`.toLowerCase().includes(query));
}

function renderSkins() {
  const visible = filteredSkins();
  grid.innerHTML = visible.length ? visible.map((skin) => {
    const index = skins.indexOf(skin);
    return `<article class="skin-card ${index === selectedIndex ? "selected" : ""} ${skin.favorite ? "favorite" : ""}" style="--rarity:${skin.color}" data-index="${index}"><span class="card-star">★</span>${weaponShape(skin.type, skin.color, skin.name)}<h3>${skin.name}</h3><p>${skin.rarity}</p><span class="skin-price">${skin.price}</span></article>`;
  }).join("") : `<div class="empty-state">No skins match your search.</div>`;
  grid.querySelectorAll(".skin-card").forEach((card) => card.addEventListener("click", () => selectSkin(Number(card.dataset.index))));
}

function selectSkin(index) {
  selectedIndex = index;
  const skin = skins[index];
  Object.entries(previewFields).forEach(([key, element]) => { element.textContent = skin[key]; });
  document.querySelector("#previewArt").innerHTML = `${weaponShape(skin.type, skin.color, skin.name)}<div class="weapon-label">${skin.type.toUpperCase()}</div><div class="preview-spark"></div>`;
  document.querySelector("#favoriteButton").classList.toggle("active", Boolean(skin.favorite));
  renderSkins();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2600);
}

searchInput.addEventListener("input", renderSkins);
document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  currentRarity = button.dataset.rarity;
  renderSkins();
}));
document.querySelectorAll(".nav-item").forEach((item) => item.addEventListener("click", () => {
  document.querySelectorAll(".nav-item").forEach((nav) => nav.classList.remove("active"));
  item.classList.add("active");
  if (item.dataset.view !== "inventory") showToast(`${item.textContent.trim()} view is ready for your next collection update.`);
}));
document.querySelector("#favoriteButton").addEventListener("click", () => {
  skins[selectedIndex].favorite = !skins[selectedIndex].favorite;
  document.querySelector("#favoriteButton").classList.toggle("active", skins[selectedIndex].favorite);
  renderSkins();
  showToast(skins[selectedIndex].favorite ? "Added to favorites" : "Removed from favorites");
});
const addButton = document.querySelector("#addButton");
if (addButton) addButton.addEventListener("click", () => showToast("Add skin flow opened — connect your Steam inventory to import items."));
const importButton = document.querySelector("#importButton");
if (importButton) importButton.addEventListener("click", () => showToast("Import ready. Your inventory data stays local to this app."));
document.querySelector("#detailsButton").addEventListener("click", () => showToast(`Showing details for ${skins[selectedIndex].name}`));
document.querySelector("#viewAllButton").addEventListener("click", () => { currentRarity = "all"; searchInput.value = ""; document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("active", item.dataset.rarity === "all")); renderSkins(); });
document.querySelector("#exploreButton").addEventListener("click", () => document.querySelector(".inventory-panel").scrollIntoView({ behavior: "smooth" }));

selectSkin(0);
