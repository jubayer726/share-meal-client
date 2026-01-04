import Logo from '../assets/logo2.png';

 const Loading=()=>{
    return(
        <section className='min-h-[70vh] flex justify-center items-center'>
            <img src={Logo} alt='Share Meal logo' className='w-40 md:w-40 animate-ping' />
        </section>
    );
}
export default Loading;
