import React, { Component } from 'react'
import './LoginHelp.css'
import { Link } from 'react-router-dom'

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
class LoginHelp extends Component {
    state = {
        activeLoginHelp: false,
    }
    render() {
        return (
            <>
                <div className="loginHelp" onClick={() => this.setState({activeLoginHelp: !this.state.activeLoginHelp})}>
                    {this.state.activeLoginHelp ? <ArrowDropDownIcon fontSize="small" className="loginHelpIcon"/> :<ArrowRightIcon fontSize="small" className="loginHelpIcon"/>}
                    <p>Avez-vous besoin d'aide ?</p>
                </div>
                {this.state.activeLoginHelp && <Link to="/motdepasseoublie"className="text-link"><p className="loginHelp__password">Mot de passe oublié</p></Link>}
                
            </>
        )
    }
    
}

export default LoginHelp
