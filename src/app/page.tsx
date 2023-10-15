import React from 'react'
import Link from 'next/link'
export default function Home() {

  return (
    <div>
      <div className='bg-primary-100 relative'>
        <nav className='p-7 md:flex md:items-center md:justify-between md:ml-20 md:mr-20'>
          <div className='flex justify-between items-center'>
            <span className='text-2xl cursor-pointer font-bold hover:opacity-80 '>
              E-<span className='text-primary-500'>Sheba</span>
            </span>
            
            <span className='text-3xl cursor-pointer md:hidden block'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" name='menu'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>

            </span>
          </div>
          <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-primary-100 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top[-400px] transition-all ease-in duration-500' id='menu'>
            <li className='mx-3 my-6 md:my-0 hover:border-b-2 border-primary-500'>
              <Link href={'#'} className='text-sm hover:text-primary-500 duration-100'>Home</Link>
            </li>
            <li className='mx-3 my-6 md:my-0 hover:border-b-2 border-primary-500'>
              <Link href={'#'} className='text-sm hover:text-primary-500 duration-100'>About</Link>
            </li>
            <li className='mx-3 my-6 md:my-0 hover:border-b-2 border-primary-500'>
              <Link href={'#'} className='text-sm hover:text-primary-500 duration-100'>Application</Link>
            </li>
            <li className='mx-3 my-6 md:my-0 lg:mr-32 hover:border-b-2 border-primary-500'>
              <Link href={'#'} className='text-sm hover:text-primary-500 duration-100'>History</Link>
            </li>
            <button className='text-primary-500 text-xs md:text-sm mx-2 px-4 py-2 bg-primary-100 border border-primary-500 rounded-full hover:text-white hover:bg-primary-500 lg:ml-40'>Log In</button>
            <button className='text-primary-500 text-xs md:text-sm px-4 mx-2 my-2 py-2 border border-primary-500 rounded-full hover:text-white hover:bg-primary-500'>Sign Up</button>
          </ul>
        </nav>
          <section className='p-7 md:ml-20 md:mr-20'>
          <div className='z-0 bg-primary-300 absolute rounded-t-full opacity-0 md:opacity-100 bottom-0 right-0 md:w-1/3 md:h-2/4 lg:w-1/2 lg:h-2/3 '>
            </div>
            <header className=' text-4xl md:text-6xl pt-16 font-bold text-center md:text-left '>Find & Search Your <span className='text-primary-500 hover:opacity-80'> <br />Favorite </span>Doctor</header>
            <p className=' text-xs text-black mt-3 mb-3 font-light text-center md:text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae dolorum saepe voluptatum eveniet exce</p>

            <div className='rounded-full bg-white py-1 px-1 flex justify-between items-center md:items-start md:w-1/2 my-20'>
              <div className='flex justify-center items-center px-1 py-1 md:mt-2 cursor-pointer hover:opacity-80'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className='text-xs mx-1'>Doctor's Name</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div className='flex justify-center items-center px-1 py-1 md:mt-2 cursor-pointer hover:opacity-80'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className='text-xs mx-1'>Location</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div className='bg-primary-500 rounded-full h-10 w-10 cursor-pointer hover:opacity-80'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 font-bold px-1 py-1 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

              </div>
            </div>
          </section>
            <section>
              <div className='bg-primary-500 relative flex md:justify-start justify-center items-center '>
                <div className='p-7 md:ml-20 lg:mr-14'>
                  <h2 className='text-4xl font-bold text-white'>24/7</h2>
                  <h5 className='text-bayi md:text-xs  text-white text-center'>Online Support</h5>
                </div>
                <div className='lg:mr-14 lg:ml-14'>
                  <h2 className='text-4xl font-bold text-white'>140+</h2>
                  <h5 className='text-bayi md:text-xs text-white text-center'>Doctors</h5>
                </div>
                <div className='p-7 lg:ml-14 lg:mr-20'>
                  <h2 className='text-4xl font-bold text-white'>1M+</h2>
                  <h5 className='text-bayi md:text-xs text-white text-center'>Active Patients</h5>
                </div>
                <img src="img/dokt1.png" alt="Doctor" className='hidden md:flex absolute right-0 bottom-0 w-2/5 '/>
              </div>
            </section>
      </div>
      <div>
        <section className='py-7 md:ml-24 md:mr-24'>
          <div className='md:mr-2 md:m-2'>
            <h2 className='text-center font-bold text-2xl lg:text-4xl md:text-start md:mt-10'>Our Consulting Specialists</h2>
          </div>
          <div className=' grid grid-cols-1 md:gap-x-10 place-items-center smd:grid-cols-2 sxl:grid-cols-4 '>
              <div className='border border-black hover:border-primary-500 h-72 w-72 sxl:h-64 sxl:w-64 rounded-lg my-5 grid grid-cols-1 place-items-center md:place-items-start  hover:bg-primary-500 hover:text-white'>
                <div className='rounded-full bg-primary-100 h-16 w-16  my-3 md:ml-3 '>
                  <img src="img/Vector.png" alt="vektor" className='py-3 px-3' />
                </div>
                <div className='mb-4 ml-3 mr-3 '>
                  <h4 className='text-lg font-bold text-center mb-2 md:text-start'>Covid-19 Test</h4>
                  <h5 className='text-xs text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam doloremque optio! Similique quia, eaque doloribus eos aliquam consequatur. Officiis?.</h5>
                </div>
              </div>
              <div className='border border-black hover:border-primary-500 h-72 w-72 sxl:h-64 sxl:w-64 rounded-lg my-5 grid grid-cols-1 place-items-center md:place-items-start hover:bg-primary-500 hover:text-white'>
                <div className='rounded-full bg-primary-100 h-16 w-16  my-3 md:ml-3 '>
                  <img src="img/lungs.png" alt="vektor" className='py-3 px-3' />
                </div>
                <div className='mb-4 ml-3 mr-3'>
                  <h4 className='text-lg font-bold text-center mb-2 md:text-start '>Heart Lungs</h4>
                  <h5 className='text-xs text-center md:text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam doloremque optio! Similique quia, eaque doloribus eos aliquam consequatur. Officiis?.</h5>
                </div>
              </div>
              <div className='border border-black hover:border-primary-500 h-72 w-72 sxl:h-64 sxl:w-64 rounded-lg my-5 grid grid-cols-1 place-items-center md:place-items-start hover:bg-primary-500 hover:text-white'>
                <div className='rounded-full bg-primary-100 h-16 w-16  my-3 md:ml-3 '>
                  <img src="img/suppliment.png" alt="vektor" className='py-3 px-3' />
                </div>
                <div className='mb-4 ml-3 mr-3'>
                  <h4 className='text-lg font-bold text-center mb-2 md:text-start '>Suppliment</h4>
                  <h5 className='text-xs text-center md:text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam doloremque optio! Similique quia, eaque doloribus eos aliquam consequatur. Officiis?.</h5>
                </div>
              </div>
              <div className='border border-black hover:border-primary-500 h-72 w-72 sxl:h-64 sxl:w-64 rounded-lg my-5 grid grid-cols-1 place-items-center md:place-items-start hover:bg-primary-500 hover:text-white'>
                <div className='rounded-full bg-primary-100 h-16 w-16  my-3 md:ml-3 '>
                  <img src="img/mental.png" alt="vektor" className='py-3 px-3' />
                </div>
                <div className='mb-4 ml-3 mr-3'>
                  <h4 className='text-lg font-bold text-center mb-2 md:text-start'>Mental-health</h4>
                  <h5 className='text-xs text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam doloremque optio! Similique quia, eaque doloribus eos aliquam consequatur. Officiis?.</h5>
                </div>
              </div>
          </div>
        </section>
        <section className='py-7 lg:ml-24 lg:mr-24'>
          <div className='smd:mr-2 smd:m-2 mt-12'>
            <div className='grid grid-cols-1 place-items-center smd:grid-cols-2 smd:place-image-start'>
              <h2 className='smd:hidden text-center font-bold text-2xl lg:text-4xl '>Why You Choose Us?</h2>
                <div className='grid grid-cols-1 mt-10 smd:mt-1  w-72 place-items-center smd:h-48 lg:w-11/12  lg:place-content-start lg:h-auto'>
                  <img src="img/bedah.png" alt="bedah" className='lg:mr-20'/>
                </div>
                <div className='lg:mr-32 lg:mb-12'>
                <h2 className='hidden smd:flex text-center lg:text-start font-bold text-2xl lg:text-4xl lg:mb-10 '>Why You Choose Us?</h2>
                <div className='mt-12 smd:mt-4 flex justify-center '>
                  <span className='mr-2'>
                    <img src="img/centang.png" alt="centang" /> 
                  </span>
                  <h5 className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing</h5>
                </div>
                <div className='mt-2 flex justify-center'>
                  <span className='mr-2'>
                    <img src="img/centang.png" alt="centang" />
                  </span>
                  <h5 className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing</h5>
                </div>
                <div className='mt-2 flex justify-center'>
                  <span className='mr-2'>
                    <img src="img/centang.png" alt="centang" />
                  </span>
                  <h5 className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing</h5>
                </div>
                <div className='mt-2 flex justify-center'>
                  <span className='mr-2'>
                    <img src="img/centang.png" alt="centang" />
                  </span>
                  <h5 className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing</h5>
                </div>
                <div className='mt-2 flex justify-center'>
                  <span className='mr-2'>
                    <img src="img/centang.png" alt="centang" />
                  </span>
                  <h5 className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing</h5>
                </div>
                <div className='lg:mt-6 mt-2 flex hover:opacity-80'>
                  <h4 className='text-xs text-primary-500 lg:ml-5 '><Link href={'#'}>Learn More</Link></h4>
                  <img src="img/arrowrg.png" className='ml-2 h-2 w-4 mt-1' alt="" />
                </div>
                </div>
            </div>
          </div>
        </section>
        <div className='bg-primary-100'>
        <section className='py-7 md:ml-24 md:mr-24'>
            <div className='md:mr-2 md:ml-2 grid grid-cols-1 place-items-center md:grid-cols-2 lg:gap-64'>
              <div className='lg:mr-5'>
                <div className='mr-7 ml-7 '>
                  <h2 className='text-2xl font-bold text-center mt-5 mb-4 lg:text-4xl md:text-start'>Whats <span className='text-primary-500 hover:opacity-80'>Our Member's</span> Saying About US</h2>
                  <h4 className='text-xs text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.</h4>
                </div>
                <div className='flex justify-center items-center mt-5 mb-5 md:items-start'>
                  <img src="img/p1.png" alt="profile" className='w-8 h-8 z-0 ml-[-10px]'/>
                  <img src="img/p2.png" alt="profile" className='w-8 h-8 z-0 ml-[-10px]'/>
                  <img src="img/p3.png" alt="profile" className='w-8 h-8 z-0 ml-[-10px]'/>
                  <img src="img/p4.png" alt="profile" className='w-8 h-8 z-0 ml-[-10px]'/>
                  <img src="img/p5.png" alt="profile" className='w-8 h-8 z-0 ml-[-10px]'/>
                  <img src="img/p6.png" alt="profile" className='w-8 h-8 z-0 ml-[-10px]'/>
                  <Link href={'#'} className='text-sm ml-3 hover:opacity-80'>100+ Reviews</Link>
                </div>
              </div>
              <div className='bg-white rounded-lg w-80 h-48 lg:w-96'>
                <div className='flex justify-center py-2 px-5 mt-8'>
                  <div className='flex justify-start mr-10'>
                    <div>
                      <img src="img/p4.png" alt="profile" className='w-8 h-8' />
                    </div>
                    <div className='ml-2 '>
                      <h4 className='text-xs'>Jane Cooper</h4>
                      <h5 className='text-bayi'>12/4/17</h5>
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <img src="img/star.png" alt="star" className='w-5 h-5'/>
                    <img src="img/star.png" alt="star" className='w-5 h-5'/>
                    <img src="img/star.png" alt="star" className='w-5 h-5'/>
                    <img src="img/star.png" alt="star" className='w-5 h-5'/>
                    <img src="img/star.png" alt="star" className='w-5 h-5'/>
                  </div>
                </div>
                <div className='py-2 px-5 mb-8'>
                  <p className='text-xs text-left py-4 px-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt autem praesentium laborum dolorem, voluptatem non repudiandae nulla,
                  </p>
                </div>
              </div>
            </div>
        </section>
        </div>
        <section>
          <div className='bg-white mb-12'>
            <div className='py-7 md:ml-24 md:mr-24'>
              <div className='md:mr-2 md:ml-2 grid grid-cols-1 smd:grid-cols-2'>
                <div className='smd:mt-10'>
                  <h2 className=' text-2xl font-bold text-center smd:text-start py-4 mb-5 smd:mb-0 px-9 lg:text-4xl '>The Future of <span className='text-primary-500'>Quality Health</span></h2>
                  <div className='smd:hidden px-9 py-4 flex justify-center'>
                    <img src="img/ftla.png" alt="pasien" className='mb-5 w-72'/>
                  </div>  
                  <div className=''>
                    <p className='text-xs text-justify smd:text-start py-1 smd:py-0 lg:py-5 px-24 smd:px-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perspiciatis minus necessitatibus, nesciunt deleniti eos in natus. Non consectetur ratione, veniam impedit ea quos quibusdam voluptas quae soluta hic eius!</p>
                    <p className='text-xs text-justify smd:text-start py-1 smd:py-0 lg:py-5 px-24 smd:px-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perspiciatis minus necessitatibus, nesciunt deleniti eos in natus. Non consectetur ratione, veniam impedit ea quos quibusdam voluptas quae soluta hic eius!</p>
                    <p className='text-xs text-justify smd:text-start py-1 smd:py-0 lg:py-5 px-24 smd:px-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perspiciatis minus necessitatibus, nesciunt deleniti eos in natus. </p>
                    <div className='lg:mt-1 mt-2 flex hover:opacity-80  py-1 smd:py-0 lg:py-0 px-24 smd:px-9'>
                      <h4 className='text-xs text-primary-500 lg:ml-5 text-center '><Link href={'#'}>Learn More</Link></h4>
                      <img src="img/arrowrg.png" className='ml-2 h-2 w-4 mt-1 text-center' alt="" />
                    </div>
                  </div>
                </div>
                <div className='hidden smd:flex mt-10 place-items-center smd:w-11/12  smd:place-content-start smd:h-auto' >
                    <img src="img/ftla.png" alt="pasien" className='mb-5'/>
                  </div>
              </div>
            </div>
            <div className='bg-primary-500 py-7 md:ml-24 md:mr-24 ml-10 mr-10 grid grid-cols-1 place-items-center rounded-xl'>
              <h3 className='text-lg font-bold text-white text-center lg:text-3xl'>Subscribe To Our Newsletter</h3>
              <div className='rounded-full h-16 w-11/12  bg-white mt-5 grid grid-cols-1 place-items-end px-3 py-3'>
                <div className='bg-primary-500 rounded-full w-10 h-10 cursor-pointer mb-1 hover:opacity-80'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white mt-1 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <footer className='bg-primary-500'>
            <div className='grid smd:grid-cols-3'>
              <div className='md:ml-24 md:mr-24 ml-10 mr-10'>
                <h3 className='text-sm mt-6 text-white font-bold text-start mb-3'>E-Sheba</h3>
                <p className='text-xs text-white text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem animi fugiat quia rem deleniti beatae aspernatur laborum! Qui, vel libero.</p>
                <p className='text-xs text-white text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, iure?</p>
              </div>
              <div className='md:ml-24 md:mr-24 ml-10 mr-10'>
                <h3 className='text-sm mt-6 text-white font-bold text-start mb-3'>Usefull Links</h3>
                <ul>
                  <li className='text-xs text-white text-start'><Link className='hover:text-primary-300' href={'#'}>About Us</Link></li>
                  <li className='text-xs text-white text-start'><Link className='hover:text-primary-300' href={'#'}>Prifacy Policy</Link></li>
                  <li className='text-xs text-white text-start'><Link className='hover:text-primary-300' href={'#'}>Our Mission</Link></li>
                  <li className='text-xs text-white text-start'><Link className='hover:text-primary-300' href={'#'}>Our Team</Link></li>
                </ul>
              </div>
              <div className='grid grid-cols-1 place-items-start md:ml-24 md:mr-24 ml-10 mr-10  '>
                <h3 className='text-sm mt-6 text-white font-bold text-start mb-3'>Address</h3>
                <img src="img/map.png" alt="map" className='w-64 mb-6 cursor-pointer'/>
              </div>
            </div>
            <div className='md:mr-24 md:ml-24 ml-10 mr-10 border-t border-primary-300 mt-5'>
              <h3 className='text-xs py-4 cursor-pointer hover:opacity-80 text-white text-center '>&#169; 2023 All Right Reserved</h3>
            </div>
          </footer>
        </section>
      </div>
      
    </div>

  )
};