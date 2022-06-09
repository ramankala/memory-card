import '../styles/GeneralOverview.css';

const GeneralOverview = (props) => {
    const { cardArr, handleShuffle  } = props;
    return (

        <div id = 'generalUI'>
            {cardArr.map((item, index) => {
                return (
                    <img
                        onClick = {handleShuffle}
                        id = {item.name.split(" ").join("")}
                        key = {index}
                        src = {item.imgUrl}
                        alt = {item.name}
                    />
                )
            })}
        </div>
    )
}

export default GeneralOverview;