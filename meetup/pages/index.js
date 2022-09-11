import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "okay.jpg",
    address: "Some address 5, 12345, Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "okay.jpg",
    address: "Some address 5, 12345, Some City",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API endpoint
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 360000,
  };
}

export default HomePage;
