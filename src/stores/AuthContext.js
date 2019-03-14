import React, { Component } from 'react'
import * as api from '../api'

const AuthContext = React.createContext()

class AuthProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      signin: data =>
        api.signIn(data).then(res => this.setState({ user: res.body.user })),
      signup: data =>
        api.signUp(data).then(res => this.setState({ user: res.body.user })),
    }
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export { AuthProvider, AuthContext }
