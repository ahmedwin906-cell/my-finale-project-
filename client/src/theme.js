export const SEASONS = [
  { id: 'printemps', label: 'Printemps', emoji: '🌸' },
  { id: 'ete', label: 'Été', emoji: '☀️' },
  { id: 'automne', label: 'Automne', emoji: '🍂' },
  { id: 'hiver', label: 'Hiver', emoji: '❄️' },
]

export function applySeason(id) {
  document.documentElement.dataset.season = id
  localStorage.setItem('jp-season', id)
}

export function initSeason() {
  applySeason(localStorage.getItem('jp-season') || 'printemps')
}

export function nextSeason(id) {
  const i = SEASONS.findIndex((s) => s.id === id)
  return SEASONS[(i + 1) % SEASONS.length].id
}
