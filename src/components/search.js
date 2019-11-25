import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { useStyles } from './css/login-css'
const Gun = require('gun');
const SEA = require('gun/sea');
var gun = Gun();

export const Search = () => {
const classes = useStyles();
const [uid, setUid] = useState([])
        return (
            <div>
            <TextField
            id="search"
            label="Search field"
            type="search"
            onKeyPress = {(event) => {
              if (event.key === 'Enter') {
                var name = "~@" + document.getElementById('search').value
                gun.get(name).once((data, key)=>{setUid()});
                console.log(uid)
              }
            }} 
            classes={{
                root: classes.search
              }}
            margin="normal"
            
          />
            </div>
        )
    
}







// const classes = useStyles();


        


//         return (
//             <div>
//             <TextField
//             id="search"
//             label="Search field"
//             type="search"
//             classes={{
//                 root: classes.search
//               }}
//             margin="normal"
            
//           />
//           <Button onClick={find}> Find</Button>
//             </div>
//         )
    
// }

// function find () {
//   var name = "~@" + document.getElementById('search').value
//   gun.get(name).once((data, key)=>{console.log(data)});
// }