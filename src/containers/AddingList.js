import React from "react";
import {addList} from "../store/actions/rootActions";
import {connect} from "react-redux";

class AddingList extends React.Component {
  input;

  submit() {
    console.log("work");
    if (!this.input.value.trim()) {return}
    this.props.dispatch(addList(this.input.value));
    this.input.value = ''
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.submit();
      }}>
        <input type="text" ref={node => this.input = node}/>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default connect()(AddingList);
