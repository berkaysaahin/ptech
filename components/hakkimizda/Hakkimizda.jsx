"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const hakkimizda = () => {

  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <h3 className="w3-cursive" color="#CCFFCC"><b/>Kuruluşumuz</h3><br/>
      <p className="px-1">
        Palmtech, 2023 yılında, elektronik ürünlere olan ilginin artmasıyla birlikte, teknoloji alanındaki gelişmeleri takip eden ve bu gelişmeleri Türkiye'deki tüketicilerle buluşturmak isteyen iki genç girişimci tarafından kuruldu.
      </p><br/>
      <p>
        Kurucularımız, elektronik ürünlere olan tutkularını ve bu alandaki deneyimlerini birleştirerek, Türkiye'nin en güvenilir ve en geniş ürün yelpazesine sahip elektronik ürün satış sitesini oluşturmayı hedeflediler.
      </p><br/>
      <p>
         Palmtech, kuruluşundan bu yana, hızlı bir büyüme trendi yakaladı ve kısa sürede Türkiye'nin lider elektronik ürün satış sitelerinden biri haline geldi.
      </p><br/><hr/>
      <h2>Ne Yapıyoruz?</h2><br/>
      <p>
        Palmtech, cep telefonları, bilgisayarlar, tabletler, televizyonlar, beyaz eşyalar, küçük ev aletleri, oyun konsolları, ses sistemleri ve daha pek çok elektronik ürünün satışını gerçekleştiriyor.
      </p><br/>
      <p>
        Palmtech, ürün yelpazesini sürekli olarak genişletiyor ve tüketicilere en yeni ve en kaliteli elektronik ürünleri sunmaya çalışıyor.
      </p><br/>
      <p>
         Palmtech, müşterilerine en iyi alışveriş deneyimini sunmak için çalışıyor. Bu doğrultuda, hızlı ve güvenli teslimat, kolay iade ve değişim, uygun fiyatlar ve zengin ödeme seçenekleri gibi avantajlar sunuyor.
      </p><br/><hr/>
      <h2>Stratejimiz</h2><br/>
      <p>
        Palmtech'in stratejisi, Türkiye'nin en güvenilir ve en geniş ürün yelpazesine sahip elektronik ürün satış sitesi olmaktır.
      </p><br/>
      <p>
      Bu doğrultuda, Palmtech, aşağıdaki hedeflere odaklanıyor:<br/>
        - Ürün yelpazesini sürekli olarak genişletmek ve tüketicilere en yeni ve en kaliteli elektronik ürünleri sunmak.<br/>
        - Müşterilerine en iyi alışveriş deneyimini sunmak.<br/>
        - Türkiye'nin en güvenilir elektronik ürün satış sitesi olmak.
      </p><br/>
      <p>
         Palmtech, bu hedeflere ulaşmak için aşağıdaki stratejileri uyguluyor:<br/>
        - Yenilikçi teknolojileri takip etmek ve bu teknolojileri iş süreçlerine entegre etmek.<br/>
        - Müşteri odaklı bir yaklaşım benimsemek ve müşteri memnuniyetini her zaman ön planda tutmak.<br/>
        - Kaliteli ve güvenilir tedarikçilerle çalışmak.
      </p><br/>
      <p>
        Palmtech, bu stratejileri başarıyla uygulayarak, Türkiye'nin lider elektronik ürün satış sitelerinden biri olmaya devam edecek.
      </p><br/>
      </div>
  );
};

export default hakkimizda;
