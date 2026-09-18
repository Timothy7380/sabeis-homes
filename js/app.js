/* ===================== CONFIG ===================== */
var HOTEL = {
  name:"Sabeis Homes", whatsapp:"2349160291333",
  email:"sabeishomes@gmail.com", directDiscount:0.10, paystackKey:""
};

var NAV = [
  {h:"#/",        t:"Home"},
  {h:"#/suites",  t:"Suites"},
  {h:"#/about",   t:"About"},
  {h:"#/contact", t:"Contact"}
];

var SUITES = [
  { id:"classic", name:"Classic Room", rate:45000, v:"",
    tagline:"24 m² · Queen bed · Courtyard view",
    pitch:"The smallest room in the house and the one we are proudest of. A queen bed against the long wall, blackout curtains that actually black out, and a walk-in rain shower behind glass. The desk faces the window rather than the wall — the sort of decision that only matters once you are working at it.",
    specs:[["Size","24 m²"],["Bed","One queen"],["Sleeps","2 guests"],["Floor","First and second"],["View","Courtyard"],["Bathroom","Walk-in rain shower"]],
    amen:["Blackout curtains with sheer inner drapes","Inverter-backed socket beside the bed","55-inch smart TV","Writing desk with task lamp","Two reading lamps","Individually controlled air conditioning","Wardrobe with iron and board","Mini fridge, restocked daily","Safe sized for a laptop","Fibre Wi-Fi","Kettle, cafetière and loose tea","Housekeeping daily; linen every second day"],
    shots:["Shot 02 · Classic Room, morning light","Shot 02b · Shower detail","Shot 02c · Desk corner"] },
  { id:"deluxe", name:"Deluxe Suite", rate:65000, v:"v2",
    tagline:"36 m² · King bed · Rear garden",
    pitch:"A king bed, a proper armchair you would actually sit in, and a bathroom with a tub. The Deluxe suites sit at the back of the building where the road cannot reach them, which makes them the quietest rooms we have. Guests who come back tend to come back to this one.",
    specs:[["Size","36 m²"],["Bed","One king"],["Sleeps","2 guests"],["Floor","Second and third"],["View","Rear garden"],["Bathroom","Tub and separate shower"]],
    amen:["Everything in the Classic Room","Bathtub with separate rain shower","Armchair and footstool","Bathrobes and slippers","Nespresso machine","Bluetooth speaker","Full-length mirror","Pillow menu: firm, soft, or both","Turndown service on request"],
    shots:["Shot 03 · Deluxe Suite, bed and window","Shot 03b · Bathtub","Shot 03c · Armchair"] },
  { id:"executive", name:"Executive Suite", rate:95000, v:"v3",
    tagline:"52 m² · King + sofa bed · Balcony",
    pitch:"A separate sitting room with a sofa bed, a kitchenette with a hob and a microwave, and a balcony over the courtyard. Built for the guest staying a fortnight rather than a night — long enough that you want somewhere to put your things and cook your own eggs on a Sunday.",
    specs:[["Size","52 m²"],["Bed","King plus sofa bed"],["Sleeps","3 guests"],["Floor","Second"],["View","Courtyard balcony"],["Bathroom","Tub, shower, twin basins"]],
    amen:["Everything in the Deluxe Suite","Separate sitting room with sofa bed","Kitchenette: two-ring hob, microwave, sink","Full-size fridge","Dining table for four","Balcony with two chairs","Second TV in the sitting room","Weekly laundry allowance of ten items","Extra bed at ₦12,000 a night"],
    shots:["Shot 04 · Executive Suite, living room","Shot 04b · Kitchenette","Shot 04c · Balcony"] },
  { id:"penthouse", name:"Sabeis Penthouse", rate:180000, v:"v4",
    tagline:"88 m² · Two bedrooms · Private terrace",
    pitch:"The whole top floor. Two bedrooms, a full kitchen, a dining table for six and a private terrace looking over the estate. Let as one unit and never split, with the rooftop lounge reservable privately. This is the suite people take for a family Christmas or a week of closing a deal.",
    specs:[["Size","88 m²"],["Bed","Two kings"],["Sleeps","4 guests"],["Floor","Third, entire"],["View","Private terrace"],["Bathroom","Two, both with tubs"]],
    amen:["Everything in the Executive Suite","Two bedrooms, each en suite","Full kitchen with oven and dishwasher","Dining table for six","Private terrace with loungers","Rooftop lounge reservable privately","Twice-daily housekeeping if wanted","Airport transfer included both ways","Direct line to the front desk"],
    shots:["Shot 05 · Penthouse terrace at dusk","Shot 05b · Second bedroom","Shot 05c · Kitchen"] }
];

/* the marquee — the reference runs client logos here; this runs the house's standing promises */
var MARQ = ["24-hour power","Fibre Wi-Fi in every suite","Breakfast cooked to order","Airport transfer",
  "Front desk, 24 hours","Free cancellation to 48 hours","Secure gated parking","Rooftop until late",
  "Laundry back by six","Direct rate, always lowest"];

