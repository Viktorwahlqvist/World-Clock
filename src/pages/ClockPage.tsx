import Clock from "../components/Clock";

ClockPage.route = {
  path: "/clock",
  index: 3,
};

function ClockPage() {
  return (
    <>
      <Clock />
    </>
  );
}

export default ClockPage;
