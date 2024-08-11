import { useState } from "react"
import { AddCategory, GiftGrid } from "./components"

export const GiftApp = () => {

    const [categories, setCategories] = useState<string[]>([]);

    const handleAdd = (newCategorie: string) => {
        if (categories.includes(newCategorie)) return;
        setCategories([newCategorie, ...categories])
    }
    return (
        <>
            <h1 className="category">Gift App</h1>
            <AddCategory OnNewValue={handleAdd} />
            {
                categories.map((category) => (
                    <GiftGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}
