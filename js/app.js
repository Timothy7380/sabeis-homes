/* ===================== CONFIG ===================== */
var HOTEL = {
  name:"Sabeis Homes", whatsapp:"2349129992454", email:"sabeishomes@gmail.com",
  phones:["08069397507","09160291333"], cautionFee:50000
};

var NAV = [
  {h:"#/",        t:"Home"},
  {h:"#/apartments",  t:"Apartments"},
  {h:"#/about",   t:"About"},
  {h:"#/contact", t:"Contact"}
];

/* the price list, exactly as published — price is per night */
var APARTMENTS = [
  { id:"divine",   name:"Divine",    rate:73500 },
  { id:"heritage", name:"Heritage",  rate:73500 },
  { id:"electrum", name:"Electrum",  rate:73500 },
  { id:"sunset",   name:"Sunset",    rate:73500 },
  { id:"love",     name:"Love",      rate:84000 },
  { id:"square",   name:"Square",    rate:84000 },
  { id:"apex",     name:"Apex",      rate:105000 },
  { id:"cityview", name:"City View", rate:126000 }
];

var FAQ = [
  ["What does the apartment price cover?","The apartment price is the cost of booking or renting the apartment, quoted per night."],
  ["What is the caution fee?","A fixed caution fee of ₦50,000 is paid with your booking. It is refundable after inspection."],
  ["How do I book?","Use the Book now button, call us, or message us on WhatsApp. We confirm availability and the next steps with you directly."],
  ["Where are the apartments?","35, Baganju Street, behind Homat School, Igbogbo, Ikorodu, Lagos State."]
];

/* ===================== HELPERS ===================== */
var nf=new Intl.NumberFormat("en-NG",{maximumFractionDigits:0});
function money(n){ return "₦"+nf.format(Math.round(n)); }
function $(s,r){ return (r||document).querySelector(s); }
function aptById(id){ for(var i=0;i<APARTMENTS.length;i++){ if(APARTMENTS[i].id===id) return APARTMENTS[i]; } return APARTMENTS[0]; }
function iso(d){ var m=d.getMonth()+1,y=d.getDate(); return d.getFullYear()+"-"+(m<10?"0":"")+m+"-"+(y<10?"0":"")+y; }
function fmtDate(s){ if(!s) return "—"; var p=s.split("-"); return new Date(+p[0],+p[1]-1,+p[2])
  .toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"}); }
function nights(a,b){ if(!a||!b) return 0; return Math.max(0,Math.round((new Date(b+"T00:00")-new Date(a+"T00:00"))/86400000)); }
function waLink(t){ return "https://wa.me/"+HOTEL.whatsapp+"?text="+encodeURIComponent(t); }
/* real photography, keyed by the shot number in each caption — add to this map as more shots land */
var IMAGES = {
  "01":"img/shot-01.jpg",
  "02":"img/shot-02.jpg", "03":"img/shot-03.jpg", "04":"img/shot-04.jpg", "05":"img/shot-05.jpg",
  "06":"img/shot-06.jpg", "07":"img/shot-07.jpg", "08":"img/shot-08.jpg", "13":"img/shot-17.jpg",
  "15":"img/shot-07.jpg", "17":"img/shot-17.jpg", "18":"img/shot-18.jpg", "19":"img/shot-07.jpg",
  "24":"img/shot-24.jpg", "31":"img/shot-07.jpg", "33":"img/shot-33.jpg", "40":"img/shot-03.jpg",
  /* apartment bathroom / room-space detail shots */
  "02b":"img/shot-02b.jpg", "02c":"img/shot-02c.jpg",
  "03b":"img/shot-03b.jpg", "03c":"img/shot-03c.jpg",
  "04b":"img/shot-04b.jpg", "04c":"img/shot-04c.jpg",
  "05b":"img/shot-05b.jpg", "05c":"img/shot-05c.jpg",
  /* "around the house" gallery */
  "09":"img/shot-09.jpg", "10":"img/shot-10.jpg", "11":"img/shot-11.jpg",
  "12":"img/shot-12.jpg", "14":"img/shot-14.jpg",
  /* contact hero + about detail */
  "16":"img/shot-16.jpg", "30":"img/shot-30.jpg",
  /* about hero — the building, from across the street */
  "29":"img/shot-29.jpg"
};
function mark(i){
  /* solid geometric marks built from the monogram's hexagon, cycled per section */
  var H="M12 1 22 6.6v11.2L12 23.4 2 17.8V6.6z";            /* filled hexagon */
  var g=[
    '<rect x="2" y="2" width="20" height="20" rx="6"/>',                     /* 0 · stay — solid room */
    '<path d="M12 1.5c6 4.2 9 8.7 9 12.4A9 9 0 0 1 3 13.9c0-3.7 3-8.2 9-12.4z"/>', /* 1 · taste — drop */
    '<circle cx="8" cy="15" r="7"/><circle cx="16" cy="15" r="7" opacity=".55"/><circle cx="12" cy="7" r="7" opacity=".82"/>', /* 2 · gather — overlap */
    '<path d="'+H+'"/><rect x="2" y="20.6" width="20" height="3"/>',         /* 3 · hex on a bar */
    '<path d="M12 0.8 16.6 8 12 15.2 7.4 8z"/><path d="M12 8.8 16.6 16 12 23.2 7.4 16z" opacity=".38"/>', /* 4 · stacked diamonds */
    '<rect x="1.5" y="2" width="9" height="9"/><path d="M18 2.4 23 5.3v5.8L18 14l-5-2.9V5.3z"/><circle cx="6" cy="18.5" r="4.6"/>' /* 5 · trio */
  ];
  return '<svg class="mark" viewBox="0 0 24 24" aria-hidden="true">'+g[i%g.length]+'</svg>';
}
function photo(cls,shot,style){
  /* .photo__inner is the layer that parallaxes; drops a real <img> inside .photo__zoom when IMAGES has that shot */
  var code = shot && (shot.match(/^(?:Shot )?(\d+[a-z]?)/i) || [])[1];
  var src = code && IMAGES[code];
  var fill = src ? '<img src="'+src+'" alt="" loading="lazy">' : '';
  return '<div class="photo '+(cls||"")+'"'+(style?' style="'+style+'"':'')+'>'+
         '<span class="photo__inner"><span class="photo__zoom">'+fill+'</span></span></div>';
}

/* ===================== SHARED BLOCKS ===================== */
var CREED = [
 {n:"01",k:"Our mission",p:[
  "Our mission is to create beautifully considered homes where every guest feels instantly welcomed, deeply at ease, and free to savour the art of living well.",
  "Blending refined design with understated elegance and thoughtful comforts, we craft serene stays defined by genuine hospitality, impeccable care, and the quiet luxury of feeling truly at home."]},
 {n:"02",k:"Our vision",p:[
  "At Sabeis Homes, we envision more than a place to stay&mdash;we create spaces where guests can exhale, feel at home, and make lasting memories.",
  "Our ambition is to become the trusted leading name in premium short-let apartments, known for delivering a comfortable, secure, spotless, and genuinely memorable home-away-from-home experience.",
  "We are committed to raising the standard of short-let accommodation through exceptional facilities, dependable service, thoughtful hospitality, and a personal attention to every guest&rsquo;s needs. From the moment you arrive, every detail is designed to bring ease, peace, and confidence to your stay."]},
 {n:"03",k:"Our goal",p:[
  "Our goal is to create peaceful, stylish, and convenient spaces where every visit feels meaningful and every guest feels cared for&mdash;because at Sabeis Homes, simplicity meets class, and every stay feels like coming home."]}
];
function creedHero(){
  return '<div class="hero__creed rise rise4" role="group" aria-label="Mission, vision and goal">'+CREED.map(function(c,i){
    return '<button class="cc" type="button" data-creed="'+i+'" aria-expanded="false" aria-controls="cp'+i+'">'+
      '<span class="cc__n">'+c.n+'</span><span class="cc__k">'+c.k+'</span><i></i></button>';
  }).join("")+'</div>';
}
function creedPanels(){
  var tabs=function(i){ return CREED.map(function(c,j){
    return '<button class="cp__t'+(j===i?' is-act':'')+'" type="button" data-creed-go="'+j+'">'+c.k.replace("Our ","")+'</button>'; }).join(""); };
  return '<div class="cps">'+CREED.map(function(c,i){
    return '<section class="cp" id="cp'+i+'" aria-label="'+c.k+'"><div class="cp__bar"><div class="cp__tabs">'+tabs(i)+'</div>'+
      '<button class="cp__x" type="button" data-creed-x aria-label="Close">&times;</button></div>'+
      '<div class="cp__body"><div class="cp__hd"><span class="cp__tri" aria-hidden="true"></span><h3 class="cp__k">'+c.k+'</h3></div>'+
      '<div class="cp__txt'+(c.p.length>1?' is-cols':'')+'">'+c.p.map(function(t){return '<p>'+t+'</p>';}).join("")+'</div></div></section>';
  }).join("")+'</div>';
}
function creedToggle(i){
  var hero=document.querySelector(".hero"); if(!hero) return;
  var btns=hero.querySelectorAll(".cc"), panels=hero.querySelectorAll(".cp");
  var wasOn = i>=0 && panels[i].classList.contains("is-on");
  var on = i>=0 && !wasOn;
  [].forEach.call(panels,function(pn,k){ pn.classList.toggle("is-on", on && k===i); });
  [].forEach.call(btns,function(bt,k){ bt.setAttribute("aria-expanded", String(on && k===i)); });
  hero.classList.toggle("has-cp", on);
  if(on){
    /* the card sits inside the hero, directly under the buttons (where the tabs were), and never leaves it */
    var hr=hero.getBoundingClientRect(), ar=hero.querySelector(".hero__acts").getBoundingClientRect(), pn=panels[i];
    var top = window.innerWidth<=900 ? 78 : Math.round(ar.bottom-hr.top+18);
    pn.style.top=top+"px"; pn.style.bottom="auto";
    pn.style.maxHeight=Math.max(120,Math.round(hr.height-top-16))+"px";
    pn.scrollTop=0;
  }
}
function creedClose(){ var o=document.querySelector(".cp.is-on"); if(o) creedToggle(-1); }
document.addEventListener("keydown",function(e){ if(e.key==="Escape") creedClose(); });
var creedW=window.innerWidth; window.addEventListener("resize",function(){ if(window.innerWidth!==creedW){ creedW=window.innerWidth; creedClose(); } });
window.addEventListener("hashchange",creedClose);
function creedAbout(){
  return '<section class="band"><div class="wrap">'+
    '<div class="shead"><span class="eyebrow">Why we do it</span><h2 class="dsp d2">Mission, vision<br>and goal</h2></div>'+
    '<div class="vcard">'+CREED.map(function(c){
      return '<article class="vcard__c"><span class="vcard__tri" aria-hidden="true"></span><h3 class="vcard__t">'+c.k+'</h3>'+
        c.p.map(function(t){return '<p>'+t+'</p>';}).join("")+'</article>';
    }).join("")+'</div></div></section>';
}
/* enquiry */
function enquiry(){
  return '<section class="band" id="enquire"><div class="wrap enq">'+
   '<div style="display:grid;gap:17px">'+
     '<span class="eyebrow">Send an enquiry</span>'+
     '<h2 class="dsp d2">Ask us anything</h2>'+
     '<p class="body">Ask about an apartment, availability or a longer stay. Your message opens in WhatsApp, ready to send.</p>'+
     '<div class="acts"><a class="btn btn--g" href="tel:+2349160291333">0916 029 1333</a>'+
       '<a class="btn btn--o" id="waEnq" href="#" target="_blank" rel="noopener">WhatsApp instead</a></div></div>'+
   '<form class="panelform" id="enqForm" novalidate>'+
     '<div class="fld"><label for="qType">What is this about?</label><select id="qType">'+
       '<option>An apartment booking</option><option>A longer stay</option><option>A question about prices</option><option>Something else</option></select></div>'+
     '<div class="frow"><div class="fld"><label for="qName">Your name</label><input type="text" id="qName" required></div>'+
       '<div class="fld"><label for="qPhone">Phone</label><input type="tel" id="qPhone" placeholder="+234 …" required></div></div>'+
     '<div class="frow"><div class="fld"><label for="qEmail">Email</label><input type="email" id="qEmail" placeholder="you@example.com"></div>'+
       '<div class="fld"><label for="qDate">Date, if you have one</label><input type="date" id="qDate"></div></div>'+
     '<div class="fld"><label for="qNotes">Your message</label><textarea id="qNotes" placeholder="Dates, number of guests, anything we should know…"></textarea></div>'+
     '<label class="consent"><input type="checkbox" id="qConsent" checked><span>I agree that Sabeis Homes may contact me about this enquiry.</span></label>'+
     '<button class="btn btn--p btn--full" type="submit">Send the enquiry</button>'+
     '<p class="status" id="enqStatus" hidden></p></form>'+
  '</div></section>';
}
function pageHero(eye,title,sub,shot,v,tw){
  return '<section class="band" style="padding-top:calc(var(--nav-h) + clamp(44px,7vw,110px))"><div class="wrap">'+
   '<div class="shead" style="max-width:'+(tw||"24ch")+'"><span class="eyebrow">'+eye+'</span><h1 class="dsp d2">'+title+'</h1></div>'+
   '<p class="lede" style="margin-bottom:clamp(32px,4vw,56px)">'+sub+'</p>'+
   photo((v||"")+" photo--2",shot,"aspect-ratio:24/9")+
  '</div></section>';
}

/* ===================== VIEWS ===================== */
var VIEWS = {};

/* ---------- shared pieces for the price list ---------- */
var ICON_SHIELD='<svg class="cfee__ic" viewBox="0 0 48 48" aria-hidden="true"><path d="M24 4 7 10v12c0 11 7 18 17 22 10-4 17-11 17-22V10z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M17 24l5 5 9-10" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function aptCard(a){
  return '<article class="aptc"><span class="aptc__tri" aria-hidden="true"></span>'+
    '<h3 class="aptc__n">'+a.name+'</h3>'+
    '<p class="aptc__p">'+money(a.rate)+'<small>per night</small></p>'+
    '<button class="btn btn--p btn--sm" type="button" data-book-apt="'+a.id+'">Book now</button></article>';
}
function cautionStrip(){
  return '<div class="cfee">'+ICON_SHIELD+
    '<div class="cfee__t"><span>Fixed caution fee</span><b>'+money(HOTEL.cautionFee)+'</b></div>'+
    '<p class="cfee__n">Refundable after inspection.</p></div>';
}
function contactCards(){
  var wa="0912 999 2454";
  return '<div class="grid4">'+[
   ["Call us",'<a href="tel:+2348069397507">0806 939 7507</a><br><a href="tel:+2349160291333">0916 029 1333</a>',"Reservations and questions"],
   ["WhatsApp",'<a href="'+waLink("Hello "+HOTEL.name+", I would like to enquire about an apartment.")+'" target="_blank" rel="noopener">'+wa+'</a>',"Message us any time"],
   ["Email",'<a href="mailto:'+HOTEL.email+'">'+HOTEL.email+'</a>',"We reply to every message"],
   ["Visit us",'35, Baganju Street, behind Homat School',"Igbogbo, Ikorodu, Lagos State"]
  ].map(function(c){ return '<article><span class="eyebrow">'+c[0]+'</span>'+
    '<p class="dsp d4" style="font-size:.98rem;word-break:break-word;line-height:1.5">'+c[1]+'</p>'+
    '<p class="small">'+c[2]+'</p></article>'; }).join("")+'</div>';
}

