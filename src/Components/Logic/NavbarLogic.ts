import { useEffect, useState } from "react";

export default function ComponentNotification() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
      };
    
      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
    
      const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };

  return {
    isDropdownOpen,
    isDrawerOpen,
    isNotificationOpen,
    toggleNotification,
    toggleDropdown,
    toggleDrawer,
    setIsDropdownOpen,
    setIsDrawerOpen,
    setIsNotificationOpen,
  };
}
