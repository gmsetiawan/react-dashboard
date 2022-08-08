import React, { useState } from 'react'
import { AiOutlineControl, AiOutlinePercentage } from 'react-icons/ai';
import { BiCoin } from 'react-icons/bi';
import { BsCreditCard2Back, BsCurrencyDollar } from 'react-icons/bs';
import { FaSubway } from 'react-icons/fa';
import { FiCommand } from 'react-icons/fi';
import { GiGearStickPattern } from 'react-icons/gi';
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdLiveHelp } from 'react-icons/md';
import { RiBarChartHorizontalLine, RiLoader4Fill } from 'react-icons/ri'
import { TbActivity, TbBuildingBank, TbCircleDotted, TbDotsVertical } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import LineChart from '../../components/LineChart'
import GroupedBarChart from '../../components/GroupedBarChart'

const Dashboard03 = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const menus = [
    {
      name: 'Dashboard',
      url: '/',
      icon: <FiCommand />
    },
    {
      name: 'Analisys',
      url: '/',
      icon: <TbActivity />,
      submenus: [
        {
          name: 'Submenu 1',
          url: '/',
          icon: <TbCircleDotted />
        },
        {
          name: 'Submenu 2',
          url: '/',
          icon: <TbCircleDotted />
        },
        {
          name: 'Submenu 3',
          url: '/',
          icon: <TbCircleDotted />
        },
      ]
    },
    {
      name: 'Management',
      url: '/',
      icon: <AiOutlineControl />,
      submenus: [
        {
          name: 'Submenu 4',
          url: '/',
          icon: <TbCircleDotted />
        },
        {
          name: 'Submenu 5',
          url: '/',
          icon: <TbCircleDotted />
        },
      ]
    }
  ]

  const SidebarItem = ({ menu }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
      <>
        {menu?.submenus
          ?
          <div key={menu.title} className='relative group mb-2'>
            <div className={`text-white flex flex-col p-2 whitespace-nowrap hover:bg-sky-400 rounded`}>
              <div className={`flex text-white`} onClick={() => setOpenDropdown(!openDropdown)}>
                <span className=''>{menu.icon}</span>
                <h1 className={`ml-4 text-xs inline-flex items-center justify-between w-full`}>{menu.name} <span className={`${openDropdown && 'rotate-180'} duration-200`}><MdKeyboardArrowDown /></span></h1>
              </div>
              <div className={`ml-8 flex flex-col gap-y-2 mt-2 ${openDropdown ? 'block' : 'hidden'}`}>
                {menu.submenus.map((sub, index) => (
                  <div key={index} className={`text-xs inline-flex items-center hover:text-gray-900`}><span className='mr-4'>{sub.icon}</span>{sub.name}</div>
                ))}
              </div>
            </div>
          </div>
          :
          <div key={menu.title} className='relative group mb-2'>
            <div className={`text-white flex items-center p-2 whitespace-nowrap hover:bg-sky-400 rounded`}>
              <span className=''>{menu.icon}</span>
              <h1 className={`ml-4 text-xs`}>{menu.name}</h1>
            </div>
          </div>
        }
      </>
    )
  }

  return (
    <div className='h-screen flex'>
      <div className={`fixed top-0 left-0 h-screen w-64 ${openSidebar ? 'translate-x-0' : '-translate-x-full'} z-20 flex flex-col duration-500 bg-sky-900 shadow p-2`}>
        <button className='absolute top-4 right-4 text-white' onClick={() => setOpenSidebar(!openSidebar)}><RiBarChartHorizontalLine /></button>
        <Link to='/'>
          <div className='flex flex-col items-center justify-center gap-y-2 mb-2'>
            <div className='h-20 w-20 flex justify-center items-center text-3xl bg-white text-sky-900 rounded-full'>
              <FaSubway />
            </div>
            <h1 className='text-xl text-white uppercase font-semibold tracking-widest'>Subway</h1>
          </div>
        </Link>
        <hr />
        <div className='flex-col py-4 h-full'>
          {menus.map((menu, index) => (
            <SidebarItem key={index} menu={menu} />
          ))}
        </div>
        <hr />
        <div className='flex flex-col mt-2 text-white'>
          <div className='relative group mb-2'>
            <div className={`z-10 text-white flex items-center p-2 whitespace-nowrap hover:text-sky-400`}>
              <span className=''><MdLiveHelp /></span>
              <h1 className={`ml-4 text-xs`}>Help & Getting Started</h1>
            </div>
          </div>
          <div className='flex'>
            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="" className={`rounded object-cover duration-500 h-16 w-16`} />
            <div className={`flex flex-col justify-between ml-4 w-full`}>
              <TbDotsVertical className='place-self-end' />
              <div className=''>
                <h1 className='text-xs whitespace-nowrap'>Fullname</h1>
                <h1 className='text-xs whitespace-nowrap'>Position</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1 overflow-scroll'>
        <div className='fixed h-12 w-full flex justify-between items-center p-2 z-10 bg-white'>
          <button className='' onClick={() => setOpenSidebar(!openSidebar)}><RiBarChartHorizontalLine /></button>
        </div>
        <div className='px-2 mt-12'>
          <div className='flex flex-col lg:flex-row gap-2 mb-4'>
            <div className='relative w-full lg:w-2/6 h-auto lg:h-40 p-2 border rounded shadow flex flex-col justify-between'>
              <button className='absolute top-2 right-2 text-sky-800 font-semibold'><GiGearStickPattern /></button>
              <div>
                <span className='p-1 px-2 text-xs text-white bg-sky-900 rounded-sm'>Lorem ipsum dolor sit amet.</span>
                <h1 className='capitalize'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
              </div>
              <div className='flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 justify-between'>
                <div className='w-full flex flex-col gap-y-2'>
                  <div className='w-full flex mb-2'>
                    <div className='w-1/2'>
                      <span className='text-[10px] text-gray-400'>Paid</span>
                      <h1 className='text-xs'>$10,000</h1>
                    </div>
                    <div className='w-1/2'>
                      <span className='text-[10px] text-gray-400'>Unpaid</span>
                      <h1 className='text-xs'>$2,000</h1>
                    </div>
                  </div>
                  <div className='h-2 w-5/6 rounded-full bg-gradient-to-r from-sky-900 to-gray-100'></div>
                </div>
                <div className='w-full flex'>
                  <div className='w-1/2 flex items-center gap-2 h-[40px]'>
                    <AiOutlinePercentage className='text-sky-900' />
                    <div className=''>
                      <span className='text-[10px] text-gray-400'>Interest Rate</span>
                      <h1 className='text-xs ordinal'>12</h1>
                    </div>
                  </div>
                  <div className='w-1/2 flex items-center gap-2 h-[40px]'>
                    <BsCurrencyDollar className='text-sky-900' />
                    <div className=''>
                      <span className='text-[10px] text-gray-400'>Daily Income</span>
                      <h1 className='text-xs'>2,000</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative w-full lg:w-4/6 h-auto lg:h-40 p-2 border rounded shadow flex flex-col lg:flex-row justify-between divide-y-2 lg:divide-x-2 lg:divide-y-0'>
              <div className='relative p-4 flex flex-col justify-between'>
                <button className='absolute top-2 lg:top-0 right-2 text-sky-800 font-semibold'><GiGearStickPattern /></button>
                <span>People Going</span>
                <h1 className='text-3xl tracking-widest'>274</h1>
                <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, nemo!</p>
              </div>
              <div className='relative p-4 flex flex-col justify-between'>
                <button className='absolute top-2 lg:top-0 right-2 text-sky-800 font-semibold'><GiGearStickPattern /></button>
                <span>Destination Covered</span>
                <h1 className='text-3xl tracking-widest'>12</h1>
                <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, nemo!</p>
              </div>
              <div className='relative p-4 flex flex-col justify-between'>
                <button className='absolute top-2 lg:top-0 right-2 text-sky-800 font-semibold'><GiGearStickPattern /></button>
                <span>People Interested</span>
                <h1 className='text-3xl tracking-widest'>540</h1>
                <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, nemo!</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-2 mb-4'>
            <div className='w-full lg:w-1/2'> <LineChart /></div>
            <div className='w-full lg:w-1/2'> <GroupedBarChart /></div>
          </div>
          <div className='flex flex-col gap-2 bg-sky-400 p-2 rounded mb-4'>
            <div className='p-2 flex justify-between items-center bg-white rounded shadow'>
              <h1>Access Activities</h1>
              <button className=''><GiGearStickPattern /></button>
            </div>

            <div className='flex flex-col lg:flex-row w-full gap-4'>
              <div className='w-full lg:w-1/4 p-2 flex flex-col rounded shadow gap-4 bg-white hover:bg-gray-100'>
                <h1 className='flex items-center gap-4 border-b'>
                  <FiCommand />
                  <span>News</span>
                </h1>
                <div className='flex justify-around items-center'>
                  <div className='text-center'>
                    <h1>329</h1>
                    <h1 className='text-[10px] text-gray-400'>Total Users</h1>
                  </div>
                  <div className='h-12 w-0.5 bg-sky-200 rounded-full'></div>
                  <div className='text-center'>
                    <h1>70%</h1>
                    <h1 className='text-[10px] text-gray-400'>Percentages</h1>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/4 p-2 flex flex-col rounded shadow gap-4 bg-white hover:bg-gray-100'>
                <h1 className='flex items-center gap-4 border-b'>
                  <FiCommand />
                  <span>Advertise</span>
                </h1>
                <div className='flex justify-around items-center'>
                  <div className='text-center'>
                    <h1>329</h1>
                    <h1 className='text-[10px] text-gray-400'>Total Users</h1>
                  </div>
                  <div className='h-12 w-0.5 bg-sky-200 rounded-full'></div>
                  <div className='text-center'>
                    <h1>80%</h1>
                    <h1 className='text-[10px] text-gray-400'>Percentages</h1>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/4 p-2 flex flex-col rounded shadow gap-4 bg-white hover:bg-gray-100'>
                <h1 className='flex items-center gap-4 border-b'>
                  <FiCommand />
                  <span>Real Estate</span>
                </h1>
                <div className='flex justify-around items-center'>
                  <div className='text-center'>
                    <h1>329</h1>
                    <h1 className='text-[10px] text-gray-400'>Total Users</h1>
                  </div>
                  <div className='h-12 w-0.5 bg-sky-200 rounded-full'></div>
                  <div className='text-center'>
                    <h1>45%</h1>
                    <h1 className='text-[10px] text-gray-400'>Percentages</h1>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/4 p-2 flex flex-col rounded shadow gap-4 bg-white hover:bg-gray-100'>
                <h1 className='flex items-center gap-4 border-b'>
                  <FiCommand />
                  <span>Others</span>
                </h1>
                <div className='flex justify-around items-center'>
                  <div className='text-center'>
                    <h1>10%</h1>
                    <h1 className='text-[10px] text-gray-400'>Total Users</h1>
                  </div>
                  <div className='h-12 w-0.5 bg-sky-200 rounded-full'></div>
                  <div className='text-center'>
                    <h1>329</h1>
                    <h1 className='text-[10px] text-gray-400'>Percentages</h1>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-2 mb-4'>
            <div className='flex p-2 border items-center justify-between rounded bg-sky-400 text-white shadow'>
              <div className='flex items-center'>
                <div className='h-10 w-10 flex justify-center items-center bg-white rounded'>
                  <BsCreditCard2Back className='text-xl text-sky-400' />
                </div>
                <div className='ml-4'>
                  <h1 className='text-sm'>Debit</h1>
                  <span className='text-xl'>9,100</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </div>
            <div className='flex p-2 border items-center justify-between rounded bg-green-400 text-white shadow'>
              <div className='flex items-center'>
                <div className='h-10 w-10 flex justify-center items-center bg-white rounded'>
                  <BsCreditCard2Back className='text-xl text-sky-400' />
                </div>
                <div className='ml-4'>
                  <h1 className='text-sm'>Credit Card</h1>
                  <span className='text-xl'>9,100</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </div>
            <div className='flex p-2 border items-center justify-between rounded bg-red-400 text-white shadow'>
              <div className='flex items-center'>
                <div className='h-10 w-10 flex justify-center items-center bg-white rounded'>
                  <RiLoader4Fill className='text-xl text-sky-400' />
                </div>
                <div className='ml-4'>
                  <h1 className='text-sm'>Paylater</h1>
                  <span className='text-xl'>4,100</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </div>
            <div className='flex p-2 border items-center justify-between rounded bg-gray-400 text-white shadow'>
              <div className='flex items-center'>
                <div className='h-10 w-10 flex justify-center items-center bg-white rounded'>
                  <BiCoin className='text-xl text-sky-400' />
                </div>
                <div className='ml-4'>
                  <h1 className='text-sm'>Poin</h1>
                  <span className='text-xl'>1,100</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </div>
            <div className='flex p-2 border items-center justify-between rounded bg-sky-400 text-white shadow'>
              <div className='flex items-center'>
                <div className='h-10 w-10 flex justify-center items-center bg-white rounded'>
                  <TbBuildingBank className='text-xl text-sky-400' />
                </div>
                <div className='ml-4'>
                  <h1 className='text-sm'>Others</h1>
                  <span className='text-xl'>800</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard03