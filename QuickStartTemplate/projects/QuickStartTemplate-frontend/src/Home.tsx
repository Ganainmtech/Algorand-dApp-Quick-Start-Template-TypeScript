// src/Home.tsx
// PALMFARM.AI Landing Page (Clean static design, no motion)

import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import {
  AiOutlineSend,
  AiOutlineStar,
  AiOutlineDeploymentUnit,
} from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'
import { MdOutlineAgriculture, MdOutlineToken, MdOutlineInsights } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'

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
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-gray-100 flex flex-col font-sans">
      {/* ---------------- Navbar ---------------- */}
      <nav className="w-full bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-500">
          PALMFARM.AI
        </h1>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-sm font-semibold text-white transition"
          onClick={() => setOpenWalletModal(true)}
        >
          <BsWallet2 className="text-lg" />
          <span>{activeAddress ? 'Wallet Connected' : 'Connect Wallet'}</span>
        </button>
      </nav>

      {/* ---------------- Hero Section ---------------- */}
      <header className="text-center py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none" />
        <h2 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-500 mb-6">
          Empowering Carbon Smart Agriculture and Easily Stake ALGO & Earn PALM Tokens
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          PALMFARM.AI connects DeFi and regenerative agriculture — tokenize palm assets, stake PALM, and earn yield while supporting carbon-positive farming.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setOpenWalletModal(true)}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg transition"
          >
            Launch App
          </button>
        </div>
      </header>

      {/* ---------------- How It Works ---------------- */}
      <section className="py-16 bg-neutral-900/60 border-y border-neutral-800">
        <h3 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-500 mb-10">
          How It Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center bg-neutral-800 p-6 rounded-2xl border border-neutral-700 hover:border-emerald-500 transition">
            <MdOutlineToken className="text-5xl text-emerald-400 mb-4" />
            <h4 className="font-semibold text-lg mb-2">1. Tokenize / Buy RWA</h4>
            <p className="text-gray-400 text-sm">
              Convert real-world palm assets into digital tokens on Algorand.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-neutral-800 p-6 rounded-2xl border border-neutral-700 hover:border-emerald-500 transition">
            <MdOutlineAgriculture className="text-5xl text-lime-400 mb-4" />
            <h4 className="font-semibold text-lg mb-2">2. Stake / Farm</h4>
            <p className="text-gray-400 text-sm">
              Stake PALM tokens to fund eco-friendly palm farms and earn yield.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-neutral-800 p-6 rounded-2xl border border-neutral-700 hover:border-emerald-500 transition">
            <MdOutlineInsights className="text-5xl text-teal-400 mb-4" />
            <h4 className="font-semibold text-lg mb-2">3. Earn Yield</h4>
            <p className="text-gray-400 text-sm">
              Receive sustainable APY from staking and verified palm farm returns.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-neutral-800 p-6 rounded-2xl border border-neutral-700 hover:border-emerald-500 transition">
            <FaRegHandshake className="text-5xl text-green-400 mb-4" />
            <h4 className="font-semibold text-lg mb-2">4. Governance</h4>
            <p className="text-gray-400 text-sm">
              Use PALM to vote on projects and influence carbon farming governance.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Core Features ---------------- */}
      <main className="flex-1 px-6 py-16">
        {activeAddress ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-neutral-800 rounded-2xl border border-neutral-700 hover:border-emerald-500 transition">
              <AiOutlineSend className="text-4xl mb-3 text-emerald-400" />
              <h3 className="text-lg font-semibold mb-2">Send Payment</h3>
              <p className="text-sm text-gray-400 mb-4">
                Transfer ALGO or PALM tokens to any address on TestNet.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition"
                onClick={() => setOpenPaymentModal(true)}
              >
                Open
              </button>
            </div>

            <div className="p-6 bg-neutral-800 rounded-2xl border border-neutral-700 hover:border-pink-500 transition">
              <AiOutlineStar className="text-4xl mb-3 text-pink-400" />
              <h3 className="text-lg font-semibold mb-2">Mint NFT</h3>
              <p className="text-sm text-gray-400 mb-4">
                Create palm-based carbon credit NFTs with IPFS metadata.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-semibold transition"
                onClick={() => setOpenMintModal(true)}
              >
                Open
              </button>
            </div>

            <div className="p-6 bg-neutral-800 rounded-2xl border border-neutral-700 hover:border-purple-500 transition">
              <BsArrowUpRightCircle className="text-4xl mb-3 text-purple-400" />
              <h3 className="text-lg font-semibold mb-2">Create PALM Token</h3>
              <p className="text-sm text-gray-400 mb-4">
                Deploy your own PALM-based Algorand Standard Asset (ASA).
              </p>
              <button
                className="w-full py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-semibold transition"
                onClick={() => setOpenTokenModal(true)}
              >
                Open
              </button>
            </div>

            <div className="p-6 bg-neutral-800 rounded-2xl border border-neutral-700 hover:border-amber-500 transition">
              <AiOutlineDeploymentUnit className="text-4xl mb-3 text-amber-400" />
              <h3 className="text-lg font-semibold mb-2">Contract Interactions</h3>
              <p className="text-sm text-gray-400 mb-4">
                Interact with PALMFARM smart contracts and explore DeFi utilities.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold transition"
                onClick={() => setOpenAppCallsModal(true)}
              >
                Open
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-12">
            <p>⚡ Connect your wallet to unlock PALMFARM features.</p>
          </div>
        )}
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="py-8 border-t border-neutral-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PALMFARM.AI — Powered by Algorand
      </footer>

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
