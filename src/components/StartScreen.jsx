function StartScreen({ numberQuestion, dispatch }) {
  return (
    <div className="start">
      <h2>Welcom to the React Quix</h2>
      <p>{numberQuestion} question to test your React mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start
      </button>
    </div>
  );
}

export default StartScreen;
