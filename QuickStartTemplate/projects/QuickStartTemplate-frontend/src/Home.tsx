// src/Home.tsx
// Redesigned landing UI for PALMFARM Algorand dApp
// Includes modern hero layout, gradient accents, and improved responsiveness.

import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import {
  AiOutlineWallet,
  AiOutlineSend,
  AiOutlineStar,
  AiOutlineDeploymentUnit,
} from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'

// Frontend modals
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'
import AppCalls from './components/AppCalls'

const Home: React.FC = () => {
  const [openWalletModal, setOpenWalletModal] = useState(false)
  const [openPaymentModal, setOpenPaymentModal] = useState(false)
  const [openMintModal, setOpenMintModal] = useState(false)
  const [openTokenModal, setOpenTokenModal] = useState(false)
  const [openAppCallsModal, setOpenAppCallsModal] = useState(false)

  const { activeAddress } = useWallet()

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-gray-100 flex flex-col">
      {/* ---------------- Navbar ---------------- */}
      <nav className="w-full backdrop-blur-lg bg-neutral-900/60 border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          PALMFARM dApp
        </h1>

        <button
          onClick={() => setOpenWalletModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-500 hover:opacity-90 text-sm font-semibold text-white transition"
        >
          <BsWallet2 className="text-lg" />
          <span>{activeAddress ? 'Wallet Connected' : 'Connect Wallet'}</span>
        </button>
      </nav>

      {/* ---------------- Hero Section ---------------- */}
      <header className="flex flex-col items-center text-center px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mb-4 animate-gradient-x">
          Empowering Carbon Smart Agriculture
        </h2>
        <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mb-8">
          PALMFARM connects palm oil farmers, carbon markets, and investors on the Algorand blockchain.
          Tokenize your carbon credits, mint NFTs for supply-chain assets, and trade transparently.
        </p>

        <button
          onClick={() => setOpenWalletModal(true)}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
          Get Started
        </button>
      </header>

      {/* ---------------- Features Grid ---------------- */}
      <main className="flex-1 px-6 pb-16">
        {activeAddress ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature Card Template */}
            {[
              {
                title: 'Send Payment',
                desc: 'Transfer ALGO instantly on TestNet and understand wallet transactions.',
                icon: <AiOutlineSend className="text-4xl text-green-400 mb-4" />,
                color: 'from-green-500 to-emerald-600',
                action: () => setOpenPaymentModal(true),
              },
              {
                title: 'Mint NFT',
                desc: 'Upload an image and mint your unique carbon NFT on Algorand.',
                icon: <AiOutlineStar className="text-4xl text-pink-400 mb-4" />,
                color: 'from-pink-500 to-rose-600',
                action: () => setOpenMintModal(true),
              },
              {
                title: 'Create Token (ASA)',
                desc: 'Generate Algorand Standard Assets for your farm or carbon credits.',
                icon: <BsArrowUpRightCircle className="text-4xl text-purple-400 mb-4" />,
                color: 'from-purple-500 to-indigo-600',
                action: () => setOpenTokenModal(true),
              },
              {
                title: 'Smart Contract Demo',
                desc: 'Interact with a stateful contract to simulate real dApp operations.',
                icon: <AiOutlineDeploymentUnit className="text-4xl text-amber-400 mb-4" />,
                color: 'from-amber-500 to-orange-600',
                action: () => setOpenAppCallsModal(true),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group p-6 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-cyan-500 hover:shadow-cyan-500/10 shadow-md transition-all"
              >
                <div className="flex flex-col items-start text-left">
                  {card.icon}
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 mb-6">{card.desc}</p>
                  <button
                    onClick={card.action}
                    className={`w-full py-2 rounded-lg bg-gradient-to-r ${card.color} text-white font-semibold hover:scale-[1.02] transition-transform`}
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-12">
            <p>⚡ Connect your wallet to unlock PALMFARM Web3 tools.</p>
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

