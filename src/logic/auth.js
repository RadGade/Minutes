import { createBrowserHistory } from 'history';
var app = require('electron').remote
const fs = require('fs');
const Gun = require('gun');
const SEA = require('gun/sea');
const history = createBrowserHistory({forceRefresh:true});
var gun = Gun();
var user = gun.user() 

class Auth {

  constructor() {
    this.authenticated = false;
    this.pub = "";
    this.ack = [];
  }
      signup () {
        var uid = document.getElementById('uid').value
        var pwd = document.getElementById('pwd').value
        user.create(uid, pwd, ack => (this.pub = ack.pub))
     }
    
    signin() {
        var pub = this.pub
        var uid = document.getElementById('uid').value
        var pwd = document.getElementById('pwd').value
        user.auth(uid, pwd, ack => (this.pub = ack.pub))
        if (pub !== null) {
          let content = fs.readFileSync('./random.json' , {encoding: "utf8"})
          console.log(content)
            history.push("/home")
            this.authenticated = true;
            console.log(this.authenticated)
            console.log(this.ack)
        }


 }
 signout() {
    this.authenticated = false;
     user.leave()
     history.push("/")
 }


 isAuthenticated() {
    return this.authenticated;
  }

}

export default new Auth();




