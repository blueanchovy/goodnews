import Header from "../components/Header";
import TextContainer from "../components/TextContainer";
import PhoneContainer from "../components/PhoneContainer";
import CategoryContainer from "../components/CategoryContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <TextContainer />
        <PhoneContainer />
        <CategoryContainer />
      </main>
      
    </div>
  );
}
