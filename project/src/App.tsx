

import ArticlesPage from "./components/ArticlesPage"
import Customers from "./components/Customers"
import Services from "./components/Services"
import CompanyIntroduction from "./components/CompanyIntroduction"
import PromotionCards from "./components/PromotionCards"
import MainLayout from "./components/MainLayout"

function App() {
  return (
    <MainLayout>
      <CompanyIntroduction />
      <Services />
      <PromotionCards /> 
      <Customers />
      <ArticlesPage />
    </MainLayout>
  );
}

export default App
