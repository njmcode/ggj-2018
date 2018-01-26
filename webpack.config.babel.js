import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const SRC_PATH = path.join(__dirname, 'src')
const DIST_PATH = path.join(__dirname, 'dist')

const baseConfig = {
  entry: {
    chat: path.join(SRC_PATH, 'chat', 'index.js'),
    puzzle: path.join(SRC_PATH, 'puzzle', 'index.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_PATH,
        exclude: [
          /node_modules/,
        ],
        use: [{
          loader: 'babel-loader',
        }],
      },
      // Assets handled as file paths for import
      {
        test: /\.(jpg|png|gif|jpeg|mp3|mp4|ogg|wav)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        }],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, 'shell', 'index.html'),
      filename: 'index.html',
    }),
  ],
  resolve: {
    modules: [
      'node_modules',
      SRC_PATH,
    ]
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH,
    publicPath: 'http://localhost:8080/',
  },
}

export default baseConfig
