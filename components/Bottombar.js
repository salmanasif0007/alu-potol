import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Bottombar() {
    return (
        <div className="bottombar">
            <button className="bottombar__chat">
            <Link href="/chat">
                <Image
                    src="/chat.png"
                    width={400}
                    height={300}
                />
            </Link>
            </button>
            <Link href="/"><button className="bottombar__start"> Start Shopping</button></Link>
            <Link href="cart">
                <button className="bottombar__cart">
                    <Image
                        src="/cart.png"
                        width={150}
                        height={110}
                    />
                </button>
            </Link>
        </div>
    )
}

export default Bottombar
