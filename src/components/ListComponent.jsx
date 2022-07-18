import styles from './ListComponent.module.css'

import { Trash } from 'phosphor-react'

export function ListComponent( { content, onDeleteTask } ) {

    const $radios = document.querySelectorAll('#check');
    const $buttonTrash = document.querySelector('#trash');

    function handleDeleteTask() {
        onDeleteTask(content);
    }



    // function handleDeleteController() {
    //     $radios.forEach(radio => {
    //         radio.addEventListener('change', (e) => {
    //             e.preventDefault();
    //              if (radio.checked === true) {
    //                 $buttonTrash.disabled = false;
    //             } else if (radio.checked === false) {
    //                 $buttonTrash.disabled = true; 
    //             }
    //         })
    //     })
    // }

    // handleDeleteController();

    return (
        <div className={styles.listComponentContainer}>
            <div className={styles.radioWithTask}>
                {/* <label className={styles.formControl}>
                    <input 
                        type="checkbox" 
                        name={props.content} 
                        id='check'
                        />
                    {props.content}
                </label> */}
    
                <label className={styles.container}><span className={styles.containerName}>{content}</span>
                    <input 
                        type="checkbox" 
                        name={content} 
                        id='check'
                    />
                    <span className={styles.checkmark}></span>
                </label>
                
            </div>

            <button
                onClick={handleDeleteTask}
                title='Deletar comentário'
                id = 'trash'
            >
                <Trash size={24} />
            </button>
        </div>
    );
}