/* two spaces — the reference's carousel, trimmed to what the house still shows */
var SPACES = [
  { n:"The Suites", k:"Fourteen, four layouts", v:"",
    d:"Three floors, fourteen suites, four layouts from 24 m² to an 88 m² penthouse. Every one gets blackout curtains, fibre, an inverter-backed socket by the bed and breakfast in the rate.",
    shot:"Shot 40 · Suite interior, wide", go:"#/suites", goT:"Suites & rates" },
  { n:"The Copper Room", k:"Daily, 07:00 – 22:30", v:"v2",
    d:"Eleven tables under copper pendants. Breakfast to order and included in every rate; dinner is nine plates, Nigerian and continental, changed as the market changes.",
    shot:"Shot 06 · The Copper Room, dinner service", go:"#/dining", goT:"Dining" }
];

var AMENITIES = [
  ["Round-the-clock power","Grid, generator and inverter, switching over automatically. The lights do not go out here."],
  ["Fibre Wi-Fi","A dedicated fibre line with LTE backup — fast enough for calls from every room."],
  ["Airport transfer","A driver at arrivals with your name on a card. ₦25,000 each way."],
  ["Breakfast included","Cooked to order downstairs, or brought up on a tray at the hour you name."],
  ["Daily housekeeping","Suites serviced each morning, fresh linen every second day."],
  ["Laundry &amp; pressing","In by nine, back by six, Monday to Saturday."],
  ["Secure parking","A gated compound with cameras and a guard through the night."],
  ["Concierge, 24 hours","Tables, drivers, tailors, SIM cards. Ask at the desk."]
];

var FAQ = [
  ["What time can I check in?","Arrival is from 14:00 and departure by 12:00. If your flight lands early, leave your bags with the desk and use the rooftop until your suite is ready — there is no charge for that."],
  ["Is breakfast really included?","Yes, in every rate, cooked to order rather than laid out on a buffet. Tell the desk the night before if you want it in your suite, and at what time."],
  ["How do I pay?","Deposits and balances go through Paystack, and we also take bank transfers and cash on arrival. Rates include VAT — the figure you see is the figure you pay."],
  ["Can I hold a suite without paying?","One night's rate holds it, but if you would rather not prepay, say so on WhatsApp and we will hold it against your phone number instead."],
  ["Is there a generator?","Grid, generator and inverter, in that order, switching over on their own. Guests generally do not notice a change at all."],
  ["Do you allow children?","Children are welcome. Cots are free and an extra bed in the Executive Suite or Penthouse is ₦12,000 a night."]
];

