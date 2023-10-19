// importing the shopify/polaris CSS needed for the project  
import '@shopify/polaris/build/esm/styles.css';

// Components that is displayed on the page
import SideNav from './components/SideNav';
import TopNav from "./components/TopNav";


const App = () => {
  return (
    <>
      <TopNav/>
      <SideNav/>
    </>
  )
}

export default App
