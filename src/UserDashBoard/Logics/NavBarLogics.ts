import { useEffect, useRef, useState } from "react";

export default function NavBarLogics() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isDropdownDashOpen, setIsDropdownDashOpen] = useState(false);
  const [isDropdownEcommerceOpen, setIsDropdownEcommerceOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const notificationRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsDropdownOpen(false); // Close dropdown when opening notification
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNotificationOpen(false); // Close notification when opening dropdown
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  const toggleDropdownDash = () => {
    setIsDropdownDashOpen(!isDropdownDashOpen);
  };

  const toggleDropdownEcommerce = () => {
    setIsDropdownEcommerceOpen(!isDropdownEcommerceOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isDropdownOpen,
    isNotificationOpen,
    isDropdownDashOpen,
    isDropdownEcommerceOpen,
    isDrawerOpen,
    isSidebarOpen,
    notificationRef,
    dropdownRef,
    setIsDropdownOpen,
    setIsNotificationOpen,
    setIsDropdownDashOpen,
    setIsDropdownEcommerceOpen,
    setIsDrawerOpen,
    setIsSidebarOpen,
    toggleNotification,
    toggleDropdown,
    toggleDrawer,
    toggleDropdownDash,
    toggleDropdownEcommerce,
    useEffect,
  };
}
