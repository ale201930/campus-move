"use client";

import RideSelector from '../components/RideSelector';
import { useContext, useState } from 'react'
import { UberContext } from '../context/uberContext'
import { ethers } from 'ethers'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);



const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col`,
  confirmButtonContainer: `cursor-pointer z-10`,
  confirmButton: `bg-black rounded-md text-white m-4 py-4 text-center text-xl`,
  inputBox: `my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full`,
}

const Confirm = () => {

  const { currentAccount, dropoff, pickup, price, selectedRide, pickupCoordinates, dropoffCoordinates, metamask, recipientAddressGlobal } = useContext(UberContext)
  const [error, setError] = useState('');

  const validateAddress = (address) => {
    return ethers.utils.isAddress(address) && address.toLowerCase() !== currentAccount.toLowerCase();
  }
  const storeTripDetails = async (pickup, dropoff) => {
    if (!validateAddress(recipientAddressGlobal)) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puede enviar una transacción a la misma cuenta qué estas conectado!',
        showConfirmButton: false,
        timer: 2500,
      });
      return;
    }

    MySwal.fire({
      title: "Estás seguro?",
      text: `¿Estas seguro de enviar la transacción a ${currentAccount}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Enviar",
      cancelButtonText:"Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch('/api/db/saveTrips', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              pickupLocation: pickup,
              dropoffLocation: dropoff,
              userWalletAddress: currentAccount,
              price: price,
              selectedRide: selectedRide,
            }),
          })
    
          await metamask.request({
            method: 'eth_sendTransaction',
            params: [
              {
                from: currentAccount,
                to: recipientAddressGlobal,
                gas: '0x7EF40', // 520000 Gwei
                value: ethers.utils.parseEther(price)._hex,
              },
            ],
          })
          MySwal.fire({
            icon: 'success',
            title: 'Transacción enviada',
            text: 'Su transacción fue enviada exitosamente!',
          });
        } catch (error) {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La transacción ha sido rechazada!',
          });
        }
      }
    });

    
  }

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
      </div>
      {error && <div className={style.error}>{error}</div>}
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButton} onClick={() => storeTripDetails(pickup, dropoff)}>
          Confirmar {selectedRide.service || ''}
        </div>
      </div>
    </div>
  )
}


export default Confirm