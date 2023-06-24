const Button = ({ incrementPageNumber }) => {
  return (
    <div className="buttonContainer">
      <button className="Button" type="button" onClick={incrementPageNumber}>
        Load more
      </button>
    </div>
  );
};

export default Button;
