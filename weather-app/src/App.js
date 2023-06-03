import { useContext } from 'react';
import { WeatherContext } from './WeatherProvider/WeatherProvider';

function App() {
  const weatherInfo = useContext(WeatherContext);
  console.log(weatherInfo);

  return (
    <div className="App">
    </div>
  );
}

export default App;
