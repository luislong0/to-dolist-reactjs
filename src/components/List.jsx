import styles from './List.module.css'
import { PlusCircle, Scroll } from 'phosphor-react'
import { ListComponent } from './ListComponent';
import { useState } from 'react';

export function List() {
    const $nothing = document.querySelector('#empty');
    const $radios = document.querySelectorAll('#check');
    const $active = document.querySelectorAll('#active');
    console.log($active.length);

    // const [newTaskText, setNewTaskText] = useState('')

    const [radioCount, setRadioCount] = useState(0);

    const [taskContent, setTaskContent] = useState('');
    
    const [tasks, setTasks] = useState([])

    function handleAddTask(e) {
        e.preventDefault();
        setTasks(prevState => [...prevState, taskContent])
        setTaskContent('');

        if ($radios.length === 0) {
            $nothing.id = 'emptyActivated';
        }
    }

    function deleteTask(taskToDelete) {
        console.log(tasks)
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.toString() !== taskToDelete;
        })

        setTasks(tasksWithoutDeletedOne);
        
        if (radioCount !== 0) {
            setRadioCount(radioCount - 1) 
        }
        
    }

    function handleNewCommentChange(e) {
        e.target.setCustomValidity('');
        setTaskContent(e.target.value)
    }

    function handleCheckCount() {
        $radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                // e.preventDefault();
                 if (radio.checked === true) {
                    setRadioCount(radioCount + 1);

                    radio.parentNode.id = 'active';
                } else if (radio.checked === false) {
                    setRadioCount(radioCount - 1)

                    radio.parentNode.id = 'disabled';
                }
            })
        })
    }

    handleCheckCount();


    const isNewTaskInputEmpty = taskContent.length === 0

    return (
        <div className={styles.list}>
            <div className={styles.inputWithButton}>
                <input 
                    type="text" 
                    name="textList" 
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleNewCommentChange}
                    value={taskContent}
                />
                <button type='button' 
                        onClick={handleAddTask}
                        disabled={isNewTaskInputEmpty}
                >
                    <PlusCircle size={24}/>
                </button>
            </div>

            <div className={styles.worksCount}>
                <div className={styles.counter}>
                    <p>Tarefas criadas</p>
                    <span>{tasks.length}</span>
                </div>

                <div className={styles.progress}>
                    <p>Concluídas</p>
                    <span>{`${radioCount} de ${tasks.length}`}</span>
                </div>
            </div>

            <div className={styles.nothing} id='empty'>
                <Scroll size={64} weight="bold"/>
                <p className={styles.paragraphBold}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

            <div className={styles.workList}>
                {tasks.map((task) => {
                    return (
                        <ListComponent
                            key={task}
                            content={task}
                            onDeleteTask={deleteTask}
                        />
                    )
                })}
            </div>
        </div>
    );
}