import dbConnect from './db-connect';

const task = () => {

    const tasksStore = dbConnect('tasks-storage');
    const getAllTasks = () => tasksStore.getData();
    const delTask = index => tasksStore.delData(index);

    const data = getAllTasks();

    const defaultTask = {
        title: 'Untitled',
        description: '',
        isTask: false,
        dueDate: null,
        priority: 1,
        isDone: false,
        project: 'Personal',
    };

    const setTask = (newTaskInputData = defaultTask, index = data.length) => {
        const newTask = defaultTask;
        Object.assign(newTask, newTaskInputData);

        /*Call project model to set new project from newtask data*/

        return tasksStore.setData(newTask, index);
    }

    return {data, getAllTasks, delTask, setTask}
};

export default task