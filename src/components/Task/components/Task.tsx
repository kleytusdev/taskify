import styles from './Task.module.css'
import avatar from './../../../assets/circle.png'
import { Tag } from '../../Tag'

const tags = [
  {
    "name": "Internal",
    "background": "#E8D0FF",
    "color": "#5522AA"
  },
]

export const Task = () => {
  return (
    <>

      <div className={styles.card}>
        <div className={styles.icon}>O</div>
        <div className={styles.content}>
          <div className={styles.description}>
            <p style={{ fontWeight: '400' }}>Approve SMB documents</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dsa asdasdasd</p>
          </div>
          <div className={styles.details}>
            <div className={styles.detailsRow}>
              {tags.map((tag, index) => (
                <Tag key={index} name={tag.name} background={tag.background} color={tag.color} />
              ))}
              <div className={styles.iconTag}>M</div>
            </div>
            <div className={styles.detailsRow}>
              <p>Date</p>
              <img className={styles.avatar} src={avatar} alt='avatar' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
