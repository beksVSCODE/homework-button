
const Buttons = ({color,fn}) => {
    function changeColor (){
        fn.style.backgroundColor = color
    }
    return (
        <button
            className="wrapper__button"
            style={{
                color:color
            }}
            onClick={() => {
            if(fn.style.backgroundColor !== color){
                return changeColor()
            }
            }}
        >
        {color}
      </button>
    );
};

export default Buttons;