/* ===================== HELPERS ===================== */
var nf=new Intl.NumberFormat("en-NG",{maximumFractionDigits:0});
function money(n){ return "₦"+nf.format(Math.round(n)); }
function direct(n){ return n*(1-HOTEL.directDiscount); }
function $(s,r){ return (r||document).querySelector(s); }
function suiteById(id){ for(var i=0;i<SUITES.length;i++){ if(SUITES[i].id===id) return SUITES[i]; } return SUITES[1]; }
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
  /* suite bathroom / room-space detail shots */
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
/* 02b · short-let features */
function features(){
  return '<section class="band band--s1"><div class="wrap">'+
   '<div class="shead shead--split"><div class="shead__l"><span class="eyebrow">Short-let, done properly</span>'+
     '<h2 class="dsp d2">Comfort. Style. Convenience.</h2></div>'+
     '<div class="tags">'+["Business travellers","Couples & getaways","Families & groups"].map(function(t){
       return '<span class="tag">'+t+'</span>'; }).join("")+'</div></div>'+
   '<div class="grid3" style="margin-top:clamp(28px,3.4vw,48px)">'+[
    ["Comfortable bedrooms","Proper mattresses, blackout curtains and air conditioning that keeps up, in every suite."],
    ["24/7 power supply","Inverter-backed sockets and a generator on standby, so the power never actually goes."],
    ["Spacious living room","A separate sitting area in the larger suites &mdash; room enough to work, host or just unwind."],
    ["Secured environment","A gated compound, on-site security around the clock, and a front desk that never closes."],
    ["Fully equipped kitchen","A kitchenette or full kitchen depending on the suite, stocked and ready for a proper stay."],
    ["Fast Wi-Fi","Fibre to every room, fast enough to work from without thinking about it."]
   ].map(function(a,i){ return '<article class="card">'+mark(i)+'<h3 class="dsp d4">'+a[0]+'</h3><p class="small">'+a[1]+'</p></article>'; }).join("")+'</div>'+
  '</div></section>';
}
/* 03 · marquee */
function marquee(){
  var row = MARQ.map(function(m){ return '<span class="marq__i">'+m+'</span>'; }).join("");
  return '<div class="marq" aria-hidden="true"><div class="marq__track">'+row+row+'</div></div>';
}
/* 04 · three pillars */
function pillars(){
  return '<section class="band band--s1"><div class="wrap">'+
   '<div class="shead shead--split"><div class="shead__l"><span class="eyebrow">What the house does</span>'+
     '<h2 class="dsp d2">Two things, done completely</h2></div>'+
     '<p class="body" style="max-width:34ch">Everything else we will happily arrange for you somewhere else in Lagos.</p></div>'+
   '<div class="pill pill--2">'+
    '<article><span class="pill__line"></span><h3 class="dsp d3">Fourteen suites</h3>'+
      '<p class="body">Four layouts across three floors, from a 24 m² Classic to an 88 m² penthouse. Power that never falters, fibre in every room, and breakfast cooked to order inside the rate.</p>'+
      '<a class="lnk" href="#/suites">Suites &amp; rates</a></article>'+
    '<article><span class="pill__line"></span><h3 class="dsp d3">One kitchen, two rooms</h3>'+
      '<p class="body">The Copper Room downstairs for breakfast and dinner, Sabeis Lounge on the roof from four. A short menu that changes with the market rather than with the season.</p>'+
      '<a class="lnk" href="#/dining">Dining</a></article>'+
   '</div></div></section>';
}
/* 05 · testimonial — one at a time, prev/next — deliberately empty until real guest words exist */
var QUOTES = [
  { q:"Booked the Deluxe Suite for a work trip and ended up staying an extra night. Breakfast was ready before I asked for it, the Wi-Fi never dropped once, and the front desk had a driver at the gate ten minutes after a WhatsApp message.", n:"Adaeze O." },
  { q:"Eight tables on the roof and all of them full by six on a Friday. We came up for one drink and stayed for the pepper soup. Quiet enough to hear each other talk, five minutes off the expressway.", n:"Femi A." },
  { q:"Compared rates online, booked direct instead, and the ten percent actually showed up on the invoice. Suite matched the photos exactly, and someone called ahead to confirm our airport pickup without being asked.", n:"Kunle B." }
];
function quotes(){
  return '<section class="band"><div class="wrap">'+
   '<div class="shead"><span class="eyebrow">Client stories</span>'+
     '<h2 class="dsp d2">In their words</h2></div>'+
   '<div class="testi" id="testi"><div class="testi__pane" id="testiPane"><div class="testi__fade">'+
     '<span class="testi__mark" aria-hidden="true">&ldquo;</span>'+
     '<p class="testi__txt" id="testiTxt">'+QUOTES[0].q+'</p>'+
     '<div class="testi__rule" id="testiRule" data-fill="1"><span class="testi__fill"></span></div>'+
     '<div class="testi__row"><div class="testi__by"><b id="testiName">'+QUOTES[0].n+'</b><span class="testi__tag" title="Example quote — not yet a real guest review">*</span></div>'+
       '<div class="testi__nav">'+
         '<button class="car__btn" type="button" data-testi="-1" aria-label="Previous review"><svg class="ic" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>'+
         '<button class="car__btn" type="button" data-testi="1" aria-label="Next review"><svg class="ic" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>'+
       '</div></div>'+
   '</div></div></div>'+
  '</div></section>';
}
/* 06 · five-item carousel — stacked 3D stage with a swapping text pane */
function carousel(){
  return '<section class="band band--s1"><div class="wrap">'+
   '<div class="shead"><span class="eyebrow">Room by room</span>'+
     '<h2 class="dsp d2 nobreak">Two parts of one building</h2>'+
     '<p class="body">The suites and the table, inside the same walls, run by the same desk.</p></div>'+
   '<div class="car" id="car">'+
     '<div class="car__stage" id="carStage">'+
       SPACES.map(function(sp,i){
         return '<div class="car__s" data-i="'+i+'">'+photo(sp.v,sp.shot)+'</div>';
       }).join("")+
     '</div>'+
     '<div class="car__pane" id="carPane">'+
       '<div class="car__fade" id="carFade">'+
         '<span class="eyebrow" id="carKicker">'+SPACES[0].k+'</span>'+
         '<h3 class="dsp d3" id="carTitle" style="margin:10px 0 12px">'+SPACES[0].n+'</h3>'+
         '<p class="body" id="carCopy">'+SPACES[0].d+'</p>'+
         '<a class="lnk" id="carGo" href="'+SPACES[0].go+'" style="margin-top:16px">'+SPACES[0].goT+'</a>'+
       '</div>'+
       '<div class="car__ctl">'+
         '<div class="car__dots" id="carDots" role="tablist" aria-label="Spaces">'+
           SPACES.map(function(sp,i){ return '<button type="button" role="tab" data-go="'+i+'" aria-label="'+sp.n+'"'+(i?'':' aria-current="true"')+'></button>'; }).join("")+
         '</div>'+
         '<div style="display:flex;gap:16px;align-items:center">'+
           '<span class="car__count" id="carCount">01 / 0'+SPACES.length+'</span>'+
           '<div class="car__btns">'+
             '<button class="car__btn" type="button" data-car="-1" aria-label="Previous"><svg class="ic" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>'+
             '<button class="car__btn" type="button" data-car="1" aria-label="Next"><svg class="ic" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>'+
           '</div>'+
         '</div>'+
       '</div>'+
     '</div>'+
   '</div></div></section>';
}
/* enquiry */
function enquiry(){
  return '<section class="band" id="enquire"><div class="wrap enq">'+
   '<div style="display:grid;gap:17px">'+
     '<span class="eyebrow">Send an enquiry</span>'+
     '<h2 class="dsp d2">Ask us anything</h2>'+
     '<p class="body">Enquiries through here are quoted at the direct rate &mdash; ten percent under the booking sites. One person reads them and replies the same working day.</p>'+
     '<div class="acts"><a class="btn btn--g" href="tel:+2349160291333">+234 916 029 1333</a>'+
       '<a class="btn btn--o" id="waEnq" href="#" target="_blank" rel="noopener">WhatsApp instead</a></div>'+
     '<p class="tiny">Front desk staffed 24 hours. WhatsApp is usually answered inside ten minutes.</p></div>'+
   '<form class="panelform" id="enqForm" novalidate>'+
     '<div class="fld"><label for="qType">What is this about?</label><select id="qType">'+
       '<option>A room reservation</option><option>A long stay, a week or more</option><option>Airport transfer</option>'+
       '<option>A table at The Copper Room</option><option>Private hire of the rooftop</option>'+
       '<option>A meeting or event</option><option>Press or a shoot</option><option>Something else</option></select></div>'+
     '<div class="frow"><div class="fld"><label for="qName">Your name</label><input type="text" id="qName" required></div>'+
       '<div class="fld"><label for="qPhone">Phone</label><input type="tel" id="qPhone" placeholder="+234 …" required></div></div>'+
     '<div class="frow"><div class="fld"><label for="qEmail">Email</label><input type="email" id="qEmail" placeholder="you@example.com"></div>'+
       '<div class="fld"><label for="qDate">Date, if you have one</label><input type="date" id="qDate"></div></div>'+
     '<div class="fld"><label for="qNotes">Your message</label><textarea id="qNotes" placeholder="Dates, numbers, anything unusual…"></textarea></div>'+
     '<label class="consent"><input type="checkbox" id="qConsent" checked><span>I agree that Sabeis Homes may contact me about this enquiry.</span></label>'+
     '<button class="btn btn--p btn--full" type="submit">Send the enquiry</button>'+
     '<p class="status" id="enqStatus" hidden></p></form>'+
  '</div></section>';
}
function amenGrid(){
  return '<div class="grid4">'+AMENITIES.map(function(a,i){
    return '<article>'+mark(i)+'<h3 class="dsp d4">'+a[0]+'</h3><p class="small">'+a[1]+'</p></article>'; }).join("")+'</div>';
}
function pageHero(eye,title,sub,shot,v,tw){
  return '<section class="band" style="padding-top:calc(var(--nav-h) + clamp(44px,7vw,110px))"><div class="wrap">'+
   '<div class="shead" style="max-width:'+(tw||"24ch")+'"><span class="eyebrow">'+eye+'</span><h1 class="dsp d2">'+title+'</h1></div>'+
   '<p class="lede" style="margin-bottom:clamp(32px,4vw,56px)">'+sub+'</p>'+
   photo((v||"")+" photo--2",shot,"aspect-ratio:24/9")+
  '</div></section>';
}
function roomBlock(s,i){
  return '<article class="room'+(i%2?" room--flip":"")+'" data-room="'+s.id+'">'+
   '<div class="room__media">'+photo(s.v,s.shots[0])+photo(s.v,s.shots[1])+photo(s.v,s.shots[2])+'</div>'+
   '<div class="room__txt">'+
     '<span class="eyebrow">'+s.tagline+'</span>'+
     '<h3 class="dsp d2" style="font-size:clamp(1.8rem,3.4vw,2.8rem)">'+s.name+'</h3>'+
     '<p class="body">'+s.pitch+'</p>'+
     '<dl class="specs">'+s.specs.map(function(p){ return '<div><dt>'+p[0]+'</dt><dd>'+p[1]+'</dd></div>'; }).join("")+'</dl>'+
     '<p class="price">'+money(direct(s.rate))+' <s>'+money(s.rate)+'</s>'+
       '<small>per night, direct rate &middot; breakfast and VAT included</small></p>'+
     '<div class="room__acts">'+
       '<button class="btn btn--p btn--sm" type="button" data-book-suite="'+s.id+'">Book now</button>'+
       '<a class="btn btn--g btn--sm" target="_blank" rel="noopener" href="'+
         waLink("Hello "+HOTEL.name+", I would like to ask about the "+s.name+".")+'">Ask a question</a></div>'+
     '<div class="acc"><details><summary>Everything in this suite</summary><div class="accbd"><ul>'+
       s.amen.map(function(a){ return '<li>'+a+'</li>'; }).join("")+'</ul></div></details></div>'+
   '</div></article>';
}

