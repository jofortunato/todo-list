import db from './db-connect';

const projectModel = () => {
    const projectStore = db('project', ['Personal']);
    const getAllProjects = () => projectStore.getData();

    const store = getAllProjects();

    const setProject = (data = '', index = store.length) => {
        if (!store.includes(data)) {
            projectStore.setData(data, index);
        }
    };

    return { store, getAllProjects, setProject };
};

export default projectModel;