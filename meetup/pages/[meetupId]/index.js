import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="okay.jpg"
      title="First Meetup Details"
      address="Some Street 5, New York, NY, USA"
      description="This is the first Meetup Detail"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data from an API endpoint

  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: "okay.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, New York, NY, USA",
        description: "This is the first Meetup Detail",
      },
    },
  };
}

export default MeetupDetails;
