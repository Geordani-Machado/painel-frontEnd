import React from "react";
import { Disclosure } from '@headlessui/react'

class Sidebar extends React.Component {
 
  render() {
    return (
      <>
      <Disclosure as="nav" className="bg-indigo-600">
            <div className="max-w-7xl mx-auto  ">
              <div className="flex items-center justify-between h-16 navbar-vertical">
              <a href="/" >
                    <img 
                      className="h-15 w-28"
                      src="https://imgur.com/bhGu9Sq.png"
                      alt="Workflow"
                    /></a>
              </div>
            </div>
      </Disclosure>
      </>
    );
  }
}

export default Sidebar;
