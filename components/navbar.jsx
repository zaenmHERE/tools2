'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Navbar() {
  const [user, setUser] = useState(null)
  useEffect(() => { supabase.auth.getUser().then(({data}) => setUser(data.user)); const {data:{subscription}}=supabase.auth.onAuthStateChange((_e,s)=>setUser(s?.user??null)); return ()=>subscription.unsubscribe() }, [])
  return <nav className="nav"><Link className="brand" href="/">REZZ<span>TOOLS</span></Link><div className="navlinks"><Link href="/">Home</Link><Link href="/premium">Premium</Link>{user ? <><Link href="/dashboard">Dashboard</Link><button className="linkbtn" onClick={async()=>{await supabase.auth.signOut();location.href='/'}}>Logout</button></> : <Link className="pill" href="/login">Login</Link>}</div></nav>
}
