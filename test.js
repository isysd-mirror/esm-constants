'use strict'
import constants from './constants.js'
import { finishTest } from '../iso-test/index.js'

if (constants && constants.EOL === '\n') finishTest('pass constants EOL')
else finishTest(`fail constants EOL: ${JSON.stringify(constants.EOL)}`)

// all passed! send kill to finishtest
finishTest('kill')
