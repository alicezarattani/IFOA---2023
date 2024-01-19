import CustomHeader from "./CustomHeader";
import CustomMain from "./CustomMain";

// eslint-disable-next-line react/prop-types
const Home = ({ page }) => {
  return (
    <div className="Container">
      <h1 className="py-2"> Che tempo fa?</h1>
      <CustomHeader />
      <CustomMain page={page} />
    </div>
  );
};

export default Home;