/* ===================== VIEWS ===================== */
var VIEWS = {};

/* ---------- HOME : reference block order 01–08 ---------- */
VIEWS["/"] = function(){ return ''+
/* 01 · full-bleed motion hero with oversized type */
'<section class="hero">'+
  '<div class="hero__bg" role="img" aria-label="Sabeis Homes suite, soft evening light"></div>'+
  '<div class="hero__in">'+
    '<div class="hero__top">'+
      '<h1 class="dsp d1 rise rise2">Simplicity <em>meets</em> class</h1>'+
      '<p class="hero__sub rise rise3">The fourteen-suite short-let house behind Lagos&rsquo; quietest nights.</p>'+
      '<div class="hero__acts rise rise4">'+
        '<button class="btn btn--p" type="button" data-open-book>Book now</button>'+
        '<a class="btn btn--o" href="#/suites">See the suites</a></div>'+
    '</div>'+
    '<div class="hero__foot">'+
      '<div class="hero__facts"><span>24-hour power</span><span>Fibre Wi-Fi</span><span>Breakfast included</span><span>Airport transfer</span></div>'+
    '</div>'+
  '</div>'+
'</section>'+
/* 02 · four-card showcase grid */
'<section class="band" style="padding-top:clamp(30px,4vw,48px)"><div class="wrap">'+
  '<div class="shead shead--split"><div class="shead__l"><span class="eyebrow">The suites</span>'+
    '<h2 class="dsp d2">Four ways to stay</h2></div>'+
    '<a class="btn btn--g" href="#/suites">View all four</a></div>'+
  '<div class="show">'+SUITES.map(function(s){
    return '<a class="shot" href="#/suites">'+
      photo("shot__media "+s.v,s.shots[0])+
      '<div class="shot__bd">'+
        '<h3 class="dsp d3">'+s.name+'</h3>'+
        '<div class="shot__row"><span class="shot__meta">'+s.tagline+'</span>'+
          '<span class="shot__rate">'+money(direct(s.rate))+' <span>per night</span></span></div>'+
      '</div></a>';
  }).join("")+'</div>'+
'</div></section>'+
/* 02b · short-let features */
features()+
/* 03 · marquee */
marquee()+
/* 04 · three pillars */
pillars()+
/* 05 · quote row */
quotes()+
/* 06 · carousel */
carousel();
};

