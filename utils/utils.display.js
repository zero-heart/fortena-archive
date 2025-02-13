export function displaySongTitle({ songTitle, sontTitleKR }) {
  return sontTitleKR ? `${songTitle} (${sontTitleKR})` : songTitle;
}

export function displayAuthor({ author, type, workTitle }) {
  const strs = [author, type, workTitle ? `"${workTitle}"` : ''];
  const result = strs.filter((str) => str).join(', ');
  return result;
}

export function displayConcertPlace({ country, city, hall }) {
  return `${country}, ${city}, ${hall}`;
}

export function displayDescription({ isEncore, description }) {
  const descriptionText = description ? description : '';
  return isEncore ? `${isEncore}. ${descriptionText}` : descriptionText;
}
