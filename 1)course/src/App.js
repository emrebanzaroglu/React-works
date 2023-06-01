import { Container,Row,Col } from "reactstrap";
import Categories from "./Categories";
import Products from "./Products";
import Headers from "./Header";


function App() {
  const categories = ["Beverages","Condiments","Confections"]
  const products = ["Product 1","Product 2","Product 3","Product 4"]
  return (
      <Container>
        <Headers/>
        <Row>
          <Col xs="3">
            <Categories categorie={categories}/>
          </Col>
          <Col xs="9">
            <Products products={products}/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
