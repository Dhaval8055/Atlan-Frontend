import ai from "../images/AI1.png";
import PropTypes from 'prop-types';

function Home(props){

  const styles = {
    container: {
      position: "relative",
      height: "100vh",
      overflow: "hidden",
      margin: 0,
      padding: 0,
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
    },
    textContainer: {
      position: "absolute",
      top: "50%",
      left: "20%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "white",
      zIndex: 1,
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "10px",
      marginLeft:"15%",
    },
    description: {
      marginLeft:"30%",
      textAlign:"left",
      fontSize: "1rem",
      maxWidth: "600px",
    },
    name: {
      marginLeft: "15%",
    },
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <img src={ai} alt="AI Explorer" style={styles.image} />
      <div style={styles.textContainer}>
      {props.name ? (
        <>
          <h2 style={styles.name}>Welcome {props.name}!</h2>
        </>
      ) : (
        <h2></h2>
      )}
        <h1 style={styles.heading}>The AI Explorer</h1>
        <p style={styles.description}>
          Welcome to The AI Explorer, your gateway to the fascinating world of
          artificial intelligence. Explore the latest advancements, discover
          innovative AI models, and stay updated on the cutting-edge
          technologies shaping the future.
        </p>
      </div>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string,
};
export default Home;