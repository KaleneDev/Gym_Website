import "./style/App.scss";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Plans from "./components/Plans/Plans";
function App() {
    return (
        <div className="App">
            <Hero></Hero>
            <Programs></Programs>
            <WhyChooseUs></WhyChooseUs>
            <Plans></Plans>
            <Testimonials></Testimonials>
        </div>
    );
}

export default App;
