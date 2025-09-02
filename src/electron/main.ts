const   { app , BrowserWindow } = require('electron');
const path = require('path');
import {isDev} from './util.js';
import {PollResources} from './resourceManager.js'
// type test = string ;

app.on('ready',()=>{
    const mainWindow = new BrowserWindow({});
    if( isDev() ) {
        mainWindow.loadURL('http://localhost:5024/');
    }
    else{

        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html' ));
    }
    
    PollResources();
})

    