/* ---------- SUITES ---------- */
VIEWS["/suites"] = function(){ return ''+
pageHero("Suites &amp; rates","Fourteen suites,<br>four layouts,<br>one standard",
  "Three floors on a quiet street in Igbogbo, Ikorodu. Every rate includes breakfast cooked to order, fibre Wi&#8209;Fi and VAT &mdash; and booked direct, ten percent comes off the top.",
  "Shot 24 · Stair and landing — wide",undefined,"none")+
'<section class="band--tight"><div class="wrap"><div class="stats">'+
  '<div><b class="num">14</b><span>Suites</span></div>'+
  '<div><b class="num">4</b><span>Layouts</span></div>'+
  '<div><b class="num">24/7</b><span>Power &amp; front desk</span></div>'+
  '<div><b class="num">10%</b><span>Off, booked direct</span></div>'+
'</div></div></section>'+
marquee()+
'<section class="band band--s1" id="suiteList"><div class="wrap">'+
  '<div class="shead shead--split"><div class="shead__l"><span class="eyebrow">Pick your layout</span>'+
    '<h2 class="dsp d2">The four suites</h2>'+
    '<p class="body">Seven nights or more takes a further ten percent off. Extra beds are &#8358;12,000 a night in the two largest suites.</p></div>'+
    '<button class="btn btn--p" type="button" data-open-book>Check availability</button></div>'+
  '<div class="tabs" id="roomTabs" role="tablist" aria-label="Suite types">'+
    '<button type="button" role="tab" data-tab="all" aria-selected="true">All four</button>'+
    SUITES.map(function(s){ return '<button type="button" role="tab" data-tab="'+s.id+'" aria-selected="false">'+s.name+'</button>'; }).join("")+
  '</div>'+
  '<div class="rooms" id="roomRows">'+SUITES.map(roomBlock).join("")+'</div>'+
'</div></section>'+
'<section class="band"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">Included in every rate</span><h2 class="dsp d2">What comes with the room</h2></div>'+
  amenGrid()+
'</div></section>'+
'<section class="band band--s1"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">Good to know</span><h2 class="dsp d2">The practical things</h2></div>'+
  '<div class="acc" style="max-width:920px">'+FAQ.map(function(f){
    return '<details><summary>'+f[0]+'</summary><div class="accbd"><p>'+f[1]+'</p></div></details>'; }).join("")+'</div>'+
'</div></section>'+
'<section class="band"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">The look</span><h2 class="dsp d2">Around the house</h2>'+
  '<p class="small">Eight square slots, sized and cropped &mdash; your photographer&rsquo;s files drop straight in.</p></div>'+
  '<div class="gal">'+[["","08 · Reception"],["v2","09 · Bath"],["v3","10 · Desk"],["v4","11 · Corridor"],
    ["v5","12 · Breakfast"],["v3","13 · Courtyard"],["v2","14 · Bed detail"],["v4","15 · Rooftop"]]
    .map(function(p){ return photo(p[0],p[1]); }).join("")+'</div>'+
'</div></section>';
};

