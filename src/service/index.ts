import { IScript } from "../components/layout";

const SCRIPT_LIST_LOCAL_KEY = 'SCRIPT_LIST_KEY';

function updateLocalScriptList(list: IScript) {
    localStorage.setItem(SCRIPT_LIST_LOCAL_KEY, list);
}

function getLocalScriptList() {
    const localList = localStorage.getItem(SCRIPT_LIST_LOCAL_KEY);
    return localList || '[]'
}

function handleScriptList() {
    let list: IScript | undefined = undefined;

    const getList = () => {
        if (!list?.length) {
            const stringifiedList = getLocalScriptList();
            try {
                list = JSON.parse(stringifiedList);
            } catch (error) {
                console.error('scriptListService~getList', error);
            }
        }
        return list;
    }

    const setList = (updatedList: IScript) => {
        list = updatedList;
        try{
        const stringifiedList = JSON.stringify(list);
        updateLocalScriptList(stringifiedList);
        } catch( error ){
            console.error('scriptListService~setList')
        }
    }

    return { getList, setList };
}

const scriptListService = handleScriptList();

export { scriptListService };