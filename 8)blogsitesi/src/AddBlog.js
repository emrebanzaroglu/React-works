import React, { Component } from 'react'

export default class AddBlog extends Component {
    state = {
        categoryId:"",
        title:"",
        desc:"",
        image:"",
        blogs : [],
        file: null,
        fileName: ""
    }

    getBlogs = () => {
      fetch("http://localhost:3000/blogs")
        .then((response) => response.json())
        .then((data) => this.setState({ blogs: data }));
    };
    componentDidMount() {
      this.getBlogs();
    }

    handleInputChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleFileChange = (event) => {
      const file = event.target.files[0];
      var fileName = file.name;
      this.setState({ file, fileName });

      const sourceFilePath = file.path;
      const destinationFilePath = `public/images/${fileName}`;
      
      // console.log(sourceFilePath)
      // console.log(destinationFilePath)

      // (async () => {
      //   await moveFile(sourceFilePath, destinationFilePath);
      //   console.log('The file has been moved');
      // })();
    };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { categoryId, title, image, desc, blogs, file, fileName } = this.state;

        // Blogun son id'sini bulma
        const lastBlogId = blogs.length > 0 ? blogs[blogs.length - 1].id : 0;

        
   
       // Yeni blog verisini oluşturma
        const newBlog = {
          id: lastBlogId + 1,
          categoryId: categoryId,
          title: title,
          image: fileName,
          desc: desc
        };

    // Yeni blog verisini API'ye gönderme
    fetch("http://localhost:3000/blogs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Server response was not OK');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        // Hata oluştuysa kullanıcıya hata mesajı gösterebilirsiniz.
      });

    // Blog bilgilerini sıfırla
    this.setState({
      title: '',
      desc: '',
      image: '',
      categoryId: '',
      file: null,
      fileName: ''
    });
  };


  render() {
    const {categories} = this.props
    const { title, desc, image, categoryId } = this.state;
    const { fileName } = this.state;

    return (
    <div>
        <h2>Add New Blog</h2>
        <form onSubmit={this.handleSubmit}>
            
          <div className='mb-3'>
            <label className="form-label">Category: </label>
            <select
                className='form-control'
                name='categoryId'
                value={categoryId}
                onChange={this.handleInputChange}
            >
                {categories.map((category)=>(
                    <option key={category.id} value={category.id}>{category.categoryName}</option>
                ))}
            </select>
          </div>

          <div className='mb-3'>
            <label className="form-label">Title: </label>
            <input
                className='form-control'
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={this.handleInputChange}
            />
          </div>
          
          <div className='mb-3'>
            <label className="form-label">Description: </label>
            <input
                className='form-control'
                type="text"
                name="desc"
                placeholder="desc"
                value={desc}
                onChange={this.handleInputChange}
            />
          </div>
          
          <div className='mb-3'>
            <label className="form-label">Image</label>
            <input
                className='form-control'
                type="file"
                name="image"
                value={image}
                onChange={this.handleFileChange}
            />
            {fileName && <p>Selected File: {fileName}</p>}
          </div>
          <button type="submit" className='btn btn-success'>Add Blog</button>
        </form>
    </div>
    )
  }
}