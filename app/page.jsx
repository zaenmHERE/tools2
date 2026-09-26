'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { supabase } from '../lib/supabase'

export default function Home(){
 const [tools,setTools]=useState([]); const [cats,setCats]=useState([]); const [loading,setLoading]=useState(true)
 useEffect(()=>{(async()=>{const [{data:t},{data:c}]=await Promise.all([supabase.from('tools').select('id,name,slug,description,icon,required_role,category_id').eq('is_active',true).order('created_at',{ascending:false}),supabase.from('tool_categories').select('id,name,slug').order('name')]);setTools(t||[]);setCats(c||[]);setLoading(false)})()},[])
 return <><Navbar/><main className="container"><section className="hero"><div><div className="eyebrow">57+ TOOLS • REZZ TOOLS</div><h1>Tools that actually<br/><span>get things done.</span></h1><p>A clean dashboard for developer, text, web, utility and fun tools. Free tools stay free. Premium tools stay behind Premium.</p><div className="actions"><Link className="primary" href="/login">Start using tools</Link><Link className="secondary" href="/premium">View Premium</Link></div></div><div className="hero-card"><div className="orb">R</div><b>REZZ TOOLS</b><small>Simple. Fast. Useful.</small></div></section><section><div className="sectionhead"><div><span className="eyebrow">TOOLBOX</span><h2>All tools</h2></div><span className="count">{loading?'...':tools.length} tools</span></div>{loading?<div className="empty">Loading tools...</div>:<div className="grid">{tools.map(t=><Link className="tool" key={t.id} href={'/tools/'+t.slug}><div className="toolicon">{t.icon||'✦'}</div><div><h3>{t.name}</h3><p>{t.description||'Useful utility tool.'}</p></div>{t.required_role==='premium'&&<span className="badge">PREMIUM</span>}</Link>)}</div>}</section></main></>
}
