# UNIT TESTING KNOCKOUT WITH KARMA AND JASMINE

[http://karma-runner.github.io/3.0/plus/requirejs.html](http://karma-runner.github.io/3.0/plus/requirejs.html)

# Webpack 
`sudo npm i -D webpack-dev-server` - live reload

## Watch webpack.config.js for changes
`sudo yarn add  nodemon`
Then add the following: 
    `"wstart": "nodemon -w webpack.config.js -x webpack-dev-server -w --open"`
    
## Graph modules visualization interactive

`sudo npx webpack src/start_webpack.js --mode=development --json`
`sudo npm i -g webpack-stats-graph`
`brew install graphviz`
# Install brew
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

# Knockout HMR attempt

`sudo yarn add html-webpack-plugin`

## Add knockout ( not knockoutjs )
`sudo yarn add knockout`

