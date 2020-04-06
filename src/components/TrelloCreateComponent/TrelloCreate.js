import React from "react";
import Button from "../ButtonComponent/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../../actions";
import Form from "../FormComponent/Form";
import OpenForm from "../OpenFomComponent/OpenForm";

class TrelloCreate extends React.PureComponent {
  state = {
    formOpen: false,
    text: ""
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
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { name } = this.state;

    if (name) {
      this.setState({
        name: ""
      });
      dispatch(addCard(listID, name));
    }
  };

  render() {
    const { text } = this.state;
    const { list } = this.props;
    return this.state.formOpen ? (
      <Form
        text={text}
        onChange={this.handleInputChange}
        closeForm={this.closeForm}
      >
        <Button onClick={list ? this.handleAddList : this.handleAddCard}>
          {list ? "Add List" : "Add Card"}
        </Button>
      </Form>
    ) : (
      <OpenForm list={list} onClick={this.openForm}>
        {list ? "Add another list" : "Add another card"}
      </OpenForm>
    );
  }
}

export default connect()(TrelloCreate);
