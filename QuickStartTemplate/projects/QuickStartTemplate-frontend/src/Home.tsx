// Home.tsx
// Main landing UI: shows navbar, hero text, and feature cards.
// This file only handles layout and modals — safe place to customize design.

import { useWallet } from '@txnlab/use-wallet-react'
import React, { useState } from 'react'
import { AiOutlineDeploymentUnit, AiOutlineSend, AiOutlineStar } from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'

// Frontend modals
import ConnectWallet from './components/ConnectWallet'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'
import Transact from './components/Transact'

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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-200 to-yellow-100 text-brown-900 flex flex-row relative overflow-x-hidden">
      {/* Decorative pumpkins background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none z-0">
        <div className="absolute left-8 top-8 text-6xl opacity-30">🎃</div>
        <div className="absolute right-12 top-24 text-7xl opacity-20">🎃</div>
        <div className="absolute left-1/2 bottom-10 text-8xl opacity-20" style={{ transform: 'translateX(-50%)' }}>🎃</div>
        <div className="absolute right-24 bottom-20 text-5xl opacity-25">🎃</div>
      </div>

      {/* Sidebar Navigation */}
      <aside className="w-72 min-h-screen bg-gradient-to-b from-orange-200 via-amber-100 to-yellow-200 border-r border-amber-400 flex flex-col items-center py-8 z-10 relative shadow-lg">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-amber-700 to-yellow-700 mb-8">
          <span>Algorand dApp</span>
          <span className="text-3xl">🎃</span>
        </h1>
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-400 hover:bg-orange-500 text-base font-semibold text-brown-900 transition shadow mb-8"
          onClick={() => setOpenWalletModal(true)}
        >
          <span className="text-xl text-amber-700"><BsWallet2 /></span>
          <span>{activeAddress ? 'Wallet Connected' : 'Connect Wallet'}</span>
        </button>
        <nav className="flex flex-col gap-4 w-full px-4">
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-orange-200 hover:bg-orange-300 text-brown-900 font-medium transition" onClick={() => setOpenPaymentModal(true)}>
            <span className="text-2xl text-orange-600"><AiOutlineSend /></span>
            Send Payment
          </button>
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-amber-200 hover:bg-amber-300 text-brown-900 font-medium transition" onClick={() => setOpenMintModal(true)}>
            <span className="text-2xl text-amber-700"><AiOutlineStar /></span>
            Mint NFT
          </button>
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-yellow-200 hover:bg-yellow-300 text-brown-900 font-medium transition" onClick={() => setOpenTokenModal(true)}>
            <span className="text-2xl text-yellow-700"><BsArrowUpRightCircle /></span>
            Create Token
          </button>
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-orange-100 hover:bg-orange-200 text-brown-900 font-medium transition" onClick={() => setOpenAppCallsModal(true)}>
            <span className="text-2xl text-orange-700"><AiOutlineDeploymentUnit /></span>
            Contract Interactions
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-start py-12 px-6 z-10 relative">
        <header className="w-full max-w-3xl text-center mb-10">
          <h2 className="flex items-center justify-center gap-3 text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-700 to-yellow-600 mb-4">
            <span>🍂 Autumn on Algorand 🍁</span>
            <span className="text-5xl">🎃</span>
          </h2>
          <p className="text-amber-900 max-w-2xl mx-auto font-medium">
            Celebrate the season! Connect your wallet, send transactions, mint NFTs, create tokens, and interact with contracts — all with a festive autumn vibe.
          </p>
        </header>
        <section className="w-full max-w-2xl flex flex-col gap-8">
          {activeAddress ? (
            <>
              {/* Send Payment Card */}
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-orange-200 via-amber-100 to-yellow-200 rounded-2xl border border-orange-400 shadow-lg relative">
                <span className="text-5xl opacity-40 absolute right-6 top-6">🎃</span>
                <span className="text-4xl text-orange-600"><AiOutlineSend /></span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Send Payment</h3>
                  <p className="text-sm text-amber-900 mb-4">Try sending 1 ALGO to any address on TestNet. This helps you understand wallet transactions.</p>
                  <button className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition" onClick={() => setOpenPaymentModal(true)}>Open</button>
                </div>
              </div>

              {/* Mint NFT Card */}
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-amber-200 via-orange-100 to-yellow-200 rounded-2xl border border-amber-400 shadow-lg relative">
                <span className="text-5xl opacity-40 absolute left-6 bottom-6">🎃</span>
                <span className="text-4xl text-amber-700"><AiOutlineStar /></span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mint NFT</h3>
                  <p className="text-sm text-amber-900 mb-4">Upload an image and mint it as an NFT on Algorand with IPFS metadata stored via Pinata.</p>
                  <button className="px-6 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold transition" onClick={() => setOpenMintModal(true)}>Open</button>
                </div>
              </div>

              {/* Create Token Card */}
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-yellow-200 via-orange-100 to-amber-200 rounded-2xl border border-yellow-400 shadow-lg relative">
                <span className="text-5xl opacity-40 absolute right-6 bottom-6">🎃</span>
                <span className="text-4xl text-yellow-700"><BsArrowUpRightCircle /></span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create Token (ASA)</h3>
                  <p className="text-sm text-amber-900 mb-4">Spin up your own Algorand Standard Asset (ASA) in seconds. Perfect for testing token creation.</p>
                  <button className="px-6 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition" onClick={() => setOpenTokenModal(true)}>Open</button>
                </div>
              </div>

              {/* Contract Interactions Card */}
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-orange-100 via-amber-200 to-yellow-100 rounded-2xl border border-amber-400 shadow-lg relative">
                <span className="text-5xl opacity-40 absolute left-6 top-6">🎃</span>
                <span className="text-4xl text-orange-700"><AiOutlineDeploymentUnit /></span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contract Interactions</h3>
                  <p className="text-sm text-amber-900 mb-4">Interact with a simple Algorand smart contract to see how stateful dApps work on chain.</p>
                  <button className="px-6 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold transition" onClick={() => setOpenAppCallsModal(true)}>Open</button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-amber-700 mt-12">
              <p>🍁 Connect your wallet first to unlock the autumn features below. 🍂</p>
            </div>
          )}
        </section>
        {/* Modals */}
        <ConnectWallet openModal={openWalletModal} closeModal={() => setOpenWalletModal(false)} />
        <Transact openModal={openPaymentModal} setModalState={setOpenPaymentModal} />
        <NFTmint openModal={openMintModal} setModalState={setOpenMintModal} />
        <Tokenmint openModal={openTokenModal} setModalState={setOpenTokenModal} />
        <AppCalls openModal={openAppCallsModal} setModalState={setOpenAppCallsModal} />
      </main>
    </div>
  )
}

export default Home
