import PageContainer from "@/components/containers/PageContainer";
import PartialBlue from "@/components/containers/PartialBlue";
import BannerHome from "@/components/home/BannerHome";
import InfoHome from "@/components/home/InfoHome";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <PageContainer>
      <BannerHome />
      <Services />
      <PartialBlue>
        <InfoHome />
      </PartialBlue>
    </PageContainer>
  );
}
