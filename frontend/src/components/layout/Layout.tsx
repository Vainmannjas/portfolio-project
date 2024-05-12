import { FC, useEffect, useRef, useState } from "react"
import Header from "./Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import Modal from "../ui/modal/Modal"
import styles from './Layout.module.scss'
import CartSidebar from "../screens/cart/cart-sidebar/CartSidebar"
import EditSidebar from "../screens/cart/edit-sidebar/EditSidebar"

const Layout: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isEditSidebarOpen, setIsEditSidebarOpen] = useState<boolean>(false);
  // const [isScrollDisabled, setIsScrollDisabled] = useState<boolean>(false);

  useEffect(() => {

    const modalTimer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(modalTimer);

  }, []);

  // useEffect(() => {
  //   if(isSidebarOpen || isEditSidebarOpen) {
  //     disabledScroll();
  //   } else {
  //     enableScroll();
  //   }
  // }, [isSidebarOpen, isEditSidebarOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleToggleEditSidebar = () => {
    setIsEditSidebarOpen(!isEditSidebarOpen);
    setIsSidebarOpen(!isEditSidebarOpen);
  }

  const handleCloseEditSidebar = () => {
    setIsEditSidebarOpen(false);
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setIsEditSidebarOpen(false);
  }

  // const cartSidebarClasses = isEditSidebarOpen ? `${styles['cart-sidebar']} ${styles['edit-sidebar__open']}` : styles['cart-sidebar'];

  // const sidebarRef = useRef<HTMLDivElement>(null);

  // const handleClickOutside = (event: MouseEvent) => {
  //   if(sidebarRef.current && !sidebarRef.current.contains)

  // }

  return (
    <div className={styles.layout}>
      {/* <div style={{width: "70px"}}> */}

      {isModalOpen && 
        <Modal onClose={handleCloseModal}/>
      }

      {/* <div className={styles.layout__grid}> */}

        {/* <div className={styles.layout__sidebars}> */}

          {isEditSidebarOpen && <EditSidebar onClose={handleCloseEditSidebar}/>}

          {isSidebarOpen && 
            <CartSidebar 
            onEdit={handleToggleEditSidebar}
            onClose={handleCloseSidebar}
            // className={cartSidebarClasses}
            />
          }


        {/* </div> */}
        <Header handleToggleSidebar={handleToggleSidebar}/>

        <div className={styles.outlet}>
          <Outlet />
        </div>
          {/* </div> */}
        <Footer/>
      {/* </div> */}
    </div>
  )
}

export default Layout