/* ---------- DINING ---------- */
VIEWS["/dining"] = function(){ return ''+
pageHero("Food &amp; drink","One kitchen, two very different rooms",
  "Downstairs is where breakfast happens and dinner is taken seriously. Upstairs is where the day ends. The same kitchen cooks for both, which keeps the menu short and honest.",
  "Shot 25 · Kitchen pass — wide","v2")+
marquee()+
'<section class="band band--s1"><div class="wrap rooms">'+
  '<article class="room">'+
    '<div class="room__media">'+photo("v2","Shot 06 · The Copper Room, dinner service")+
      photo("v2","Shot 06b · Table setting")+photo("v2","Shot 06c · Pepper soup")+'</div>'+
    '<div class="room__txt">'+
      '<span class="eyebrow">Daily &middot; 07:00 &ndash; 22:30</span>'+
      '<h2 class="dsp d2" style="font-size:clamp(1.9rem,3.6vw,3rem)">The Copper Room</h2>'+
      '<p class="body">Eleven tables under copper pendants. Breakfast is included in every rate and cooked to order &mdash; yam and egg sauce, akara, or a full English if that is your morning. Dinner is nine plates, Nigerian and continental, changed as the market changes. The pepper soup has not come off the list once.</p>'+
      '<ul class="bullets"><li>Breakfast 07:00&ndash;11:00, included in every rate</li>'+
        '<li>Lunch and dinner to 22:30, last order 22:00</li>'+
        '<li>Room service on the same menu until 22:00, no surcharge</li>'+
        '<li>Walk-ins welcome if you call ahead</li>'+
        '<li>Allergies and restrictions: tell us when you book</li></ul>'+
      '<div class="room__acts"><a class="btn btn--p btn--sm" id="waMenu" href="#" target="_blank" rel="noopener">Ask for the menu</a>'+
        '<a class="btn btn--g btn--sm" href="tel:+2349160291333">Reserve by phone</a></div>'+
    '</div></article>'+
  '<article class="room room--flip">'+
    '<div class="room__media">'+photo("v3","Shot 07 · Rooftop lounge at dusk")+
      photo("v3","Shot 07b · Bar detail")+photo("v3","Shot 07c · Small chops")+'</div>'+
    '<div class="room__txt">'+
      '<span class="eyebrow">Tuesday &ndash; Sunday &middot; 16:00 &ndash; late</span>'+
      '<h2 class="dsp d2" style="font-size:clamp(1.9rem,3.6vw,3rem)">Sabeis Lounge</h2>'+
      '<p class="body">Eight tables on the roof and a view across the estate. Cocktails built from whatever the bar has that is actually good, small chops from the kitchen downstairs, and palm wine on Sundays because people kept asking. The light between six and seven is the reason to arrive early.</p>'+
      '<div class="tags"><span class="tag">Sundown bar</span><span class="tag">Palm wine Sundays</span>'+
        '<span class="tag">Small chops to 22:00</span><span class="tag">Private hire from 16:00</span></div>'+
      '<div class="room__acts"><a class="btn btn--p btn--sm" id="waTable" href="#" target="_blank" rel="noopener">Reserve a table</a></div>'+
    '</div></article>'+
'</div></section>'+
'<section class="band"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">Also true</span><h2 class="dsp d2">Small things about eating here</h2></div>'+
  '<div class="grid3">'+[
   ["Breakfast on your schedule","Seven until eleven downstairs. Tell the desk the night before and it arrives in your suite at the hour you name, at no extra cost."],
   ["The menu is short on purpose","Nine dinner plates, changed as the market changes. Anything you cannot eat, tell us when you book and the kitchen works around it."],
   ["Delivery, locally","We send food out within Igbogbo and Ikorodu between noon and nine. Order on WhatsApp and it leaves the kitchen inside forty minutes."]
  ].map(function(a,i){ return '<article class="card">'+mark(i+3)+'<h3 class="dsp d4">'+a[0]+'</h3><p class="small">'+a[1]+'</p></article>'; }).join("")+'</div>'+
'</div></section>'+enquiry();
};

/* ---------- ABOUT ---------- */
VIEWS["/about"] = function(){ return ''+
pageHero("About","Simplicity<br>meets <em style=\"font-style:italic;color:var(--copper-hi)\">class</em>",
  "Sabeis Homes Ltd was registered to do one thing properly: run a small hotel in Lagos where nothing important is left to chance. The tagline is not marketing &mdash; it was the brief we gave the builders.",
  "Shot 29 · The building, from across the street","v3","none")+
pillars()+
'<section class="band"><div class="wrap grid2" style="align-items:center">'+
  '<div style="display:grid;gap:18px"><span class="eyebrow">How it started</span>'+
    '<h2 class="dsp d2">A short history</h2>'+
    '<p class="body">The company was built around a frustration anyone who travels in Nigeria will recognise: the gap between what a hotel promises and what happens at eleven at night when the power goes and nobody answers the phone.</p>'+
    '<p class="body">So the priorities went in a particular order. Power first, then water, then the bed, then the food, then everything else. Fourteen suites was the largest number we could run without needing a layer of management between the guest and the person who can fix things.</p>'+
    '<p class="body">Everything since has followed from that. It is why the house is small, why the menu is short, and why the front desk is staffed through the night.</p></div>'+
  photo("v2 no-arm","Shot 30 · Detail, copper and oak","aspect-ratio:4/5")+
'</div></section>'+
'<section class="band band--s1"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">What we hold to</span><h2 class="dsp d2">Four house rules</h2></div>'+
  '<div class="grid4">'+[
   ["Nothing important is optional","Power, water, Wi-Fi and a clean bed are not amenities to be listed. They are the floor, and the floor never moves."],
   ["Say the real price","Rates include VAT and breakfast. The figure on the page is the figure on the bill, and the direct rate is always the lowest one."],
   ["Answer the phone","Somebody picks up, at any hour, and that person can actually decide things."],
   ["Small on purpose","Fourteen suites is a choice. It is the size at which a house can still be run by people who know your name."]
  ].map(function(v){ return '<article><h3 class="dsp d4">'+v[0]+'</h3><p class="small">'+v[1]+'</p></article>'; }).join("")+'</div>'+
'</div></section>'+
'<section class="band"><div class="wrap">'+
  '<div class="shead"><span class="eyebrow">The company</span><h2 class="dsp d2">On the record</h2></div>'+
  '<div class="grid4">'+[
   ["Registered name","Sabeis Homes Ltd"],["RC number","8982917"],
   ["Registered address","35, Baganju Street, Igbogbo, Ikorodu, Lagos"],["Reservations","+234 916 029 1333"]
  ].map(function(v){ return '<article><span class="eyebrow">'+v[0]+'</span><p class="dsp d4">'+v[1]+'</p></article>'; }).join("")+'</div>'+
'</div></section>'+quotes();
};

