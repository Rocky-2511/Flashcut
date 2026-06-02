gsap.registerPlugin(ScrollTrigger);

// ==========================================================================
// 1. FEATURED WORK DATA (Shows in 3D Coverflow on Homepage - UNCHANGED)
// ==========================================================================
const homeFeaturedData = [
    {
      "id": "feat-1", "title": "OLA Proximity Unlock", "categoryLabel": "Ad", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/CTr_yWg4sgI?si=uUgIzGRVEqefhhLL"
    },
    {
      "id": "feat-2", "title": "Panasonic", "categoryLabel": "Ad", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/watch?v=8HXEpq7w-ek"
    },
    {
      "id": "feat-3", "title": "Grown Brilliance", "categoryLabel": "Ad", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/7zSHGWCw4gY?si=_tCfGwc3IHSpkiB2"
    },
    {
      "id": "feat-4", "title": "Tinder", "categoryLabel": "Ad", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1516280440502-628d05260655?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/687579902"
    },
    {
      "id": "feat-5", "title": "Birla Opus Paints", "categoryLabel": "Ads", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/YR9P27gEjJs?si=6e56duYwWT71L19h"
    },
    {
      "id": "feat-6", "title": "Tanishq Celebrates Kakatiya", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/RXxu3g-gg3o?si=ORUhhdHMabaMay_d"
    },
    {
      "id": "feat-7", "title": "Zee SAFARI PROMO", "categoryLabel": "Cinematic", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/zCWH1MyQZgQ?si=TeAq1JIS9mXiI7bA"
    },
    {
      "id": "feat-8", "title": "Ceat Enduro Tracks", "categoryLabel": "Ad", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/5vGhZuxpASE?si=A_4aGj5Z4spO4XSC"
    },
        {
      "id": "feat-9", "title": "Titan Smart x Satwik Rankireddy & Chirag Shetty | Celestor 2.0 ", "categoryLabel": "Cinematic", "format": "16x9",
      "previewVideo": "https://youtu.be/78iexqrUfqg?si=8pkY9EKAc0t4yPt0"
    },
];

// ==========================================================================
// 2. RECENT PROJECTS DATA (Shows in Top 4 Grid on Homepage - UNCHANGED)
// ==========================================================================
const homeRecentGridData = [
    {
      "id": "recent-1", "title": "Rainbow Rishta", "categoryLabel": "Prime Video", "format": "16x9",
      "previewVideo": "https://youtu.be/5WdFB6qDVuw?si=C_XRK8lSYbkw3CPN",
      "redirectUrl": "https://www.primevideo.com/region/eu/detail/0NXO53FPW0FN0Y3ETDSFLPDJE5/ref=atv_dp_share_cu_r" // Trailer plays inline, click redirects
    },
    {
      "id": "recent-2", "title": "Nothing Phone (2a) ft. Ranveer Singh", "categoryLabel": "Commercial Ads", "format": "16x9",
      "previewVideo": "https://youtu.be/YzrCypaVZVI?si=_LfonYGD9l6YL9Ij"
    },
    {
      "id": "recent-3", "title": "Red Bull Cricket Challenge with Smriti Mandhana", "categoryLabel": "Commercial Ads", "format": "16x9",
      "previewVideo": "https://youtu.be/tVny6H-ivfs?si=MPnzK6ZtXXMOGSix"
    },
    {
      "id": "recent-4", "title": "Time To Aarize | Brand Film | Aarize Group x Tiger Shroff", "categoryLabel": "Commercial Ads", "format": "16x9",
      "previewVideo": "https://youtu.be/ZZVgDa00jGM?si=-u1gio-7YVH5oufy"
    }
];

