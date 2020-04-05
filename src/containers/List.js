import React from 'react'
import { connect } from 'react-redux'
import AddingList from "./AddingList";

const mapStateList = state => ({
  list
});

const Lists = () => {
  return (
    <main className="columns">
      {/*{list}*/}

      <AddingList/>
    </main>
  )
};

export default connect()(Lists)
