import {Link} from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav>
      <div className='flex flex-wrap justify-between mt-4 gap-4 max-h-32 w-full'>
        <div className='flex'>
         <Link to={'/'}><img className='size-16 ml-4 rounded-full' src="/img/1702596152143.jpeg" alt="" /></Link> 
          <h3 className='mt-5 ml-4'><Link to={'/'}><strong className='text-xl'>Gonzalo</strong> .dev</Link></h3> 
        </div>
          <h3 className='mr-8 mt-5'><strong className='text-md'><Link to={'/skills'}>Skills</Link> </strong></h3>
      </div>   
    </nav>
  )
}