// ==========================================================================
// 3. FULL PORTFOLIO PAGE DATA (Sorted: Premium Brands & Celebs First)
// ==========================================================================
const fullPortfolioPageData = [
    // --- TOP TIER: CELEBS, MOVIES & OTT ---
    {
      "id": "new-49", "title": "Nothing Phone (2a) ft. Ranveer Singh", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/YzrCypaVZVI?si=6eN_xUzHc66uWSdw"
    },
    {
      "id": "new-58", "title": "Aarize, Crafted Realty - Tiger Shroff", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/TJF7vyB4Rck?si=I1vk30Cuf0_Dyzcb"
    },
    {
      "id": "new-59", "title": "Time To Aarize | Brand Film | Aarize Group x Tiger Shroff", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/ZZVgDa00jGM?si=rFrN7EtwZA2K4U3_"
    },
    {
      "id": "new-50", "title": "KING - Rang Barse | Karan Kanchan | House of McDowell's", "categoryLabel": "Music Video", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/l_OD__gwhLQ?si=O6b4zim-dzXPEcK-"
    },
    {
      "id": "new-28", "title": "Ayushmann Khurrana Plays Truth or Lie | Anek", "categoryLabel": "Netflix", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/724803783"
    },
    {
      "id": "port-12", "title": "Netflix Jamtara Season 2 | Announcement", "categoryLabel": "Netflix", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/SbM3GbcCASg?si=9Oyz2zxk0Er4cJVW"
    },
    {
      "id": "new-25", "title": "Rainbow Rishta", "categoryLabel": "Prime Video", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/5WdFB6qDVuw?si=C_XRK8lSYbkw3CPN",
      "redirectUrl": "https://www.primevideo.com/region/eu/detail/0NXO53FPW0FN0Y3ETDSFLPDJE5/ref=atv_dp_share_cu_r"
    },

    // --- RED BULL GLOBAL/INDIA ---
    {
      "id": "new-26", "title": "Red Bull JERSEY REVEAL", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/694458717"
    },
    {
      "id": "new-27", "title": "Red Bull RIDE ACROSS INDIA", "categoryLabel": "Documentary", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/720592076"
    },
    {
      "id": "new-29", "title": "Ek Chhoti Si Umeed", "categoryLabel": "Red Bull Documentary", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "", // Empty uses default thumbnail, redirects smoothly
      "redirectUrl": "https://www.redbull.com/in-en/videos/red-bull-spotlight-2019-winners-documentary-ek-chhoti-si-umeed"
    },
    {
      "id": "new-30", "title": "Greatness Starts Here: Devdutt Padikkal", "categoryLabel": "Red Bull GSH", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/t9-41wG13bY?si=Zs1-Wm2D2TbWICfk"
    },
    {
      "id": "new-37", "title": "Greatness Starts Here: Riyan Parag", "categoryLabel": "Red Bull GSH", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/iK76CIq-uO4?si=wcpdCN6Imc8bgImh"
    },
    {
      "id": "new-38", "title": "Greatness Starts Here: Prasidh Krishna", "categoryLabel": "Red Bull GSH", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/CoGtzQdBDb8?si=H9qcPOTpOsSwGTK1"
    },
    {
      "id": "new-48", "title": "Red Bull Cricket Challenge with Smriti Mandhana", "categoryLabel": "Social", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/tVny6H-ivfs?si=Xke-r3t4Fx1_8UaY"
    },
    {
      "id": "new-45", "title": "Red Bull Social: KIEREN D'SOUZA", "categoryLabel": "Social", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/690201427"
    },
    {
      "id": "new-46", "title": "Red Bull Social: FKT", "categoryLabel": "Social", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/690279606"
    },
    {
      "id": "port-10", "title": "Red Bull HIGHER GROUND PARAGLIDING", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/OqVN2O09_A4?si=9KCHjRYOWmeSQmKS"
    },

    // --- TINDER ---
    {
      "id": "port-4", "title": "Tinder", "categoryLabel": "Ad", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1516280440502-628d05260655?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/687579902"
    },
    {
      "id": "new-43", "title": "Tinder SINGLES POND", "categoryLabel": "Ad", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1516280440502-628d05260655?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/687579902"
    },
    {
      "id": "new-44", "title": "Tinder 2", "categoryLabel": "Ad", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1516280440502-628d05260655?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/687579814"
    },

    // --- MAJOR BRANDS (Panasonic, OLA, Indian Oil, Ceat, Skechers, Birla, Google) ---
    {
      "id": "port-2", "title": "Panasonic", "categoryLabel": "Ad", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/watch?v=8HXEpq7w-ek"
    },
    {
      "id": "new-55", "title": "INDIAN OIL CRYOGENIC", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/4eGA0_B6BaQ?si=nao4EtopyN3BJA0c"
    },
    {
      "id": "port-1", "title": "OLA Proximity Unlock", "categoryLabel": "Ad", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/CTr_yWg4sgI?si=uUgIzGRVEqefhhLL"
    },
    {
      "id": "port-19", "title": "OLA Parental Control Master", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/RHswfmS7dgg?si=CjnhDtRdoROFkllT"
    },
    {
      "id": "port-20", "title": "OLA Mood & Widget Master", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/8yY_cLQ6q3I?si=r_t6U_s-v6qcNBS1"
    },
    {
      "id": "port-5", "title": "Birla Opus Paints", "categoryLabel": "Ads", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/YR9P27gEjJs?si=6e56duYwWT71L19h"
    },
    {
      "id": "port-8", "title": "Ceat Enduro Tracks", "categoryLabel": "Ad", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/5vGhZuxpASE?si=A_4aGj5Z4spO4XSC"
    },
    {
      "id": "new-52", "title": "Skechers Presents Hoop Nation | Flight of Dreams", "categoryLabel": "Social", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/fQItBiol1ac?si=d42QbramkwrlI9fT"
    },
    {
      "id": "new-53", "title": "Skechers Presents Hoop Nation | Remember Who We Are", "categoryLabel": "Social", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/lb9i1dUU-ys?si=-t8bxORuF67QzIY-"
    },
    {
      "id": "new-54", "title": "Skechers Presents Hoop Nation | Legendary Hood", "categoryLabel": "Social", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/BeX15qcSg1s?si=IBHzCXpKuxdMkRrq"
    },
    {
      "id": "port-9", "title": "Google Googlies", "categoryLabel": "YouTube", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/MsdvgQOmBPc?si=lvCVo62qOKSbMAJN"
    },

    // --- FASHION & JEWELRY (Biba, Tanishq, Grown Brilliance, VON) ---
    {
      "id": "new-39", "title": "Biba Girl", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/690255560"
    },
    {
      "id": "new-40", "title": "BIBA SKIRTS", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/690257685"
    },
    {
      "id": "new-41", "title": "BIBA BY ROHIT BAL 1", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/690219011"
    },
    {
      "id": "new-42", "title": "BIBA BY ROHIT BAL 2", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://vimeo.com/690219151"
    },
    {
      "id": "port-6", "title": "Tanishq Celebrates Kakatiya", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/RXxu3g-gg3o?si=ORUhhdHMabaMay_d"
    },
    {
      "id": "port-15", "title": "Tanishq 1", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/Fp5Fjn7EsWI?si=1QBpB5b6X28_Zc-e"
    },
    {
      "id": "port-16", "title": "Tanishq 2", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/eiMKLZCQj5M?si=nlkrlis0TJbF43_-"
    },
    {
      "id": "port-17", "title": "Tanishq 3", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/qFy1nDFw98E?si=uKEL5Z1eyKR4aWJp"
    },
    {
      "id": "port-18", "title": "Tanishq 4", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/WVfk9XejmhY?si=U3H3oOvFmENeF8S6"
    },
    {
      "id": "port-3", "title": "Grown Brilliance", "categoryLabel": "Ad", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/7zSHGWCw4gY?si=_tCfGwc3IHSpkiB2"
    },
    {
      "id": "port-24", "title": "VON Diamonds", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/AmjO6_xia7Y?si=Biz9YYTnlUCe5-kR"
    },

    // --- FMCG / APPLIANCES (Haldiram, Morphy Richards) ---
    {
      "id": "new-51", "title": "Khulke Khilao Holi with Haldiram’s", "categoryLabel": "Social", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/nuRUTuuks_s?si=ZgUPm5hZah1MY7a4"
    },
    {
      "id": "new-56", "title": "Morphy Richards PERSONAL GROOMING", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/lfRGhGgPVvg?si=5v6BS7kOXPb5MT31"
    },
    {
      "id": "new-57", "title": "Morphy Richards AIR FRYER", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/H929k19oIdc?si=l9QHYbhU7IdSiof1"
    },

    // --- PLAYLISTS (Govt / Banking) ---
    {
      "id": "port-pl-1", "title": "Axis Mutual Fund Series", "categoryLabel": "YouTube Playlist", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/hjgRhYZRP0k?si=aXoyWJI4HbEbUKSR",
      "redirectUrl": "https://youtube.com/playlist?list=PLEhtzo1XHPL2vp0oRPd4YEbEIuJ29V_lA&si=XjudmhMHgzCUHlRW"
    },
    {
      "id": "port-pl-2", "title": "SBI Mind Over Money", "categoryLabel": "YouTube Playlist", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/NCr4OutUsnA?si=Crbp8VOqZdXrKP9n",
      "redirectUrl": "https://youtube.com/playlist?list=PLP91F8e-K8QRta1WqSftPg-Qt1iIjBvdS&si=3agAkzEfr0og8b-c"
    },
    {
      "id": "port-pl-4", "title": "Government Campaigns", "categoryLabel": "YouTube Playlist", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/HEZ9Yf88oRY?si=t8bGb6XcYdL6rTFy",
      "redirectUrl": "https://youtube.com/playlist?list=PLP91F8e-K8QQxI5Auv3ryV18Nz38xvmX9&si=iSevvTntUBsHQ0fk"
    },
    {
      "id": "port-11", "title": "DIGIYATRA", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/fEUQd7vS_GE?si=WNtxyOH-IB5-S3PK"
    },

    // --- GAMING (BGMI, Free Fire) ---
    {
      "id": "port-pl-3", "title": "BGMI - Do You Even BGMI BRO!", "categoryLabel": "YouTube Playlist", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/TLIowgBEHdA?si=vSam57NnFI_WQEdB",
      "redirectUrl": "https://youtube.com/playlist?list=PLP91F8e-K8QTMF4GZW3fP31u3HyALTDYi&si=2q-3B199VaFxNTrq"
    },
    {
      "id": "new-47", "title": "Baatein, Battle Aur Booyah | Free Fire MAX", "categoryLabel": "Social", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/kexver_cAVc?si=kjDAmgiNxUiko_KP"
    },

    // --- TV & PROMO (Zee, Slikk) ---
    {
      "id": "port-7", "title": "Zee SAFARI PROMO", "categoryLabel": "Cinematic", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/zCWH1MyQZgQ?si=TeAq1JIS9mXiI7bA"
    },
    {
      "id": "port-13", "title": "Zee FIT FAB", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/Js8KsU81GuE?si=IbrCG4THgnUytjCT"
    },
    {
      "id": "port-14", "title": "Zee GOAN GULLY ", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/ScfX7LeRsac?si=b5Mp5ccm53zmxfPe"
    },
    {
      "id": "port-21", "title": "Slikk Reel 02", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/boOMmFtjxjc?si=OyCHCPA-DvcSh4sA"
    },
    {
      "id": "port-22", "title": "Slikk Reel 03", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/xBZ5qNY90W4?si=jKbETpsJnZ1pXpui"
    },
    {
      "id": "port-23", "title": "Slikk Reel 05", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/-UfAIGXAY5A?si=MNPGppQGC-l4--g2"
    }
];

