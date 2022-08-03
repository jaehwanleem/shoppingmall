//버튼 종류 => default button, inverted button, google sign in 
import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}

const Button = ({children, buttonType,...otherProps}) => {  //buttonType 은 스트링이 될것이다
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;