import styles from './Tag.module.css'

interface TagProps {
  name: string;
}

const TAG_STYLES: Record<string, { background: string; color: string }> = {
  Internal: { background: '#f1e8fe', color: '#2f2161' },
  'Needs action': { background: '#fce5e2', color: '#723231' },
  Customer: { background: '#cdf9dd', color: '#3e6b50' },
};

export const Tag = ({ name }: TagProps) => {

  const tagStyles = TAG_STYLES[name] ?? { background: '#ccc', color: '#000' };

  return (
    <div className={styles.tag} style={{ backgroundColor: tagStyles.background, color: tagStyles.color }}>
      <p>{name}</p>
    </div>
  )
}
