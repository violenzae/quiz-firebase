import React, { useState } from 'react';
import EditQuizForm from './EditQuizForm';
import MyQuizList from './MyQuizList';
import NewQuizForm from './NewQuizForm';

function CreateQuizControl() {

  // DEFAULT STATE ==================================
  const [myQuizListVisible, setMyQuizListVisible] = useState(true);
  const [newQuizFormVisible, setNewQuizFormVisible] = useState(false);
  const [editQuizFormVisible, setEditQuizFormVisible] = useState(false);
  // ================================================

  const handleNewQuizFormVisible = () => {
    setMyQuizListVisible(!myQuizListVisible);
    setNewQuizFormVisible(!newQuizFormVisible);
  }

  const handleEditingFormVisible = () => {
    setEditQuizFormVisible(!setEditQuizFormVisible);
  }

  let currentlyVisibleComponent;
  let buttonText = "";
  const setVisibility = () => {
    if (editQuizFormVisible) {
      currentlyVisibleComponent = <EditQuizForm onEditingSubmit={handleEditingFormVisible} />
    } else {
      if (newQuizFormVisible) {
        currentlyVisibleComponent =
          <NewQuizForm
            onNewQuizCreation={handleNewQuizFormVisible}
          />;
        buttonText = "Back to My Quizzes";
        // } else if (editQuizFormVisible) {
        // currentlyVisibleComponent = <EditQuizForm />;
        // buttonText = "Back to My Surveys";
      } else {
        currentlyVisibleComponent = <MyQuizList />;
        buttonText = "Create a Quiz";
      }
    }
  }

  setVisibility();

  return (
    <React.Fragment>
      <h4>My Dashboard</h4>
      <button onClick={() => { handleNewQuizFormVisible() }}>{buttonText}</button>
      {currentlyVisibleComponent}
    </React.Fragment>
  );
}

export default CreateQuizControl;