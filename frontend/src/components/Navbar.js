import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/authActions'
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';


class Navbar extends React.Component {
    render() {
        return (
        <div>
            {this.props.loggedIn ? (
                <>
                <Link to="/posts"><Button>Home</Button></Link>
                <Link to="/newpost"><Button>Add Post</Button></Link>
                <Link to="" onClick={() => this.props.logout()}><Button>Logout</Button></Link>
                </>
            ):(<Link to="/signup"><Button>Sign Up</Button></Link>)
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
            
           
