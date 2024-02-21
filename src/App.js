import Header from "./componentss/Header"
import Navigation from "./componentss/Navigation"
import Cryptos from "./componentss/Cryptos"
import WhyTradeWidthXM from "./componentss/WhyTradeWidthXM"
import Form from "./componentss/RegistrationForm"
import Gallery from "./componentss/Gallery"
import BigFairHuman from "./componentss/BigFairHuman"
import Footer from "./componentss/Footer"

function App() {

  return (
    <div className="w-full h-full max-w-[1200px] m-auto">

      {/* <Navigation /> */}
      <Navigation />

      {/* Header */}
      <Header />

      {/* Cryptos */}
      <Cryptos />

      {/* Why trade with XM */}
      <WhyTradeWidthXM />

      {/* Registration Section */}

      {/* Form */}
      <Form />

      {/* Gallery */}
      <Gallery />

      {/* Big Fair Human */}
      <BigFairHuman />

      {/* Footer */}
      <Footer />

    </div>
    // End of wrapper
  )
}

export default App
