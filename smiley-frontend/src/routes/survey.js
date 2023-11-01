function Survey() {
  // Survey form code goes here

  return (
    <div className="survey-container">
      <h2>How are you feeling?</h2>
      {/* Survey form content */}
	  {/* example from w3schools*/}
	  <form>
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" />
  </form>
    <h4>hello</h4>
    </div>
  );
}

export default Survey;
