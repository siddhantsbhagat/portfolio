"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// I extracted these 5 tracks directly from your playlist link!
const PLAYLIST = [
  {
    "title": "American Pie",
    "artist": "Don McLean",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b2730085dd4362653ef4c54ebbeb",
    "spotifyTrackId": "1fDsrQ23eTAVFElUMaf38X"
  },
  {
    "title": "Earrings",
    "artist": "Malcolm Todd",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b2732c1f34ecc1929fb59908aad1",
    "spotifyTrackId": "0eAuGrXyGFYwur9ARUe7LJ"
  },
  {
    "title": "Tu Cheez Lajwab",
    "artist": "Raju Punjabi",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273a15f1baa4eb2bd15db9c6ea9",
    "spotifyTrackId": "6AJTmFeGSIMxWquWvI4c9k"
  },
  {
    "title": "Jackpot",
    "artist": "Cheema Y, Gur Sidhu",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273db055ba83d3809eec4c86527",
    "spotifyTrackId": "0JOAMHwHFGKbPOwfM26fL7"
  },
  {
    "title": "Coming Down",
    "artist": "The Weeknd",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273274b406a7e18acebcf743079",
    "spotifyTrackId": "3mHO1J6kfiArjBo1zhLFGP"
  },
  {
    "title": "Kasari",
    "artist": "Yabesh Thapa",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273d68f0d21c885b641d9c8a170",
    "spotifyTrackId": "2rXfg1yLOb8tKgSM7Xj5UH"
  },
  {
    "title": "Never Lose Me",
    "artist": "Flo Milli",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273ad57f1ed4854b5bd867f1d49",
    "spotifyTrackId": "2x2olWuWXpqjoeE4bO1NFS"
  },
  {
    "title": "Bathroom",
    "artist": "Montell Fish",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273e2904ff7df1477f61f6f9e10",
    "spotifyTrackId": "2CPPd0ke6cp59v079vDcUi"
  },
  {
    "title": "I Wanna Be Yours",
    "artist": "Arctic Monkeys",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
    "spotifyTrackId": "5XeFesFbtLpXzIVDNQP22n"
  },
  {
    "title": "K.",
    "artist": "Cigarettes After Sex",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273dfed999f959177dfc4f33cdc",
    "spotifyTrackId": "2xGjfbXZnI8uQDhukoQURQ"
  },
  {
    "title": "Swimming Pools (Drank)",
    "artist": "Kendrick Lamar",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273b5ef185d28724c5573c2ac9c",
    "spotifyTrackId": "6REbwUNlppTfcnV4d4ZoZi"
  },
  {
    "title": "20 Min",
    "artist": "Lil Uzi Vert",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273d7e1c68ed8e464b03095afda",
    "spotifyTrackId": "0uxSUdBrJy9Un0EYoBowng"
  },
  {
    "title": "Departure Lane",
    "artist": "Talha Anjum, Umair",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b2739c1830c96a63b06c943519e1",
    "spotifyTrackId": "7wGgYAOMhhRObOGdWlJ9Hi"
  },
  {
    "title": "Ik Kudi",
    "artist": "wolf.cryman, Arpit Bala",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273360805061c7f2fc75e631d7c",
    "spotifyTrackId": "7h79u6jChrCZfnwCnt20LF"
  },
  {
    "title": "Collide (feat. Tyga)",
    "artist": "Justine Skye, Tyga",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273b1fd209c11e33b3902159ab2",
    "spotifyTrackId": "5kY2DRIom6dcVZbQb1SAX8"
  },
  {
    "title": "I Really Do...",
    "artist": "Karan Aujla, Ikky",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b27389e8f71cb6f3b6cc60944858",
    "spotifyTrackId": "2Dp6icDc5dvYnWvxZOjj75"
  },
  {
    "title": "butterflies.",
    "artist": "Brent Faiyaz",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273d8acadd7be5455ea09c06cf9",
    "spotifyTrackId": "4jyyma8YdFC4S4llusSFRu"
  },
  {
    "title": "E85",
    "artist": "Don Toliver",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b27325c28f3c9fbdbab1a88dd619",
    "spotifyTrackId": "3B4cjvGlPvyBLNG3AzEgkZ"
  },
  {
    "title": "Reflections",
    "artist": "The Neighbourhood",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b2739b6ac98a52f62d5cb473da40",
    "spotifyTrackId": "2xql0pid3EUwW38AsywxhV"
  },
  {
    "title": "No Hook",
    "artist": "Navvy",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273f2850a54659c6b945450db58",
    "spotifyTrackId": "1Z9mKIJMiylFpj2qX3nnTZ"
  },
  {
    "title": "No Mercy",
    "artist": "Dhanda Nyoliwala, Desi Melbourniye",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b2732fc576589dcc64dcb43a91cc",
    "spotifyTrackId": "5vdsRp6ExGxmfuJ2cG5Kqx"
  },
  {
    "title": "4 Days",
    "artist": "Dhanda Nyoliwala",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273dc659bf9a6ffd2467db848e1",
    "spotifyTrackId": "1SpY7cDyuuU70zsEyoUYrF"
  },
  {
    "title": "Haryana Hood",
    "artist": "Irshad Khan",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273258eb711a21ed6a63e0bfb2d",
    "spotifyTrackId": "1RdrAqXa2fUj2XytsKaUwl"
  },
  {
    "title": "Up To U",
    "artist": "Dhanda Nyoliwala",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b2730a680fc0fe4276edce21a00d",
    "spotifyTrackId": "3Boqgxk2tt9FX35cyfcdmU"
  },
  {
    "title": "Showstopper",
    "artist": "JERRY",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273aa2e286a5e040681d279cfea",
    "spotifyTrackId": "0xWQo7g0JJMRqmlvTE17Ry"
  },
  {
    "title": "Dear Mama Sidhu - Slowed &amp; Reverb",
    "artist": "Im Karan",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273f4584923b2e58c147cba6b5d",
    "spotifyTrackId": "0DWZjVuFh0OStX4cENFEf1"
  },
  {
    "title": "Glock",
    "artist": "Mankirt Aulakh",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273fbc4e56c0f15a04d0d4a9105",
    "spotifyTrackId": "2ggKteSNbKhy2Ky8je8XOm"
  },
  {
    "title": "8 Raflaan (feat. Gurlez Akhtar)",
    "artist": "Mankirt Aulakh, Gurlez Akhtar",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273834048e164c2ca653791431e",
    "spotifyTrackId": "7vUfIIQiH3K3J5tmN46HE5"
  },
  {
    "title": "Jail 2",
    "artist": "Mankirt Aulakh",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b27329ea3ab4b85651259cfabef1",
    "spotifyTrackId": "3WWsCiSZNK7WTzAgWHLr5j"
  },
  {
    "title": "Vail",
    "artist": "Mankirt Aulakh, Nimrat Khaira, Shree Brar",
    "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273feb4c70f29e663f7f8996c48",
    "spotifyTrackId": "1bqAnuqlgbQ55AByEp0SmM"
  }
];

