const CurrentInfo = () => {
  const today = new Date(),
    day = today.getDay(),
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // TEST
  //   const todayDay = 5;
  //   const todayTime = 17;

  return (
    <div>
      {/* TEST */}
      {/* <p>
        <b>Day:</b> {day} - <b>Time:</b> {time}
      </p> */}
      {/* <p>
        We are:{" "}
        {todayTime >= 8 && todayTime < 17 && todayDay <= 5 ? (
          <b style={{ color: "rgb(0, 255, 149)" }}>OPEN</b>
        ) : (
          <b style={{ color: "tomato" }}>CLOSED</b>
        )}
      </p> */}
      <p>
        We are:{" "}
        {time >= 8 && time < 17 && day <= 5 ? (
          <b style={{ color: "rgb(0, 255, 149)" }}>OPEN</b>
        ) : (
          <b style={{ color: "tomato" }}>CLOSED</b>
        )}
      </p>
      <p>
        Opening times: <b>Monday - Friday</b> from <b>8.00 am - 17.00 pm</b>
      </p>
      <p>
        To make an appointment, call: <b>020 555 5555</b>
      </p>
    </div>
  );
};

export { CurrentInfo };
