import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "file:///C:/Users/Pc/Pictures/Saved%20Pictures/okay.jpg",
    address: "Some address 5, 12345, Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "file:///C:/Users/Pc/Pictures/Saved%20Pictures/okay.jpg",
    address: "Some address 5, 12345, Some City",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
