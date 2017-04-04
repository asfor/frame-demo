import React from 'react'
import {Route} from 'react-router-dom'

import AppStore from './appstore/AppStore'

export default () => (
    <div>
        <Route path='/appstore' component={AppStore}/>
        <Route path='/user' render={() => <h3>user page</h3>}/>
        <Route path='/setting' render={() => <h3>setting page</h3>}/>
    </div>
)
