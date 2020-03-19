#!/usr/bin/env node
import * as base from '../src/index.js';
import * as even from '../src/brain-even.js';

base.welcome();
const user = base.getName();
base.greetings(user);
even.play(user);
