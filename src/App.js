import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Cryptos from "./components/Cryptos"
import WhyTradeWithXM from "./components/WhyTradeWithXM"
import RegistrationSection from "./components/RegistrationSection"
import Form from "./components/RegistrationForm"
import Gallery from "./components/Gallery"
import BigFairHuman from "./components/BigFairHuman"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="w-full h-full max-w-[1200px] m-auto">

      {/* Header */}
      <Header />

      {/* Cryptos */}
      <Cryptos />

      {/* Why trade with XM */}
      <WhyTradeWithXM />

      {/* Registration Section */}
      <RegistrationSection />

      {/* Form */}
      <Form />

      {/* Gallery */}
      <Gallery />

      {/* Big Fair Human */}
      <BigFairHuman />

      {/* Footer */}
      <Footer />

    </main>
    // End of wrapper
  )
}

export default App
