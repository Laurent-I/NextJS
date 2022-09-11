import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

function newMeetup() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    // console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add A New Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}
export default newMeetup;
