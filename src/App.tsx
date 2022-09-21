import { useFetchers } from 'react-router-dom';
import { CharacterCard } from './components/CharacterCard/CharacterCard';
import { Layout } from './components/Layout';
import { useCharacters } from './hooks/useCharacters';
import { AppRouter } from './routes/AppRouter';

const App = () => (
  <Layout>
    <AppRouter />
  </Layout>
);

export default App;
