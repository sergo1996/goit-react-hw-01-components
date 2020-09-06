import React from 'react';
import Profile from './components/Components/Profile';
import user from './components/Components/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/components.json';
import FriendList from './components/Friend/Friend';
import friends from './components/Friend/Friend.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/TransactionHistory.json';

function App() {
 return (
  <div className="App">
   <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
   />{' '}
   <Statistics title="Upload stats" stats={statisticalData} />{' '}
   <FriendList friends={friends} />
   <TransactionHistory
    items={transactions}
    type={'Type'}
    amount={'Amount'}
    currency={'Currency'}
   />
  </div>
 );
}

export default App;
