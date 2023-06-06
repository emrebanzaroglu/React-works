import React, { Component } from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap';

export default class Categories extends Component {
        state = {
          categoryName: '',
          categories: []
        };

      

      getCategories = () => {
        fetch("http://localhost:3000/categories")
          .then((response) => response.json())
          .then((data) => this.setState({ categories: data }));
      };
      componentDidMount() {
        this.getCategories();
      }
      handleInputChange = (e) => {
        this.setState({ categoryName: e.target.value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { categoryName, categories } = this.state;
    
        // Kategorinin son id'sini bulma
        const lastCategoryId = categories.length > 0 ? categories[categories.length - 1].id : 0;
    
        // Yeni kategori verisini oluşturma
        const newCategory = {
          id: lastCategoryId + 1,
          categoryName: categoryName
        };

        // Yeni kategori verisini API'ye gönderme
    fetch("http://localhost:3000/categories", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.getCategories();
        })
        
  
      // Kategori adını sıfırla
      this.setState({ categoryName: '' });
    };


  render() {
    const { categoryName } = this.state;
    return (
        <div>
            <ListGroup>
            {this.state.categories.map((category)=>(
                <ListGroupItem
                    active = {category.categoryName=== this.props.currentCategory ? true : false}
                    onClick={() => this.props.changeCategory(category)} key={category.id}>{category.categoryName}
                </ListGroupItem>
            ))}
            </ListGroup>
            <div className='mt-5'>
                <h3>Yeni Kategori Ekle</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Kategori Adı"
                        value={categoryName}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Add Category</button>
                </form>
            </div>
        </div>
    )
  }
}
