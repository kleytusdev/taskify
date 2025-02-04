import styles from './Tag.module.css'

interface TagProps {
  name: string;
  background: string;
  color: string;
}

export const Tag = ({ name, background, color }: TagProps) => {
  return (
    <div className={styles.tag} style={{ backgroundColor: background, color }}>
      <p>{name}</p>
    </div>
  )
}
