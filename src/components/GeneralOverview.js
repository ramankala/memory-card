import '../styles/GeneralOverview.css';

const GeneralOverview = (props) => {
    const { cardArr, handleShuffle  } = props;
    return (

        <div class = 'generalUI'>
            {cardArr.map((item, index) => {
                return (
                    <div id={item.name.split(" ").join("")}>
                        <div>
                            <img
                                onClick = {handleShuffle}
                                key = {index}
                                src = {item.imgUrl}
                                alt = {item.name}
                            />
                        </div>
                        <div>{item.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default GeneralOverview;