// ==========================================================================
// THUMBNAIL AUTO-DETECTION SYSTEM (New Feature)
// ==========================================================================
function getYouTubeId(url) {
    if (!url) return null;
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
    if (url.includes('youtube.com/shorts/')) return url.split('youtube.com/shorts/')[1].split('?')[0];
    if (url.includes('youtube.com/watch')) return new URL(url).searchParams.get('v');
    return null;
}

function getVimeoId(url) {
    if (!url) return null;
    const match = url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
    return match ? match[1] : null;
}

function getVideoThumbnail(project) {
    let url = project.previewVideo || project.redirectUrl;
    if (!url) return project.thumbnail;
    
    // Check if it's YouTube
    const ytId = getYouTubeId(url);
    if (ytId) return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    
    // Check if it's Vimeo
    const vimeoId = getVimeoId(url);
    if (vimeoId) return `https://vumbnail.com/${vimeoId}.jpg`;
    
    return project.thumbnail;
}

function buildInlineVideoHTML(src) {
    if (!src) return '';
    const ytId = getYouTubeId(src);
    const vimeoId = getVimeoId(src);

    if (ytId) {
        return `<iframe src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&modestbranding=1&playsinline=1&enablejsapi=1" allow="autoplay; fullscreen" title="YouTube video player"></iframe>`;
    } else if (vimeoId) {
        return `<iframe src="https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1" frameborder="0" allow="autoplay; fullscreen" title="Vimeo video player"></iframe>`;
    } else {
        return `<video src="${src}" loop playsinline muted autoplay></video>`;
    }
}

const volumeOffIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
const volumeOnIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;

// SMART REDIRECT LOGIC FOR BUTTONS
function getSlideControls(project) {
    let action = `openVideoModal('${project.previewVideo}')`;
    let icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
    let text = 'View Full';

    // Agar redirect link available hai toh usko external window me kholo
    if (project.redirectUrl) {
        action = `window.open('${project.redirectUrl}', '_blank')`;
        icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
        text = 'Watch Now';
    }

    return `
        <div class="slide-controls">
            <button class="sound-btn muted" onclick="toggleMute(this, event)">${volumeOffIcon}</button>
            <button class="control-btn view-full-btn" onclick="event.stopPropagation(); ${action}">
                ${icon}
                ${text}
            </button>
        </div>
    `;
}

// ==========================================================================
// SOUND CONTROL LOGIC 
// ==========================================================================
window.toggleMute = function(btn, event) {
    event.stopPropagation(); 
    const card = btn.closest('.tilt-card, .swiper-slide');
    const iframe = card.querySelector('iframe');
    const video = card.querySelector('video');
    const isMuted = btn.classList.contains('muted');
    
    if (iframe && iframe.contentWindow) {
        const iframeSrc = iframe.getAttribute('src');
        if (iframeSrc && iframeSrc.includes('youtube')) {
            iframe.contentWindow.postMessage(JSON.stringify({ "event": "command", "func": isMuted ? "unMute" : "mute", "args": [] }), "*");
        } else if (iframeSrc && iframeSrc.includes('vimeo')) {
            iframe.contentWindow.postMessage(JSON.stringify({ "method": "setVolume", "value": isMuted ? 1 : 0 }), "*");
        }
    } else if (video) {
        video.muted = !isMuted;
    }
    
    btn.classList.toggle('muted');
    btn.innerHTML = isMuted ? volumeOnIcon : volumeOffIcon;
};

