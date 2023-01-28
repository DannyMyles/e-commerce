import Announcements from "../../components/announcements/Announcements"
import Categories from "../../components/category/Categories"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import NewsLetter from "../../components/news/NewsLetter"
import Products from "../../components/products/Products"
import Slider from "../../components/slider/Slider"

const Home = () => {
  return (
    <>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home
