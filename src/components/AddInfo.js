import React from "react";

class AddInfo extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
  };
  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email.name === "" ||
      this.state.number === ""
    ) {
      alert("All fields required");
    }
    this.props.addInfoHandler(this.state);
    this.setState({ name: "", email: "", number: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Personal Information</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="number"
              placeholder="123-456-6789"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddInfo;
