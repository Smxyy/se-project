import { useParams } from "react-router-dom";
import DocumentaryPage from "./category/DocumentaryPage";
import FantasyPage from "./category/FantasyPage";
import FictionPage from "./category/FictionPage";
import KidPage from "./category/KidPage";
import MysteryPage from "./category/MysteryPage";
import RomancePage from "./category/RomancePage";
import TextbookPage from "./category/TextbookPage";
import ThrillerPage from "./category/ThrillerPage";
import TopSeller from "./recommend/TopSeller";
import FeaturedSeller from "./recommend/FeaturedSeller";
import EditorPick from "./recommend/EditorPick";

export default function Category() {
  const { categories } = useParams();
  console.log("categories: ", categories);
  const renderMeun = () => {
    switch (categories) {
      case "top-seller":
        return <TopSeller/>;
      case "featured-seller":
        return <FeaturedSeller/>;
      case "editor-pick":
        return <EditorPick/>;
      case "kid":
        return <KidPage />;
      case "romance":
        return <RomancePage />;
      case "documentary":
        return <DocumentaryPage />;
      case "fantasy":
        return <FantasyPage />;
      case "mystery":
        return <MysteryPage />;
      case "textbook":
        return <TextbookPage />;
      case "thriller":
        return <ThrillerPage />;
      case "fiction":
        return <FictionPage />;
      default:
        return null;
    }
  };
  return (
    <div>
        {renderMeun()}
    </div>
  );
}