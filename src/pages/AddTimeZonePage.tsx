// route definition
AddTimeZonePage.route = {
  path: "/add",
  index: 2,
};

function AddTimeZonePage() {
  // För validering, hämtar alla tidsoner sen kollar om user input finns med.
  const timeZones = Intl.supportedValuesOf("timeZone");
  console.log(timeZones.includes("Europe/London"));
  return <div>AddTimeZonePage</div>;
}

export default AddTimeZonePage;
