import errorImg from '../assets/404 page/error img .png'

const ErrorPage = () => {
    return (
        <div
         className='container h-full bg-cover'
        //  style={{ backgroundImage: `url(${errorImg})` }}
         >
            <div className='w-full h-screen '>
<img src={errorImg} alt="" className='h-screen w-full'/>
            </div>
            
        </div>
    );
};

export default ErrorPage;