// ==========================================================================
// FEATURED WORK: INSTANT KILL LOGIC 
// ==========================================================================
function killAllCoverflowVideosImmediately(swiper) {
    swiper.slides.forEach(slide => {
        const videoContainer = slide.querySelector('.coverflow-inline-video');
        if (videoContainer && videoContainer.innerHTML !== '') {
            gsap.killTweensOf(videoContainer); 
            videoContainer.style.opacity = 0; 
            videoContainer.innerHTML = ''; 
            
            const soundBtn = slide.querySelector('.sound-btn');
            if(soundBtn) { soundBtn.classList.add('muted'); soundBtn.innerHTML = volumeOffIcon; }
        }
    });
}

function playCenterCoverflowVideo(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
        const videoSrc = activeSlide.getAttribute('data-preview-src');
        const videoContainer = activeSlide.querySelector('.coverflow-inline-video');
        if (videoContainer && videoSrc && videoContainer.innerHTML === '') {
            videoContainer.innerHTML = buildInlineVideoHTML(videoSrc);
            gsap.to(videoContainer, {opacity: 1, duration: 0.4});
        }
    }
}

// ==========================================================================
// PORTFOLIO GRID: PC HOVER & MOBILE SCROLL
// ==========================================================================
let globalHoverTimer;
let currentActiveVideoContainer = null;

function initHoverToPlay() {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.addEventListener('mouseover', (e) => {
            const card = e.target.closest('.portfolio-item, .portfolio-slider-section .swiper-slide');
            if (!card) return;

            const videoSrc = card.getAttribute('data-preview-src');
            const videoContainer = card.querySelector('.portfolio-inline-video');
            
            if (videoContainer && videoSrc && currentActiveVideoContainer !== videoContainer) {
                clearTimeout(globalHoverTimer);
                if (currentActiveVideoContainer) {
                    currentActiveVideoContainer.innerHTML = '';
                    gsap.to(currentActiveVideoContainer, {opacity: 0, duration: 0.1});
                }
                currentActiveVideoContainer = videoContainer;

                globalHoverTimer = setTimeout(() => {
                    videoContainer.innerHTML = buildInlineVideoHTML(videoSrc);
                    gsap.to(videoContainer, {opacity: 1, duration: 0.4});
                }, 350); 
            }
        });

        document.addEventListener('mouseout', (e) => {
            const card = e.target.closest('.portfolio-item, .portfolio-slider-section .swiper-slide');
            if (!card) return;
            if (card.contains(e.relatedTarget)) return;

            const videoContainer = card.querySelector('.portfolio-inline-video');
            if (videoContainer) {
                clearTimeout(globalHoverTimer);
                gsap.to(videoContainer, {
                    opacity: 0, duration: 0.2, onComplete: () => {
                        videoContainer.innerHTML = ''; 
                        if(currentActiveVideoContainer === videoContainer) currentActiveVideoContainer = null;
                        const soundBtn = card.querySelector('.sound-btn');
                        if(soundBtn) { soundBtn.classList.add('muted'); soundBtn.innerHTML = volumeOffIcon; }
                    }
                });
            }
        });
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const card = entry.target;
                const videoSrc = card.getAttribute('data-preview-src');
                const videoContainer = card.querySelector('.portfolio-inline-video, .coverflow-inline-video'); 
                
                if(card.closest('.coverflow-swiper')) return; 

                if (entry.isIntersecting) {
                    if (videoContainer && videoContainer.innerHTML === '') {
                        videoContainer.innerHTML = buildInlineVideoHTML(videoSrc);
                        gsap.to(videoContainer, {opacity: 1, duration: 0.4});
                        card.querySelector('.slide-controls').style.opacity = 1;
                        card.querySelector('.slide-controls').style.pointerEvents = 'auto';
                    }
                } else {
                    if (videoContainer && videoContainer.innerHTML !== '') {
                        gsap.to(videoContainer, {opacity: 0, duration: 0.2, onComplete: () => {
                            videoContainer.innerHTML = '';
                            const soundBtn = card.querySelector('.sound-btn');
                            if(soundBtn) { soundBtn.classList.add('muted'); soundBtn.innerHTML = volumeOffIcon; }
                        }});
                        card.querySelector('.slide-controls').style.opacity = 0;
                        card.querySelector('.slide-controls').style.pointerEvents = 'none';
                    }
                }
            });
        }, { threshold: 0.5 }); 

        document.querySelectorAll('.portfolio-item, .horizontal-swiper .swiper-slide, .vertical-swiper .swiper-slide').forEach(card => {
            observer.observe(card);
        });
    }
}

// ==========================================================================
// Lenis Smooth Scroll Engine
// ==========================================================================
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), direction: 'vertical', smooth: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time)=>{ lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
lenis.stop();

function initGhostLogo() {
    const ghostLogo = document.querySelector('.fixed-ghost-logo');
    if(!ghostLogo) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > (window.innerHeight * 0.5)) { ghostLogo.classList.add('visible'); } 
        else { ghostLogo.classList.remove('visible'); }
    });
}

