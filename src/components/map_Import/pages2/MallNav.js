import { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";


class MallNav extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

        

        
    }

    

render () {

    return (
        <nav className="mallnav mallnav--hidden">
            <Link className="boxbutton mallnav__button--up" aria-label="Go up" to={'/map/'}>
                <svg className="icon icon--angle-down"><use xlinkHref="#icon-angle-up"></use></svg>
            </Link>
            
            <Link className="closebutton layers boxbutton--dark mallnav__button--all-levels" aria-label="Back to all levels" to={'/map/'}>
                <svg className="icon icon--stack"><use xlinkHref="#icon-stack"></use></svg>
            </Link>
            
            <Link className="boxbutton mallnav__button--down" aria-label="Go down" to={'/map/'}> <svg className="icon icon--angle-down"><use xlinkHref="#icon-angle-down"></use></svg></Link>
        </nav>
    )
}


}
export default MallNav;