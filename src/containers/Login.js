import React from 'react'
import { connect } from 'react-redux'
import '../styles/Login.scss'
class Login extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-3">
                    One of three columns
                </div>
                
            </div>
        )
    }
}
export default connect()(Login)