function loadPortfolioData() {
    try {
        const isHomePage = document.querySelector('[data-barba-namespace="home"]') !== null;
        const isPortfolioPage = document.querySelector('[data-barba-namespace="portfolio"]') !== null;

        if (isHomePage) {
            // 1. FEATURED COVERFLOW
            const featuredGrid = document.querySelector('#dynamic-featured');
            if(featuredGrid) {
                featuredGrid.innerHTML = '';
                let featuredProjects = [...homeFeaturedData];
                
                if (featuredProjects.length > 0 && featuredProjects.length < 10) {
                    featuredProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects];
                }

                featuredProjects.forEach((project) => {
                    const cardAction = project.redirectUrl ? `window.open('${project.redirectUrl}', '_blank')` : `openVideoModal('${project.previewVideo}')`;
                    const projHTML = `
                        <div class="swiper-slide tilt-card" data-preview-src="${project.previewVideo}" onclick="${cardAction}">
                            <img src="${getVideoThumbnail(project)}" alt="${project.title}" class="coverflow-img">
                            <div class="coverflow-inline-video"></div>
                            ${getSlideControls(project)}
                            <div class="coverflow-info">
                                <h3>${project.title}</h3>
                                <p>${project.categoryLabel}</p>
                            </div>
                        </div>
                    `;
                    featuredGrid.insertAdjacentHTML('beforeend', projHTML);
                });
            }

            // 2. RECENT PROJECTS GRID (Homepage)
            const portfolioGrid = document.querySelector('#dynamic-portfolio'); 
            if (portfolioGrid) {
                portfolioGrid.innerHTML = ''; 
                const recentProjects = homeRecentGridData.slice(0, 4);
                
                recentProjects.forEach((project, index) => {
                    const delay = index * 0.1; 
                    const cardAction = project.redirectUrl ? `window.open('${project.redirectUrl}', '_blank')` : `openVideoModal('${project.previewVideo}')`;
                    const projectHTML = `
                        <div class="portfolio-item tilt-card fade-up" style="transition-delay: ${delay}s;" data-preview-src="${project.previewVideo}" onclick="${cardAction}">
                            <div class="portfolio-thumb">
                                <img src="${getVideoThumbnail(project)}" alt="${project.title}">
                                <div class="portfolio-inline-video"></div>
                                ${getSlideControls(project)}
                            </div>
                            <div class="portfolio-info">
                                <h3>${project.title}</h3>
                                <p>${project.categoryLabel}</p>
                            </div>
                        </div>
                    `;
                    portfolioGrid.insertAdjacentHTML('beforeend', projectHTML);
                });
            }
        }

        if (isPortfolioPage) {
            // 3. UNIFIED 2x2 PORTFOLIO GRID (Portfolio Page)
            const fullGrid = document.querySelector('#full-portfolio-grid');
            if (fullGrid) {
                fullGrid.innerHTML = '';

                fullPortfolioPageData.forEach((project, index) => {
                    const delay = (index % 4) * 0.1; 
                    const cardAction = project.redirectUrl ? `window.open('${project.redirectUrl}', '_blank')` : `openVideoModal('${project.previewVideo}')`;
                    const slideHTML = `
                        <div class="portfolio-item tilt-card fade-up" style="transition-delay: ${delay}s;" data-preview-src="${project.previewVideo}" onclick="${cardAction}">
                            <div class="portfolio-thumb">
                                <img src="${getVideoThumbnail(project)}" alt="${project.title}">
                                <div class="portfolio-inline-video"></div>
                                ${getSlideControls(project)}
                            </div>
                            <div class="portfolio-info">
                                <h3>${project.title}</h3>
                                <p>${project.categoryLabel}</p>
                            </div>
                        </div>
                    `;
                    fullGrid.insertAdjacentHTML('beforeend', slideHTML);
                });
            }
        }

        initializePostLoadEffects();

    } catch (error) {
        console.error("Error loading portfolio:", error);
    }
}

function initializePostLoadEffects() {
    if (typeof initTilt === "function") initTilt();
    if (typeof attachHoverStates === "function") attachHoverStates();
    
    initHoverToPlay();

    if(document.querySelector('.coverflow-swiper')) {
        new Swiper('.coverflow-swiper', {
            effect: 'coverflow', grabCursor: true, centeredSlides: true, slidesPerView: 'auto',
            loop: true, loopedSlides: 5, 
            coverflowEffect: { rotate: 0, stretch: 0, depth: 200, modifier: 1.5, slideShadows: false },
            navigation: { nextEl: '.featured-next', prevEl: '.featured-prev' },
            slideToClickedSlide: true,
            on: {
                init: function () {
                    setTimeout(() => playCenterCoverflowVideo(this), 800);
                },
                sliderMove: function () {
                    killAllCoverflowVideosImmediately(this);
                },
                slideChangeTransitionStart: function () {
                    killAllCoverflowVideosImmediately(this);
                },
                slideChangeTransitionEnd: function () {
                    playCenterCoverflowVideo(this);
                }
            }
        });
    }

    setTimeout(() => { ScrollTrigger.refresh(); }, 500);
}

