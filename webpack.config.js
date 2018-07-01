var path =require('path'); //node.js has a built in module called path

//use node.js module export syntax to export a JS object 
//entry : relative path to the starting point for webpack
//output : where wil the built files be outputted , requires absolute path
//modules & loaders : Allow us to transform our files. Example for CSS files : We'd 
//import our css files in our js file ( only import) , webpack cant add css info to js
//file so webpack would load css separately. for css use case we need css-loader
// and style-loader. SO add a module property. A module is everything you import.
//Lets import css into teh app.js. module is an object, rules is an array of js //objects. css-loader only allows you to import this into JS. 
//style-loader allows you to use the css. Since we need multiple loaders , use 
// the use property not the loader property. 
//last loader is loaded first by webpack so style must be 0 and css must be 1 in the //array

module.exports = { 
   entry: './src/js/app.js' ,
   output : {
	          path:  path.resolve(__dirname,'dist'),
			  filename : 'bundle.js',
			  publicPath: 'dist'
   },
   module : {
	    rules: [ 
		{
			test: /\.css$/,
			use: [
			      'style-loader',
				  'css-loader'
				 ]
		}
		]
   }
}