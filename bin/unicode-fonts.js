#!/usr/bin/env node
(async function(){
  try {
    await require('../dist/src/cli').main()
  } catch (error) {
    process.exit(1)
  }
})()