function splitTextReveal() {
    const reveals = document.querySelectorAll('.text-reveal');
    reveals.forEach(el => {
        const text = el.innerText;
        el.innerHTML = '';
        const words = text.split(' ');
        words.forEach(word => {
            const wordSpan = document.createElement('span'); wordSpan.classList.add('word');
            const innerSpan = document.createElement('span'); innerSpan.classList.add('word-inner');
            if (word === '<br>') { el.appendChild(document.createElement('br')); } 
            else { innerSpan.innerHTML = word + '&nbsp;'; wordSpan.appendChild(innerSpan); el.appendChild(wordSpan); }
        });
    });
}

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1, ease: "power2.out" });
});

gsap.ticker.add(() => {
    posX += (mouseX - posX) * 0.15; posY += (mouseY - posY) * 0.15;
    gsap.set(cursorFollower, { x: posX, y: posY });
});

const attachHoverStates = () => {
    const links = document.querySelectorAll('a, button, .magnetic-element, .slider-btn, .control-btn');
    const portfolios = document.querySelectorAll('.portfolio-item, .swiper-slide');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => { cursor.classList.add('hover-btn'); cursorFollower.classList.add('hover-btn'); });
        link.addEventListener('mouseleave', () => { cursor.classList.remove('hover-btn'); cursorFollower.classList.remove('hover-btn'); });
    });
    portfolios.forEach(item => {
        item.addEventListener('mouseenter', () => { cursorFollower.classList.add('hover-portfolio'); });
        item.addEventListener('mouseleave', () => { cursorFollower.classList.remove('hover-portfolio'); });
    });
};

function initThreeJS() {
    const canvas = document.querySelector('#webgl-canvas');
    if (!canvas) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 400; 
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 20; 
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const material = new THREE.PointsMaterial({ size: 0.004, color: 0xE2B938, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    camera.position.z = 3;

    let targetX = 0, targetY = 0;
    document.addEventListener('mousemove', (event) => {
        targetX = (event.clientX / window.innerWidth) - 0.5;
        targetY = (event.clientY / window.innerHeight) - 0.5;
    });

    let scrollY = window.scrollY;
    window.addEventListener('scroll', () => { scrollY = window.scrollY; });

    const clock = new THREE.Clock();
    const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        particlesMesh.rotation.y = elapsedTime * 0.02; 
        particlesMesh.rotation.x = elapsedTime * 0.01;
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
        particlesMesh.position.y = -scrollY * 0.0005; 
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ==========================================================================
// SPEED & SCROLL UNLOCK OPTIMIZATION
// ==========================================================================
// ==========================================================================
// SPEED & SCROLL UNLOCK OPTIMIZATION (With Katana SFX SYNC)
// ==========================================================================
// Sound variable ko global rakho
let katanaSfx = null;

function initAnimations() {
    splitTextReveal();
    const brandText = document.getElementById('brand-text');
    const tlLoader = gsap.timeline();
    
    // Load SFX early
    katanaSfx = document.getElementById('katana-sfx');

    tlLoader.to('.loader-logo-img', { opacity: 1, scale: 1, duration: 1, ease: "power3.out" })
            .to('.loader-percentage', { opacity: 1, duration: 1 }, "-=1")
            .to({ val: 0 }, { val: 100, duration: 0.28, ease: "power3.inOut", onUpdate: function() { 
                const pct = document.getElementById('load-percent');
                if(pct) pct.innerText = Math.round(this.targets()[0].val).toString().padStart(2, '0'); 
            } }, "-=0.5");

    if(brandText) {
        const textContent = brandText.innerText;
        brandText.innerHTML = '';
        
        textContent.split('').forEach(char => {
            const span = document.createElement('span');
            span.classList.add('type-char'); span.innerText = char;
            brandText.appendChild(span);
        });

        tlLoader.to('.type-char', { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.05, stagger: 0.03, ease: "power2.out" }, "-=0.5")
                .to('.type-char:nth-child(6), .type-char:nth-child(7)', { color: 'var(--acc)', textShadow: '0 0 20px rgba(226, 185, 56, 0.4)', duration: 0.1, yoyo: true, repeat: 1 }, "-=0.2")
                
                // --- SFX TRIGGER (Sync fixed) ---
                .call(() => {
                    if(katanaSfx) {
                        katanaSfx.currentTime = 0;
                        katanaSfx.volume = 1.0;
                        katanaSfx.play().catch(() => console.log("User interaction required for sound"));
                    }
                }, null, "-=0.2") 

                .to('.lightning-slash', { opacity: 1, duration: 0.1 }, "-=0.1")
                .to('.lightning-slash', { left: '150%', duration: 0.3, ease: "power4.in" }, "-=0.1")
                .to('.lightning-slash', { opacity: 0, duration: 0.1 }, "-=0.1")
                .to('.screen-flash', { opacity: 1, duration: 0.1, ease: "power2.in" })
                .to('.screen-flash', { opacity: 0, duration: 0.5, ease: "power2.out" }, "+=0.1");
    }

    tlLoader.to('.top-shutter', { yPercent: -100, duration: 0.8, ease: "power3.inOut" }, "+=0.1")
            .to('.bottom-shutter', { yPercent: 100, duration: 0.8, ease: "power3.inOut" }, "-=0.8")
            .to('.loader', { autoAlpha: 0, display: "none", duration: 0.1 }, "-=0.2")
            .call(() => {
                document.body.classList.remove('loading');
                lenis.start(); 
                initScrollAnimations(); 
            });
    // ... baki ka code same rahega
}

// Global click interaction to unlock audio
window.addEventListener('click', () => {
    if (katanaSfx && katanaSfx.paused) {
        katanaSfx.load(); // Reload to unlock
    }
}, { once: true });

function initScrollAnimations() {
    const textReveals = document.querySelectorAll('section:not(.hero) .text-reveal');
    textReveals.forEach(text => { gsap.to(text.querySelectorAll('.word-inner'), { scrollTrigger: { trigger: text, start: "top 85%" }, y: 0, duration: 1.2, stagger: 0.05, ease: "power3.out" }); });
    const fadeUps = document.querySelectorAll('.fade-up');
    fadeUps.forEach(el => { gsap.fromTo(el, { y: 40, opacity: 0 }, { scrollTrigger: { trigger: el, start: "top 85%" }, y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }); });
}

function initTilt() {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const cards = document.querySelectorAll('.tilt-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top;
                const centerX = rect.width / 2; const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5; const rotateY = ((x - centerX) / centerX) * 5;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.transition = 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
            });
            card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
        });
    }
}

function openVideoModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('modalVideoContainer');
    container.innerHTML = '';
    const ytId = getYouTubeId(videoSrc);
    const vimeoId = getVimeoId(videoSrc);

    if (ytId) {
        container.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&hd=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else if (vimeoId) {
        container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=E2B938&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        container.innerHTML = `<video src="${videoSrc}" controls playsinline autoplay></video>`;
    }
    gsap.to(modal, { autoAlpha: 1, duration: 0.4, ease: "power3.out" });
    lenis.stop(); 
}

function initModalPlayer() {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('modalVideoContainer');
    const closeBtn = document.querySelector('.modal-close-btn');

    const closeModal = () => {
        gsap.to(modal, { autoAlpha: 0, duration: 0.4, ease: "power2.in", onComplete: () => { container.innerHTML = ''; }});
        lenis.start(); 
    };
    closeBtn.addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
}

// ==========================================================================
// Barba Page Transitions
// ==========================================================================
barba.init({
    sync: true,
    transitions: [{
        name: 'opacity-transition',
        leave(data) { return gsap.to(data.current.container, { opacity: 0, duration: 0.5, ease: "power2.inOut" }); },
        enter(data) {
            window.scrollTo(0, 0); lenis.scrollTo(0, { immediate: true });
            loadPortfolioData(); attachHoverStates(); initTilt(); 
            return gsap.from(data.next.container, { opacity: 0, duration: 0.5, ease: "power2.inOut" });
        }
    }]
});

window.addEventListener('DOMContentLoaded', () => {
    initThreeJS(); initAnimations(); attachHoverStates(); initTilt(); loadPortfolioData(); initModalPlayer(); initGhostLogo(); 
});

// ==========================================================================
// BULLETPROOF CONTACT FORM AJAX SUBMISSION
// ==========================================================================
window.submitForm = async function(event) {
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerText;
    
    submitBtn.innerText = 'Sending...';
    submitBtn.style.opacity = '0.7';
    submitBtn.style.pointerEvents = 'none';

    const formData = new FormData(form);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            submitBtn.innerText = 'Message Sent! ✓';
            submitBtn.style.background = '#25D366'; 
            submitBtn.style.color = '#fff';
            submitBtn.style.borderColor = '#25D366';
            submitBtn.style.opacity = '1';
            
            form.reset(); 
            
            setTimeout(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.style.background = '';
                submitBtn.style.color = '';
                submitBtn.style.borderColor = '';
                submitBtn.style.pointerEvents = 'auto';
            }, 5000);
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        submitBtn.innerText = 'Error! Try again.';
        submitBtn.style.background = '#E1306C'; 
        submitBtn.style.opacity = '1';
        
        setTimeout(() => {
            submitBtn.innerText = originalBtnText;
            submitBtn.style.background = '';
            submitBtn.style.pointerEvents = 'auto';
        }, 3000);
    }
};