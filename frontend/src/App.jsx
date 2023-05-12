import "./style/App.scss";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}

export default App;
