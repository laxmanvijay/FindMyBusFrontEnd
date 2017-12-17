import auth0 from 'auth0-js'
import EventEmitter from 'EventEmitter'

export default class AuthService {
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: 'dsl.auth0.com',
    clientID: 'q4G7bUgB2xcTcYiUj3BUKp66GCSuItt0',
    redirectUri: 'http://localhost:3000/dashboard',
    audience: `https://dsl.auth0.com/userinfo`,
    responseType: 'token id_token',
    scope:'email'
  })

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    console.log('handle')
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
          if (err) console.log(err)
          console.log(user)
          localStorage.setItem('user',JSON.stringify(user))
        })
       
      } else if (err) {
       
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  setSession (authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    this.authNotifier.emit('authChange', { authenticated: true })
    console.log('data')
  }

  logout () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
