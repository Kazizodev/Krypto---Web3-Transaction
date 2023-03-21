import { FaEthereum as Ethereum } from 'react-icons/fa';
import { BsInfoCircle as Info } from 'react-icons/bs';
import Loader from './Loader';
import { TransactionContext } from '../Context/TransactionContext';
import React, { useContext } from 'react';
import {shortenAddress} from '../utils/shortenAddress';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    name={name}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm input-bg"
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !message || !keyword) return;
    sendTransaction();
  }

  return (
    <div className="w-full flex justify-center items-center ">

      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">

        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className='text-3xl text-white sm:text-5xl text-gradiant py-1 text-gradient'>Send Love<br />Accross The World</h1>
          <p className='text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base'>Explore the crypto world. Buy and sell cryptocurrencies easily on FoxChain.</p>
          {!currentAccount && (
            <button type='button' onClick={connectWallet} className='text-white text-base font-semibold flex flex-row justify-center my-5 items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'>
              Connect Wallet
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={`${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles}`}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start rounded-xl flex-col h-40 sm:w-72 w-full my-5 eth-card">
            <div className='flex justify-between flex-col w-full h-full'>
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full flex border-2 border-white justify-center items-center">
                  <Ethereum fontSize={22} color='#fff' />
                </div>
                <Info fontSize={17} color='#fff' />
              </div>
              <div>
                <p className="text-white text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-bold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col rounded-lg justify-start items-center form-bg">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />

            <div className='h-[1px] w-full bg-gray-400 my-2' />

            {isLoading ? (
              <Loader />
            ) : (
              <button type='button' onClick={handleSubmit} className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'>Send Now</button>
            )
            }
          </div>
        </div>

      </div>

    </div>
  )
}

export default Welcome