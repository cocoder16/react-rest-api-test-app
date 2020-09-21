import {useReducer, useEffect} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const useAsync = (callback, initialParamArr = [], dependencies = []) => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false
    });

    const fetchData = async (paramsArr) => {
        dispatch({type: 'LOADING'});
        try {
            let data;
            if (!paramsArr) {
                data = await callback();
            } else {
                data = await callback(...paramsArr);
            }
            dispatch({type: 'SUCCESS', data});
        } catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    };

    useEffect(() => {
        fetchData(initialParamArr);
    }, dependencies);

    return [state, fetchData];
}

export default useAsync;