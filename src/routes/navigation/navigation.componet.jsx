import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import './navigation.styles.scss'


// 네비게이션 바에서 링크태그로 클릭하면 이동할수 있는 태그를 만들어준다


const Navigation = () => {
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
            <Link className="nav-link" to="/auth"> 
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
  
    )
  }

  export default Navigation