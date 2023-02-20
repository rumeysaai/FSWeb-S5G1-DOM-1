const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
/*------NAV BAR ÇÖZÜM------
//ÇÖZÜM1
const navArr =[];
for(let key in siteContent.nav){

  navArr.push(siteContent.nav[key]);
}
for(let i=0; i<navArr.length; i++)
{
  document.getElementsByTagName("a")[i].textContent = navArr[i];
  document.getElementsByTagName("a")[i].classList.add("italic");
}
*/

//ÇÖZÜM 2
const navList = document.querySelectorAll("nav a");

const navArray = navList.forEach((element, index)=>{
  (element.textContent = siteContent.nav[`nav-item-${index+1}`]);
});

for(let i=0; i<navList.length; i++)
{
  navList[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}/*
//ÇÖZÜM 3
[...navList].map((element, index)=>{
  navList[index].textContent = siteContent.nav[`nav-item-${i+1}`];
  navList[index].setAttribute("class","italic");
});*/

document.getElementById("logo-img").setAttribute("src","http://localhost:9000/img/logo.png" );

document.querySelector("h1").textContent =siteContent.cta.h1;
document.querySelector("button").textContent =siteContent.cta.button;

document.getElementById("cta-img").setAttribute("src", "http://localhost:9000/img/cta.png"); 


const contentArr=[];
for(let key in siteContent["ana-içerik"])
{
  contentArr.push(siteContent["ana-içerik"][key]);
}

for(let i =0; i<contentArr.length; i++)
{
  if(i % 2==0 )
  {
    document.getElementsByTagName("h4")[i/2].textContent = contentArr[i];
  }
  if(i %2 == 1)
  {
    document.getElementsByTagName("p")[Math.floor(i/2)].textContent = contentArr[i];
  }
}
document.querySelector("#middle-img").setAttribute("src", "http://localhost:9000/img/accent.png");

document.getElementsByTagName("h4")[5].textContent = "İletişim";
document.getElementsByTagName("p")[5].textContent = siteContent.iletisim.adres;
document.getElementsByTagName("p")[6].textContent = siteContent.iletisim.telefon;
document.getElementsByTagName("p")[7].textContent = siteContent.iletisim.email;


//footer
const footerList = document.querySelector("footer a");
for(let i=0; i<footerList.length; i++)
{
  footerList[i].textContent = siteContent.footer.copyright;
}