/* ---------- HOME ---------- */
VIEWS["/"] = function(){ return ''+
'<section class="hero">'+
  '<div class="hero__bg" role="img" aria-label="Sabeis Homes apartment, soft evening light"></div>'+
  '<div class="hero__in">'+
    '<div class="hero__top">'+
      '<h1 class="dsp d1 rise rise2">Simplicity <em>meets</em> class</h1>'+
      '<div class="hero__acts rise rise4">'+
        '<button class="btn btn--p" type="button" data-open-book>Book now</button>'+
        '<a class="btn btn--o" href="#/apartments">See the apartments</a></div>'+
    '</div>'+
    creedHero()+
  '</div>'+
  creedPanels()+
'</section>'+
'<section class="band" style="padding-top:clamp(30px,4vw,48px)"><div class="wrap">'+
  '<div class="shead shead--split"><div class="shead__l"><span class="eyebrow">Apartments &amp; price list</span>'+
    '<h2 class="dsp d2">Choose your apartment</h2></div>'+
    '<a class="btn btn--g" href="#/apartments">Full price list</a></div>'+
  '<div class="aptgrid">'+APARTMENTS.map(aptCard).join("")+'</div>'+
  cautionStrip()+
'</div></section>'+
'<section class="band band--s1"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">Get in touch</span><h2 class="dsp d2">Ready when you are</h2></div>'+
  contactCards()+
'</div></section>';
};

