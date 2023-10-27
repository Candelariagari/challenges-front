

import ArticlesPage from "./components/ArticlesPage"
import Customers from "./components/Customers"
import SecondPage from "./components/SecondPage"
import StartPage from "./components/StartPage"
import ThirdPage from "./components/ThirdPage"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <StartPage />
      <SecondPage />
      <ThirdPage /> 
      <Customers />
      <ArticlesPage />
      <Footer /> 
    </> 
  );
}

export default App
