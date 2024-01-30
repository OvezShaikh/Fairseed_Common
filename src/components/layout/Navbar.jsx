import * as React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import PrimaryButton from '../inputs/PrimaryButton'
// import someImage from "../../constants/images";
// import { OutlineIconName } from "@heroicons/react/outline";
import images from "../../constants/images";
import { color } from "@mui/system";
const styleButton ={
  color:'red'
}
const GetInvolved = [
  {
    name: "Associateship",
    href: "/Home/OnGoingCampaigns",
  },
  {
    name: "Partner with us",
    href: "/Home/Donate",
  },
  {
    name: "Internship",
    href:'/Home/Create-Campaign',
  },
  {
    name: "Create a campaign",
    href:'/Home/Create-Campaign',
  },
  {
    name: "Support a campaign",
    href: "/Home/OnGoingCampaigns",
  },
  {
    name: "Careers",
    href: "/Home/ReligiousEducationCampaigns",
  },
];
const OurImpact = [
  {
    name: "Ongoing Campaigns",
    href: "/Home/OnGoingCampaigns",
  },
  {
    name: "Successful Campaigns",
    href: "/Home/Donate",
  },
  {
    name: "Stories of Change",
    href:'/Home/Create-Campaign',
  },
  {
    name: "Reports",
    href:'/Home/Create-Campaign',
  },
 
];
const AboutUs = [
  {
    name: "Knowing Fairseed",
    href: "/Home/OnGoingCampaigns",
  },
  {
    name: "Vision & Mission",
    href: "/Home/Donate",
  },
  {
    name: "Our Mission",
    href:'/Home/Create-Campaign',
  },
 
 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
<header className="absolute top-0 left-0 right-0 bg-transparent z-10 container" style={{ backgroundColor: '#8EC5FC',backdropFilter:'blur(10px)'
    }}>      <nav
        className="mx-auto flex max-w-9xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex ">
          <a href="#">
            <span className="sr-only">FairSeed </span>
            <img className="" src={images.Logo} alt="FairSeed" title="FairSeed" />
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative mt-1" >
              <Popover.Button className="flex pt-2 items-center gap-x-1 text-[18px] font-medium font-[satoshi]  text-[#40444C]"
              onclick="this.style.backgroundColor = (this.style.backgroundColor === '#40444C') ? 'blue' : '#40444C';"

              >
                Get Involved
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M16.6927 8.44219L10.4427 14.6922C10.3846 14.7503 10.3157 14.7964 10.2398 14.8279C10.164 14.8593 10.0826 14.8755 10.0005 14.8755C9.91836 14.8755 9.83703 14.8593 9.76115 14.8279C9.68528 14.7964 9.61635 14.7503 9.5583 14.6922L3.3083 8.44219C3.2208 8.35478 3.16119 8.24337 3.13704 8.12207C3.11288 8.00076 3.12526 7.87502 3.1726 7.76076C3.21995 7.64649 3.30013 7.54884 3.403 7.48017C3.50587 7.41151 3.62681 7.3749 3.75049 7.375H16.2505C16.3742 7.3749 16.4951 7.41151 16.598 7.48017C16.7009 7.54884 16.781 7.64649 16.8284 7.76076C16.8757 7.87502 16.8881 8.00076 16.8639 8.12207C16.8398 8.24337 16.7802 8.35478 16.6927 8.44219Z"
                    fill="url(#paint0_linear_126_1927)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_126_1927"
                      x1="3.125"
                      y1="14.8755"
                      x2="11.5086"
                      y2="9.72552"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9F0A" />
                      <stop offset="1" stop-color="#FF375F" />
                    </linearGradient>
                  </defs>
                </svg>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[250px] max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="pl-3 pb-4">
                    { GetInvolved.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6  pl-4 pt-4 text-[16px] font-[satoshi] text-[#333] hover:bg-gray-50"
                        style={{fontWeight:400}}
                      >
                        
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
      
                        </div>
                      </div>
                    ))}
                  </div>
                
                </Popover.Panel>
              </Transition>
            </Popover>
            {/*  second button */}

            <Popover className="relative mt-1">
              <Popover.Button className="flex pt-2 items-center gap-x-1 text-[18px] font-medium font-[satoshi] text-[#40444C]">
                Our Impact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M16.6927 8.44219L10.4427 14.6922C10.3846 14.7503 10.3157 14.7964 10.2398 14.8279C10.164 14.8593 10.0826 14.8755 10.0005 14.8755C9.91836 14.8755 9.83703 14.8593 9.76115 14.8279C9.68528 14.7964 9.61635 14.7503 9.5583 14.6922L3.3083 8.44219C3.2208 8.35478 3.16119 8.24337 3.13704 8.12207C3.11288 8.00076 3.12526 7.87502 3.1726 7.76076C3.21995 7.64649 3.30013 7.54884 3.403 7.48017C3.50587 7.41151 3.62681 7.3749 3.75049 7.375H16.2505C16.3742 7.3749 16.4951 7.41151 16.598 7.48017C16.7009 7.54884 16.781 7.64649 16.8284 7.76076C16.8757 7.87502 16.8881 8.00076 16.8639 8.12207C16.8398 8.24337 16.7802 8.35478 16.6927 8.44219Z"
                    fill="url(#paint0_linear_126_1927)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_126_1927"
                      x1="3.125"
                      y1="14.8755"
                      x2="11.5086"
                      y2="9.72552"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9F0A" />
                      <stop offset="1" stop-color="#FF375F" />
                    </linearGradient>
                  </defs>
                </svg>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[250px] max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="pl-3 pb-4">
                    {OurImpact.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6  pl-4 pt-4 text-[16px] font-[satoshi] text-[#333] hover:bg-gray-50"
                        style={{fontWeight:400}}
                      >
                        
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
      
                        </div>
                      </div>
                    ))}
                  </div>
                
                </Popover.Panel>
              </Transition>
            </Popover>

            {/* third button */}
            <Popover className="relative mt-1">
              <Popover.Button className="flex pt-2 items-center gap-x-1 text-[18px] font-medium  font-[satoshi] text-[#40444C]">
                About us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M16.6927 8.44219L10.4427 14.6922C10.3846 14.7503 10.3157 14.7964 10.2398 14.8279C10.164 14.8593 10.0826 14.8755 10.0005 14.8755C9.91836 14.8755 9.83703 14.8593 9.76115 14.8279C9.68528 14.7964 9.61635 14.7503 9.5583 14.6922L3.3083 8.44219C3.2208 8.35478 3.16119 8.24337 3.13704 8.12207C3.11288 8.00076 3.12526 7.87502 3.1726 7.76076C3.21995 7.64649 3.30013 7.54884 3.403 7.48017C3.50587 7.41151 3.62681 7.3749 3.75049 7.375H16.2505C16.3742 7.3749 16.4951 7.41151 16.598 7.48017C16.7009 7.54884 16.781 7.64649 16.8284 7.76076C16.8757 7.87502 16.8881 8.00076 16.8639 8.12207C16.8398 8.24337 16.7802 8.35478 16.6927 8.44219Z"
                    fill="url(#paint0_linear_126_1927)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_126_1927"
                      x1="3.125"
                      y1="14.8755"
                      x2="11.5086"
                      y2="9.72552"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9F0A" />
                      <stop offset="1" stop-color="#FF375F" />
                    </linearGradient>
                  </defs>
                </svg>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[250px] max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="pl-3 pb-4">
                    {AboutUs.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6  pl-4 pt-4 text-[16px] font-[Satoshi] text-[#333] hover:bg-gray-50"
                        style={{fontWeight:400}}
                      >
                        
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
      
                        </div>
                      </div>
                    ))}
                  </div>
                
                </Popover.Panel>
              </Transition>
            </Popover>

                         
            {/* Fourth button */}
            <button
              className="font-[satoshi] text-[18px] font-medium text-[#40444C]"
              >How it Works</button>



            {/* Fifth button */}
            <PrimaryButton
            sx={{borderRadius:'var(--Pixels-8, 8px)',fontWeight:700,fontSize:'18px', padding: '12px 20px',}}>
              
                <a href="/Home/Create-Campaign">
                  Start a Campaign
                  </a>
                {/* </div>
              </div> */}
            </PrimaryButton>

            <div className="flex space-x-8">
              <button className=" text-black bg-transparent rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
              className="font-[satoshi] text-[18px] font-medium text-[#40444C]"
              >Log In</button>
              {/* <Box sx={{ display: "flex", }}>
                <Avatar alt="Remy Sharp" src={images.Avatar} />
              </Box> */}
            </div>
          </Popover.Group>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-20% w-20% py-0.1em px-0.1em"
                src={images.Logo}
                alt="FairSeed"
                title="FairSeed"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                    
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div
                className="py-2"
                style={{
                  backgroundColor: "#FBAB7E",
                  backgroundImage:
                    "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 50%)",
                  height: "100px",
                  width: "20px",
                }}
              >
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
