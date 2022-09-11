import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function newMeetup() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default newMeetup;
