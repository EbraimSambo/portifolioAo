import PageContainer from "@/components/containers/PageContainer";
import BasicWeb from "@/components/techs/BasicWeb";
import Frameworks from "@/components/techs/Frameworks";
import Languages from "@/components/techs/Languages";
import Libs from "@/components/techs/Libs";
import Platforms from "@/components/techs/Platforms";

export default function TechsPage(){
    return (
        <PageContainer margin="top" >
            <BasicWeb />
            <Languages />
            <Frameworks />
            <Platforms />
            <Libs />
      </PageContainer>
    )
}