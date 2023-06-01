import React from "react";
import Menu from './Menu'
import Category from './Category'
import Movie from './Movie'
import Contact from './Contact'
import Footer from './Footer'
import Top from './Top'
import { Container,Row,Col } from "reactstrap";

function App() {
  
  const categories = [
    "Aksiyon","Bilim Kurgu","Çocuk","Dram","Gerilim","Komedi","Müzikal","Polisiye","Savaş"
  ]

  const movies = [
    {url:"https://tr.web.img4.acsta.net/pictures/23/03/09/13/58/2006576.jpg", title:"John Wick 4", subtitle:"22 Mart 2023",
      text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
    {url:"https://tr.web.img4.acsta.net/pictures/22/12/12/07/34/4691827.jpg",title:"Avatar 2",subtitle:"16 Aralık 2022",
      text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
    {url:"https://tr.web.img4.acsta.net/pictures/23/04/20/08/50/2513648.jpg",title:"Hızlı ve Öfkeli 10", subtitle:"19 Mayıs 2023",
      text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
  ]

  const contacts = [
    {label:"Email",placeholder:"abc@gmail.com"}
  ]

  const footers = ["2023 WATCH MOİVE WEBSITE"]

  const links = ["Anasayfa","Filmler","Diziler","İletişim","Oturum Aç"]
 
  const lists = ["Esaretin Bedeli","Kara Şövalye","Baba","Baba 2","Dövüş Kulübü","Ucuz Roman","İyi, Kötü ve Çirkin","12 Öfkeli Adam"]


  return (
    <div className="App">
        <Menu links={links}/>
        <Container>
          <Row>
            <Col xs="3">
              <Category categories={categories}/>
            </Col>
            <Col xs="6">
              <Movie movies={movies}/>
            </Col>
            <Col xs="3">
              <Top lists={lists}/>
            </Col>
          </Row>
          <Contact contacts={contacts}/>
          <Footer footers={footers}/>
        </Container>
    </div>
  );
}

export default App;