import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {QRCodeSVG} from 'qrcode.react';

function Home() {
  const [data,setData]=useState("");
  fetch("/jckimble.vcf").then(data=>data.text()).then(data=>setData(data)).catch(console.log)
  return <>
  <main className='profile'>
    <header>
      <ul className='profile-vcf'>
        <li>
          <a href="#qrcode" data-tooltip="QrCode">
            <FontAwesomeIcon icon={["fas", "qrcode"]} />
          </a>
        </li>
        <li>
          <a href="/jckimble.vcf" download="jckimble.vcf" data-tooltip="vCard">
            <FontAwesomeIcon icon={["fas", "address-card"]} />
          </a>
        </li>
      </ul>
      <a className='profile-img' href="https://jckimble.com/" data-vcard='url'>
        <img src='https://0.gravatar.com/avatar/43799da335050c4cebcc859ef15dd939?s=150' alt='James C Kimble' data-vcard='photo' />
      </a>
      <h1 data-vcard='name'><span data-vcard='givenName'>James</span> C <span data-vcard='familyName'>Kimble</span></h1>
      <h2 data-vcard='title'>Software Consultant</h2>
      <p>James is a passionate software engineer &amp; pool player that dedicates most of his time between automating everything he can and playing pool.</p>
      <p>His primary focus is in security and automation. Even the best written and looking sites are worthless if they are easily hacked. The human element is always the weakest attack point.</p>
    </header>
    <ul className='profile-social-links'>
    <li>
        <a href='https://twitter.com/jckimble601' data-tooltip='Twitter' data-vcard='url'>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/james-kimble-865092212/' data-tooltip='LinkedIn' data-vcard='url'>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
      </li>
      <li>
        <a href='https://github.com/jckimble' data-tooltip='GitHub' data-vcard='url'>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </li>
      <li>
        <a href='mailto:me@jckimble.com' data-tooltip='Email' data-vcard='email'>
          <FontAwesomeIcon icon={["fas", "envelope"]} />
        </a>
      </li>
      <li>
        <a href='tel:+16017484093' data-tooltip='Phone' data-vcard='phone'>
          <FontAwesomeIcon icon={["fas", "phone"]} />
        </a>
      </li>
    </ul>
  </main>
  <a href="#" className="lightbox" id="qrcode"><QRCodeSVG value={ data } /></a>
  </>;
}

export default Home;
