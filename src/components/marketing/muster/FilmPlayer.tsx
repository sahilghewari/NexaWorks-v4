"use client";

import { useState } from "react";

export default function FilmPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mu-player">
      {playing ? (
        <video
          className="mu-player-media"
          src="/muster/muster-film-web.mp4"
          poster="/muster/poster-hero.jpg"
          controls
          autoPlay
          playsInline
        />
      ) : (
        <button
          type="button"
          className="mu-player-poster"
          onClick={() => setPlaying(true)}
          aria-label="Play the Muster AI film (1 minute 5 seconds)"
        >
          <img
            src="/muster/poster-hero.jpg"
            alt="Muster AI — your AI customer success manager"
          />
          <span className="mu-play-disc" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
            </svg>
          </span>
          <span className="mu-player-caption">Watch the film · 1:05</span>
        </button>
      )}
    </div>
  );
}
