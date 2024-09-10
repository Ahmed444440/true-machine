'use client'
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import { navbar } from '../../../data'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavBar = () => {

    const path = usePathname()

    const newpath = path.startsWith('/') ? path.slice(1) : path
    console.log(newpath)
    // const { t, i18n } = useTranslation()
    const [activeIndex, setActiveIndex] = useState(null);
  
    const [activeLink, setActiveLink] = useState(1)
  
    const handleLink = (id) => {
      setActiveLink(id)
    }
  
    const handleMouseEnter = (id) => {
      setActiveIndex(id);
    };
  
    const handleMouseLeave = () => {
      setActiveIndex(null);
    };
  
    const [toggle, setToggle] = useState(false)
    const [showmenuIcon, setshowmenuIcon] = useState(false)
    const [isFixed, setIsFixed] = useState(false);
    const [data, setData] = useState('')
    const [slug, setSlug] = useState('')
    const sidebarRef = useRef(null);
  
  
    const handleClickOutside = (event) => {
      // If the sidebar is open and the click is outside of it, close the sidebar
      if (toggle && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
  
    const handleFixed = () => {
  
      const handleScroll = () => {
        if (window.scrollY >= 100) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  
    const generateLink = (basePath, title) => {
      return `${basePath}/${encodeURIComponent(title)}`;
    };
  
    useEffect(() => {
  
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
  
      handleFixed()
  
  
      const handleSize = () => {
        if (window.innerWidth <= 1024) {
          setToggle(false)
          setshowmenuIcon(true)
        } else {
          setshowmenuIcon(false)
  
        }
      }
  
  
      handleSize()
      window.addEventListener('resize', handleSize)
      return () => {
        window.removeEventListener('resize', handleSize)
      }
  
    }, [])
  
  
    // useEffect(() => {
    //   const fetchDataFromAPI = async () => {
    //     try {
    //       const result = await fetchData(`api/settings`, i18n.language);
    //       setData(result?.data);
    //       // console.log('result::', result?.data)
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //       // setError(error);
    //     }
    //   };
  
    //   fetchDataFromAPI();
    // }, [])
  
  
    // useEffect(() => {
    //   const fetchDataService = async () => {
    //     try {
    //       const response = await fetchData(`api/services`, i18n.language)
    //       // console.log(response?.data)
    //       setSlug(response?.data)
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
  
  
    //   }
  
    //   fetchDataService()
    // }, [])
  
    useEffect(() => {
      // Add the event listener for clicks
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Remove the event listener when the component is unmounted
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [toggle]);
  
  
  return (
    <section className={`px-5 lg:px-16 z-10  top-0 left-0 right-0 bottom-0 bg-white py-4  ${isFixed && ' fixed top-0 left-0 h-16  '}`}>

    <div>
      {
        showmenuIcon === true ?
          (
            <div className='flex  justify-between items-center '>
              
                  <Link href={'/'}>
                    <img width={100} height={'auto'} src={'/assets/logo.png'} alt='Logo' />
                  </Link>
                
              


              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill='black' onClick={() => setToggle(!toggle)} width={25} height={25} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>

              </div>

            </div>
          ) : (
            <div className={`flex items-center   gap-20 `}>
              
              
                  <Link href={'/'}>
                    <img width={150} height={'auto'}  src={'/assets/logo.png'} alt='Logo' />
                  </Link>
                
              




              <div>
                <div className='flex   gap-6 relative'>
                  {navbar.map((nav, index) => (
                    <div key={nav.id} className='' onMouseEnter={() => handleMouseEnter(nav.id)} onClick={() => handleLink(nav.id)} >
                      <ul key={index} className=' flex items-center  '>
                        <li className='  text-sm font-semibold text-slate-900  relative  hover:bg-slate-300 py-2 px-3'>
                          <Link href={nav.path}>{(nav.name)}</Link>
                          {/* <div>
                            {
                              activeLink === nav.id && (<div className='border-b-[3px] rounded-lg border-solid border-secondary_color m-auto w-[85%] mt-1 ' />)
                            }
                          </div> */}
                        </li>

                        <div
                          onMouseEnter={() => handleMouseEnter(nav.id)}
                          onMouseLeave={handleMouseLeave}
                          key={index}
                          className="absolute  top-20  flex  transition-all duration-500 ease-in-out"
                          style={{
                            opacity: activeIndex === nav.id ? '1' : '0',
                            transform: activeIndex === nav.id ? 'translateY(0)' : 'translateY(-20px)',
                          }}
                        >
                          {activeIndex === nav.id && nav.subcatagory && (
                            <div className="z-10  border-[1px] border-solid bg-slate-50 bg-opacity-50  rounded-md">
                              {nav.subcatagory.map((item, subindex) => (
                                <div
                                  className="relative hover:bg-slate-200 hover:bg-opacity-30 rounded-t-sm group"
                                  key={subindex}
                                >
                                  <ul
                                    className="py-2 p-5"
                                    key={item.title}
                                  >
                                    <li
                                      className="text-black font-bold  transition-all duration-500 ease-in-out"
                                    >

                                        {/* href={generateLink(nav.path, slug[subindex]?.slug)} */}
                                      <Link className='animatedText' href={'/'} >{(item.title)}</Link>
                                    </li>
                                  </ul>
                                  <div className="border-b-[1px] border-solid border-gray-200 text-white" />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {
                          nav.subcatagory && (<svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} className='fill-white' viewBox="0 0 320 512"><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" /></svg>)
                        }


                      </ul>
                    </div>
                  ))}

                  <div>
                    {/* <LanguageChanger /> */}
                  </div>
                </div>

              </div>


            </div>
          )
      }
      {/* sidebar */}
      <div ref={sidebarRef}>
        <Sidebar toggle={toggle} setToggle={setToggle} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} data={data}/>
      </div>

    </div>

  </section>
  )
}

export default NavBar