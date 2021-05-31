//import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Auction
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
