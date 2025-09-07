import { useState } from 'react';
import Counter from './components/Counter';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Jim" age="30" bio="Enjoys travelling and discovering" />
    </div>
  );
}

export default App;