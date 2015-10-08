// Help getting this set up from: http://jslog.com/2014/10/02/react-with-webpack-part-1/
// Some of the code is depreciated since the article was written in 2014 so be aware.

module.exports = {
  entry: './app.jsx',
  output: {
    filename: 'bundle.js', 
    //this is the default name, so you can skip it
    //at this directory our bundle file will be available
    //make sure port 8090 is used when launching webpack-dev-server
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      {
        //tell webpack to use jsx-loader for all *.jsx files
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
    ]
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}