import {useState} from 'react';
export const InputValue = () => {
    const [value, setValue] = useState("");


    function cleared() {
        console.log('clicked');
        const clearInput = document.querySelector(".form-control");
        setValue("");
        clearInput.value = `${value}`;

    }

    return {value, setValue, cleared}
}