import { useTheme } from '../context/ThemeContext'
import { useEffect, useState } from 'react'
import styles from '../styles/ThemeTransition.module.css'

function ThemeTransition() {
  const { isDark } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 1000)
    return () => clearTimeout(timer)
  }, [isDark])

  if (!isAnimating) return null

  return (
    <div className={`${styles.overlay} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.circle} />
    </div>
  )
}

export default ThemeTransition 