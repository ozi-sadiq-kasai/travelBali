import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destination from './components/Destination';
import Explore from './components/Explore';
import Tradition from './components/Tradition';
import Beauty from './components/Beauty';
import Travelers from './components/Travelers';
import Footer from './components/Footer';

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Destination />
            <Explore />
            <Tradition />
            <Beauty />
            <Travelers />
            <Footer />
        </main>
    );
};

export default App;
