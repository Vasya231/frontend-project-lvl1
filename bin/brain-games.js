#!/usr/bin/env node
import * as base from '../src/index.js';

base.welcome();
const user = base.getName();
base.greetings(user);
