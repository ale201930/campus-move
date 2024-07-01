"use client";
import Image from 'next/image'
import avatar from '../temp/user.png'
import { BsPerson } from 'react-icons/bs'
import { useContext, useState } from 'react'
import { UberContext } from '../context/uberContext'

const style = {
    loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
    logoutButton: `flex items-center cursor-pointer rounded-md hover:bg-[white] hover:text-black transition ease px-4 py-1`,
    loginText: `ml-2`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 mr-4 rounded-full object-cover cursor-pointer`,
    menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    leftMenu: `flex gap-3`,
    rightMenu: `flex gap-3 items-center`,
    wrapper: `h-16 w-full bg-black text-white flex justify-between items-center px-4 md:px-60 fixed z-20`,
};



const Navbar = () => {
    const { currentAccount, connectWallet, disconnectWallet, currentUser } = useContext(UberContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const userName = currentUser?.name ? currentUser.name.split(' ')[0] : '';
    return (
        <div className={style.wrapper}>
            <div className={style.leftMenu}>
                <div className={style.logo}>CampusMove</div>
            </div>
            <div className={`${style.rightMenu} ${menuOpen ? 'block' : 'hidden'} md:flex`}>
                <div className={style.menuItem}>{userName}</div>
                <div className={style.userImageContainer}>
                    <Image className={style.userImageContainer} src={avatar} width={40} height={40} />
                </div>
                {currentAccount ? (
                     <>
                     <div className={style.menuItem}>
                       {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}
                     </div>
                     <div className={style.logoutButton} onClick={disconnectWallet}>
                       <BsPerson />
                       <span className={style.loginText}>Cerrar sesión</span>
                     </div>
                   </>
                ) : (
                    <div className={style.loginButton} onClick={() => connectWallet()}>
                        <BsPerson />
                        <span className={style.loginText}>Iniciar sesión</span>
                    </div>
                )}
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                ☰
            </button>
        </div>
    );
};

export default Navbar;