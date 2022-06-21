import { Link } from "react-router-dom";


// close button
const Content = ()=> {
    return (
        <>
        <Link className="closebutton close boxbutton--dark content__button level-close content__button--hidden" aria-label="Close details" to={'/map/'}>
            <svg className="icon icon--cross"><use xlinkHref="#icon-cross"></use></svg>
        </Link>
        </>
    )
}

export default Content;
