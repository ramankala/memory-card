
const GeneralOverview = (props) => {
    const { cardArr,  } = props;
    return (

        <div id = 'generalUI'>
            {cardArr.map((item, index) => {
                return (
                    <img
                        onClick={}
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