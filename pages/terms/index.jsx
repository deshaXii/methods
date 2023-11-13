"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Accordion from "react-bootstrap/Accordion";

import dynamic from "next/dynamic";
import { FormattedMessage } from "react-intl";

const Navbar = dynamic(() => import("@/Components/navbar"), { ssr: false });

const page = () => {
  return (
    <>
      <section className="home">
        <div className="back_home">
          <Navbar />

          <div className="position-relative  home_3">
            <div className="logo_home ">
              <div data-aos="fade-down" data-aos-delay="100">
                <img src="./img/Group 5733.png" alt="" loading="lazy" />
              </div>
              <h2
                className="d-flex align-items-center writeit justify-content-center mt-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <FormattedMessage id="perfecting-your-way" />
              </h2>{" "}
            </div>
            <div className="h__img">
              <img
                src="./img/DSC-2.png"
                alt=""
                className="w-100 home_img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className=" Privacy ">
          <h2>Privacy Policy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            maxime?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            tempore consectetur, atque hic nihil nisi voluptates accusantium
            magni culpa eligendi error repudiandae fugiat porro minus amet
            expedita cupiditate non, et ipsum. Sapiente quam atque, aliquid nam
            saepe eligendi facilis! Fugiat ut officia, molestiae deleniti velit
            eum itaque omnis mollitia earum est quasi accusantium accusamus,
            quibusdam voluptates fuga. Voluptate nostrum quos nam repellendus
            corrupti, iure dicta officiis dolorum ipsa quaerat, harum atque
            expedita non, architecto itaque laboriosam ut labore quas laudantium
            consequuntur! Voluptas totam dolor tempore possimus unde commodi
            sint nostrum reprehenderit ab id sit alias consectetur praesentium
            quasi, nihil ullam! Rerum nisi magni voluptas, ad deleniti quia
            similique sequi aut officia dicta veniam iste consectetur quas vel
            excepturi? Et, numquam!
          </p>
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            rem dolorum a autem tempora! Aut totam impedit ullam ad vitae, nulla
            minima tempora est ea illo obcaecati velit cumque voluptas eligendi
            dolorem at nostrum quidem quaerat nesciunt! Harum veritatis sunt qui
            cupiditate totam ab! Eum pariatur, laboriosam itaque culpa corrupti
            deserunt at necessitatibus sunt explicabo dignissimos incidunt
            doloremque quis exercitationem ducimus perferendis, quibusdam quo
            atque placeat praesentium odio delectus tempore.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            debitis dolorum tempora optio aspernatur consectetur eius molestias
            deserunt qui modi hic nisi repellendus velit neque laboriosam
            commodi quis nostrum est sapiente illo! Nesciunt unde aut laboriosam
            incidunt officiis dolore accusamus sit consequatur expedita aliquam.
            Totam provident a deserunt labore officia voluptas pariatur at ad,
            laboriosam quas officiis saepe, dolorum voluptates sint eius
            obcaecati atque error itaque maxime possimus in est ipsum omnis.
            Accusamus eaque perspiciatis rerum alias quos velit autem.
          </p>
          <p>Recourse, Enforcement, and Liability</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            incidunt, voluptatum hic quis quasi asperiores alias nisi in
            laboriosam pariatur, labore repudiandae dolore quisquam nemo. Magni
            aut eligendi laudantium ipsam perspiciatis quibusdam quas optio
            dolorem ratione deserunt, nulla ad officiis deleniti neque vel quae
            ducimus voluptates officia. Ducimus maiores, ipsum sequi sed iure
            voluptates modi at eos necessitatibus, dolore, corrupti perferendis
            vitae sit velit! Officia magni perferendis vel doloribus, saepe quia
            ratione dolore laboriosam sapiente soluta vitae id labore iste
            magnam modi facere ut explicabo quam. Nam exercitationem blanditiis
            eligendi similique dicta molestias fugit harum ducimus laboriosam,
            aliquid maiores eaque?
          </p>

          <h2>Enforcement</h2>
          <p>
            All policies and practices described in this privacy policy are
            subject to our obligation to&nbsp; comply with applicable law,
            including any lawful request by public authorities. We may disclose
            any information necessary in order to investigate, prevent, or take
            action regarding illegal activities, suspected fraud, situations
            involving potential threats to the physical safety of any person,
            violations of our terms of service or other applicable agreement, or
            as otherwise required by law
          </p>
          <h2>Transfer of Ownership</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            laudantium libero saepe delectus cumque voluptas doloribus tempore
            nesciunt at explicabo deleniti eligendi perspiciatis deserunt ullam,
            vitae adipisci provident sequi? Quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa
            debitis sapiente nemo ad quisquam, vel eaque cupiditate aliquid,
            perspiciatis quod minima quia, reprehenderit sed dolorum suscipit
            voluptates vitae corrupti dicta. Nobis iure rem, eos atque
            architecto exercitationem voluptatem. Fuga?
          </p>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            officia voluptatem accusamus temporibus vel corporis beatae quo
            labore soluta, voluptate quia hic quaerat consequatur eum. Magnam,
            libero quibusdam commodi ab dolores necessitatibus aliquid, amet
            odio quasi temporibus a explicabo ex earum soluta vero eaque quo,
            quae repudiandae! Explicabo ad tempore commodi? Quo reprehenderit
            maxime sequi quod magni quae similique eveniet itaque iste, unde
            maiores optio adipisci ullam. Id recusandae quidem laudantium
            pariatur facilis esse quas eum dignissimos enim quia amet
            accusantium officia, eligendi a saepe nihil voluptatem eaque
            sapiente? Obcaecati nulla eveniet ipsum sunt dolores iusto
            necessitatibus, quia assumenda repellat.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