/* ---------- APARTMENTS ---------- */
VIEWS["/apartments"] = function(){ return ''+
pageHero("Apartments &amp; price list","Eight apartments,<br>one clear price list",
  "Every apartment and its nightly price, with the fixed caution fee, in one place. Pick one and book direct.",
  "Shot 40 · Apartment interior, wide","v2","none")+
'<section class="band band--s1"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">Price list</span><h2 class="dsp d2">Apartments and prices</h2></div>'+
  '<div class="plist" role="table" aria-label="Apartment price list">'+
    '<div class="plist__h" role="row"><span role="columnheader">Apartment name</span><span role="columnheader">Apartment price</span><span></span></div>'+
    APARTMENTS.map(function(a){
      return '<div class="plist__r" role="row"><span class="plist__n" role="cell">'+a.name+'</span>'+
        '<span class="plist__p" role="cell">'+money(a.rate)+'<small>per night</small></span>'+
        '<span class="plist__a"><button class="btn btn--p btn--sm" type="button" data-book-apt="'+a.id+'">Book now</button></span></div>';
    }).join("")+
  '</div>'+
  cautionStrip()+
  '<div class="notes">'+
    '<article class="note"><span class="note__ic" aria-hidden="true">&#8358;</span><div><h3 class="dsp d4">Apartment prices</h3><p class="small">This is the cost of booking or renting the apartment.</p></div></article>'+
    '<article class="note"><span class="note__ic" aria-hidden="true">i</span><div><h3 class="dsp d4">Note</h3><p class="small">The fixed caution fee is '+money(HOTEL.cautionFee)+', refundable after inspection.</p></div></article>'+
  '</div>'+
  '<p class="lede" style="margin-top:clamp(28px,3.4vw,44px);font-style:italic">Thank you for choosing Sabeis Homes Ltd.</p>'+
'</div></section>';
};

/* ---------- ABOUT ---------- */
VIEWS["/about"] = function(){ return ''+
pageHero("About","Simplicity<br>meets <em style=\"font-style:italic;color:var(--copper-hi)\">class</em>",
  "Sabeis Homes Ltd offers short-let apartments in Igbogbo, Ikorodu, Lagos &mdash; peaceful, stylish and convenient places to stay.",
  "Shot 29 · The building, from across the street","v3","none")+
creedAbout()+
'<section class="band"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">The company</span><h2 class="dsp d2">On the record</h2></div>'+
  '<div class="grid4">'+[
   ["Registered name","Sabeis Homes Ltd"],["RC number","8982917"],
   ["Address","35, Baganju Street, behind Homat School, Igbogbo, Ikorodu, Lagos State"],["Reservations","0806 939 7507 &middot; 0916 029 1333"]
  ].map(function(v){ return '<article><span class="eyebrow">'+v[0]+'</span><p class="dsp d4">'+v[1]+'</p></article>'; }).join("")+'</div>'+
'</div></section>';
};

/* ---------- CONTACT ---------- */
VIEWS["/contact"] = function(){ return ''+
pageHero("Contact","Come and stay",
  "Call, message us on WhatsApp or send an email. We are happy to help with prices, availability and booking.",
  "Shot 16 · Gate and street entrance — wide","v5","none")+
'<section class="band"><div class="wrap">'+
  contactCards()+
  '<div style="display:grid;gap:16px;margin-top:clamp(28px,3.4vw,48px);max-width:62ch">'+
    '<h3 class="dsp d3">35, Baganju Street</h3>'+
    '<p class="body">Behind Homat School, Igbogbo, Ikorodu, Lagos State. Sabeis Homes Ltd, RC 8982917.</p>'+
    '<div class="acts"><a class="btn btn--g" href="https://www.google.com/maps/search/?api=1&amp;query=35+Baganju+Street+Igbogbo+Ikorodu+Lagos" target="_blank" rel="noopener">Open in Maps</a>'+
      '<button class="btn btn--p" type="button" data-open-book>Book an apartment</button></div>'+
  '</div>'+
'</div></section>'+enquiry()+
'<section class="band band--s1"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">Good to know</span><h2 class="dsp d2">The practical things</h2></div>'+
  '<div class="acc" style="max-width:920px">'+FAQ.map(function(f){
    return '<details><summary>'+f[0]+'</summary><div class="accbd"><p>'+f[1]+'</p></div></details>'; }).join("")+'</div>'+
'</div></section>';
};

