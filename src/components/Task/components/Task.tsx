import styles from './Task.module.css'
import avatar from './../../../assets/circle.png'
import planned from './../../../assets/task-statuses/circle.svg'
import close from './../../../assets/task-statuses/circle-x.svg'
import check from './../../../assets/task-statuses/circle-check.svg'
import progress from './../../../assets/task-statuses/progress-bolt.svg'
import refresh from './../../../assets/task-statuses/refresh.svg'
import { Task as TaskType} from './../../../types/task'
import { Tag } from '../../Tag'
import { useState } from 'react'

interface Props {
  task: TaskType
}

const STATUS_OPTIONS: { name: TaskType["status"]; icon: string, background: string, color: string }[] = [
  { name: "Planned", icon: planned, background: '#f3f5f7', color: '#000' },
  { name: "In Progress", icon: progress, background: '#fdf1c8', color: '#9f6146' },
  { name: "Blocked", icon: close, background: '#fde5df', color: '#61201c'},
  { name: "Waiting", icon: refresh, background: '#cee3fd', color: '#1e378b'},
  { name: "Done", icon: check, background: '#d1f9de', color: '#1f4c32' },
];

export const Task = ({ task }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<TaskType["status"]>(task.status)

  const handleStatusChange = (status: TaskType["status"]) => {
    setSelectedStatus(status)
    setIsOpen(false)
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
          <img src={STATUS_OPTIONS.find((s) => s.name === selectedStatus)?.icon || planned} alt={selectedStatus} width={20} />
        </div>

        {isOpen && (
          <div className={styles.menu}>
            {STATUS_OPTIONS.map((status) => (
              <div
                key={status.name}
                className={styles.menuItem}
                style={{
                  backgroundColor: status.background,
                  color: status.color,
                }}
                onClick={() => handleStatusChange(status.name)}
              >
                <img src={status.icon} alt={status.name} width={20} />
                <span>{status.name}</span>
              </div>
            ))}
          </div>
        )}

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
              <p>{task.dueDate}</p>
              <img className={styles.avatar} src={avatar} alt='avatar' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
