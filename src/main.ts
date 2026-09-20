import "@fontsource-variable/jetbrains-mono";
import "./style.css";

const player = document.querySelector<HTMLIFrameElement>("[data-player]");
const playerStatus = document.querySelector<HTMLElement>("[data-player-status]");
const trackButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-track-id]"));

for (const button of trackButtons) {
  button.addEventListener("click", () => {
    const trackId = button.dataset.trackId;
    const title = button.dataset.trackTitle;
    const artist = button.dataset.trackArtist;
    if (!player || !trackId || !title || !artist) return;

    player.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
    player.title = `Spotify player: ${title} by ${artist}`;

    for (const trackButton of trackButtons) {
      trackButton.setAttribute("aria-pressed", String(trackButton === button));
    }

    if (playerStatus) playerStatus.textContent = `Loaded: ${title}, ${artist}`;
  });
}
