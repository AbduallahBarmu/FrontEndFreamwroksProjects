import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //     console.log('click')
  // }

  return (
    <header>
      <h1> {title} </h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Todo list app",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
