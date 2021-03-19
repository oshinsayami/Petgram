import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/authActions'
import { withRouter } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
        <div>
            {this.props.loggedIn ? (
                <>
                <Link to="/posts">Home</Link>
                <Link to="" onClick={() => this.props.logout()}>Logout</Link>
                <Link to="/newpost">Add Post</Link>
                </>
            ):("")
            }
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}
    
export default withRouter(connect(mapStateToProps, {logout})(Navbar))
            
           