/* ===================== BOOKING ===================== */
function updateTotal(){
  var a=aptById($("#bApt").value), n=nights($("#bIn").value,$("#bOut").value), rent=a.rate*n;
  $("#totalLabel").innerHTML=(n||0)+" night"+(n===1?"":"s")+" &middot; "+a.name;
  $("#totalAmt").textContent=money(rent);
  $("#saveLine").innerHTML = n ? "Plus the fixed "+money(HOTEL.cautionFee)+" caution fee, refundable after inspection &mdash; "+money(rent+HOTEL.cautionFee)+" in total." : "Pick your dates to see the total.";
}
function collect(){
  var a=aptById($("#bApt").value), n=nights($("#bIn").value,$("#bOut").value);
  return { apt:a, n:n, rate:a.rate, total:a.rate*n,
    inD:$("#bIn").value, outD:$("#bOut").value, guests:$("#bGuests").value,
    name:$("#bName").value.trim(), phone:$("#bPhone").value.trim(),
    email:$("#bEmail").value.trim(), notes:$("#bNotes").value.trim(), consent:$("#bConsent").checked };
}
function validate(r){
  if(!r.name) return "Please add the name the apartment should be held under.";
  if(!r.phone) return "Please add a phone number so we can confirm.";
  if(r.n<1) return "Departure needs to be at least one night after arrival.";
  if(!r.consent) return "Please tick the box so we may reply to you.";
  return null;
}
function messageFor(r){
  return ["RESERVATION REQUEST — "+HOTEL.name,"",
    "Apartment: "+r.apt.name,"Price: "+money(r.rate)+" per night",
    "Arrival: "+fmtDate(r.inD),"Departure: "+fmtDate(r.outD),
    "Nights: "+r.n,"Guests: "+r.guests,"Rent: "+money(r.total),
    "Caution fee (refundable after inspection): "+money(HOTEL.cautionFee),
    "Total with caution fee: "+money(r.total+HOTEL.cautionFee),"",
    "Name: "+r.name,"Phone: "+r.phone,
    r.email?"Email: "+r.email:"", r.notes?"Notes: "+r.notes:""].filter(Boolean).join("\n");
}
function say(sel,msg,kind){ var el=$(sel); if(!el) return; el.textContent=msg; el.setAttribute("data-kind",kind||""); el.hidden=false; }

var lastFocus=null;
function openBook(id){
  if(id){ $("#bApt").value=id; updateTotal(); }
  lastFocus=document.activeElement;
  $("#panel").setAttribute("data-open","true"); $("#panel").setAttribute("aria-hidden","false");
  $("#scrim").setAttribute("data-open","true");
  document.body.style.overflow="hidden";
  setTimeout(function(){ $("#bIn").focus({preventScroll:true}); },260);
}
function closeBook(){
  $("#panel").setAttribute("data-open","false"); $("#panel").setAttribute("aria-hidden","true");
  $("#scrim").setAttribute("data-open","false");
  document.body.style.overflow="";
  if(lastFocus && lastFocus.focus) lastFocus.focus();
}
function saveDraft(){
  try{ localStorage.setItem("sbh-draft",JSON.stringify({apt:$("#bApt").value,guests:$("#bGuests").value,
    name:$("#bName").value,phone:$("#bPhone").value,email:$("#bEmail").value,notes:$("#bNotes").value})); }catch(e){}
}
function loadDraft(){
  try{
    var raw=localStorage.getItem("sbh-draft"); if(!raw) return;
    var d=JSON.parse(raw);
    if(d.name)$("#bName").value=d.name; if(d.phone)$("#bPhone").value=d.phone;
    if(d.email)$("#bEmail").value=d.email; if(d.notes)$("#bNotes").value=d.notes;
    if(d.guests)$("#bGuests").value=d.guests; if(d.apt)$("#bApt").value=d.apt;
    updateTotal();
  }catch(e){}
}


/* =====================================================================
   MOTION LAYER — no animation library required.
   IntersectionObserver drives the reveals; one rAF loop drives parallax.
   Lenis is used for inertial smooth scrolling IF it loads, and the page
   is complete and correct without it. With JS off, or reduced motion on,
   nothing is ever left hidden.
     1 · display headings reveal line by line behind a mask
     2 · blocks fade up over 800ms, staggered across a row
     3 · image frames wipe open while the picture settles from 1.16
     4 · pictures drift against their frames as you scroll
     5 · the header retracts going down and returns going up
   ===================================================================== */
var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var lenis = null, plx = [], plxRAF = null, armedWatch = [], carTimer = null;

function initSmoothScroll(){
  if(REDUCED || lenis || !window.Lenis) return;
  try{
    lenis = new Lenis({ duration:1.15, lerp:.1, smoothWheel:true });
    function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }catch(e){ lenis = null; }
}

/* wrap each visual line of a heading in its own masked track, keeping <em> intact */
function splitLines(el){
  if(el.dataset.split) return;
  var raw = el.innerHTML.trim();
  /* an author-supplied <br> is an intentional line break — honor it directly
     instead of re-measuring wrapped lines, so exact breaks always hold */
  if(/<br\s*\/?>/i.test(raw)){
    el.innerHTML = raw.split(/<br\s*\/?>/i).map(function(chunk){
      return '<span class="ln"><span>'+chunk.trim()+'</span></span>';
    }).join("");
    el.dataset.split = "1";
    return;
  }
  var tokens = raw.split(/\s+/);
  if(tokens.length < 2){ el.innerHTML = '<span class="ln"><span>'+raw+'</span></span>'; el.dataset.split="1"; return; }
  var probe = document.createElement("span");
  probe.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;width:"+el.clientWidth+"px";
  probe.className = el.className;
  probe.innerHTML = tokens.map(function(t){ return '<span class="pw">'+t+'</span>'; }).join(" ");
  el.parentNode.appendChild(probe);
  var groups = [], cur = [], last = null;
  [].slice.call(probe.querySelectorAll(".pw")).forEach(function(w,i){
    var top = Math.round(w.offsetTop);
    if(last !== null && top !== last){ groups.push(cur); cur = []; }
    last = top; cur.push(tokens[i]);
  });
  if(cur.length) groups.push(cur);
  probe.remove();
  var k = 0;
  el.innerHTML = groups.map(function(g){
    var chunk = tokens.slice(k, k + g.length).join(" ");
    k += g.length;
    return '<span class="ln"><span>'+chunk+'</span></span>';
  }).join("");
  el.dataset.split = "1";
}

