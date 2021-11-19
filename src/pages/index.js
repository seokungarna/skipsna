import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import lastare1 from '../assets/images/lastare1.jpg';
import lastare2 from '../assets/images/lastare2.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              {/* <a href="/#" className="button primary">
                Explore
              </a> */}
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="ett">
        <a href="#ett" className="more">
          Vår hjullastare
        </a>
      </Scroll>
    </section>

    <section id="ett" className="wrapper style1 special">
      <div className="inner">
        {/* <header className="major"> */}
          <h2>
          MASKINER I LAGER FÖR OMGÅENDE LEVERANS -
          </h2>
         <h3>
            PROVKÖR I NORRTÄLJE - RING 070-949 18 77 FÖR TIDSBOKNING
            </h3>
          <p>
          SVERIGES GARANTERAT MEST PRISVÄRDA MASKIN
          
          </p>
        {/* </header> */}
        <ul className="icons major">
          <li>
            {/* <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span> */}
            FRÅN 129000 :- EX MOMS<br />
            BEGRÄNSAT ANTAL!<br />
            FÖRST TILL KVARN!

          </li>
          <li>
          PRISET INKLUDERAR
          FYRHJULSDRIFT<br />
          TREDJEFUNKTION<br />
          CONVERTER<br />
          ...OCH MYCKET MER!
            {/* <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span> */}
          </li>
          <li>
          LEASING FRÅN<br />
          2990 KR/MÅN
            {/* <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span> */}
          </li>
        </ul>
      </div>
    </section>

    <section id="tva" className="wrapper style5 special">
      <div className="inner">
        <header className="major">
          <h2>ÖVERSIKT</h2>
          <p>
          Vår hjullastare Skipsna T3600 4WD är en välbyggd och kraftfull liten midjestyrd minilastare som passar utmärkt för en mängd ändamål, 
          både för privat bruk men även mer professionella tillämpningar inom lantbruk, 
          samfälligheter och entreprenadverksamhet. Med sitt oerhört konkurrenskraftiga pris för en lastmaskin kan den utgöra ett mångsidigt komplement till en traditionell maskinpark. 
          Endast fantasin sätter gränser för hur Skipsna T3600 4WD kan användas!
           </p>
           <p>
            Utrusta den med plogblad och snöskopa och du har en kraftfull snöröjare i vinter i vilken du sitter varmt och vindskyddat, alltså mycket bättre än ATV-motorcykel med plogblad. 
            Med sin vikt om ca 2850 kg har man även kraft att flytta stora mängder snö jämfört med en lättare ATV.<br />
            Vi inkluderar även 1 års reservdelsgaranti.
          </p>
          <hr />
        </header>
        <h2>NY UPPDATERAD MODELL, STANDARDUTRUSTNING</h2>
        <div className="row">
						<div className="col-8 col-12-medium">
              <ul>
                <li>Fyrhjulsdrift</li>
                <li>Converter, Hög & låg, fram & back</li>
                <li>Trekanalshydraulik med joystick</li>
                <li>Dieselmotor, 3-cyl, 25kw</li>
                <li>Lyftkapacitet, 800-1000 kg</li>
                <li>Redskapsfäste ”EURO”, Trima-kompatibelt, hydrauliskt</li>
                <li>Komfortkupé med fjädrad stol och reglerbar ratt</li>
                <li>Belysning</li>
                <li>Värmesystem i kupén</li>
            </ul>
          </div>
        </div>


      </div>
    </section>
    
    <section id="tre" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
          VÄLANPASSAD
          </h2>
          </header>
         <p>Med sitt nya redskapsfäste kan maskinen kompletteras med mängder av olika redskap från alla större leverantörer.</p> 
         <p>Trots sitt mycket låga pris upplevs vår lastmaskin Skipsna T3600 4WD som kraftfull och välbyggd och den möter upp mot även höga förväntningar på funktion och kvalitet.
            Detta är en redskapsbärare som upplevs som förbluffande stark med en hydraulik som orkar mer än man behöver.
            I denna lastare sitter man bekvämt och har mycket god sikt åt alla håll.</p>
         <p>Det smidiga formatet (4600x1600x2550mm) gör att den går in genom en vanlig garageport och den tar inte mer plats än en vanlig personbil.</p>   
         <h2>
          DETALJER
          </h2>
          <h4>MÅTT:</h4>
          <ul>
          <li>Arbetsvikt: 2,850kg</li>
          <li> Dimensioner (L x B x H): 4,600x 1,600 x 2,550mm</li>
          <li> Spårbas: 1,285mm</li>
          <li>  Hjulbas: 2,170mm</li>
          <li>  Svängdiameter: 4,600mm</li>
          <li>  Markfrigång: 240mm</li>
          <li>  Högsta dumphjöd: 2,300mm</li>
          <li>  Räckvidd högst upp: 750mm</li>
          <li>  Lyfttid: 4 sekunder</li>
          <li>  Hydraulisk cykeltid: 9 sekunder</li>
          <li>  Maximal lutningsvinkel: 300</li>
          <li>  Brytkraft, lyftcylinder: 28kN</li>

          </ul>
       
        </div>
     </section>     

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={lastare1} alt="Skipsna T3600 4WD" />
        </div>
        <div className="content">
          <h2>
          HJULLASTARE SKIPSNA T3600 4WD
            <br />
            129000 kr ex moms
          </h2>
          <p>
          Vår hjullastare Skipsna T3600 4WD är en välbyggd och kraftfull liten midjestyrd minilastare som passar utmärkt för en mängd ändamål, både för privat bruk men även mer professionella tillämpningar inom lantbruk, samfälligheter och entreprenadverksamhet. Med sitt oerhört konkurrenskraftiga pris för en lastmaskin kan den utgöra ett mångsidigt komplement till en traditionell maskinpark. Endast fantasin sätter gränser för hur Skipsna T3600 4WD kan användas!

Komplett med:
Fyrhjulsdrift
Converter, Hög & låg, fram & back
Trekanalshydraulik med joystick
Dieselmotor, 3-cyl, 25kw
Lyftkapacitet, 800-1000 kg
Redskapsfäste ”EURO”, Trima-kompatibelt, hydrauliskt
Komfortkupé med fjädrad stol och reglerbar ratt
Belysning
Värmesystem i kupén
          </p>
          <a href="/#" className="button">Mer info</a>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={lastare2} alt="HJULLASTARE SKIPSNA T3600 4WD, UTAN KABIN" />
        </div>
        <div className="content">
          <h2>
          HJULLASTARE SKIPSNA T3600 4WD, UTAN KABIN
            <br />
            119000 kr ex moms
          </h2>
          <p>
          På vår hjullastare Skipsna T3600 4WDC har vi tagit bort kabinen, vilket ger ännu bättre sikt och framkomlighet i trånga utrymmen utan att försämra prestandan. Särskilt bekvämt för den som har ett lågt garage.

          Komplett med:
          EURO-fäste hydrauliskt
          Converter
          Motorvärmare 230v
          4-kanalshydraulik med joystick
          Led-belysning
          </p>
          <a href="/#" className="button">Mer info</a>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
