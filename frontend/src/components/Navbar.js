import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../redux/actions/authActions'


class Navbar extends React.Component {
    render() {
        return (
            <Link to="" onClick={() => this.props.logout()}>Logout</Link>
        )
    }
}
    
export default connect(null, {logout})(Navbar)
            
           
