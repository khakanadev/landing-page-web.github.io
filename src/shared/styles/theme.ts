export const theme = {
  colors: {
    background: '#000319',
    surface: '#151821',
    primary: '#6C5CE7',
    primaryHover: '#5A4BD0',
    text: '#E6E8EF',
    textSecondary: '#A3A8B8',
    border: '#242938'
  },
  spacing: (multiplier: number) => `${4 * multiplier}px`,
  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px'
  },
  shadows: {
    soft: '0 4px 20px rgba(0,0,0,0.25)'
  },
  zIndex: {
    header: 100
  }
} as const

export type AppTheme = typeof theme