function motion(){
  initSmoothScroll();
  plx = [];
  armedWatch = [];
  if(plxRAF){ cancelAnimationFrame(plxRAF); plxRAF = null; }
  var view = document.getElementById("view");
  if(!view || REDUCED) return;

  /* --- 1 · headings, line by line --- */
  [].slice.call(view.querySelectorAll(".d1, .d2")).forEach(function(h){
    splitLines(h);
    [].slice.call(h.querySelectorAll(".ln")).forEach(function(l,i){
      l.classList.add("is-armed");
      l.firstElementChild.style.transitionDelay = (i*0.085)+"s";
    });
  });

  /* --- 2 · blocks that fade up --- */
  var rows = view.querySelectorAll(".shot, .pill article, .grid4 article, .testi, .card, .stats, .specs, .acc, .tags, .bullets, .numlist, .lede, .hero__acts, .hero__creed, .vcard__c, .aptc, .plist__r, .cfee, .note, .hero__foot, .car__pane, .shead p, .eyebrow");
  [].slice.call(rows).forEach(function(el,i){
    el.classList.add("up","is-armed");
    el.style.transitionDelay = ((i % 4) * 0.07) + "s";
  });

  /* --- 3 · image frames wipe open --- */
  /* .no-arm opts a photo out of this reveal: a couple of tall two-column rows sit so far down
     that the clip-path-hidden box never gets a real IntersectionObserver hit and stays blank
     forever — those render immediately instead of animating in. */
  [].slice.call(view.querySelectorAll(".photo:not(.no-arm)")).forEach(function(fr){
    if(fr.closest(".car__stage")) return;           /* the carousel runs its own motion */
    fr.classList.add("is-armed");
  });

  /* --- 4 · pillar rule lines draw open, left to right --- */
  [].slice.call(view.querySelectorAll(".pill__line")).forEach(function(ln,i){
    ln.classList.add("is-armed");
    ln.style.transitionDelay = (i*0.12)+"s";
  });

  /* release everything as it enters the viewport */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var el = e.target;
      if(el.classList.contains("ln")) el.classList.remove("is-armed");
      else el.classList.remove("is-armed");
      io.unobserve(el);
    });
  }, { rootMargin:"0px 0px -8% 0px", threshold:0.02 });

  /* IntersectionObserver misses a release for some clip-path-hidden elements inside CSS grid
     rows (a Chromium quirk, seen on the homepage apartment cards and elsewhere) — armedWatch is a
     scroll-driven safety net (see checkArmed) that force-releases anything left stuck. */
  armedWatch = [].slice.call(view.querySelectorAll(".ln.is-armed, .up.is-armed, .photo.is-armed, .pill__line.is-armed"));
  armedWatch.forEach(function(el){
    io.observe(el);
  });
  requestAnimationFrame(checkArmed);
  /* lines are inside the heading, so watch the heading and release its lines together */
  [].slice.call(view.querySelectorAll(".d1, .d2")).forEach(function(h){
    var hio = new IntersectionObserver(function(en){
      en.forEach(function(e){
        if(!e.isIntersecting) return;
        [].slice.call(h.querySelectorAll(".ln")).forEach(function(l){ l.classList.remove("is-armed"); });
        hio.disconnect();
      });
    }, { rootMargin:"0px 0px -6% 0px", threshold:0.05 });
    hio.observe(h);
  });

  /* --- 4 · parallax --- */
  plx = [].slice.call(view.querySelectorAll(".photo__inner")).filter(function(el){
    return !el.closest(".car__stage");
  }).map(function(el){ return { el:el, fr:el.parentElement }; });

  function tick(){
    var vh = window.innerHeight;
    for(var i=0;i<plx.length;i++){
      var r = plx[i].fr.getBoundingClientRect();
      if(r.bottom < -120 || r.top > vh + 120) continue;
      var progress = (r.top + r.height/2 - vh/2) / (vh/2 + r.height/2);  /* +1 below → -1 above */
      var shift = Math.max(-1, Math.min(1, progress)) * 7;               /* percent of the frame */
      plx[i].el.style.transform = "translate3d(0," + (-shift).toFixed(2) + "%,0)";
    }
    plxRAF = requestAnimationFrame(tick);
  }
  plxRAF = requestAnimationFrame(tick);

  /* release anything already on screen at load, one frame later, so it animates in */
  requestAnimationFrame(function(){
    setTimeout(function(){
      var vh = window.innerHeight;
      [].slice.call(view.querySelectorAll(".is-armed")).forEach(function(el){
        var r = el.getBoundingClientRect();
        if(r.top < vh * 1.08) el.classList.remove("is-armed");
      });
    }, 60);
  });
}

/* header retracts going down, returns going up */
var lastY = 0;
function navScroll(){
  var y = window.scrollY, nav = document.getElementById("nav");
  nav.setAttribute("data-solid", String(y > 40));
  var panelOpen = document.getElementById("panel").getAttribute("data-open") === "true";
  nav.setAttribute("data-hide", String(y > 380 && y > lastY + 4 && !panelOpen));
  lastY = y;
}

