import { useState } from 'react';

const useForm = (callback, initialValues = {},) => {
    const [inputs, setInputs] = useState(initialValues);

    const handleSubmit = e => {
        e.preventDefault();
        callback(inputs);
    };

    const handleInputChange = e => {
        const {name, value} = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    };
    return [inputs, handleSubmit, handleInputChange];
};

export default useForm;