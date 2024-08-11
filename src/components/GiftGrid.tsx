import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { IsLoading } from "../utils/IsLoading";

interface GiftGridProps {
    category: string;
}


export const GiftGrid: React.FC<GiftGridProps> = ({ category }) => {

    const { images, isLoading } = useFetchGifts(category);

    return (
        <>
            <h3 className="category">{category}</h3>

            <IsLoading
            isLoading={isLoading}
            />
            <div className="card-grid">               {
                images.map((image) =>
                    <GiftItem
                        key={image.id}
                        {...image}
                    />
                )
            }
            </div>

        </>
    )
}
