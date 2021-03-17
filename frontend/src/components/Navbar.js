import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../redux/actions/authActions'


class Navbar extends React.Component {
    render() {
        return (
        <div>
            {this.props.loggedIn ? (
                <>
                <Link to="" onClick={() => this.props.logout()}>Logout</Link>
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
    
export default connect(mapStateToProps, {logout})(Navbar)
            
           
