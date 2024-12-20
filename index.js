import {AppRegistry} from 'react-native';
import App from './App';  // Import the App component
import {name as appName} from './app.json';  // Get the app name from app.json

AppRegistry.registerComponent(appName, () => App);  // Register the app
