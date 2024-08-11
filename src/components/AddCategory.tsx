import React, { useState } from "react"

interface AddCategoryProps {
    OnNewValue: (newCategorie: string) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = ({OnNewValue}) => {

   const [inputValue, setInputValue] = useState("");

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(e.target.value);
         }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const category = inputValue.trim();
        if (category.length <= 1) return;
        OnNewValue(category)
        setInputValue("");

    }


    return (
        <form  onSubmit={onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifts"
            value={inputValue}
            onChange={onChange}
       />
       </form>
    )
}
