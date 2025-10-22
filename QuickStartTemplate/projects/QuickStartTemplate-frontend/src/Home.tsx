// Home.tsx
// Main landing UI: shows navbar, hero text, and feature cards.
// This file only handles layout and modals — safe place to customize design.

import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import { AiOutlineWallet, AiOutlineSend, AiOutlineStar, AiOutlineDeploymentUnit } from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'

// Frontend modals
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'

// Smart contract demo modal (backend app calls)
import AppCalls from './components/AppCalls'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const [openMintModal, setOpenMintModal] = useState<boolean>(false)
  const [openTokenModal, setOpenTokenModal] = useState<boolean>(false)
  const [openAppCallsModal, setOpenAppCallsModal] = useState<boolean>(false)

  const { activeAddress } = useWallet()

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-800 text-gray-100 flex flex-col">
      {/* ---------------- Navbar ---------------- */}
      <nav className="w-full bg-stone-900 border-b border-stone-700 px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600 drop-shadow-md">
          Algorand dApp Gateway
        </h1>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-700 hover:bg-stone-600 text-sm font-semibold text-gray-100 transition"
          onClick={() => setOpenWalletModal(true)}
        >
          <BsWallet2 className="text-lg text-orange-400" />
          <span>{activeAddress ? 'Wallet Connected' : 'Connect Wallet'}</span>
        </button>
      </nav>

      {/* ---------------- Hero Section ---------------- */}
      <header className="text-center py-12 px-4 bg-stone-900/80 border-y border-stone-700 backdrop-blur-sm shadow-sm">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
          Explore iBricks on Algorand TestNet ;-)
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          This project demonstrates the core building blocks of an Algorand dApp.
          Connect your wallet, send transactions, mint NFTs, create tokens, and try out contract interactions —
          all from a simple interface.
        </p>
      </header>

      {/* ---------------- Features Grid ---------------- */}
      <main className="flex-1 px-6 pb-12">
        {activeAddress ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-6 rounded-2xl bg-[url('/brick-texture.png')] bg-cover bg-center bg-fixed border border-stone-700 shadow-xl"
          >
            {/* Send Payment */}
            <div className="p-6 bg-stone-800/90 rounded-2xl border border-stone-700 hover:border-orange-500 transition">
              <AiOutlineSend className="text-4xl mb-3 text-amber-400" />
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Send Payment</h3>
              <p className="text-sm text-gray-200 mb-4">
                Try sending 1 ALGO to any address on TestNet. This helps you understand wallet transactions.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-red-600 text-white font-semibold transition"
                onClick={() => setOpenPaymentModal(true)}
              >
                Open
              </button>
            </div>

            {/* Mint NFT */}
            <div className="p-6 bg-stone-800/90 rounded-2xl border border-stone-700 hover:border-amber-500 transition">
              <AiOutlineStar className="text-4xl mb-3 text-amber-400" />
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Mint NFT</h3>
              <p className="text-sm text-gray-200 mb-4">
                Upload an image and mint it as an NFT on Algorand with IPFS metadata stored via Pinata.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-red-500 text-white font-semibold transition"
                onClick={() => setOpenMintModal(true)}
              >
                Open
              </button>
            </div>

            {/* Create Token */}
            <div className="p-6 bg-stone-800/90 rounded-2xl border border-stone-700 hover:border-orange-600 transition">
              <BsArrowUpRightCircle className="text-4xl mb-3 text-orange-400" />
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Create Token (ASA)</h3>
              <p className="text-sm text-gray-200 mb-4">
                Spin up your own Algorand Standard Asset (ASA) in seconds. Perfect for testing token creation.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold transition"
                onClick={() => setOpenTokenModal(true)}
              >
                Open
              </button>
            </div>

            {/* Contract Interactions */}
            <div className="p-6 bg-stone-800/90 rounded-2xl border border-stone-700 hover:border-amber-600 transition">
              <AiOutlineDeploymentUnit className="text-4xl mb-3 text-amber-400" />
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Contract Interactions</h3>
              <p className="text-sm text-gray-200 mb-4">
                Interact with a simple Algorand smart contract to see how stateful dApps work on chain.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white font-semibold transition"
                onClick={() => setOpenAppCallsModal(true)}
              >
                Open
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-12">
            <p>⚡ Connect your wallet first to unlock the features below.</p>
          </div>
        )}
      </main>

      {/* ---------------- Modals ---------------- */}
      <ConnectWallet openModal={openWalletModal} closeModal={() => setOpenWalletModal(false)} />
      <Transact openModal={openPaymentModal} setModalState={setOpenPaymentModal} />
      <NFTmint openModal={openMintModal} setModalState={setOpenMintModal} />
      <Tokenmint openModal={openTokenModal} setModalState={setOpenTokenModal} />
      <AppCalls openModal={openAppCallsModal} setModalState={setOpenAppCallsModal} />
    </div>
  )
}

export default Home