/* ---------- CONTACT ---------- */
VIEWS["/contact"] = function(){ return ''+
pageHero("Contact","Come and stay",
  "The fastest route is WhatsApp and the desk is staffed through the night. Everything below reaches a person, not a queue.",
  "Shot 16 · Gate and street entrance — wide","v5","none")+
'<section class="band"><div class="wrap">'+
  '<div class="grid4">'+[
   ["Reservations","+234 916 029 1333","tel:+2349160291333","Also on +234 806 939 7507"],
   ["Sabeis Homes email","sabeishomes@gmail.com","mailto:sabeishomes@gmail.com","Answered within the day"],
   ["Dining","sabeishomes@gmail.com","mailto:sabeishomes@gmail.com","The Copper Room and room service"],
   ["Events","sabeishomes@gmail.com","mailto:sabeishomes@gmail.com","Straight to the coordinator"]
  ].map(function(c){ return '<article><span class="eyebrow">'+c[0]+'</span>'+
    '<p class="dsp d4" style="font-size:.98rem;word-break:break-word"><a href="'+c[2]+'">'+c[1]+'</a></p>'+
    '<p class="small">'+c[3]+'</p></article>'; }).join("")+'</div>'+
  '<div class="grid2" style="margin-top:clamp(28px,3.4vw,48px);align-items:start">'+
    '<div style="display:grid;gap:16px">'+
      '<h3 class="dsp d3">35, Baganju Street</h3>'+
      '<p class="body">Behind Homat School, Igbogbo, Ikorodu, Lagos State. Sabeis Homes Ltd, RC 8982917. Arrival from 14:00, departure by 12:00 &mdash; bags held free either side.</p>'+
      '<p class="small">About 75&ndash;110 minutes from Murtala Muhammed International depending on traffic. A car meets you at arrivals &mdash; send your flight number when you book and we confirm the fare with you first.</p>'+
      '<div class="acts"><a class="btn btn--g" href="https://www.google.com/maps/search/?api=1&amp;query=35+Baganju+Street+Igbogbo+Ikorodu+Lagos" target="_blank" rel="noopener">Open in Maps</a>'+
        '<button class="btn btn--p" type="button" data-open-book>Book a suite</button></div>'+
    '</div>'+
    '<div><h3 class="dsp d3" style="margin-bottom:18px">Opening hours</h3>'+
      '<div class="acc">'+[
       ["Front desk","Open 24 hours, every day of the year. Somebody is always on the desk, and that person can make decisions."],
       ["Breakfast · 07:00 – 11:00","In The Copper Room, cooked to order and included in every rate. In-suite at the hour you name, at no extra cost, if you tell the desk the night before."],
       ["The Copper Room · 07:00 – 22:30","Lunch and dinner daily, last order at 22:00. Walk-ins welcome if you call ahead. Room service runs the same menu until 22:00."],
       ["Sabeis Lounge · Tue – Sun, 16:00 – late","The rooftop bar. Guests need no reservation; walk-ins should call. Private hire from 16:00 any day."],
       ["Events · by arrangement","Courtyard, boardroom and rooftop are booked through the coordinator, who normally comes back to you the same working day."]
      ].map(function(h){ return '<details><summary>'+h[0]+'</summary><div class="accbd"><p>'+h[1]+'</p></div></details>'; }).join("")+'</div></div>'+
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
  var s=suiteById($("#bSuite").value), n=nights($("#bIn").value,$("#bOut").value);
  var full=s.rate*n, disc=direct(s.rate)*n;
  $("#totalLabel").innerHTML=(n||0)+" night"+(n===1?"":"s")+" &middot; "+s.name;
  $("#totalAmt").textContent=money(disc);
  $("#depositAmt").textContent=money(direct(s.rate));
  $("#saveLine").innerHTML = n ? "Direct rate applied &mdash; you save "+money(full-disc)+"." : "Pick your dates to see the total.";
}
function collect(){
  var s=suiteById($("#bSuite").value), n=nights($("#bIn").value,$("#bOut").value);
  return { suite:s, n:n, rate:direct(s.rate), total:direct(s.rate)*n,
    inD:$("#bIn").value, outD:$("#bOut").value, guests:$("#bGuests").value,
    name:$("#bName").value.trim(), phone:$("#bPhone").value.trim(),
    email:$("#bEmail").value.trim(), notes:$("#bNotes").value.trim(), consent:$("#bConsent").checked };
}
function validate(r){
  if(!r.name) return "Please add the name the suite should be held under.";
  if(!r.phone) return "Please add a phone number so we can confirm.";
  if(r.n<1) return "Departure needs to be at least one night after arrival.";
  if(!r.consent) return "Please tick the box so we may reply to you.";
  return null;
}
function messageFor(r){
  return ["RESERVATION REQUEST — "+HOTEL.name,"",
    "Suite: "+r.suite.name,"Direct rate: "+money(r.rate)+" per night",
    "Arrival: "+fmtDate(r.inD),"Departure: "+fmtDate(r.outD),
    "Nights: "+r.n,"Guests: "+r.guests,"Total: "+money(r.total),"",
    "Name: "+r.name,"Phone: "+r.phone,
    r.email?"Email: "+r.email:"", r.notes?"Notes: "+r.notes:""].filter(Boolean).join("\n");
}
function say(sel,msg,kind){ var el=$(sel); if(!el) return; el.textContent=msg; el.setAttribute("data-kind",kind||""); el.hidden=false; }

