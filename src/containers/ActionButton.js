import React from "react";
import {addList} from "../actions";
import {addCard} from "../actions/cardsActions";
import {connect} from "react-redux";

class ActionButton extends React.Component {
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value()
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if ( text ) {
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { name } = this.state;
    console.log(name);
    if ( name ) {
      this.setState({
        text: ""
      });
      dispatch(addCard(listID, name))
    }
  };

  renderAddButton () {
    const { list } = this.props;
    const text = list ? "Add list" : "Add card";
    const textOpacity = list ? 1 : 0.5;
    const textColor = list ? "#0078d4" : "#FCFDFF";
    const background = list ? "#FCFDFF" : "#0078d4";

    return (
      <button onClick={this.openForm}
              style={{
                opacity: textOpacity,
                color: textColor,
                background: background
              }}>
        {text}
      </button>
    )
  }

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list ? "Enter list title" : "Enter a title for this card...";
    const buttonTitle = list ? "Add list" : "Add card";

    return (
      <form
      onMouseDown={list ? this.handleAddList : this.handleAddCard}>
        <textarea placeholder={placeholder}/>
        <button type="submit">{buttonTitle}{" "}</button>
      </form>
    )
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(ActionButton);
