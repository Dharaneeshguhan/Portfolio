module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deepBlack: "#0a0a0a", // Custom deep black
        cyanGlow: "#00FFFF",
        gray: {
          950: "#0f0f0f",
          900: "#1a1a1a",
          800: "#2d2d2d",
        },
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      },
      keyframes: {
        pulseRotate: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(6deg) scale(1.1)' },
        },
      },
      animation: {
        'pulse-rotate': 'pulseRotate 3s ease-in-out infinite',
      },
      boxShadow: {
        cyan: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
      },
    },
  },
  plugins: [],
};
