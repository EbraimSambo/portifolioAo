import PageContainer from "@/components/containers/PageContainer";
import PartialBlue from "@/components/containers/PartialBlue";
import BannerHome from "@/components/home/BannerHome";
import InfoHome from "@/components/home/InfoHome";
import Services from "@/components/home/Services";
import Techs from "@/components/home/Techs";

export default function Home() {
  return (
    <PageContainer>
      <BannerHome />
      <Services />
      <PartialBlue>
        <Techs />
        <InfoHome />
      </PartialBlue>
    </PageContainer>
  );
}
