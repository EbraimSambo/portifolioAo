import PageContainer from '@/components/containers/PageContainer'
import BannerFlats from '@/components/flats/BannerFlats'
import Flats from '@/components/flats/Flats'
import React from 'react'

const page = () => {
    return (
        <PageContainer>
            <BannerFlats />
            <Flats />
        </PageContainer>
    )
}

export default page