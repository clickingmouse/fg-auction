//import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Auction
      </header>
      
      <div>
        Signout here
      <AmplifySignOut />
      </div>
    </div>
  );
}

export default withAuthenticator(App);
