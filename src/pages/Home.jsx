//import { backgroundImage } from '../src/components/UI/backgroundImage';

const styles = {
  homepage: {
    backgroundImage: ("../src/assets/homepageBackground.jpg"),
    backgroundColor: '#FF5733',
  }
};

export default function Home() {
  return (
    <div className="homepage" style={styles.homepage} >
    <h1 className=" mt-5 text-center " >Nicholas Canchola</h1>
          <img src="../src/assets/homepageBackground.jpg" className=" img-fluid" alt="Homepage Background" />
</div>
  );
}
