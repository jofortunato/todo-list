import dbConnect from './db-connect';
import projectModel from './project'

const task = () => {

    const tasksStore = dbConnect('tasks-storage');
    const projectModule = projectModel();
    const getAllTasks = () => tasksStore.getData();
    const delTask = index => tasksStore.delData(index);

    const data = getAllTasks();

    const defaultTask = {
        title: 'Untitled',
        description: '',
        isTask: false,
        dueDate: new Date(),
        priority: 1,
        isDone: false,
        project: 'Personal',
    };

    const setTask = (newTaskInputData = defaultTask, index = data.length) => {
        const newTask = defaultTask;
        Object.assign(newTask, newTaskInputData);

        const {project} = newTask;
        projectModule.setProject(project);

        return tasksStore.setData(newTask, index);
    }

    return {data, getAllTasks, delTask, setTask}
};

export default task