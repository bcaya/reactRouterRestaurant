import React from 'react'; 

class Form extends React.Component {
  defaultValues = {name: '', price: '', description: '', department: ''}
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
    this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let menu = {...this.state }
    this.props.submit(menu)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  render() {
    let {name, price, description } = this.state; 
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required 
        />
        <input id="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <input id="price"
          placeholder="Prices :D "
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <button className="button-basics-example">SUbmit</button>
      </form>
    )
  }
}

export default Form; 