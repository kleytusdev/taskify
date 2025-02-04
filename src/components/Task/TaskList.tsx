import { Task } from './components'
import './TaskList.css'
import { tasks } from './../../mocks/tasks'

export const TaskList = () => {
  return (
    <div className='task-list'>
      <p className='task-title' >My Tasks</p>
      <span className="line" />
      <div className='container-tasks'>
        {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))
        }
      </div>
    </div>
  )
}