var lastFocus=null;
function openBook(id){
  if(id){ $("#bSuite").value=id; updateTotal(); }
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
  try{ localStorage.setItem("sbh-draft",JSON.stringify({suite:$("#bSuite").value,guests:$("#bGuests").value,
    name:$("#bName").value,phone:$("#bPhone").value,email:$("#bEmail").value,notes:$("#bNotes").value})); }catch(e){}
}
function loadDraft(){
  try{
    var raw=localStorage.getItem("sbh-draft"); if(!raw) return;
    var d=JSON.parse(raw);
    if(d.name)$("#bName").value=d.name; if(d.phone)$("#bPhone").value=d.phone;
    if(d.email)$("#bEmail").value=d.email; if(d.notes)$("#bNotes").value=d.notes;
    if(d.guests)$("#bGuests").value=d.guests; if(d.suite)$("#bSuite").value=d.suite;
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
  var rows = view.querySelectorAll(".shot, .pill article, .grid4 article, .testi, .card, .stats, .specs, .acc, .tags, .bullets, .numlist, .lede, .hero__acts, .hero__foot, .car__pane, .shead p, .eyebrow");
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
     rows (a Chromium quirk, seen on the homepage suite cards and elsewhere) — armedWatch is a
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
    say("#enqStatus","Opening WhatsApp with your enquiry — send it and we reply the same working day, at the direct rate.","ok");
  });

  /* suite tabs */
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

  $("#bSuite").innerHTML=SUITES.map(function(s){
    return '<option value="'+s.id+'">'+s.name+' — '+money(direct(s.rate))+'</option>'; }).join("");
  $("#bSuite").value="deluxe";

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
  ["#bOut","#bSuite","#bGuests"].forEach(function(s){ $(s).addEventListener("change",function(){ updateTotal(); saveDraft(); }); });
  ["#bName","#bPhone","#bEmail","#bNotes"].forEach(function(s){ $(s).addEventListener("input",saveDraft); });
  updateTotal(); loadDraft();

  document.addEventListener("click",function(e){
    var o=e.target.closest("[data-open-book]");
    if(o){ e.preventDefault(); openBook(); return; }
    var s=e.target.closest("[data-book-suite]");
    if(s){ e.preventDefault(); e.stopPropagation(); openBook(s.getAttribute("data-book-suite")); return; }
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
    window.location.href="mailto:"+HOTEL.email+"?subject="+encodeURIComponent("Reservation request — "+r.suite.name+" — "+fmtDate(r.inD))+
      "&body="+encodeURIComponent(messageFor(r));
    say("#status","Your mail app should open with the request filled in.","ok");
  });
  $("#payNow").addEventListener("click",function(){
    var r=collect(), err=validate(r); if(err) return say("#status",err,"err");
    if(!r.email) return say("#status","A card payment needs an email address for the receipt.","err");
    if(window.PaystackPop && HOTEL.paystackKey){
      try{
        window.PaystackPop.setup({
          key:HOTEL.paystackKey, email:r.email, amount:Math.round(r.rate*100), currency:"NGN",
          ref:"SBH-"+Date.now(),
          metadata:{custom_fields:[
            {display_name:"Guest",variable_name:"guest",value:r.name},
            {display_name:"Phone",variable_name:"phone",value:r.phone},
            {display_name:"Suite",variable_name:"suite",value:r.suite.name},
            {display_name:"Stay",variable_name:"stay",value:fmtDate(r.inD)+" → "+fmtDate(r.outD)}]},
          callback:function(res){ say("#status","Deposit received. Reference "+res.reference+". Your suite is held — we will see you on "+fmtDate(r.inD)+".","ok"); },
          onClose:function(){ say("#status","The payment window closed, so nothing was sent.","err"); }
        }).openIframe();
        return;
      }catch(e){}
    }
    say("#status","Card payment is not switched on yet — it needs the Paystack key and script on your own domain. Send the request by WhatsApp and we will share a payment link.","err");
  });

  route();
})();
