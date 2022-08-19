import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext} from "react"
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.contexts"
import { CartContext } from "../../contexts/cart.contexts"


import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"



import { signOutUser } from "../../utils/firebase/firebase.utils"
// import userEvent from "@testing-library/user-event"

// 네비게이션 바에서 링크태그로 클릭하면 이동할수 있는 태그를 만들어준다


const Navigation = () => {

    const {currentUser} = useContext(UserContext); //user 이 아니라 currentUser 이 오는걸 주의
    // console.log(currentUser);

    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);
    // }

    const {isCartOpen} =useContext(CartContext);


    return (    
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <CrwnLogo className="logo" />
            </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>

            { 
                currentUser ? (  //지금 유저가 로그인되있으면 sign out 으로 표기 한다 
                    <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    )
                    
                    : (<Link className="nav-link" to="/auth"> 
                    SIGN IN
                      </Link>)
            }
            
            
            <CartIcon/> 
            
          </div>
           {isCartOpen && <CartDropdown/>}
          

          
        </div>
        <Outlet />
      </Fragment>
  
    )
  }

  export default Navigation