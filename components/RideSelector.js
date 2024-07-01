"use client";
import Image from 'next/image'
import ethLogo from '../assets/eth-logo.png';
import { useEffect, useState, useContext } from 'react';
import { UberContext } from '../context/uberContext'

const style = {
    wrapper: `h-full flex flex-col overflow-hidden`,
    title: `text-gray-500 text-center text-xs py-2 border-b`,
    carList: `flex flex-col flex-1`,
    car: `hover:shadow-lg hover:rounded-md transition ease hover:scale-110 hover:-translate-y-1 flex p-3 m-2 items-center border-2 border-white`,
    selectedCar: `flex p-3 m-2 items-center rounded-md shadow-lg transition ease`,
    carImage: `h-14`,
    carDetails: `ml-2 flex-1`,
    service: `font-medium`,
    time: `text-xs text-blue-500`,
    priceContainer: `flex items-center`,
    price: `mr-[-0.8rem]`,
    input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full`,
    inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
    titleX: `text-gray-500 text-center text-xs py-2 border-t`,
    titlePayment: `p-2 ml-2`
}


const RideSelector = () => {

    const [carList, setCarList] = useState([]);
    const [recipientAddress, setRecipientAddress] = useState('');
    const { selectedRide, setSelectedRide, setPrice, basePrice, setRecipientAddressGlobal } = useContext(UberContext)

    const handleInputChange = (e) => {
        setRecipientAddress(e.target.value);
        setRecipientAddressGlobal(e.target.value); // Update global state
    }


    useEffect(() => {
        ; (async () => {
            try {
                const response = await fetch('/api/db/getRideTypes');
                const data = await response.json();
                if (data.length == 0) {
                    console.log('Not found rides!')
                }

                setCarList(data.data)
                setSelectedRide(data.data[0])
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])
    return (
        <div className={style.wrapper}>
            <div className={style.title}>Elige un viaje o desliza hacia arriba!</div>
            <div className={style.carList}>
                {carList.map((car, index) => (
                    <div key={index} className={`${selectedRide.service === car.service
                        ? style.selectedCar
                        : style.car
                        }`}
                        onClick={() => {
                            setSelectedRide(car)
                            setPrice(((basePrice / 10 ** 4) * car.priceMultiplier).toFixed(5))
                        }}>
                        <Image
                            src={car.iconUrl}
                            className={style.carImage}
                            height={50}
                            width={50} />
                        <div className={style.carDetails}>
                            <div className={style.service}>{car.service}</div>
                            <div className={style.time}>5 min way</div>
                        </div>
                        <div className={style.priceContainer}>
                            <div className={style.priceContainer}>
                                <div className={style.price}>
                                    {((basePrice / 10 ** 4) * car.priceMultiplier).toFixed(5)}
                                </div>
                                <Image src={ethLogo} heigh={25} width={40} />
                            </div>

                        </div>

                    </div>
                ))}
            </div>
            <div className={style.titleX}></div>
            <div className={style.titlePayment}>Dirección de pago</div>

            <div className={style.inputBox}>
                <input
                    type="text"
                    placeholder="Ingrese la dirección de pago"
                    value={recipientAddress}
                    onChange={handleInputChange}
                    className={style.input}
                    maxLength={42}
                /></div>
            <div className={style.title}></div>
        </div>
    )
}

export default RideSelector