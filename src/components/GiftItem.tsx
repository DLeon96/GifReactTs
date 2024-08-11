interface GiftIteamProps {
    title: string;
    url: string;
    }


export const GiftItem:React.FC<GiftIteamProps> = ({title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} width={200} height={200}/>
        <p>{title}</p>
    </div>
  )
}
