import React from 'react'
import {Route} from 'react-router-dom'

import Query from './Query'
import Option1 from './Option1'
import Option2 from './Option2'

export default ({match}) => (
    <div>
        <Route path={`${match.url}/query`} component={Query} />
        <Route path={`${match.url}/option_1`} component={Option1} />
        <Route path={`${match.url}/option_2`} component={Option2} />
    </div>
)