export default function SpotifyWidget({ theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const iframeRef = useRef(null);

  const isWhite = theme === "white";
  const textColor = isWhite ? "text-black/60" : "text-[#8b949e]"; 
  const highlightColor = isWhite ? "text-black/90" : "text-[#c9d1d9]"; 

  // Rotate through the playlist every 15 seconds, PAUSED when hovered
  useEffect(() => {
    if (isHovered) return; // Stop the timer if the user is listening

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PLAYLIST.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ command: 'play' }, '*');
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ command: 'pause' }, '*');
    }
  };

  const handleIframeLoad = () => {
    if (isHovered && iframeRef.current && iframeRef.current.contentWindow) {
      setTimeout(() => {
        if (isHovered && iframeRef.current && iframeRef.current.contentWindow) {
          iframeRef.current.contentWindow.postMessage({ command: 'play' }, '*');
        }
      }, 500);
    }
  };

  const currentSong = PLAYLIST[currentIndex];

  return (
    <>
      <motion.div 
        layout
        className={`inline-flex items-center gap-2 cursor-pointer w-fit select-none relative z-10 overflow-hidden transition-colors duration-300 ${
          isHovered 
            ? isWhite 
              ? "bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/10 px-4 py-2.5 rounded-full backdrop-blur-md"
              : "bg-black/90 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-md"
            : "p-2 rounded-full" /* Transparent padding to increase hitbox */
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ layout: { type: "spring", stiffness: 400, damping: 25 }, scale: { type: "spring" } }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Spotify Icon */}
        <motion.div layout="position" className="flex-shrink-0">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#1DB954">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.56.3z"/>
          </svg>
        </motion.div>

        <motion.div layout="position" className={`font-sans text-[13px] ${textColor} leading-none tracking-wide flex items-center`}>
          <span className="mr-2">Currently listening — </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSong.spotifyTrackId}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex items-center gap-1.5"
            >
              <img 
                src={currentSong.albumArtUrl} 
                alt={currentSong.title}
                className="w-5 h-5 rounded-[4px] object-cover"
              />
              <span className={`${highlightColor} font-medium`}>
                {currentSong.title} · {currentSong.artist}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Dynamic Island Play Indicator (Shows only when playing) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, width: 0 }}
              animate={{ opacity: 1, scale: 1, width: "auto" }}
              exit={{ opacity: 0, scale: 0.5, width: 0 }}
              className="ml-2 flex items-center gap-[2px] h-3"
            >
              {/* Very minimal CSS equalizer */}
              <div className="w-[2px] bg-[#1DB954] rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: "100%" }}></div>
              <div className="w-[2px] bg-[#1DB954] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s]" style={{ height: "60%" }}></div>
              <div className="w-[2px] bg-[#1DB954] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" style={{ height: "80%" }}></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hidden Spotify Iframe for Audio Playback */}
      <iframe
        ref={iframeRef}
        src={`https://open.spotify.com/embed/track/${currentSong.spotifyTrackId}`}
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        allow="autoplay; encrypted-media"
        onLoad={handleIframeLoad}
        title="Spotify Audio Player"
      />
    </>
  );
}
