import React, { useMemo, useState } from 'react';

const StarsBackground = () => {
  const [clickEffects, setClickEffects] = useState([]);

  // ⭐ Stars
  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => {
      const isSparkle = Math.random() > 0.4;

      const rand = Math.random();
      let color =
        rand < 0.75 ? 'white' :
        rand < 0.95 ? 'silver' :
        'gold';

      return {
        id: i,
        type: isSparkle ? 'star-sparkle' : 'star-circle',
        color,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: isSparkle
          ? `${Math.random() * 8 + 10}px`
          : `${Math.random() * 3 + 2}px`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 3 + 2}s`
      };
    });
  }, []);

  // 🌠 Shooting stars
  const shootingStars = useMemo(() => {
    return [...Array(5)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`
    }));
  }, []);

  // ✨ Click sparkle
  const handleClick = (e) => {
    const newEffect = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };

    setClickEffects((prev) => [...prev, newEffect]);

    setTimeout(() => {
      setClickEffects((prev) => prev.filter(el => el.id !== newEffect.id));
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-10 pointer-events-auto overflow-hidden bg-pink-100"
      onClick={handleClick}
    >
      {/* ⭐ Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={star.type}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,

            background:
              star.color === 'gold'
                ? 'radial-gradient(circle, #FFD700, transparent)'
                : star.color === 'silver'
                ? 'radial-gradient(circle, #E0E0E0, transparent)'
                : '#ffffff',

            boxShadow:
              star.color === 'gold'
                ? '0 0 12px #FFD700, 0 0 25px #FFC300'
                : star.color === 'silver'
                ? '0 0 8px #C0C0C0, 0 0 16px #E0E0E0'
                : '0 0 8px #fff, 0 0 16px #fff',
          }}
        />
      ))}

      {/* 🌠 Shooting Stars */}
      {shootingStars.map((s) => (
        <div
          key={s.id}
          className="shooting-star"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay
          }}
        />
      ))}

      {/* ✨ Click Effects */}
      {clickEffects.map((c) => (
        <div
          key={c.id}
          className="click-sparkle"
          style={{
            top: c.y,
            left: c.x
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;