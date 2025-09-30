import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cyberpunk specific colors
        'neon-yellow': "hsl(var(--neon-yellow))",
        'neon-orange': "hsl(var(--neon-orange))",
        'neon-cyan': "hsl(var(--neon-cyan))",
        'cyber-black': "hsl(var(--cyber-black))",
        'surface-dark': "hsl(var(--surface-dark))",
        'text-desaturated': "hsl(var(--text-desaturated))",
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      fontFamily: {
        headline: ['Cyberjunkies', 'Orbitron', 'monospace'],
        body: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      backgroundImage: {
        'gradient-neon': 'var(--gradient-neon)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-overlay': 'var(--gradient-overlay)',
      },
      boxShadow: {
        'neon': 'var(--glow-primary)',
        'neon-subtle': 'var(--glow-subtle)',
        'neon-intense': 'var(--glow-intense)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        "glitch-1": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(-2px)" },
          "20%": { transform: "translateX(2px)" },
          "30%": { transform: "translateX(-2px)" },
          "40%": { transform: "translateX(2px)" },
          "50%": { transform: "translateX(-2px)" },
        },
        "glitch-2": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(2px)" },
          "20%": { transform: "translateX(-2px)" },
          "30%": { transform: "translateX(2px)" },
          "40%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(2px)" },
        },
        "pixelate": {
          "0%": { filter: "blur(0px)", transform: "scale(1)" },
          "25%": { filter: "blur(1px)", transform: "scale(1.02)" },
          "50%": { filter: "blur(2px) contrast(1.5)", transform: "scale(0.98)" },
          "75%": { filter: "blur(1px)", transform: "scale(1.01)" },
          "100%": { filter: "blur(0px)", transform: "scale(1)" },
        },
        'pixel-dissolve-out': {
          from: { opacity: '1', filter: 'blur(0)', transform: 'scale(1)' },
          to: { opacity: '0', filter: 'blur(8px)', transform: 'scale(1.1)' },
        },
        "move-stripes": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glitch-line-1': {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-1px)' },
          '75%': { transform: 'translateY(1px)' },
        },
        'glitch-line-2': {
          '0%, 100%': { transform: 'translateX(0)' },
          '33%': { transform: 'translateX(1px)' },
          '66%': { transform: 'translateX(-1px)' },
        },
        'cyber-pulse': {
          '0%, 100%': { transform: 'scale(1.5) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'scale(1.6) rotate(1deg)', opacity: '1' },
        },
        'pulse-fast': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'loading-fill': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'text-flicker': {
          '0%, 100%': { opacity: '1' },
          '25%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
          '75%': { opacity: '0.6' },
        },
        'binary-glitch': {
          '0%': { content: "'INICIANDO SISTEMA...'" },
          '15%': { content: "'01011100 10011010'" },
          '30%': { content: "'CARGANDO INTERFAZ...'" },
          '45%': { content: "'11100010 01000101'" },
          '60%': { content: "'COMPILANDO SHADERS...'" },
          '75%': { content: "'00101011 11110100'" },
          '90%': { content: "'CONEXION ESTABLECIDA.'" },
          '100%': { content: "'INICIANDO SISTEMA...'" },
        },
        'module-enter-1': 'module-enter 0.2s ease-out 0.05s',
        'module-enter-2': 'module-enter 0.2s ease-out 0.1s',
        'module-enter-3': 'module-enter 0.2s ease-out 0.15s',
        'selector-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px hsl(var(--neon-orange) / 0.5), inset 0 0 5px hsl(var(--neon-orange) / 0.4)' },
          '50%': { boxShadow: '0 0 25px hsl(var(--neon-orange) / 0.7), inset 0 0 8px hsl(var(--neon-orange) / 0.6)' },
        },
        'hologram-glitch': {
          '0%': { opacity: '0.6', transform: 'scale(0.98)', filter: 'blur(2px)'},
          '20%': { opacity: '1', transform: 'scale(1)', filter: 'blur(0)'},
          '80%': { clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 80%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        'scanline-vertical': {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(100%)'},
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glitch-1': 'glitch-1 0.3s infinite',
        'glitch-2': 'glitch-2 0.3s infinite',
        'pixelate': 'pixelate 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'pixel-dissolve-out': 'pixel-dissolve-out 0.5s ease-out forwards',
        'move-stripes': 'move-stripes 2s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'glitch-line-1': 'glitch-line-1 0.2s infinite',
        'glitch-line-2': 'glitch-line-2 0.2s infinite',
        'cyber-pulse': 'cyber-pulse 8s ease-in-out infinite alternate',
        'loading-fill': 'loading-fill 2.5s ease-in-out forwards',
        'text-flicker': 'text-flicker 1.5s infinite',
        'binary-glitch': 'binary-glitch 2.5s steps(1) infinite',
        'module-enter-1': 'module-enter 0.2s ease-out 0.05s',
        'module-enter-2': 'module-enter 0.2s ease-out 0.1s',
        'module-enter-3': 'module-enter 0.2s ease-out 0.15s',
        'pulse-fast': 'pulse-fast 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch-subtle': 'glitch-subtle 0.3s infinite alternate',
        'hologram-glitch': 'hologram-glitch 0.5s ease-out forwards',
        'selector-pulse': 'selector-pulse 2s ease-in-out infinite',
        'scanline-vertical': 'scanline-vertical 12s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
