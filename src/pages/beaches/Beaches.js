import Nav from '../../components/nav/Nav';
import Search from '../../components/search/Search';
import Image from '../../components/images/Image';
import { useFetchImages } from '../../hooks/useFetchImages';
import Loading from '../../components/loading/Loading';

function Beaches(props) {
    
    const location = window.location.pathname
    const imageTitle = location.slice(1)
    const [images] = useFetchImages(`https://api.unsplash.com/search/photos/?query=${imageTitle}&client_id=AnRwbwdVO6dGeFiIJsZTQrb5cpW_C9tvX3K3jNk7qjM`);

    

    return (
        <div className='container'>
            <h1 className='container-title'>SnapShot</h1>
            <div className="container-items">
                <Search  />
                <Nav />

                <h2 className='search-title'> { imageTitle } Images</h2>

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

export default Beaches;