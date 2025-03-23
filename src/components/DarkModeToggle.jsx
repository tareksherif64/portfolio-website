import { Button } from 'react-bootstrap'
import { useTheme } from '../context/ThemeContext'
import styles from '../styles/DarkModeToggle.module.css'

function DarkModeToggle() {
  const { isDark, setIsDark } = useTheme()

  return (
    <Button 
      variant={isDark ? 'light' : 'dark'} 
      size="sm"
      className={styles.toggle}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? '☀️' : '🌙'}
    </Button>
  )
}

export default DarkModeToggle 