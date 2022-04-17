export const BtnStyled = ({ customStyle, innerText, clickFunc }) => {
        return (
        <button className={ `${customStyle}`} onClick={() => clickFunc()}>
            {innerText}
        </button>
    );
}

export default BtnStyled;