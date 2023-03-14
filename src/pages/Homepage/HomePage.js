import React, { useState } from 'react';
import Image from '../../components/images/Image';
import Loading from '../../components/loading/Loading';
import Nav from '../../components/nav/Nav';
import Search from '../../components/search/Search';
import { useFetchImages } from '../../hooks/useFetchImages';

function HomePage(props) {
    const [images] = useFetchImages(`https://api.unsplash.com/search/photos/?query=images&client_id=AnRwbwdVO6dGeFiIJsZTQrb5cpW_C9tvX3K3jNk7qjM`);
    

    return (
        <div className='container'>
            <h1 className='container-title'>SnapShot</h1>
            <div className="container-items">
                <Search/>
                <Nav />

                <h2 className='search-title'>Home Images</h2>

                <div className="container-img">
                    {
                        images.length ? images.map((image) => 
                        <Image key={image.id} image={image.urls.small} >
    
                        </Image>
                       ) : <Loading />
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;