import styles from './Task.module.css'
import avatar from './../../../assets/circle.png'
import { Task as TaskType} from './../../../types/task'
import { Tag } from '../../Tag'

interface Props {
  task: TaskType
}

export const Task = ({ task }: Props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.icon}>O</div>
        <div className={styles.content}>
          <div className={styles.description}>
            <p style={{ fontWeight: '400' }}>{task.title}</p>
            <p>{task.description}</p>
          </div>
          <div className={styles.details}>
            <div className={styles.detailsRow}>
              <Tag name={task.tag} />
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
