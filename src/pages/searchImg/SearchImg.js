import React from 'react';
import Nav from '../../components/nav/Nav';
import Search from '../../components/search/Search';
import Image from '../../components/images/Image';
import { useFetchImages } from '../../hooks/useFetchImages';
import Loading from '../../components/loading/Loading';
import { useParams } from 'react-router-dom';

function SearchImg(props) {
    const param = useParams()
    const [images] = useFetchImages(`https://api.unsplash.com/search/photos/?query=${param.searchImg}&client_id=AnRwbwdVO6dGeFiIJsZTQrb5cpW_C9tvX3K3jNk7qjM`)
    return (
        <div className='container'>
            <h1 className='container-title'>SnapShot</h1>
            <div className="container-items">
                <Search/>
                <Nav />

                <h2 className='search-title'>{ param.searchImg } Images</h2>

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

export default SearchImg;