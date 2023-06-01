import React from "react";
import Header from "./Header"
import PointTable from "./PointTable"
import Footer from "./Footer"
import Content from "./Content"
import { Container } from "reactstrap";

function App() {

  const lines=[
    {team:"Galatasaray", win:25, draw:4, lose:4, point:79},
    {team:"Fenerbahçe", win:23, draw:5, lose:5, point:74},
    {team:"Beşiktaş", win:22, draw:8, lose:4, point:74},
    {team:"Adana Demirspor", win:18, draw:9, lose:6, point:63}
  ]

  const links = [
    {title:"Home", url:"/"},
    {title:"Point Table", url:"/pointtable"},
    {title:"Last Season Point Table", url:"https://www.mackolik.com/puan-durumu/t%C3%BCrkiye-s%C3%BCper-lig/2020-2021/482ofyysbdbeoxauk19yg7tdt"}
  ]
var i=1;

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Galatasaray_Sports_Club_Logo.svg/330px-Galatasaray_Sports_Club_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/tr/thumb/8/86/Fenerbah%C3%A7e_SK.png/225px-Fenerbah%C3%A7e_SK.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/225px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png",
    "https://upload.wikimedia.org/wikipedia/tr/5/5f/Adanademirspor.png"
  ]


  return (
    <div>
      <Header links={links}/>
      <Container>
        <PointTable lines={lines}/>
        <Content images={images}/>
        <Footer/>
      </Container>

    </div>
  );
}

export default App;
