import { Buffer } from 'buffer';
if (typeof window !== 'undefined') {
    window.Buffer = Buffer;
}

import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

// IMPORTANT: This provides the default purple styling for the wallet button
import '@solana/wallet-adapter-react-ui/styles.css';

export const Solbutton = () => {
    const network = WalletAdapterNetwork.Devnet; 
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    
    const wallets = useMemo(() => [
        new PhantomWalletAdapter(), 
        new SolflareWalletAdapter()
    ], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <PaymentPage />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const PaymentPage = () => {
    const { connection } = useConnection(); 
    const { publicKey, sendTransaction } = useWallet(); 

    const handlePayment = async () => {
        if (!publicKey) return alert("Connect your wallet first!");

        try {
            const transaction = new Transaction();

            const sendSol = SystemProgram.transfer({
                fromPubkey: publicKey, 
                toPubkey: new PublicKey("4wXhVfzhPQwNM62Pmv47G88y8PhGcnpraNeV23tBBTkt"), 
                lamports: 0.01 * LAMPORTS_PER_SOL, 
            });

            transaction.add(sendSol);

            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');
            
            alert("Payment Sent! Signature: " + signature);
        } catch (error) {
            console.error(error);
            alert("User cancelled or transaction failed.");
        }
    };

    return (
        <div style={cardStyle}>
            <h2>Solana Checkout</h2>
            <p>Status: {publicKey ? "✅ Connected" : "❌ Not Connected"}</p>
            
            <div style={{ marginBottom: '20px' }}>
                <WalletMultiButton />
            </div>

            <button 
                onClick={handlePayment} 
                style={publicKey ? payButtonStyle : disabledButtonStyle}
                disabled={!publicKey}
            >
                Pay 0.01 SOL
            </button>
        </div>
    );
};

// Minimal styles for the card and buttons
const cardStyle = { 
    padding: '20px', 
    borderRadius: '12px', 
    background: 'white', 
    border: '1px solid #eaeaea',
    textAlign: 'center' 
};

const payButtonStyle = { 
    backgroundColor: '#512da8', 
    color: 'white', 
    padding: '12px 24px', 
    border: 'none', 
    borderRadius: '8px', 
    cursor: 'pointer', 
    fontSize: '16px', 
    fontWeight: 'bold' 
};

const disabledButtonStyle = { 
    backgroundColor: '#ccc', 
    color: '#666', 
    padding: '12px 24px', 
    border: 'none', 
    borderRadius: '8px', 
    cursor: 'not-allowed', 
    fontSize: '16px' 
};

export default Solbutton;