/* ===================== ROUTER ===================== */
function route(){
  var path=(location.hash||"#/").replace(/^#/,"").split("#")[0];
  if(path==="/suites") path="/apartments";   /* old links */
  if(!VIEWS[path]) path="/";
  document.getElementById("nav").setAttribute("data-home", String(path==="/"));
  $("#view").innerHTML=VIEWS[path]();
  document.querySelectorAll("#navLinks a, #drawerLinks a").forEach(function(a){
    if(a.getAttribute("href")==="#"+path) a.setAttribute("aria-current","page");
    else a.removeAttribute("aria-current");
  });
  wireView();
  if(lenis) lenis.scrollTo(0,{immediate:true}); else window.scrollTo({top:0,behavior:"auto"});
  onScroll();
}
window.addEventListener("hashchange",route);

/* safety net for the reveal system: force-release any .is-armed element once it is plainly
   within the viewport, in case its IntersectionObserver entry never fired (see motion()) */
function checkArmed(){
  if(!armedWatch.length) return;
  var vh = window.innerHeight || document.documentElement.clientHeight;
  armedWatch = armedWatch.filter(function(el){
    if(!el.classList.contains("is-armed")) return false;
    var r = el.getBoundingClientRect();
    if(r.top < vh*0.92 && r.bottom > 0){ el.classList.remove("is-armed"); return false; }
    return true;
  });
}
function onScroll(){ navScroll(); checkArmed(); }
window.addEventListener("scroll",onScroll,{passive:true});
window.addEventListener("resize",checkArmed);

/* ===================== VIEW WIRING ===================== */
function wireView(){
  /* the homepage carousel's autoplay interval outlives its own DOM once the route changes
     underneath it (nothing else ever clears it), so any pending tick after navigating away
     throws trying to update elements that no longer exist — always clear it before rewiring */
  if(carTimer){ clearInterval(carTimer); carTimer=null; }
  var greeting="Hello "+HOTEL.name+", I would like to enquire about a stay.";
  [["#waEnq",greeting],
   ["#waMenu","Hello "+HOTEL.name+", may I see the menu for The Copper Room?"],
   ["#waTable","Hello "+HOTEL.name+", I would like to reserve a table at Sabeis Lounge."]
  ].forEach(function(p){ var el=$(p[0]); if(el) el.href=waLink(p[1]); });

  /* enquiry form */
  var q=$("#enqForm");
  if(q) q.addEventListener("submit",function(e){
    e.preventDefault();
    var n=$("#qName").value.trim(), ph=$("#qPhone").value.trim();
    if(!n||!ph) return say("#enqStatus","Please add your name and a phone number so we can come back to you.","err");
    if(!$("#qConsent").checked) return say("#enqStatus","Please tick the box so we may reply to you.","err");
    var msg=["ENQUIRY — "+HOTEL.name,"","About: "+$("#qType").value,
      "Date: "+($("#qDate").value?fmtDate($("#qDate").value):"not fixed yet"),"",
      "Name: "+n,"Phone: "+ph,
      $("#qEmail").value.trim()?"Email: "+$("#qEmail").value.trim():"",
      $("#qNotes").value.trim()?"Message: "+$("#qNotes").value.trim():""].filter(Boolean).join("\n");
    window.open(waLink(msg),"_blank","noopener");
    say("#enqStatus","Opening WhatsApp with your enquiry — send it and we will reply to you.","ok");
  });

  /* apartment tabs */
  var tabs=$("#roomTabs");
  if(tabs) tabs.addEventListener("click",function(e){
    var b=e.target.closest("button[data-tab]"); if(!b) return;
    var key=b.getAttribute("data-tab");
    tabs.querySelectorAll("button").forEach(function(x){ x.setAttribute("aria-selected",String(x===b)); });
    document.querySelectorAll("#roomRows .room").forEach(function(r){
      r.hidden = !(key==="all" || r.getAttribute("data-room")===key);
    });
  });

  /* carousel — stacked 3D stage, drag + arrows + autoplay */
  var stage=$("#carStage");
  if(stage){
    var slides=[].slice.call(stage.querySelectorAll(".car__s"));
    var dots=$("#carDots"), pane=$("#carPane"), idx=0, N=slides.length;
    function layout(){
      slides.forEach(function(el,i){
        var o=(i-idx+N)%N;                       /* 0 = front, then stacked behind */
        var z=N-o, x=0, sc=1, tz=0, op=1;
        if(o===0){ x=0; sc=1; tz=0; op=1; }
        else if(o===1){ x=7; sc=.93; tz=-140; op=.5; }
        else if(o===2){ x=13; sc=.87; tz=-260; op=.22; }
        else { x=18; sc=.82; tz=-360; op=0; }
        el.style.zIndex=z;
        el.style.opacity=op;
        el.style.transform="translate3d("+x+"%,0,"+tz+"px) scale("+sc+")";
        el.style.pointerEvents=o===0?"auto":"none";
      });
      var sp=SPACES[idx];
      pane.setAttribute("data-swap","1");
      setTimeout(function(){
        $("#carKicker").textContent=sp.k; $("#carTitle").textContent=sp.n;
        $("#carCopy").textContent=sp.d;
        var g=$("#carGo"); g.textContent=sp.goT; g.setAttribute("href",sp.go);
        $("#carCount").textContent=("0"+(idx+1))+" / 0"+N;
        pane.setAttribute("data-swap","0");
      },300);
      dots.querySelectorAll("button").forEach(function(b,i){
        if(i===idx) b.setAttribute("aria-current","true"); else b.removeAttribute("aria-current");
      });
    }
    function go(n){ idx=(n+N)%N; layout(); }
    layout();

    $("#car").addEventListener("click",function(e){
      var n=e.target.closest("[data-car]");
      if(n){ go(idx+parseInt(n.getAttribute("data-car"),10)); restart(); return; }
      var d=e.target.closest("[data-go]");
      if(d){ go(parseInt(d.getAttribute("data-go"),10)); restart(); return; }
      if(e.target.closest(".car__s")) { go(idx+1); restart(); }
    });

    /* swipe / drag */
    var x0=null;
    stage.addEventListener("pointerdown",function(e){ x0=e.clientX; });
    stage.addEventListener("pointerup",function(e){
      if(x0===null) return;
      var dx=e.clientX-x0; x0=null;
      if(Math.abs(dx)>44){ go(idx+(dx<0?1:-1)); restart(); }
    });

    function play(){ carTimer=setInterval(function(){ go(idx+1); },10000); }
    function stop(){ clearInterval(carTimer); carTimer=null; }
    function restart(){ stop(); if(!REDUCED) play(); }
    if(!REDUCED){ play(); $("#car").addEventListener("mouseenter",stop); $("#car").addEventListener("mouseleave",play); }
  }

  /* testimonial — single quote, prev/next */
  var testi=$("#testi");
  if(testi){
    var tIdx=0, tN=QUOTES.length, tPane=$("#testiPane"), tRule=$("#testiRule");
    function tRender(){
      var q=QUOTES[tIdx];
      tPane.setAttribute("data-swap","1");
      if(tRule) tRule.setAttribute("data-fill","0");
      setTimeout(function(){
        $("#testiTxt").textContent=q.q;
        $("#testiName").textContent=q.n;
        tPane.setAttribute("data-swap","0");
        if(tRule) requestAnimationFrame(function(){ requestAnimationFrame(function(){ tRule.setAttribute("data-fill","1"); }); });
      },260);
    }
    testi.addEventListener("click",function(e){
      var b=e.target.closest("[data-testi]");
      if(!b) return;
      tIdx=(tIdx+parseInt(b.getAttribute("data-testi"),10)+tN)%tN;
      tRender();
    });
  }

  motion();
}

/* ===================== INIT ===================== */
(function init(){
  $("#yr").textContent=new Date().getFullYear();
  $("#navLinks").innerHTML=NAV.map(function(n){ return '<a href="'+n.h+'">'+n.t+'</a>'; }).join("");
  $("#drawerLinks").innerHTML=NAV.map(function(n){ return '<a href="'+n.h+'">'+n.t+'</a>'; }).join("");

  var greeting="Hello "+HOTEL.name+", I would like to enquire about a stay.";
  $("#waFoot").href=waLink(greeting);
  $("#waDock").href=waLink(greeting);

  $("#bApt").innerHTML=APARTMENTS.map(function(a){
    return '<option value="'+a.id+'">'+a.name+' — '+money(a.rate)+'</option>'; }).join("");
  $("#bApt").value="divine";

  var today=new Date(); today.setHours(0,0,0,0);
  var tmr=new Date(today.getTime()+86400000), d3=new Date(today.getTime()+3*86400000);
  $("#bIn").min=iso(today); $("#bIn").value=iso(tmr);
  $("#bOut").min=iso(tmr);  $("#bOut").value=iso(d3);

  $("#bIn").addEventListener("change",function(){
    var next=new Date(new Date($("#bIn").value+"T00:00").getTime()+86400000);
    $("#bOut").min=iso(next);
    if(nights($("#bIn").value,$("#bOut").value)<1) $("#bOut").value=iso(next);
    updateTotal(); saveDraft();
  });
  ["#bOut","#bApt","#bGuests"].forEach(function(s){ $(s).addEventListener("change",function(){ updateTotal(); saveDraft(); }); });
  ["#bName","#bPhone","#bEmail","#bNotes"].forEach(function(s){ $(s).addEventListener("input",saveDraft); });
  updateTotal(); loadDraft();

  document.addEventListener("click",function(e){
    var g=e.target.closest("[data-creed-go]");
    if(g){ var j=+g.getAttribute("data-creed-go"); if(!document.getElementById("cp"+j).classList.contains("is-on")) creedToggle(j); return; }
    var m=e.target.closest("[data-creed]"), x=e.target.closest("[data-creed-x]");
    if(m||x){ creedToggle(m?+m.getAttribute("data-creed"):-1); return; }
    var o=e.target.closest("[data-open-book]");
    if(o){ e.preventDefault(); openBook(); return; }
    var s=e.target.closest("[data-book-apt]");
    if(s){ e.preventDefault(); e.stopPropagation(); openBook(s.getAttribute("data-book-apt")); return; }
  });
  $("#panelX").addEventListener("click",closeBook);
  $("#scrim").addEventListener("click",closeBook);
  document.addEventListener("keydown",function(e){
    if(e.key==="Escape" && $("#panel").getAttribute("data-open")==="true") closeBook(); });

  var b=$("#burger"), dr=$("#drawer");
  b.addEventListener("click",function(){
    var open=dr.getAttribute("data-open")==="true";
    dr.setAttribute("data-open",String(!open)); b.setAttribute("aria-expanded",String(!open));
  });
  dr.addEventListener("click",function(e){
    if(e.target.tagName==="A"){ dr.setAttribute("data-open","false"); b.setAttribute("aria-expanded","false"); }
  });

  $("#sendWa").addEventListener("click",function(){
    var r=collect(), err=validate(r); if(err) return say("#status",err,"err");
    window.open(waLink(messageFor(r)),"_blank","noopener");
    say("#status","Opening WhatsApp with your request — send it and we confirm within the hour.","ok");
  });
  $("#sendMail").addEventListener("click",function(){
    var r=collect(), err=validate(r); if(err) return say("#status",err,"err");
    window.location.href="mailto:"+HOTEL.email+"?subject="+encodeURIComponent("Reservation request — "+r.apt.name+" — "+fmtDate(r.inD))+
      "&body="+encodeURIComponent(messageFor(r));
    say("#status","Your mail app should open with the request filled in.","ok");
  });
  route();
})();
