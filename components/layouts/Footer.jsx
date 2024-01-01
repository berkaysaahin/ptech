"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import { useSession } from "next-auth/react";
import AuthContext from "@/context/AuthContext";

const Footer = () => {
  const { user, setUser } = useContext(AuthContext);

  const { data } = useSession();

  console.log(data);

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);

  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
  </head>

  return (
    <footer className="text-center text-black" style={{ backgroundColor: '#8cd02c'}}>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <div className="container max-w-screen-xl mx-auto px-4">
        <section className="mt-5 ">
          <div className="row d-flex pt-5" style={{ CSSLayerBlockRule }}>
            <div className="col-6 col-md-4">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/" className="text-black">Ürünler</a>
              </h6>
            </div>
            <div className="col-6 col-md-4">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/hakkimizda" className="text-black">Hakkımızda</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black">Sıkca Sorulan Sorular</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="https://www.instagram.com/palmtechh?igsh=cXRpanc4dGRna203" className="text-black">
                  Instagram
                </a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="https://twitter.com/palm_tech90417" className="text-black">Twitter</a>
              </h6>
            </div>
          </div>
        </section>
        <hr className="my-5" />
        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Merhabalar efendim.<br />
                Biz PalmTech olarak paranızı gönül rahatlığı ile yiyecek olduğunuz kapitalist düzene hizmet ettirecek olan satıcıyız. Gönül rahatlığı ile paranızı kaptırabilirsiniz.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center mb-5">
          <a href="https://twitter.com/palm_tech90417" className="text-black me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://mail.google.com/mail/" className="text-black me-4">
            <i className="fab fa-google" />
          </a>
          <a href="https://www.instagram.com/palmtechh?igsh=cXRpanc4dGRna203" className="text-black me-4">
            <i className="fab fa-instagram" />
          </a>
        </section>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          PalmTech
        </div>
      </div>
    </footer>
  );
};

export default Footer;
