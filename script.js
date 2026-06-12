/* =========================================
   RC Créations — JavaScript partagé
   ========================================= */

/* ---------- PRODUCTS DATA (real catalog from rccreations.fr) ---------- */const PRODUCTS = [
  { id:1, name:"LOT DE 3 BADGES THE SIDH", artist:"The Sidh", cat:"Badge", price:5, handle:"lot-de-3-badges-the-sidh", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/641D/A014/6DAD/EBCB/CE2B/0A48/3566/036A/BADGE_PACK.jpg", desc:"LOT de 3 badges diamètre 32 mm THE SIDH présentés dans une pochette transparente." },
  { id:2, name:"CD CELKILT 'Get The Hell Away'", artist:"Celkilt", cat:"Musique", price:12, handle:"cd-celkilt-get-the-hell-away", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5459/FA99/A5C2/EDD8/5804/0A48/354B/AA17/405111403393.png", desc:"Tracklisting : Get The Hell Away, Let Me Out, Jig it Up ! The Same Old Frown, The War in My Head, Lay Me Down." },
  { id:3, name:"PATCH THERMOCOLLANT CELKILT", artist:"Celkilt", cat:"Patch", price:8, handle:"patch-thermocollant-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5EEC/6721/2D8A/2693/F940/0A48/3549/8023/PATCH_CELKILT_THERMOCOLLANT.jpg", desc:"PATCH THERMOCOLLANT CELKILT Format Largeur 10,7 cm x Hauteur 7,7 cm S'applique sur le textile (blouson, t shirt, sweat...) au fer à repasser." },
  { id:4, name:"GRAND PATCH THERMOCOLLANT CELKILT", artist:"Celkilt", cat:"Patch", price:35, handle:"grand-patch-thermocollant-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6834/11D2/8C44/C668/9C22/0A48/3566/C639/GRAND_PATCH_CELKILT.jpg", desc:"GRAND PATCH THERMOCOLLANT CELKILT Format Largeur 22,5 cm S'applique sur le textile (blouson, t shirt, sweat...) au fer à repasser." },
  { id:5, name:"CD CELKILT 'Hey ! What's Under Your Kilt ?'", artist:"Celkilt", cat:"Musique", price:12, handle:"cd-celkilt-hey-whats-under-your-kilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5459/FF94/325D/0C5C/4731/0A48/354B/43B1/457511605583.png", desc:"Tracklisting : Hey what's under your kilt ?, All These Times, Smokin' Erin, Gold River, The Alchemist, Should I, I've Ruined My Chances..." },
  { id:6, name:"CD CELKILT 'Everyday's St Patrick's day'", artist:"Celkilt", cat:"Musique", price:12, handle:"cd-celkilt-everydays-st-patricks-day", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545A/4A5C/9B93/7CAF/2026/0A48/354B/AA93/145101110703.jpeg", desc:"Tracklisting : COME IN, EVERYDAY'S ST PATRICK'S DAY, POLKACHIEN, THE GOODBYE SONG, BIG MOUTH, POLKILT, THE THINGS THAT MONEY JUST CAN'T BUY, HUNGARIAN KILT DANCE # 5, JJACKMACISAAC..." },
  { id:7, name:"CD CELKILT 'The Next One Down' Digital Download (album en téléchargement)", artist:"Celkilt", cat:"Musique", price:7, handle:"cd-celkilt-the-next-one-down-digital-download-album-en-telechargement", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/60C1/C36F/0B62/22EE/AB38/0A48/356B/995E/CD_CELKILT_TNOD_DIGITAL_DOWNLOAD.jpg", desc:"'THE NEXT ONE DOWN' Septième album du groupe CELKILT date de sortie 29 mai 2020. Contient les titres : 1. The next one down / 2. The best I can / 3. Dig around / 4. People are crazy / 5. Carry on /..." },
  { id:8, name:"CASQUETTE Frédérick ARNO 'Tu sais'", artist:"Frederick Arno", cat:"Casquette", price:12, handle:"casquette-frederick-arno-tu-sais", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/60CA/2209/BBAE/75D5/F796/0A48/356A/9547/CASQUETTE_FREDERICK_ARNO_TU_SAIS.jpg", desc:"CASQUETTE Contrastée bleu et blanc avec broderie sur le devant Frédérick Arno 'Tu sais' Taille unique, réglable à l'arrière grâce à un scratch." },
  { id:9, name:"SWEAT A CAPUCHE THE SIDH 'LOGO TRIANGOLARE' NOIR", artist:"The Sidh", cat:"Sweat-shirt", price:45, handle:"sweat-a-capuche-the-sidh-logo-triangolare-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/6796/CA17/37A1/4F68/0A48/356B/7528/SWEAT_A_CAPUCHE_LOGO_TRIANGOLARE_THE_SIDH.jpg", desc:"SWEAT SHIRT à capuche THE SIDH 'LOGO TRIANGOLARE' NOIR Description: Un sweat à capuche unisexe classique de haute qualité en mélange polycoton qui allie fonctionnalité et mode, le juste équilibre e..." },
  { id:10, name:"SWEAT A CAPUCHE THE SIDH 'CLASSIC' NOIR", artist:"The Sidh", cat:"Sweat-shirt", price:45, handle:"sweat-a-capuche-the-sidh-classic-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/6B20/BABC/C574/ABC4/0A48/3566/1118/SWEAT_A_CAPUCHE_CLASSIC_THE_SIDH.jpg", desc:"SWEAT SHIRT à capuche THE SIDH 'CLASSIC' NOIR Description: Un sweat à capuche unisexe classique de haute qualité en mélange polycoton qui allie fonctionnalité et mode, le juste équilibre entre le f..." },
  { id:11, name:"SWEAT A CAPUCHE THE SIDH 'SHAKE THAT BAGPIPE' NOIR", artist:"The Sidh", cat:"Sweat-shirt", price:45, handle:"sweat-a-capuche-the-sidh-shake-that-bagpipe-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/6EBE/9F40/321A/1F65/0A48/3566/3F2B/SWEAT_A_CAPUCHE_SHAKE_THE_SIDH.jpg", desc:"SWEAT SHIRT à capuche THE SIDH 'SHAKE THAT BAGPIPE' NOIR Description: Un sweat à capuche unisexe classique de haute qualité en mélange polycoton qui allie fonctionnalité et mode, le juste équilibre..." },
  { id:12, name:"SWEAT A CAPUCHE ZIP THE SIDH 'CLASSIC' NOIR", artist:"The Sidh", cat:"Sweat-shirt", price:45, handle:"sweat-a-capuche-zip-the-sidh-classic-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/6FA9/9BED/BED1/ABB7/0A48/356B/FB1A/SWEAT_A_CAPUCHE_ZIP_CLASSIC_THE_SIDH.jpg", desc:"SWEAT SHIRT à capuche zippé THE SIDH 'CLASSIC' NOIR Caractéristiques: 280 g/m² 50% coton (investissement dans le Better Cotton), 50% polyester (recyclé) - certifié RCS Véritable style non genré ave..." },
  { id:13, name:"CD CELKILT 'On the Table'", artist:"Celkilt", cat:"Musique", price:12, handle:"cd-celkilt-on-the-table", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545A/4B1B/68CF/B67F/0EDD/0A48/354B/AA5D/POCHETTE_ON_THE_TABLE_SITE.jpg", desc:"Quatrième album du groupe date de sortie 6 juin 2014. Contient les titres : We never try, Enough about me, On the table, Going down, The only road, G-Grill, To be the one, My dirty Mazurka, Helloby..." },
  { id:14, name:"TOTE BAG CELKILT 'THE NEXT'", artist:"Celkilt", cat:"Accessoire", price:10, handle:"tote-bag-celkilt-the-next", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5E6A/43FB/1011/B700/861B/0A48/3549/09A0/TOTE_BAG_CELKILT_THE_NEXT.jpg", desc:"TOTE BAG Noir CELKILT 'THE NEXT' en coton." },
  { id:15, name:"CD CELKILT 'Stand'", artist:"Celkilt", cat:"Musique", price:12, handle:"cd-celkilt-stand", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/58B8/285F/316A/F952/1C1A/0A48/3549/A2A1/STAND_COVER.JPG", desc:"'STAND' Sixième album du groupe CELKILT date de sortie 11 mars 2017. Contient les titres : SOMETIMES I CARE / KILT UP ! / I DON'T HAVE A BRAIN : FALL IN PLACE / LOST AND FOUND / GAVOTTE PARTY / WHI..." },
  { id:16, name:"CD CELKILT 'The Next One Down'", artist:"Celkilt", cat:"Musique", price:12, handle:"cd-celkilt-the-next-one-down", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5EA2/B389/7FB5/6DDB/159D/0A48/3549/2062/POCHETTE_THE_NEXT_ONE_DOWN.jpg", desc:"'THE NEXT ONE DOWN' Septième album du groupe CELKILT date de sortie 29 mai 2020. Contient les titres : 1. The next one down / 2. The best I can / 3. Dig around / 4. People are crazy / 5. Carry on /..." },
  { id:17, name:"VINYLE CELKILT 'The Next One Down' Edition Limitée 'Color Vinyl'", artist:"Celkilt", cat:"Vinyle", price:25, handle:"vinyle-celkilt-the-next-one-down-edition-limitee-color-vinyl", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5EC3/9D81/935B/9212/2171/0A48/3549/DAB8/VINYL_THE_NEXT_ONE_DOWN.jpg", desc:"'THE NEXT ONE DOWN' Septième album du groupe CELKILT date de sortie 29 mai 2020. Contient les titres : 1. The next one down / 2. The best I can / 3. Dig around / 4. People are crazy / 5. Carry on /..." },
  { id:18, name:"VINYLE CELKILT 'Everyday's St Patrick's Day !' Edition Limitée 'Color Vinyl'", artist:"Celkilt", cat:"Vinyle", price:25, handle:"vinyle-celkilt-everydays-st-patricks-day-edition-limitee-color-vinyl", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6538/F9B1/BD21/5A21/6BDF/0A48/356A/31FE/VINYL_EVERYDAYS_ST_PATRICKS_DAY.jpg", desc:"VINYLE CELKILT 'EVERYDAY'S ST PATRICK'S DAY!' Contient les titres : 1. Come In ! / 2. Everyday's St Patrick's Day ! / 3. Polkachien / 4. The Goodbye Song / 5. Big Mouth / 6. Polkilt / 7. The Things..." },
  { id:19, name:"VINYLE CELKILT 'LIVE @ Hellfest 2022' Edition Limitée", artist:"Celkilt", cat:"Vinyle", price:25, handle:"vinyle-celkilt-live-hellfest-2022-edition-limitee", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/66CC/43D2/BE3D/2B41/7C8F/0A48/356A/A771/VINYL_LIVE_CELKILT.jpg", desc:"VINYLE CELKILT 'LIVE @ HELLFEST 2022' Contient les titres : 1. Dewey 2. The Next O ne D own 3. On The Table 4. Hey, What's Under Your Kilt ? 5. Enough About Me 6. Fall In Place 7. Everyday's St Pat..." },
  { id:20, name:"CD CELKILT 'LIVE @ Hellfest 2022' Edition Limitée", artist:"Celkilt", cat:"Musique", price:12, handle:"cd-celkilt-live-hellfest-2022-edition-limitee", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6750/07B1/FF58/E14F/02B4/0A48/365E/7FAC/VINYL_LIVE_CELKILT.jpg", desc:"CD CELKILT 'LIVE @ HELLFEST 2022' Contient les titres : 1. Dewey 2. The Next O ne D own 3. On The Table 4. Hey, What's Under Your Kilt ? 5. Enough About Me 6. Fall In Place 7. Everyday's St Patrick..." },
  { id:21, name:"CD CELKILT 'Kiltmas Songs !'", artist:"Celkilt", cat:"Musique", price:12, handle:"cd-celkilt-kiltmas-songs", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5644/7283/7EDF/D4CD/42B0/0A48/354B/116A/cd_kiltmassongs.png", desc:"'KILTMAS SONGS' Cinquième album du groupe CELKILT date de sortie 18 novembre 2015. CELKILT wish you a Merry Kiltmas !!! Contient les titres : Joy To the World (The Kilt has come!) / Santa Santa / J..." },
  { id:22, name:"TOTE BAG CELKILT 'AIGLE'", artist:"Celkilt", cat:"Accessoire", price:10, handle:"tote-bag-celkilt-aigle", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/68B0/7168/42D6/3DFE/B6B5/0A48/356B/8AB2/TOTE_BAG_CELKILT_AIGLE.jpg", desc:"TOTE BAG CELKILT motif 'Aigle' en coton. 140 g/m² 100% coton Lavage à la main à l'eau tiède uniquement poignée longue (70 cm) dimensions: 38 x 42 cm" },
  { id:23, name:"CELKILT 'Mini KILTMAS EP' DIGITAL DOWNLOAD mp3 320 kbps", artist:"Celkilt", cat:"Accessoire", price:6, handle:"celkilt-mini-kiltmas-ep-digital-download-mp3-320-kbps", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D71F/D25E/AAB5/CC2D/0A48/354D/360F/KILTMASSONS_EP_TELECHARGEMENT.jpg", desc:"Contient les titres : joy to the world (the kilt has come) santa santa jingle bells holy night (st paddy's night) xmaswouldneverbethesameifyouwerenotaround bayou night amazing grace + Bonus GRATUIT..." },
  { id:24, name:"Album STAND sur double vinyle 33' + 1 titre inédit", artist:"RC Créations", cat:"Vinyle", price:25, handle:"album-stand-sur-double-vinyle-33-1-titre-inedit", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5924/71E8/8551/D7E6/D653/0A48/3549/598B/VINYLE_STAND_DEF.jpg", desc:"L'album STAND sur double vinyle 33' + 1 titre inédit 'STAND' Sixième album du groupe CELKILT date de sortie 11 mars 2017. Contient les titres : SOMETIMES I CARE / KILT UP ! / I DON'T HAVE A BRAIN :..." },
  { id:25, name:"CELKILT 'STAND' DIGITAL DOWNLOAD mp3 320 kbps", artist:"Celkilt", cat:"Accessoire", price:7, handle:"celkilt-stand-digital-download-mp3-320-kbps", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/58C2/B45C/BC52/2236/3453/0A48/3549/3BA0/STAND_DOWNLOAD.JPG", desc:"'STAND' Sixième album du groupe CELKILT date de sortie 11 mars 2017. Contient les titres : SOMETIMES I CARE / KILT UP ! / I DON'T HAVE A BRAIN : FALL IN PLACE / LOST AND FOUND / GAVOTTE PARTY / WHI..." },
  { id:26, name:"CELKILT 'Get The Hell away' ALBUM EN TELECHARGEMENT mp3 256K", artist:"Celkilt", cat:"Accessoire", price:7, handle:"celkilt-get-the-hell-away-album-en-telechargement-mp3-256k", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545A/5052/F008/DB31/A5C6/0A48/354B/57EF/292854276060.png", desc:"Tracklisting : Get The Hell Away, Let Me Out, Jig it Up ! The Same Old Frown, The War in My Head, Lay Me Down. DIGITAL DOWNLOAD mp3 256 K. Create an account through 'Mon Compte' place your order (P..." },
  { id:27, name:"CELKILT 'Hey What's Under your kilt ?' ALBUM EN TELECHARGEMENT mp3 256 K", artist:"Celkilt", cat:"Accessoire", price:7, handle:"celkilt-hey-whats-under-your-kilt-album-en-telechargement-mp3-256-k", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545A/5397/DB6A/B21B/5327/0A48/354B/0ECD/444407278807.png", desc:"Tracklisting : Hey what's under your kilt ?, All These Times, Smokin' Erin, Gold River, The Alchemist, Should I, I've Ruined My Chances... DIGITAL DOWNLOAD mp3 256 K." },
  { id:28, name:"CELKILT 'Everyday's St Patrick's day !!!' ALBUM EN TELECHARGEMENT", artist:"Celkilt", cat:"Accessoire", price:7, handle:"celkilt-everydays-st-patricks-day-album-en-telechargement", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545A/54B6/5D30/9FF4/318E/0A48/354B/0E74/697567092822.png", desc:"Tracklisting : COME IN, EVERYDAY'S ST PATRICK'S DAY, POLKACHIEN, THE GOODBYE SONG, BIG MOUTH, POLKILT, THE THINGS THAT MONEY JUST CAN'T BUY, HUNGARIAN KILT DANCE # 5, JJACKMACISAAC... DIGITAL DOWNL..." },
  { id:29, name:"CELKILT 'On The Table' ALBUM EN TELECHARGEMENT mp3 256 K", artist:"Celkilt", cat:"Accessoire", price:7, handle:"celkilt-on-the-table-album-en-telechargement-mp3-256-k", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545A/5F05/DB32/EB10/F208/0A48/354B/1F1A/892291352518.png", desc:"Tracklisting : We never try, Enough about me, On the table, Going down, The only road, G-Grill, To be the one, My dirty Mazurka, Hellobye..." },
  { id:30, name:"CELKILT PACK 2 ALBUMS EN TELECHARGEMENT 'Get The Hell Away + Hey What's Under your Kilt ?'mp3 256 K", artist:"Celkilt", cat:"Accessoire", price:10, handle:"celkilt-pack-2-albums-en-telechargement-get-the-hell-away-hey-whats-under-your-kilt-mp3-256-k", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D727/588A/FC8A/DC29/0A48/354D/36D3/447896192954.png", desc:"Tracklisting : Get The Hell Away, Let Me Out, Jig it Up ! The Same Old Frown, The War in My Head, Lay Me Down, Hey what's under your kilt ?, All These Times, Smokin' Erin, Gold River, The Alchemist..." },
  { id:31, name:"CLE USB CELKILT", artist:"Celkilt", cat:"Accessoire", price:15, handle:"cle-usb-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5530/BF25/F8B6/DC17/5D1A/0A48/354B/2EC8/CLE_USB_CELKILT.jpg", desc:"La clé USB CELKILT... Enlevez lui le Kilt pour découvrir plein de surprises audio / vidéo... Objet 'collector' en série limitée." },
  { id:32, name:"PENDENTIF CELKILT en métal argenté", artist:"Celkilt", cat:"Accessoire", price:10, handle:"pendentif-celkilt-en-metal-argente", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5549/E3F0/73D4/3F1C/1F50/0A48/354B/D388/PENDENTIF_CELKILT.jpg", desc:"Pendentif CELKILT en métal argenté, livré avec son cordon et son attache dans un emballage individuel." },
  { id:33, name:"FLASQUE METAL GRAVEE COLLECTOR 'SERIE TRES LIMITEE'", artist:"RC Créations", cat:"Accessoire", price:15, handle:"flasque-metal-gravee-collector-serie-tres-limitee", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/3035/2602/3A27/E17F/0A48/354B/579E/238456506183.jpeg", desc:"Flaque métallique gravée. Livrée dans sa boîte. Série Limitée." },
  { id:34, name:"T SHIRT Femme CELKILT 'PHARE' BLANC", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-femme-celkilt-phare-blanc", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/67B6/FCE9/D687/3FD0/573D/0A48/365E/992A/T_SHIRT_FEMME_BLANC_PHARE.jpg", desc:"T SHIRT FEMME BLANC CELKILT 'PHARE'. 100 % Coton" },
  { id:35, name:"T SHIRT Homme CELKILT 'AIGLE' NOIR", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-homme-celkilt-aigle-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/67BD/77FD/9642/416B/C578/0A48/3664/2284/T_SHIRT_NOIR_CELKILT_AIGLE.jpg", desc:"T NOIR UNISEXE NOIR CELKILT 'AIGLE'. 100 % Coton" },
  { id:36, name:"T SHIRT Homme CELKILT 'AIGLE' BLANC", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-homme-celkilt-aigle-blanc", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6810/97FF/8BF5/9722/392F/0A48/356B/AD34/T_SHIRT_BLANC_CELKILT_AIGLE.jpg", desc:"T NOIR UNISEXE BLANC CELKILT 'AIGLE'. 100 % Coton" },
  { id:37, name:"T SHIRT Homme THE SIDH 'AWTF' NOIR", artist:"The Sidh", cat:"T-shirt", price:25, handle:"t-shirt-homme-the-sidh-awtf-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/3E77/96A0/1F43/B9F7/0A48/356A/73EC/T_SHIRT_HOMME_AWTF_THE_SIDH.jpg", desc:"TEE SHIRT NOIR UNISEXE NOIR THE SIDH 'AWTF'. 100 % Coton" },
  { id:38, name:"T SHIRT Femme THE SIDH 'AWTF' NOIR", artist:"The Sidh", cat:"T-shirt", price:25, handle:"t-shirt-femme-the-sidh-awtf-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/40EB/C999/E305/2178/0A48/356B/1EE6/T_SHIRT_FEMME_AWTF_THE_SIDH.jpg", desc:"TEE SHIRT FEMME NOIR THE SIDH 'AWTF'. 100 % Coton" },
  { id:39, name:"T SHIRT Homme THE SIDH 'CLASSIC 2' NOIR", artist:"The Sidh", cat:"T-shirt", price:25, handle:"t-shirt-homme-the-sidh-classic-2-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/4542/EBF1/4D0B/8C24/0A48/356B/A940/T_SHIRT_HOMME_CLASSIC_2_THE_SIDH.jpg", desc:"TEE SHIRT NOIR UNISEXE NOIR THE SIDH 'CLASSIC 2'. 100 % Coton" },
  { id:40, name:"T SHIRT Femme THE SIDH 'CLASSIC 2' NOIR", artist:"The Sidh", cat:"T-shirt", price:25, handle:"t-shirt-femme-the-sidh-classic-2-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/4669/425B/B68F/D1D0/0A48/356B/1EB6/T_SHIRT_FEMME_CLASSIC_2_THE_SIDH.jpg", desc:"TEE SHIRT FEMME NOIR THE SIDH 'CLASSIC 2'. 100 % Coton" },
  { id:41, name:"T SHIRT Homme THE SIDH 'LOGO TRIANGOLARE' NOIR", artist:"The Sidh", cat:"T-shirt", price:25, handle:"t-shirt-homme-the-sidh-logo-triangolare-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/47FD/D463/A3CC/8920/0A48/356B/6BFA/T_SHIRT_HOMME_TRIANGOLARE_THE_SIDH.jpg", desc:"TEE SHIRT NOIR UNISEXE NOIR THE SIDH 'LOGO TRIANGOLARE'. 100 % Coton" },
  { id:42, name:"T SHIRT Femme THE SIDH 'LOGO TRIANGOLARE' NOIR", artist:"The Sidh", cat:"T-shirt", price:25, handle:"t-shirt-femme-the-sidh-logo-triangolare-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/4953/230D/AEFA/EC36/0A48/356B/5C07/T_SHIRT_FEMME_TRIANGOLARE_THE_SIDH.jpg", desc:"TEE SHIRT FEMME NOIR THE SIDH 'LOGO TRIANGOLARE'. 100 % Coton" },
  { id:43, name:"T SHIRT Homme THE SIDH 'SHAKE THAT BAGPIPE' NOIR", artist:"The Sidh", cat:"T-shirt", price:25, handle:"t-shirt-homme-the-sidh-shake-that-bagpipe-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/63E5/B619/AD5C/A6AB/0A48/3566/3F33/T_SHIRT_HOMME_SHAKE_THE_SIDH.jpg", desc:"TEE SHIRT NOIR UNISEXE NOIR THE SIDH 'SHAKE THAT BAGPIPE'. 100 % Coton" },
  { id:44, name:"T SHIRT Homme CELKILT 'STAND'", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-homme-celkilt-stand", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/58B8/2DA7/F50E/1A8A/28A0/0A48/3549/B94A/TEE_SHIRT_HOMME_STAND.JPG", desc:"" },
  { id:45, name:"T SHIRT Femme THE SIDH 'SHAKE THAT BAGPIPE' NOIR", artist:"The Sidh", cat:"T-shirt", price:25, handle:"t-shirt-femme-the-sidh-shake-that-bagpipe-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/6524/92B5/9EB5/9183/0A48/356A/93D8/T_SHIRT_FEMME_SHAKE_THE_SIDH.jpg", desc:"TEE SHIRT FEMME NOIR THE SIDH 'SHAKE THAT BAGPIPE'. 100 % Coton" },
  { id:46, name:"T SHIRT 'LA TOURNEE DU COEUR'", artist:"RC Créations", cat:"T-shirt", price:19, handle:"t-shirt-la-tournee-du-coeur", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6930/3A22/4DE0/5BC6/8091/0A48/3566/D238/RECTO_T_SHIRT_LA_TOURNEE_DU_COEUR.jpg", desc:"T NOIR UNISEXE NOIR 'LA TOURNEE DU COEUR'. 100 % Coton T SHIRT Collector noir avec le visuel de la Tournée du Coeur 2025 et le nom des groupes ayant participé à cette tournée : CELKILT / LES 3 FROM..." },
  { id:47, name:"", artist:"RC Créations", cat:"Accessoire", price:0, handle:"t-shirt-la-tournee-du-coeur", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6930/3A22/4DE0/5BC6/8091/0A48/3566/D238/VERSO_T_SHIRT_LA_TOURNEE_DU_COEUR.jpg", desc:"" },
  { id:48, name:"T SHIRT Homme Noir CELKILT 'CORNEMUSE'", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-homme-noir-celkilt-cornemuse", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5C5C/2E6B/7224/C36E/7F21/0A48/3549/CD0C/T_SHIRT_CORNEMUSE.jpg", desc:"T SHIRT CELKILT 'Cornemuse' 100 % coton." },
  { id:49, name:"T SHIRT Homme CELKILT 'THE NEXT'", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-homme-celkilt-the-next", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5E6A/0670/DD80/DD21/6462/0A48/3549/85CF/TEE_SHIRT_HOMME_THE_NEXT.JPG", desc:"T SHIRT CELKILT 'THE NEXT' Noir 100 % Coton organique." },
  { id:50, name:"T SHIRT Homme CELKILT 'SERPENT' VERT BOUTEILLE", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-homme-celkilt-serpent-vert-bouteille", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6422/A7E5/BEA6/8C9B/3773/0A48/356B/9CA4/T_SHIRT_HOMME_CELKILT_SERPENT.jpg", desc:"T SHIRT UNISEXE VERT BOUTEILLE CELKILT 'SERPENT'. 100 % Coton" },
  { id:51, name:"T SHIRT BLANC CELKILT 'CORNEMUSE'", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-blanc-celkilt-cornemuse", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6422/B67F/0594/C644/1542/0A48/356B/4E3A/T_SHIRT_BLANC_CELKILT_CORNEMUSE.jpg", desc:"T SHIRT UNISEXE BLANC CELKILT 'SERPENT'. 100 % Coton" },
  { id:52, name:"T SHIRT Homme CELKILT 'SERPENT' NOIR", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-homme-celkilt-serpent-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6787/8E75/6F7D/82C0/4478/0A48/365F/58B2/T_SHIRT_HOMME_CELKILT_SERPENT_NOIR.jpg", desc:"T SHIRT UNISEXE NOIR CELKILT 'SERPENT'. 100 % Coton" },
  { id:53, name:"T SHIRT Femme CELKILT 'SERPENT' VERT BOUTEILLE", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-femme-celkilt-serpent-vert-bouteille", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6787/93A7/87BF/3A69/1DB9/0A48/365E/BA8F/T_SHIRT_FEMME_CELKILT_SERPENT_VERT.jpg", desc:"T SHIRT FEMME VERT BOUTEILLE CELKILT 'SERPENT'. 100 % Coton" },
  { id:54, name:"T SHIRT Femme CELKILT 'SERPENT' NOIR", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-femme-celkilt-serpent-noir", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6787/A590/379B/978F/D247/0A48/365F/DCE1/T_SHIRT_FEMME_CELKILT_SERPENT_NOIR.jpg", desc:"T SHIRT FEMME NOIR CELKILT 'SERPENT'. 100 % Coton" },
  { id:55, name:"T SHIRT Homme CELKILT BLANC 'PHARE'", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-homme-celkilt-blanc-phare", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/67B6/FAE1/7A24/3B43/237D/0A48/3664/A858/T_SHIRT_HOMME_BLANC_PHARE.jpg", desc:"T SHIRT CELKILT BLANC 'PHARE'.100 % coton." },
  { id:56, name:"T SHIRT Femme CELKILT 'Stand'", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-femme-celkilt-stand", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/58B8/2FD9/EF2A/E21C/74D5/0A48/3549/FC09/TEE_SHIRT_FEMME_STAND.JPG", desc:"" },
  { id:57, name:"T SHIRT Femme CELKILT 'Cornemuse'", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-femme-celkilt-cornemuse", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5C5C/315C/B113/B1D9/200B/0A48/3549/CA6B/T_SHIRT_CORNEMUSE_FEMME.jpg", desc:"T SHIRT FEMME CELKILT 'CORNEMUSE'. 100 % Coton." },
  { id:58, name:"T SHIRT Femme CELKILT 'THE NEXT'", artist:"Celkilt", cat:"T-shirt", price:20, handle:"t-shirt-femme-celkilt-the-next", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5E6A/09A1/6B79/65E8/10CE/0A48/3549/15DD/TEE_SHIRT_FEMME_THE_NEXT.jpg", desc:"T SHIRT CELKILT 'THE NEXT' Noir 100% Coton organique" },
  { id:59, name:"T SHIRT Noir Homme 'Everyday's St Patrick's Day'", artist:"RC Créations", cat:"T-shirt", price:20, handle:"t-shirt-noir-homme-everydays-st-patricks-day", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/2CE7/64C2/9984/E84C/0A48/354B/57A4/CKT_2013_TS_HOMME_NOIR.jpg", desc:"T SHIRT Noir Homme 'Everyday's St Patrick's Day'. 100 % COTON" },
  { id:60, name:"T SHIRT Noir Femme 'Everyday's St Patrick's Day'", artist:"RC Créations", cat:"T-shirt", price:20, handle:"t-shirt-noir-femme-everydays-st-patricks-day", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/2D8D/8FBF/790F/D389/0A48/354B/575C/CKT_2013_TS_FEMME_NOIR.jpg", desc:"T SHIRT Noir Femme 'Everyday's St Patrick's Day'. 100 % COTON" },
  { id:61, name:"PORTE CLES / DECAPSULEUR EN METAL", artist:"RC Créations", cat:"Accessoire", price:6, handle:"porte-cles-decapsuleur-en-metal", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/2EC9/5971/49F3/C3DC/0A48/354B/57F2/CKT_2017_PORTE_CLES.JPG", desc:"Porte-clés / décapsuleur en métal gravé livré dans sa boîte de présentation. Prêt à offrir !!!" },
  { id:62, name:"SWEAT A CAPUCHE NOIR 'CELKILT'", artist:"Celkilt", cat:"Sweat-shirt", price:45, handle:"sweat-a-capuche-noir-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/318E/8F20/E6CA/8FBA/0A48/354B/5765/308260111407.jpeg", desc:"SWEAT A CAPUCHE NOIR 'CELKILT'" },
  { id:63, name:"SWEAT Zippé 'CELKILT' Stand", artist:"Celkilt", cat:"Sweat-shirt", price:45, handle:"sweat-zippe-celkilt-stand", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/58C1/4302/BB1E/F113/FA9F/0A48/3549/8E96/SWEAT_ZIPPE_STAND_2.JPG", desc:"" },
  { id:64, name:"SWEAT Zippé 'CELKILT' THE NEXT", artist:"Celkilt", cat:"Sweat-shirt", price:45, handle:"sweat-zippe-celkilt-the-next", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5E6A/1624/D891/094C/DEC3/0A48/3549/AB3E/SWEAT_ZIPPE_CELKILT_THE_NEXT.jpg", desc:"SWEAT Zippé CELKILT 'THE NEXT' Noir 100 % Coton organique." },
  { id:65, name:"SWEAT A CAPUCHE VERT 'CELKILT'", artist:"Celkilt", cat:"Sweat-shirt", price:45, handle:"sweat-a-capuche-vert-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/32A3/7E21/0557/68CA/0A48/354B/5751/602804859749.jpeg", desc:"SWEAT A CAPUCHE VERT 'CELKILT' Logo Everyday's St Patrcik' day !!!" },
  { id:66, name:"SWEAT A CAPUCHE VERT SNAKE 'CELKILT'", artist:"Celkilt", cat:"Sweat-shirt", price:45, handle:"sweat-a-capuche-vert-snake-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/65D4/9FC7/D031/C476/3405/0A48/3566/ABDD/SWEAT_NON_ZIPPE_VERT_SNAKE_CELKILT.jpg", desc:"SWEAT A CAPUCHE NON ZIPPE 'SNAKE' CELKILT" },
  { id:67, name:"SWEAT A CAPUCHE NOIR EAGLE 'CELKILT'", artist:"Celkilt", cat:"Sweat-shirt", price:45, handle:"sweat-a-capuche-noir-eagle-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6930/51EF/AFBF/7657/9BF8/0A48/356B/8142/SWEAT_NON_ZIPPE_NOIR_EAGLE_CELKILT.jpg", desc:"SWEAT A CAPUCHE NON ZIPPE MOTIF 'EAGLE ' CELKILT" },
  { id:68, name:"T SHIRT Vert Homme 'Everyday's St Patrick's Day!!!'", artist:"RC Créations", cat:"T-shirt", price:20, handle:"t-shirt-vert-homme-everydays-st-patricks-day", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/5823/901B/D14C/B96B/0A48/354B/0618/TS_CELKILT_VERT_EVERYDAY.jpg", desc:"" },
  { id:69, name:"T SHIRT Vert Femme 'Everyday's St Patrick's Day!!!'", artist:"RC Créations", cat:"T-shirt", price:20, handle:"t-shirt-vert-femme-everydays-st-patricks-day", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/5A1A/4A1A/D2B6/8BAF/0A48/354B/6A93/TS_CELKILT_VERT_femme_EVERYDAY.jpg", desc:"" },
  { id:70, name:"DEBARDEUR FEMME NOIR CELKILT 'SERPENT'", artist:"Celkilt", cat:"Vêtement", price:20, handle:"debardeur-femme-noir-celkilt-serpent", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/7E74/4335/88BE/6DF0/0A48/354B/D638/DEBARDEUR_FEMME_NOIR_SERPENT.jpg", desc:"DEBARDEUR FEMME NOIR CELKILT 'SERPENT' 100 % Coton" },
  { id:71, name:"LE LANYARD / TOUR DE COU CELKILT", artist:"Celkilt", cat:"Accessoire", price:4, handle:"le-lanyard-tour-de-cou-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/33ED/354A/CFE1/D0F4/0A48/354B/5707/391481664107.jpeg", desc:"LE LANYARD / TOUR DE COU CELKILT" },
  { id:72, name:"SOUS-BOCKS CELKILT 'LOT DE 6'", artist:"Celkilt", cat:"Accessoire", price:5, handle:"sous-bocks-celkilt-lot-de-6", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/8834/F0E0/F3A8/1988/0A48/354B/8CF3/LOT_6_SOUS_BOCKS.JPG", desc:"Photo non contractuelle. Assortiment de 6 sous-bocks du moment." },
  { id:73, name:"SOUS-BOCKS CELKILT THE NEXT ONE DOWN 'LOT DE 6'", artist:"Celkilt", cat:"Accessoire", price:5, handle:"sous-bocks-celkilt-the-next-one-down-lot-de-6", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5EC3/A5F2/B7A1/0B5C/79D7/0A48/3549/FAD4/LOT_DE_6_SOUS_BOCKS_THE_NEXT_ONE_DOWN.jpg", desc:"6 SOUS BOCKS CELKILT 'THE NEXT ONE DOWN'" },
  { id:74, name:"MAGNETS CELKILT 2022", artist:"Celkilt", cat:"Accessoire", price:3.5, handle:"magnets-celkilt-2022", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/54F0/5062/4949/818C/0DC3/0A48/354B/9181/MAGNETS_2022_CELKILT.jpg", desc:"MAGNETS CELKILT Carrés 52 mm x 52 mm Impression couleur quadri de haute qualité protégée par un film. La coque est en métal avec un aimant au dos l'épaisseur est de 3 mm. Modèle Get the hell away, ..." },
  { id:75, name:"CASQUETTE Brodée 'CELKILT' NOIRE", artist:"Celkilt", cat:"Casquette", price:20, handle:"casquette-brodee-celkilt-noire", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5B1E/3A63/5CBB/F4B4/491A/0A48/3549/2251/CASQUETTE_BRODE_CELKILT.JPG", desc:"CASQUETTE brodée CELKILT. 100 % Coton. Fermeture par attache réglable." },
  { id:76, name:"CASQUETTE Brodée 'CELKILT' THE NEXT ONE DOWN", artist:"Celkilt", cat:"Casquette", price:20, handle:"casquette-brodee-celkilt-the-next-one-down", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5EEC/5FED/29E2/754B/270E/0A48/3549/BBD8/CASQUETTE_BRODEE_CELKILT_THE_NEXT_ONE_DOWN.jpg", desc:"CASQUETTE brodée CELKILT ' THE NEXT ONE DOWN'" },
  { id:77, name:"CASQUETTE Brodée 'CELKILT' VERT BOUTEILLE", artist:"Celkilt", cat:"Casquette", price:20, handle:"casquette-brodee-celkilt-vert-bouteille", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/64A6/AD08/74CD/2236/165D/0A48/3566/128D/CASQUETTE_VERTE_BRODEE_CELKILT.jpg", desc:"CASQUETTE brodée CELKILT. 100 % Coton, fermeture par attache réglable." },
  { id:78, name:"BONNET Brodé 'CELKILT'", artist:"Celkilt", cat:"Accessoire", price:20, handle:"bonnet-brode-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5C50/6262/6DEC/E45B/DB0A/0A48/3549/8736/BONNET_CELKILT_BLACK.jpg", desc:"BONNET NOIR brodé CELKILT. 100% polyacrylique (toucher doux) maille doublée." },
  { id:79, name:"BONNET VERT Brodé 'CELKILT'", artist:"Celkilt", cat:"Accessoire", price:20, handle:"bonnet-vert-brode-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/65D4/9CEC/9E4C/BF7D/8A3D/0A48/356B/77AD/BONNET_VERT_CELKILT.jpg", desc:"BONNET VERT brodé CELKILT. 100% polyacrylique (toucher doux) maille doublée." },
  { id:80, name:"BRIQUET ELECTRONIQUE CELKILT", artist:"Celkilt", cat:"Accessoire", price:4, handle:"briquet-electronique-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/61EA/7C51/142A/BEEB/FF9C/0A48/3566/CE9C/BRIQUET_CELKILT_2025.jpg", desc:"Briquet CELKILT à gaz rechargeable avec mécanisme électrique noir. Avec régulateur de flamme et sécurité enfant. Dimensions : 2.4 x 8 x 0.9 cm | 15 gr. Marquage CELKILT sur les 2 faces du briquet." },
  { id:81, name:"MUG CELKILT STAND PRIME", artist:"Celkilt", cat:"Mug", price:12, handle:"mug-celkilt-stand-prime", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5B29/033C/9FFD/D515/5610/0A48/3549/406E/MUG_STAND_PRIME.JPG", desc:"MUG CELKILT STAND PRIME Marquage doré sur ce sublime mug noir brillant." },
  { id:82, name:"MUG CELKILT 'THE NEXT' FROZEN", artist:"Celkilt", cat:"Mug", price:12, handle:"mug-celkilt-the-next-frozen", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5E6A/1123/9925/231C/6FC1/0A48/3549/BC7A/MUG_CELKILT_THE_NEXT.jpg", desc:"MUG CELKILT 'THE NEXT' Noir effet givré." },
  { id:83, name:"L'album STAND sur double vinyle 33' + 1 titre inédit  Livraison à partir du 15 Mai 2017 '", artist:"RC Créations", cat:"Vinyle", price:25, handle:"lalbum-stand-sur-double-vinyle-33-1-titre-inedit-livraison-a-partir-du-15-mai-2017", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/58C2/60F5/DCDE/0A86/F4DF/0A48/3549/E149/VINYLE_CELKILT_STAND.JPG", desc:"L'album STAND sur double vinyle 33' + 1 titre inédit '+ L'album en téléchargement immédiat!' Livraison à partir du 15 Mai 2017" },
  { id:84, name:"CD FREDERICK ARNO 'Je vis dehors'", artist:"Frederick Arno", cat:"Musique", price:13.99, handle:"cd-frederick-arno-je-vis-dehors", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6197/BE60/7F5C/34C6/207A/0A48/3566/A260/POCHETTE_JE_VIS_DEHORS.jpg", desc:"FREDERICK ARNO Nouvel album 'Je vis dehors'... Inclus les titres : 1/ Authentique et sincère 2/ Ce que tu veux 3/ Ferme les yeux 4/ Infidèle 5/ Je bois à la vie 6/ Je ne te crois plus 7/ Je vis deh..." },
  { id:85, name:"CD FREDERICK ARNO 'Chansons pour Elles'", artist:"Frederick Arno", cat:"Musique", price:10, handle:"cd-frederick-arno-chansons-pour-elles", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6F5/1EEA/3D93/BCB4/0A48/354D/367E/FREDERICK_ARNO_CHANSONS_POUR_ELLES_EPUISE.jpg", desc:"Nouvel album de Frédérick Arno 'Chansons pour elles' disponible à partir de fin octobre. Commandez-le dès à présent. Contient les titres : 'Le reste de ma vie' / 'Femmes je vous aime' / 'Tant qu’il..." },
  { id:86, name:"CD FREDERICK ARNO 'Note sensible'", artist:"Frederick Arno", cat:"Musique", price:15, handle:"cd-frederick-arno-note-sensible", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5451/F5B4/62AF/65A5/B779/0A48/354C/6679/030301591132.png", desc:"Date de sortie 21 juin 2013 contient les titres : A St-Germain / Fais-toi une belle vie / Si ce rêve c'était toi / Un jour avec et un jour sans / Enfant d'la balle / Que toi / Le même âge / Chanson..." },
  { id:87, name:"T SHIRT FEMME Noir 'Feet and Foot 2013' modèle 1.", artist:"RC Créations", cat:"T-shirt", price:14.9, handle:"t-shirt-femme-noir-feet-and-foot-2013-modele-1", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6E4/C0AE/DB0E/88C2/0A48/354D/3610/123647560409.png", desc:"Existe en d'autres coloris sur demande." },
  { id:88, name:"T SHIRT HOMME Noir 'Feet and Foot 2013' modèle 1.", artist:"RC Créations", cat:"T-shirt", price:14.9, handle:"t-shirt-homme-noir-feet-and-foot-2013-modele-1", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6E5/6BD2/430E/6091/0A48/354D/36E2/912163500428.jpeg", desc:"Existe en d'autres coloris sur demande." },
  { id:89, name:"T SHIRT FEMME Noir 'Feet and Foot 2013' modèle 2.", artist:"RC Créations", cat:"T-shirt", price:14.9, handle:"t-shirt-femme-noir-feet-and-foot-2013-modele-2", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6E6/23AA/BFD8/BF3E/0A48/354D/367F/986203529913.jpeg", desc:"Existe en d'autres coloris sur demande." },
  { id:90, name:"T SHIRT HOMME Noir 'Feet and Foot 2013' modèle 2.", artist:"RC Créations", cat:"T-shirt", price:14.9, handle:"t-shirt-homme-noir-feet-and-foot-2013-modele-2", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6E7/0D7F/2A45/7E86/0A48/354D/36CF/659299939548.jpeg", desc:"Existe en d'autres coloris sur demande." },
  { id:91, name:"DEBARDEUR FEET AND FOOT BRAZIL !!!", artist:"RC Créations", cat:"Vêtement", price:10, handle:"debardeur-feet-and-foot-brazil", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D751/4D24/D27B/715B/0A48/354D/365D/527834041771.png", desc:"Existe en d'autres coloris sur demande." },
  { id:92, name:"T SHIRT 'COL V' FEET AND FOOT BRAZIL !!!", artist:"RC Créations", cat:"T-shirt", price:10, handle:"t-shirt-col-v-feet-and-foot-brazil", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D753/D4ED/BBA6/F7AE/0A48/354D/36EA/506070669937.png", desc:"Existe en d'autres coloris sur demande." },
  { id:93, name:"T SHIRT FEMME Rouge 'Feet and Foot 2013' modèle 1.", artist:"RC Créations", cat:"T-shirt", price:14.9, handle:"t-shirt-femme-rouge-feet-and-foot-2013-modele-1", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6E8/8BD9/C4FB/5939/0A48/354D/36C6/279011833479.jpeg", desc:"Existe en d'autres coloris sur demande." },
  { id:94, name:"T SHIRT HOMME Rouge 'Feet and Foot 2013' modèle 1.", artist:"RC Créations", cat:"T-shirt", price:14.9, handle:"t-shirt-homme-rouge-feet-and-foot-2013-modele-1", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6E9/22F7/5EE7/E17E/0A48/354D/366D/435419603853.jpeg", desc:"Existe en d'autres coloris sur demande." },
  { id:95, name:"T SHIRT FEMME Rouge 'Feet and Foot 2013' modèle 2.", artist:"RC Créations", cat:"T-shirt", price:14.9, handle:"t-shirt-femme-rouge-feet-and-foot-2013-modele-2", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6EA/9E72/3F00/36A5/0A48/354D/3624/524229082975.jpeg", desc:"Existe en d'autres coloris sur demande." },
  { id:96, name:"T SHIRT HOMME Rouge 'Feet and Foot 2013' modèle 2.", artist:"RC Créations", cat:"T-shirt", price:14.9, handle:"t-shirt-homme-rouge-feet-and-foot-2013-modele-2", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6EB/BC85/7446/4514/0A48/354D/36CF/836809436570.jpeg", desc:"Existe en d'autres coloris sur demande." },
  { id:97, name:"T SHIRT FEMME 'Feet and Foot' LE T SHIRT ROUGE", artist:"RC Créations", cat:"T-shirt", price:9, handle:"t-shirt-femme-feet-and-foot-le-t-shirt-rouge", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D738/E699/3168/B3C2/0A48/354D/36A2/376155928473.png", desc:"" },
  { id:98, name:"T SHIRT HOMME 'Feet and Foot' LE T SHIRT ROUGE", artist:"RC Créations", cat:"T-shirt", price:9, handle:"t-shirt-homme-feet-and-foot-le-t-shirt-rouge", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D73A/17D8/43CE/BB93/0A48/354D/36BF/614279940787.png", desc:"" },
  { id:99, name:"T SHIRT FEMME Chocolat 'Feet and Foot 2013' modèle 1.", artist:"RC Créations", cat:"T-shirt", price:14.9, handle:"t-shirt-femme-chocolat-feet-and-foot-2013-modele-1", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6EC/488D/FB13/5CA9/0A48/354D/36D6/123952983970.jpeg", desc:"Existe en d'autres coloris sur demande." },
  { id:100, name:"DEBARDEUR 'Feet and Foot 2013' modèle 1.", artist:"RC Créations", cat:"Vêtement", price:14.9, handle:"debardeur-feet-and-foot-2013-modele-1", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6ED/08CD/336E/BDF3/0A48/354D/36ED/133484146275.png", desc:"" },
  { id:101, name:"LE PACK DUO 'Feet and Foot'", artist:"RC Créations", cat:"Accessoire", price:25, handle:"le-pack-duo-feet-and-foot", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6EE/D54A/8B79/03DD/0A48/354D/365A/799097944788.png", desc:"Profitez du pack Duo 'Feet and Foot'... Au choix : 1 T shirt homme + 1 T shirt femme ou 2 T shirts homme ou 2 t shirts femmes..." },
  { id:102, name:"T-SHIRT FEMME COL ROND 'ALIEN OR'", artist:"RC Créations", cat:"T-shirt", price:19.9, handle:"t-shirt-femme-col-rond-alien-or", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D66F/BFB5/DA2E/67AA/0A48/354D/367D/437997473199.jpeg", desc:"T shirt femme Alien or" },
  { id:103, name:"T-SHIRT HOMME COL ROND 'ALIEN OR'", artist:"RC Créations", cat:"T-shirt", price:19.9, handle:"t-shirt-homme-col-rond-alien-or", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D673/B33A/C633/28A0/0A48/354D/366F/818067672700.jpeg", desc:"T SHIRT Homme Alien Or" },
  { id:104, name:"T-SHIRT FEMME COL V 'ALIEN OR'", artist:"RC Créations", cat:"T-shirt", price:19.9, handle:"t-shirt-femme-col-v-alien-or", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D676/FFB1/A60D/7191/0A48/354D/36A3/837680649999.jpeg", desc:"T-SHIRT FEMME COL V 'ALIEN OR'" },
  { id:105, name:"T-SHIRT HOMME COL V 'ALIEN OR'", artist:"RC Créations", cat:"T-shirt", price:19.9, handle:"t-shirt-homme-col-v-alien-or", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D67A/8D00/B161/5C5B/0A48/354D/36AD/289290064576.jpeg", desc:"T-SHIRT HOMME COL V 'ALIEN OR'" },
  { id:106, name:"T-SHIRT FEMME COL ROND 'ALIEN ARGENT'", artist:"RC Créations", cat:"T-shirt", price:19.9, handle:"t-shirt-femme-col-rond-alien-argent", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D67D/B16E/84BF/7DF8/0A48/354D/366D/234556325535.jpeg", desc:"T-SHIRT FEMME COL ROND 'ALIEN ARGENT'" },
  { id:107, name:"T-SHIRT HOMME COL ROND 'ALIEN ARGENT'", artist:"RC Créations", cat:"T-shirt", price:19.9, handle:"t-shirt-homme-col-rond-alien-argent", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D681/7117/8DC4/3887/0A48/354D/3669/802270746467.jpeg", desc:"T-SHIRT HOMME COL ROND 'ALIEN ARGENT'" },
  { id:108, name:"T-SHIRT FEMME COL V 'ALIEN ARGENT'", artist:"RC Créations", cat:"T-shirt", price:19.9, handle:"t-shirt-femme-col-v-alien-argent", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D684/2D63/A650/B096/0A48/354D/3651/442475289213.jpeg", desc:"T-SHIRT FEMME COL V 'ALIEN ARGENT'" },
  { id:109, name:"T-SHIRT HOMME COL V 'ALIEN ARGENT'", artist:"RC Créations", cat:"T-shirt", price:19.9, handle:"t-shirt-homme-col-v-alien-argent", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D687/7C75/DABC/F99D/0A48/354D/363C/156515406303.jpeg", desc:"" },
  { id:110, name:"T-SHIRT FEMME COL ROND 'ALIEN'", artist:"RC Créations", cat:"T-shirt", price:19, handle:"t-shirt-femme-col-rond-alien", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D539/8D36/1EE3/BC30/0A48/354D/36FD/592105400325.png", desc:"T-SHIRT FEMME COL ROND 'ALIEN'" },
  { id:111, name:"T-SHIRT HOMME COL ROND 'ALIEN'", artist:"RC Créations", cat:"T-shirt", price:19, handle:"t-shirt-homme-col-rond-alien", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D54B/262D/233B/E985/0A48/354D/3693/545654535676.png", desc:"Le modèle présenté est un light graphite impression orange fluo." },
  { id:112, name:"T-SHIRT FEMME COL V 'ALIEN'", artist:"RC Créations", cat:"T-shirt", price:19, handle:"t-shirt-femme-col-v-alien", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D565/F763/98C2/0097/0A48/354D/36F6/627211941897.jpeg", desc:"Le modèle présenté est blanc marquage fuchsia." },
  { id:113, name:"STYLO A BILLE CELKILT 'STAND'", artist:"Celkilt", cat:"Accessoire", price:3, handle:"stylo-a-bille-celkilt-stand", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/58B8/1C4C/E8D9/8586/B4DF/0A48/3549/3E0D/STYLO_STAND.JPG", desc:"Stylo à bille CELKILT 'Stand' marquage doré." },
  { id:114, name:"FREDERICK ARNO RECUEIL 'Je vis dehors'", artist:"Frederick Arno", cat:"Accessoire", price:12, handle:"frederick-arno-recueil-je-vis-dehors", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/61B9/D825/FBBD/183A/ECDD/0A48/3566/A53F/Recueil_Je_vis_dehors_DEF.jpg", desc:"FREDERICK ARNO RECUEIL 'Je vis dehors'. 'Je vis dehors' est un message d'espoir, un bol d'air pur dans une existence peuplée de mélancolie..." },
  { id:115, name:"MUG CELKILT 'STAND'", artist:"Celkilt", cat:"Mug", price:12, handle:"mug-celkilt-stand", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/58B8/220A/228D/E890/ACC9/0A48/3549/BDEF/MUG_STAND.JPG", desc:"MUG CELKILT 'Stand' noir marquage doré." },
  { id:116, name:"BADGE CELKILT 'Stand'", artist:"Celkilt", cat:"Badge", price:3, handle:"badge-celkilt-stand", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/58B8/2474/4C51/4135/5300/0A48/3549/3E87/BADGE_STAND.JPG", desc:"Badge CELKILT visuel album 'Stand'. Diamètre 32 mm." },
  { id:117, name:"MUG FREDERICK ARNO Modèle 1", artist:"Frederick Arno", cat:"Mug", price:15, handle:"mug-frederick-arno-modele-1", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5F9F/F3B1/D6A6/AFDC/47DA/0A48/3566/709B/MUG_FREDERIC_ARNO_MODELE_1.jpg", desc:"MUG Frédérick ARNO modèle 1." },
  { id:118, name:"MUG FREDERICK ARNO Modèle 2", artist:"Frederick Arno", cat:"Mug", price:15, handle:"mug-frederick-arno-modele-2", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5F9F/F4B1/017D/E391/3224/0A48/3566/1BC7/MUG_FREDERIC_ARNO_MODELE_2.jpg", desc:"MUG Frédérick ARNO modèle 2." },
  { id:119, name:"MUG FREDERICK ARNO Modèle 3", artist:"Frederick Arno", cat:"Mug", price:15, handle:"mug-frederick-arno-modele-3", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5F9F/F4BA/3125/6F34/FA2A/0A48/356B/C471/MUG_FREDERIC_ARNO_MODELE_3.jpg", desc:"MUG Frédérick ARNO modèle 3." },
  { id:120, name:"T-SHIRT HOMME COL V 'ALIEN'", artist:"RC Créations", cat:"T-shirt", price:19, handle:"t-shirt-homme-col-v-alien", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D574/7046/C478/491C/0A48/354D/36AF/879105256001.jpeg", desc:"Le modèle présenté est noir marquage blanc." },
  { id:121, name:"T-SHIRT FEMME COL ROND 'CAMOUFLAGE'", artist:"RC Créations", cat:"T-shirt", price:19, handle:"t-shirt-femme-col-rond-camouflage", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D581/826B/5D21/4D5E/0A48/354D/365F/836692176128.png", desc:"" },
  { id:122, name:"T-SHIRT HOMME COL ROND 'CAMOUFLAGE'", artist:"RC Créations", cat:"T-shirt", price:19, handle:"t-shirt-homme-col-rond-camouflage", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D58F/F30B/A066/A4CF/0A48/354D/3620/731442933936.png", desc:"" },
  { id:123, name:"T-SHIRT ENFANT 'ALIEN'", artist:"RC Créations", cat:"T-shirt", price:12, handle:"t-shirt-enfant-alien", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D5A4/3C0D/1627/CD5A/0A48/354D/36C2/856237939610.png", desc:"T-SHIRT ENFANT 'ALIEN' 100 % COTON" },
  { id:124, name:"T-SHIRT FEMME COL ROND 'PIED' FEET AND FOOT", artist:"RC Créations", cat:"T-shirt", price:19, handle:"t-shirt-femme-col-rond-pied-feet-and-foot", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D5BC/DE68/B250/EACD/0A48/354D/36A9/434130566276.jpeg", desc:"T-SHIRT FEMME COL ROND 'PIED' FEET AND FOOT. 100 % COTON" },
  { id:125, name:"T-SHIRT HOMME COL ROND 'PIED FEET AND FOOT'", artist:"RC Créations", cat:"T-shirt", price:19, handle:"t-shirt-homme-col-rond-pied-feet-and-foot", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D5D5/DB7B/922F/2294/0A48/354D/3623/532299859474.jpeg", desc:"T-SHIRT HOMME COL ROND 'PIED FEET AND FOOT'. 100 % COTON" },
  { id:126, name:"T-SHIRT ENFANT 'PIED FEET AND FOOT'", artist:"RC Créations", cat:"T-shirt", price:14, handle:"t-shirt-enfant-pied-feet-and-foot", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D5F1/9253/E47F/6E9E/0A48/354D/361D/779577324617.jpeg", desc:"T-SHIRT ENFANT 'PIED FEET AND FOOT'. 100 % COTON." },
  { id:127, name:"CD EP 'THE FALLEN BIRDS'", artist:"The Fallen Birds", cat:"Musique", price:8, handle:"cd-ep-the-fallen-birds", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5AD4/6D19/0BC4/C144/95DA/0A48/3648/39A9/The_Fallen_Birds_ep_Cover_2.jpg", desc:"Cd Ep 'THE FALLEN BIRDS' Sortie le 26 avril 2018 contient les titres : 1- Each Side of the Wall 2- Just Goodbye 3- A Million Reasons Why 4- Breathe You Again 5- You're The One that I Want Rec&Mix J..." },
  { id:128, name:"LE PACK CD + T SHIRT FEMME 'THE FALLEN BIRDS'", artist:"The Fallen Birds", cat:"T-shirt", price:20, handle:"le-pack-cd-t-shirt-femme-the-fallen-birds", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5AD4/8991/027F/5D4D/9696/0A48/3648/CA6E/PACK_CD_T_SHIRT_FEMME.JPG", desc:"LE PACK 1 CD + 1 T SHIRT FEMME 'THE FALLEN BIRDS'" },
  { id:129, name:"LE PACK CD + T SHIRT HOMME 'THE FALLEN BIRDS'", artist:"The Fallen Birds", cat:"T-shirt", price:20, handle:"le-pack-cd-t-shirt-homme-the-fallen-birds", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5AD4/8E98/FCCD/C856/26FB/0A48/3648/409E/PACK_CD_T_SHIRT_HOMME.JPG", desc:"LE PACK 1 CD + 1 T SHIRT HOMME 'THE FALLEN BIRDS'" },
  { id:130, name:"T SHIRT FEMME NOIR 'THE FALLEN BIRDS'", artist:"The Fallen Birds", cat:"T-shirt", price:15, handle:"t-shirt-femme-noir-the-fallen-birds", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5AD4/81E4/F9B3/D86C/CEE6/0A48/3648/F9E5/T_SHIRT_FEMME_NOIR_THE_FALLEN_BIRDS.jpg", desc:"T SHIRT FEMME NOIR COL ROND 'THE FALLEN BIRDS'" },
  { id:131, name:"T SHIRT FEMME BLANC 'THE FALLEN BIRDS'", artist:"The Fallen Birds", cat:"T-shirt", price:15, handle:"t-shirt-femme-blanc-the-fallen-birds", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5AD6/046F/FFD9/7ACD/62C9/0A48/3648/EDA6/T_SHIRT_FEMME_BLANC_THE_FALLEN_BIRDS.JPG", desc:"T SHIRT FEMME BLANC COL ROND 'THE FALLEN BIRDS'" },
  { id:132, name:"T SHIRT FEMME HEATHER DARK GREY 'THE FALLEN BIRDS'", artist:"The Fallen Birds", cat:"T-shirt", price:15, handle:"t-shirt-femme-heather-dark-grey-the-fallen-birds", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5AD6/0579/8D3A/70C5/7472/0A48/3648/95E3/T_SHIRT_FEMME_HEATHER_DARK_GREY_THE_FALLEN_BIRDS.JPG", desc:"T SHIRT FEMME HEATHER DARK GREY COL ROND 'THE FALLEN BIRDS'" },
  { id:133, name:"T SHIRT HOMME NOIR 'THE FALLEN BIRDS'", artist:"The Fallen Birds", cat:"T-shirt", price:15, handle:"t-shirt-homme-noir-the-fallen-birds", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5AD4/8484/52DA/DCC8/4911/0A48/3648/076D/T_SHIRT_HOMME_NOIR_THE_FALLEN_BIRDS.jpg", desc:"T SHIRT HOMME NOIR COL ROND 'THE FALLEN BIRDS'" },
  { id:134, name:"TAPIS DE SOURIS FREDERICK ARNO", artist:"Frederick Arno", cat:"Accessoire", price:15, handle:"tapis-de-souris-frederick-arno", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5FB7/E388/AAA4/C079/0896/0A48/356B/C016/TAPIS_DE_SOURIS_FREDERICK_ARNO_SITE.jpg", desc:"Tapis de souris Frédérick Arno dessous mousse." },
  { id:135, name:"MEDIATOR CELKILT", artist:"Celkilt", cat:"Accessoire", price:3, handle:"mediator-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6475/ECC5/21E7/DD1A/45F0/0A48/356B/69B5/CKT_MEDIATOR_GUITARE.jpg", desc:"MEDIATOR CELKILT NOIR en celluloïd épaisseur Medium 0,71" },
  { id:136, name:"CD FREDERICK ARNO 'Chansons françaises'", artist:"Frederick Arno", cat:"Musique", price:15, handle:"cd-frederick-arno-chansons-francaises", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6F6/943E/F2D1/FDBE/0A48/354D/365F/FREDERICK_ARNO_CHANSONS_FRANCAISES_EPUISE.jpg", desc:"Contient les titres : La belle vie / Dans la vie faut pas s'en faire / Que reste t'il de nos amours / Les feuilles mortes / Qu'est ce qu'on attend pour être heureux / La bohème / Loin de Paname / L..." },
  { id:137, name:"GOURDE / BORRACIA THE SIDH 'CLASSIC'", artist:"The Sidh", cat:"Accessoire", price:15, handle:"gourde-borracia-the-sidh-classic", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/7364/0F3C/8DFB/2ABE/0A48/3566/2982/BORRACIA_CLASSIC.jpg", desc:"GOURDE / BORRACIA NOIRE THE SIDH 'CLASSIC' Bouteille à vide isolant en acier inoxydable double paroi. Contenance 500 ml. Anti fuite. Une bouteille à double paroi au design simple pour garder votre ..." },
  { id:138, name:"T SHIRT Homme 'ROANNE BLUES FESTIVAL'", artist:"Roanne Blues Festival", cat:"T-shirt", price:15, handle:"t-shirt-homme-roanne-blues-festival", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/679A/0645/8746/8AE9/EE87/0A48/365E/0408/T_SHIRT_HOMME_RBF.jpg", desc:"T SHIRT HOMME / UNISEXE 'ROANNE BLUES FESTIVAL. 100 % Coton" },
  { id:139, name:"T SHIRT Femme Noir 'ROANNE BLUES FESTIVAL'", artist:"Roanne Blues Festival", cat:"T-shirt", price:15, handle:"t-shirt-femme-noir-roanne-blues-festival", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/679A/0887/89F7/A7AA/1B05/0A48/365E/B1B9/T_SHIRT_FEMME_RBF.jpg", desc:"T SHIRT FEMME NOIR 'ROANNE BLUES FESTIVAL'. 100 % Coton" },
  { id:140, name:"SWEAT à Capuche 'ROANNE BLUES FESTIVAL'", artist:"Roanne Blues Festival", cat:"Sweat-shirt", price:40, handle:"sweat-a-capuche-roanne-blues-festival", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/679A/2A48/DC42/A02F/5C6E/0A48/3664/1F33/SWEAT_RBF.jpg", desc:"SWEAT à Capuche 'ROANNE BLUES FESTIVAL' 80% coton / 20% polyester . Poignets et bas en côte 1x1 avec élasthanne. Poche kangourou frontale. Épaules et emmanchures avec surpiqûre point plat. Coupe tu..." },
  { id:141, name:"SWEAT à Capuche Zippé 'ROANNE BLUES FESTIVAL'", artist:"Roanne Blues Festival", cat:"Sweat-shirt", price:45, handle:"sweat-a-capuche-zippe-roanne-blues-festival", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/679A/3D67/0296/29AE/B2A9/0A48/365E/A437/SWEAT_ZIPPE_RBF.jpg", desc:"SWEAT à Capuche Zippé 'ROANNE BLUES FESTIVAL' 80% coton / 20% polyester . Poignets et bas en côte 1x1 avec élasthanne. Poche kangourou frontale. Épaules et emmanchures avec surpiqûre point plat. Co..." },
  { id:142, name:"TOTE BAG 'ROANNE BLUES FESTIVAL'", artist:"Roanne Blues Festival", cat:"Accessoire", price:10, handle:"tote-bag-roanne-blues-festival", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/679A/423F/30B1/4491/AC31/0A48/365F/F069/TOTE_BAG_RBF.jpg", desc:"TOTE BAG Gris 'ROANNE BLUES FESTIVAL'. 100 % Coton. La densité du coton de 140 g/m² rend le sac robuste, durable et adapté au transport d'articles lourds dans le compartiment principal. Avec ses po..." },
  { id:143, name:"CASQUETTE BRODEE 'ROANNE BLUES FESTIVAL'", artist:"Roanne Blues Festival", cat:"Casquette", price:15, handle:"casquette-brodee-roanne-blues-festival", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6916/0E3C/326F/E1E4/3CFF/0A48/3566/0018/CASQUETTE_JAUNE_RBF_2025.png", desc:"CASQUETTE NOIRE Brodée 'Roanne Blues Festival'. 100 % Coton Drill, Tissu épais et resistant. Taille réglable." },
  { id:144, name:"GOURDE / BORRACIA THE SIDH 'SHAKE THAT BAGPIPE'", artist:"The Sidh", cat:"Accessoire", price:15, handle:"gourde-borracia-the-sidh-shake-that-bagpipe", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6849/7449/52BB/34B3/6A7F/0A48/3566/8D5C/BORRACIA_SHAKE.jpg", desc:"GOURDE / BORRACIA NOIRE THE SIDH 'SHAKE THAT BAGPIPE' Bouteille à vide isolant en acier inoxydable double paroi. Contenance 500 ml. Anti fuite. Une bouteille à double paroi au design simple pour ga..." },
  { id:145, name:"LE PACK FREDERICK ARNO 'Tu sais'", artist:"Frederick Arno", cat:"Accessoire", price:10, handle:"le-pack-frederick-arno-tu-sais", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/601D/5980/58D9/D672/E957/0A48/356A/A5F8/LOT_FREDERICK_ARNO_N_176_3.jpg", desc:"Le pack F'rédérick Arno 'Tu sais' c'est un badge 32 mm de diamètre + un magnifique magnet carré en dur de 52 mm par 52 mm de largeur avec un miroir de poche de 75 mm de diamètre et un porte-clés po..." },
  { id:146, name:"LE PACK FREDERICK ARNO 'Je bois à la vie'", artist:"Frederick Arno", cat:"Accessoire", price:10, handle:"le-pack-frederick-arno-je-bois-a-la-vie", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/601D/5A70/3D7B/8D32/6C33/0A48/3566/B97B/LOT_FREDERICK_ARNO_N_176_2.jpg", desc:"Le pack F'rédérick Arno 'Je bois à la vie' c'est un badge 32 mm de diamètre + un magnifique magnet carré en dur de 52 mm par 52 mm de largeur avec un miroir de poche de 75 mm de diamètre et un port..." },
  { id:147, name:"BADGE FREDERICK ARNO 'Je bois à la vie'", artist:"Frederick Arno", cat:"Badge", price:3, handle:"badge-frederick-arno-je-bois-a-la-vie", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/601D/5BC7/0EE4/E10B/40C8/0A48/356A/F51A/BADGE_32_FREDERICK_ARNO.jpg", desc:"Badge 32 mm de diamètre Frédérick Arno 'Je bois à la vie'" },
  { id:148, name:"MIROIR DE POCHE FREDERICK ARNO 'Je bois la vie'", artist:"Frederick Arno", cat:"Accessoire", price:5, handle:"miroir-de-poche-frederick-arno-je-bois-la-vie", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/601D/5CD1/142A/A91C/9C5A/0A48/356B/F00D/MIROIR_FREDERICK_ARNO.jpg", desc:"MIROIR DE POCHE Frédérick Arno 'Je bois la vie' diamètre 75 mm. Pratique pour mettre dans son sac à main ou dans une poche de blouson, de manteau..." },
  { id:149, name:"MAGNET FREDERICK ARNO 'Je bois à la vie'", artist:"Frederick Arno", cat:"Accessoire", price:3, handle:"magnet-frederick-arno-je-bois-a-la-vie", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/601D/5D77/4A7A/ACBC/95C3/0A48/356A/F5F2/MAGNET_FREDERICK_ARNO.jpg", desc:"MAGNET EN DUR Frédérick Arno 52 mm par côté..." },
  { id:150, name:"PORTE-CLES / JETON FREDERICK ARNO 'Je bois à la vie'", artist:"Frederick Arno", cat:"Accessoire", price:5, handle:"porte-cles-jeton-frederick-arno-je-bois-a-la-vie", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/601D/5F23/00C1/73A0/DF67/0A48/356B/4DBF/PORTE_JETON_CUIR_FREDERICK_ARNO.jpg", desc:"Porte-clés en métal et en cuir synthétique avec jeton pour caddie et photo de Frédérick sur une face." },
  { id:151, name:"FREDERICK ARNO 'Note sensible' ALBUM EN TELECHARGEMENT", artist:"Frederick Arno", cat:"Accessoire", price:7, handle:"frederick-arno-note-sensible-album-en-telechargement", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D702/0C04/14A4/2E23/0A48/354D/367F/168076057792.png", desc:"ALBUM EN TELECHARGEMENT. Date de sortie 21 juin 2013 contient les titres : A St-Germain / Fais-toi une belle vie / Si ce rêve c'était toi / Un jour avec et un jour sans / Enfant d'la balle / Que to..." },
  { id:152, name:"FREDERICK ARNO 'Chansons françaises' ALBUM EN TELECHARGEMENT", artist:"Frederick Arno", cat:"Accessoire", price:7, handle:"frederick-arno-chansons-francaises-album-en-telechargement", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D70D/3FA4/A6AB/7C2E/0A48/354D/3692/332461913916.png", desc:"Contient les titres : La belle vie / Dans la vie faut pas s'en faire / Que reste t'il de nos amours / Les feuilles mortes / Qu'est ce qu'on attend pour être heureux / La bohème / Loin de Paname / L..." },
  { id:153, name:"FREDERICK ARNO 'LE PACK 2 ALBUMS EN TELECHARGEMENT'", artist:"Frederick Arno", cat:"Accessoire", price:10, handle:"frederick-arno-le-pack-2-albums-en-telechargement", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D711/0435/A325/7867/0A48/354D/36CC/799096618113.png", desc:"Les 2 albums de Frédérick Arno en Téléchargement. Contient les titres : La belle vie / Dans la vie faut pas s'en faire / Que reste t'il de nos amours / Les feuilles mortes / Qu'est ce qu'on attend ..." },
  { id:154, name:"LE SAC SHOPPING 'FREDERICK ARNO'", artist:"Frederick Arno", cat:"Tote Bag", price:8, handle:"le-sac-shopping-frederick-arno", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D701/E080/033A/8CAA/0A48/354D/3625/486494880184.png", desc:"Disponible en d'autres coloris sur simple demande à : richardcourtadecreations@gmail.com" },
  { id:155, name:"T-shirt GASPARD ET GEORGES Unisex en coton bio ultra doux", artist:"RC Créations", cat:"T-shirt", price:20, handle:"t-shirt-gaspard-et-georges-unisex-en-coton-bio-ultra-doux", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/685E/6F0A/5668/2402/EF3D/0A48/356A/EF8B/T_SHIRT_BLANC_UNISEXE.jpg", desc:"T-shirt en coton bio ultra doux, pensé pour bouger, rire, vivre. Logo Gaspard et Georges sur la poitrine, plusieurs coloris. Un basique éthique, stylé, et vraiment confortable. Délai de fabrication..." },
  { id:156, name:"T-shirt GASPARD ET GEORGES Femme en coton bio ultra doux", artist:"RC Créations", cat:"T-shirt", price:20, handle:"t-shirt-gaspard-et-georges-femme-en-coton-bio-ultra-doux", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/685E/A905/DE2E/FDF8/0E25/0A48/3566/0D0A/T_SHIRT_BLANC_FEMME.jpg", desc:"T-shirt en coton bio ultra doux, pensé pour bouger, rire, vivre. Logo Gaspard et Georges sur la poitrine, plusieurs coloris. Un basique éthique, stylé, et vraiment confortable. Délai de fabrication..." },
  { id:157, name:"T-shirt GASPARD ET GEORGES ENFANT BLANC en coton bio ultra doux", artist:"RC Créations", cat:"T-shirt", price:20, handle:"t-shirt-gaspard-et-georges-enfant-blanc-en-coton-bio-ultra-doux", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6864/01BB/E9DC/AA03/79D5/0A48/356A/FB40/T_SHIRT_BLANC_ENFANT.jpg", desc:"T-shirt en coton bio ultra doux, pensé pour bouger, rire, vivre. Logo Gaspard et Georges sur la poitrine, plusieurs coloris. Un basique éthique, stylé, et vraiment confortable. Délai de fabrication..." },
  { id:158, name:"T-shirt GASPARD ET GEORGES ENFANT NOIR en coton bio ultra doux", artist:"RC Créations", cat:"T-shirt", price:20, handle:"t-shirt-gaspard-et-georges-enfant-noir-en-coton-bio-ultra-doux", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6864/DF24/B398/6DE9/D54B/0A48/356A/4867/T_SHIRT_NOIR_ENFANT.jpg", desc:"T-shirt en coton bio ultra doux, pensé pour bouger, rire, vivre. Logo Gaspard et Georges sur la poitrine, plusieurs coloris. Un basique éthique, stylé, et vraiment confortable. Délai de fabrication..." },
  { id:159, name:"T-shirt GASPARD ET GEORGES ENFANT COULEUR en coton bio ultra doux", artist:"RC Créations", cat:"T-shirt", price:20, handle:"t-shirt-gaspard-et-georges-enfant-couleur-en-coton-bio-ultra-doux", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6864/D509/A239/F025/084B/0A48/356B/F604/T_SHIRT_SEA_BLUE_ENFANT.jpg", desc:"T-shirt en coton bio ultra doux, pensé pour bouger, rire, vivre. Logo Gaspard et Georges sur la poitrine, plusieurs coloris. Un basique éthique, stylé, et vraiment confortable. Délai de fabrication..." },
  { id:160, name:"BODY Manches Courtes Bébé", artist:"RC Créations", cat:"Vêtement", price:20, handle:"body-manches-courtes-bebe", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6867/DDB9/1561/6748/6D00/0A48/356A/8D4F/BODY_ENFANT_PALEPINK.jpg", desc:"Petit mot de Maman : « Du coton tout doux pour mon petit chamallow… 100% coton jersey avec lavage aux enzymes ( Oxford Grey : 90% coton/ 10% viscose ). Encolure ronde fermée par 2 boutons pression ..." },
  { id:161, name:"CD NAWO", artist:"RC Créations", cat:"Musique", price:12, handle:"cd-nawo", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/A208/D3AD/D27D/13C0/0A48/354B/574E/covertest4nawo.jpg", desc:"Premier album de 'NAWO' contient les titres : La Peau, Tout va bien, Si c'était toi, L'intimité, Le sens du vent, Sous l'oreiller, Le miroir, Le doute, Le sable entre nos doigts, La chance, La sort..." },
  { id:162, name:"CD NAWO 'Le vent se lève'", artist:"RC Créations", cat:"Musique", price:12, handle:"cd-nawo-le-vent-se-leve", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/A3B3/F5F5/6AB7/6FCA/0A48/354B/B189/Pochettealbum.jpg", desc:"Deuxième album de 'NAWO' contient les titres : L'air de rien, Bien sage, On ne reviendra pas, La porte ouverte, Quelqu'un qui brille, Le vent se lève, Le film à l'envers, Ton aquarium, Les morceaux..." },
  { id:163, name:"LE PACK NAWO (2 CD)", artist:"RC Créations", cat:"Accessoire", price:20, handle:"le-pack-nawo-2-cd", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/A632/DD6D/B913/1CB0/0A48/354B/B142/427402079185.png", desc:"Le pack premier et deuxième album de NAWO à prix canon !!!" },
  { id:164, name:"CD 'WAX' Tentation en version Digipack", artist:"RC Créations", cat:"Musique", price:12, handle:"cd-wax-tentation-en-version-digipack", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/A98C/C569/C513/96CC/0A48/354B/D8BE/862939721644.png", desc:"Album absolument INTROUVABLE !!! Premier album du groupe WAX en version Digipack. Contient 17 titres dont : Noir sur blanc, La dose 1, La dose 2, En somme, Le temps, Je fais semblant, Ma mission, L..." },
  { id:165, name:"CD 'WAX' Un Monde en version Digipack", artist:"RC Créations", cat:"Musique", price:12, handle:"cd-wax-un-monde-en-version-digipack", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/A942/B709/355C/04AE/0A48/354B/D8C3/083784937477.png", desc:"Deuxième album du groupe WAX en version Digipack. Contient les titres : Un monde, Du bonheur pour après, Le choix des armes, L'orage, Frappe encore, Le pire d'ailleurs, Cotrôle, Trop forts pour All..." },
  { id:166, name:"CD 'WAX III'", artist:"RC Créations", cat:"Musique", price:12, handle:"cd-wax-iii", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/545B/A720/4EF1/8772/7F7B/0A48/354B/8CA2/pochette_WAX_III_SITE.jpg", desc:"Troisième album du groupe WAX contient les titres : A tort ou à raison, Avant, Je prends le suivant, En sens inverse, L'ombre d'un doute, On oublie rien, Si tu préfères, Dans les flammes (avec le B..." },
  { id:167, name:"T SHIRT FEMME FREDERICK ARNO 'Note sensible'", artist:"Frederick Arno", cat:"T-shirt", price:15, handle:"t-shirt-femme-frederick-arno-note-sensible", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6F9/3523/8C88/30C9/0A48/354D/36D7/149715397903.png", desc:"" },
  { id:168, name:"CD CELKILT 'EVERYDAY'S ST PATRICK'S DAY ! '", artist:"Celkilt", cat:"Musique", price:12, handle:"cd-celkilt-everydays-st-patricks-day", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6AB/AF17/B8A5/D25F/0A48/354D/3600/979781754560.jpeg", desc:"Tracklisting : COME IN, EVERYDAY'S ST PATRICK'S DAY, POLKACHIEN, THE GOODBYE SONG, BIG MOUTH, POLKILT, THE THINGS THAT MONEY JUST CAN'T BUY, HUNGARIAN KILT DANCE # 5, JJACKMACISAAC..." },
  { id:169, name:"METAL KEYCHAIN", artist:"RC Créations", cat:"Accessoire", price:6, handle:"metal-keychain", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D72D/090C/6316/70A3/0A48/354D/3699/519158898848.jpeg", desc:"METAL KEYCHAIN" },
  { id:170, name:"BLACK T SHIRT FOR MEN 'EVERYDAY'S ST PATRICK'S DAY ! ' CELKILT", artist:"Celkilt", cat:"T-shirt", price:20, handle:"black-t-shirt-for-men-everydays-st-patricks-day-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6B2/B7AA/A6B1/6031/0A48/354D/36F1/911144319547.jpeg", desc:"BLACK T SHIRT FOR MEN 'EVERYDAY'S ST PATRICK'S DAY ! ' CELKILT. 100% COTON" },
  { id:171, name:"BLACK T SHIRT FOR WOMEN 'EVERYDAY'S ST PATRICK'S DAY ! ' CELKILT", artist:"Celkilt", cat:"T-shirt", price:20, handle:"black-t-shirt-for-women-everydays-st-patricks-day-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6B3/5003/6269/01D0/0A48/354D/36D1/412349445439.jpeg", desc:"BLACK T SHIRT FOR WOMEN 'EVERYDAY'S ST PATRICK'S DAY ! ' CELKILT. 100 % COTON" },
  { id:172, name:"IRISH GREEN T SHIRT FOR MEN 'EVERYDAY'S ST PATRICK'S DAY ! ' CELKILT", artist:"Celkilt", cat:"T-shirt", price:20, handle:"irish-green-t-shirt-for-men-everydays-st-patricks-day-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6B5/B57A/EDC1/8D89/0A48/354D/3692/766458217692.jpeg", desc:"IRISH GREEN T SHIRT FOR MEN 'EVERYDAY'S ST PATRICK'S DAY ! ' CELKILT. 100 % COTON" },
  { id:173, name:"IRISH GREEN T SHIRT FOR WOMEN 'EVERYDAY'S ST PATRICK'S DAY ! ' CELKILT", artist:"Celkilt", cat:"T-shirt", price:20, handle:"irish-green-t-shirt-for-women-everydays-st-patricks-day-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6B6/5423/2D6E/CA17/0A48/354D/3627/420432734447.jpeg", desc:"IRISH GREEN T SHIRT FOR WOMEN 'EVERYDAY'S ST PATRICK'S DAY ! ' CELKILT. 100% COTON" },
  { id:174, name:"T SHIRT HOMME FREDERICK ARNO 'Note sensible'", artist:"Frederick Arno", cat:"T-shirt", price:15, handle:"t-shirt-homme-frederick-arno-note-sensible", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6F7/6E2E/B4D9/6E51/0A48/354D/36F3/529911704219.png", desc:"" },
  { id:175, name:"T SHIRT FEMME FREDERICK ARNO", artist:"Frederick Arno", cat:"T-shirt", price:15, handle:"t-shirt-femme-frederick-arno", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6FB/F4AD/1AC3/8B8D/0A48/354D/36C2/291148277473.png", desc:"Disponible en noir ou blanc." },
  { id:176, name:"T SHIRT HOMME FREDERICK ARNO", artist:"Frederick Arno", cat:"T-shirt", price:15, handle:"t-shirt-homme-frederick-arno", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6FE/1B20/3389/51C0/0A48/354D/3658/801231667586.png", desc:"DISPONIBLE EN NOIR OU BLANC" },
  { id:177, name:"Les fables de multiplication", artist:"RC Créations", cat:"Accessoire", price:17, handle:"les-fables-de-multiplication", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D70C/FDF6/33BB/C2AE/0A48/354D/363B/071798420800.png", desc:"Le Petit kit poétique comprend : - Les fables de multiplication (textes : Florence Courtade, illustrations : Noé et Loïs Courtade) - Un petit carnet de brouillon - Un crayon à papier rigolo - Le to..." },
  { id:178, name:"BLACK T SHIRT FOR MEN 'Rock n' Kilt !!!' CELKILT", artist:"Celkilt", cat:"T-shirt", price:15, handle:"black-t-shirt-for-men-rock-n-kilt-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D731/7E12/7A86/3D4E/0A48/354D/366C/490348624295.png", desc:"BLACK T SHIRT FOR MEN 'Rock n' Kilt !!!' CELKILT. 100% COTON" },
  { id:179, name:"BLACK T SHIRT FOR WOMEN 'Rock n' Kilt !!!' CELKILT", artist:"Celkilt", cat:"T-shirt", price:15, handle:"black-t-shirt-for-women-rock-n-kilt-celkilt", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D732/C517/F424/0AEB/0A48/354D/3675/542322165590.png", desc:"" },
  { id:180, name:"METAL WHISKY FLASK 'LIMITED EDITION'", artist:"RC Créations", cat:"Accessoire", price:25, handle:"metal-whisky-flask-limited-edition", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D734/56FB/59F3/13A8/0A48/354D/362E/361453099557.jpeg", desc:"Flasque en inox gravure laser 'CELKILT'" },
  { id:181, name:"CELKILT'S MUG 'On the table'", artist:"Celkilt", cat:"Mug", price:12, handle:"celkilts-mug-on-the-table", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D6B0/C9D8/32B9/EA4D/0A48/354D/36DC/833718352432.jpeg", desc:"Mug Frozen CELKILT 'On the table'" },
  { id:182, name:"THE PEN CELKILT 'On the table'", artist:"Celkilt", cat:"Accessoire", price:3, handle:"the-pen-celkilt-on-the-table", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D72E/3A0C/552C/F9C4/0A48/354D/36BC/561015176824.jpeg", desc:"THE PEN CELKILT 'On the table'" },
  { id:183, name:"CELKILT 'Hey What's Under your kilt ?' DIGITAL DOWNLOAD mp3 256 K", artist:"Celkilt", cat:"Accessoire", price:7, handle:"celkilt-hey-whats-under-your-kilt-digital-download-mp3-256-k", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D723/252A/4B85/838B/0A48/354D/3635/444407278807.png", desc:"Tracklisting : Hey what's under your kilt ?, All These Times, Smokin' Erin, Gold River, The Alchemist, Should I, I've Ruined My Chances... DIGITAL DOWNLOAD mp3 256 K. Create an account through 'Mon..." },
  { id:184, name:"CELKILT 'Everyday's St Patrick's day !!!' DIGITAL DOWNLOAD mp3 256 K", artist:"Celkilt", cat:"Accessoire", price:7, handle:"celkilt-everydays-st-patricks-day-digital-download-mp3-256-k", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D71A/7F29/0935/3637/0A48/354D/3618/697567092822.png", desc:"Tracklisting : COME IN, EVERYDAY'S ST PATRICK'S DAY, POLKACHIEN, THE GOODBYE SONG, BIG MOUTH, POLKILT, THE THINGS THAT MONEY JUST CAN'T BUY, HUNGARIAN KILT DANCE # 5, JJACKMACISAAC..." },
  { id:185, name:"CELKILT 'On The Table' DIGITAL DOWNLOAD mp3 256 K", artist:"Celkilt", cat:"Accessoire", price:7, handle:"celkilt-on-the-table-digital-download-mp3-256-k", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/542A/D749/6265/376D/529D/0A48/354D/3694/892291352518.png", desc:"Tracklisting : We never try, Enough about me, On the table, Going down, The only road, G-Grill, To be the one, My dirty Mazurka, Hellobye..." },
  { id:186, name:"CD FREDERICK ARNO 'Episode 6'", artist:"Frederick Arno", cat:"Musique", price:10, handle:"cd-frederick-arno-episode-6", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6435/0569/606E/7DE5/ABC2/0A48/3566/3C46/Album_EPISODE_6.jpg", desc:"FREDERICK ARNO Nouvel album 'EPISODE 6'... Inclus les titres : 1 - ROAD TRIP 2 - DANS TON OCEAN 3 - RECOMMENCER 4 - PERSONNE NE LE VOIT 5 - SEMBLANT 6 - JE ME REPRENDS 7 - TOUT IRA BIEN 8 - LA VIDA..." },
  { id:187, name:"CD FREDERICK ARNO 'Le Secret des Couleurs'", artist:"Frederick Arno", cat:"Musique", price:10, handle:"cd-frederick-arno-le-secret-des-couleurs", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6450/C6D1/4D56/0660/9FD5/0A48/356A/3AFD/Album_LE_SECRET_DES_COULEURS.jpg", desc:"FREDERICK ARNO album 'Le Secret des Couleurs' Cet album « Le secret des couleurs » raconte l’histoire du monde merveilleux des Zigoliz (issu de la comédie musicale pour enfants « Le secret des coul..." },
  { id:188, name:"CD FREDERICK ARNO 'TURBULENCES'", artist:"Frederick Arno", cat:"Musique", price:15, handle:"cd-frederick-arno-turbulences", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/5C51/690E/CFBB/DC43/E112/0A48/3549/85B8/FREDERICK_ARNO_TURBULENCES.jpg", desc:"Contient les titres : My Doll (F. Arno) Quand reviendras-tu ? (F. Arno) Turbulences (F. Arno - E. Delhomme) Ca s’profile (H. Berraiana – B. Delhomme – F. Arno) J’aimerai tout de toi (R. Colonat – M..." },
  { id:189, name:"CLE USB FREDERICK ARNO 'Episode 6'", artist:"Frederick Arno", cat:"Accessoire", price:10, handle:"cle-usb-frederick-arno-episode-6", img:"https://rccreations.fr/WebRoot/Store20/Shops/aafc4abf-5474-4bed-aa61-01c62ea13fff/6435/0D3A/3CFA/FF6C/8A12/0A48/3566/2C03/CLE_USB_FRED_ARNO_EPISODE_6.jpg", desc:"FREDERICK ARNO Nouvel album 'EPISODE 6' sur clé usb... Inclus les titres : 1 - ROAD TRIP 2 - DANS TON OCEAN 3 - RECOMMENCER 4 - PERSONNE NE LE VOIT 5 - SEMBLANT 6 - JE ME REPRENDS 7 - TOUT IRA BIEN..." },
];


/* ---------- CONFIGURATOR PRODUCT IMAGE MAP ---------- */
const CONF_IMAGES = {
  'T-shirt': {
    'blanc':      'produits-vierges/T-shirt/T-shirt_Blanc_avant.png',
    'noir':       'produits-vierges/T-shirt/T-shirt_Noir_avant.png',
    'bleu':       'produits-vierges/T-shirt/T-shirt_Bleu_avant.png',
    'gris-clair': 'produits-vierges/T-shirt/T-shirt_Grisclair_avant.png',
    'gris-fonce': 'produits-vierges/T-shirt/T-shirt_Grisfonce_avant.png',
    'rouge':      'produits-vierges/T-shirt/T-shirt_Rouge_avant.png',
    'vert':       'produits-vierges/T-shirt/T-shirt_Vertfôret_avant.png',
    'default':    'produits-vierges/T-shirt/T-shirt_Blanc_avant.png',
  },
  'Sweat-shirt': {
    'noir':       'produits-vierges/Sweats/PS_IB402_IDEALBLACK.png',
    'gris-fonce': 'produits-vierges/Sweats/PS_IB402_IDEALDARKGREY.png',
    'vert':       'produits-vierges/Sweats/PS_IB402_IDEALFORESTGREEN.png',
    'gris-clair': 'produits-vierges/Sweats/PS_IB402_IDEALOXFORDGREY.png',
    'rouge':      'produits-vierges/Sweats/PS_IB402_IDEALRED.png',
    'bleu':       'produits-vierges/Sweats/PS_IB402_IDEALROYALBLUE.png',
    'blanc':      'produits-vierges/Sweats/PS_IB402_IDEALWHITE.png',
    'default':    'produits-vierges/Sweats/PS_IB402_IDEALBLACK.png',
  },
  'Casquette': {
    'noir':       'produits-vierges/Casquettes/PS_B65_BLACK.png',
    'bleu':       'produits-vierges/Casquettes/PS_B65_BRIGHTROYAL.png',
    'rouge':      'produits-vierges/Casquettes/PS_B65_CLASSICRED.png',
    'vert':       'produits-vierges/Casquettes/PS_B65_FORESTGREEN.png',
    'gris-fonce': 'produits-vierges/Casquettes/PS_B65_GRAPHITEGREY.png',
    'gris-clair': 'produits-vierges/Casquettes/PS_B65_STONE.png',
    'blanc':      'produits-vierges/Casquettes/PS_B65_WHITE.png',
    'default':    'produits-vierges/Casquettes/PS_B65_BLACK.png',
  },
  'Mug': {
    'beige':      'produits-vierges/Mugs/Mug_Beige.jpg',
    'bleu':       'produits-vierges/Mugs/Mug_Bleu.jpg',
    'bleu-royal': 'produits-vierges/Mugs/Mug_Bleuroyal.jpg',
    'noir':       'produits-vierges/Mugs/Mug_Noir.jpg',
    'rouge':      'produits-vierges/Mugs/Mug_Rouge.jpg',
    'default':    'produits-vierges/Mugs/Mug_Bleu.jpg',
  },
  'Sac / Tote bag': {
    'noir':       'produits-vierges/zip/PS_KI0739_BLACK.png',
    'blanc':      'produits-vierges/zip/PS_KI0739_WHITE.png',
    'bleu':       'produits-vierges/zip/PS_KI0739_NAVY.png',
    'default':    'produits-vierges/zip/PS_KI0739_NATURAL.png',
  },
};

const CONF_COLOR_MAP = {
  '#ffffff': 'blanc',
  '#111827': 'noir',
  '#1e3a5f': 'bleu',
  '#7f1d1d': 'rouge',
  '#1b4332': 'vert',
  '#e5e7eb': 'gris-clair',
  '#374151': 'gris-fonce',
  '#ef4444': 'rouge',
  '#3b82f6': 'bleu',
  '#1d4ed8': 'bleu-royal',
  '#f5e6c8': 'beige',
};

/* ---------- CART ---------- */
const cart = {
  items: JSON.parse(localStorage.getItem('rcc_cart') || '[]'),

  save() { localStorage.setItem('rcc_cart', JSON.stringify(this.items)); },

  count() { return this.items.reduce((s, i) => s + i.qty, 0); },

  total() { return this.items.reduce((s, i) => s + i.price * i.qty, 0); },

  add(product, qty = 1, variant = '') {
    const key = product.id + '_' + variant;
    const ex = this.items.find(i => i.key === key);
    if (ex) { ex.qty += qty; }
    else { this.items.push({ key, id: product.id, name: product.name, artist: product.artist, price: product.price, img: product.img || '', qty, variant }); }
    this.save(); this.update();
    showToast('Produit ajouté au panier ✓');
  },

  remove(key) {
    this.items = this.items.filter(i => i.key !== key);
    this.save(); this.update();
  },

  setQty(key, qty) {
    const item = this.items.find(i => i.key === key);
    if (!item) return;
    if (qty < 1) { this.remove(key); return; }
    item.qty = qty; this.save(); this.update();
  },

  update() {
    document.querySelectorAll('.cart-badge').forEach(b => {
      const c = this.count();
      b.textContent = c;
      b.style.display = c > 0 ? 'flex' : 'none';
    });
    this.renderDrawer();
    this.renderPage();
  },

  _imgHtml(item) {
    if (item.img) return `<img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover" loading="lazy" onerror="this.style.display='none';this.nextSibling.style.display='flex'"><div style="display:none;width:100%;height:100%;background:#f3f4f6;align-items:center;justify-content:center;font-size:22px">◆</div>`;
    return `<div style="width:100%;height:100%;background:#f3f4f6;display:flex;align-items:center;justify-content:center;font-size:22px">◆</div>`;
  },

  renderDrawer() {
    const list = document.querySelector('.cart-items-list');
    const totEl = document.querySelector('.cart-total-row strong');
    if (!list) return;

    if (this.items.length === 0) {
      list.innerHTML = `<div class="cart-empty"><svg viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2"/></svg><p>Votre panier est vide</p></div>`;
    } else {
      list.innerHTML = this.items.map(item => `
        <div class="cart-item">
          <div class="cart-item-img">${this._imgHtml(item)}</div>
          <div class="cart-item-info" style="flex:1">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-meta">${item.artist}${item.variant ? ' · ' + item.variant : ''}</div>
            <div class="qty-ctrl">
              <button class="qty-btn" onclick="cart.setQty('${item.key}', ${item.qty - 1})">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="cart.setQty('${item.key}', ${item.qty + 1})">+</button>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
            <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} €</div>
            <button onclick="cart.remove('${item.key}')" style="font-size:12px;color:#9ca3af;cursor:pointer;border:none;background:none;font-family:inherit">Retirer</button>
          </div>
        </div>`).join('');
    }
    if (totEl) totEl.textContent = this.total().toFixed(2) + ' €';
  },

  renderPage() {
    const tbody = document.querySelector('#cart-tbody');
    if (!tbody) return;
    if (this.items.length === 0) {
      tbody.closest('table').parentElement.innerHTML = `
        <div style="text-align:center;padding:80px 0;color:#6b7280">
          <div style="font-size:64px;margin-bottom:16px">🛒</div>
          <p style="font-size:18px;margin-bottom:24px">Votre panier est vide</p>
          <a href="boutique.html" class="btn btn-primary">Découvrir la boutique</a>
        </div>`;
      return;
    }
    tbody.innerHTML = this.items.map(item => `
      <tr>
        <td>
          <div class="ct-product">
            <div class="ct-img">${this._imgHtml(item)}</div>
            <div>
              <div class="ct-name">${item.name}</div>
              <div class="ct-variant">${item.artist}${item.variant ? ' · ' + item.variant : ''}</div>
            </div>
          </div>
        </td>
        <td style="font-size:14px">${item.price.toFixed(2)} €</td>
        <td>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="cart.setQty('${item.key}', ${item.qty - 1})">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="cart.setQty('${item.key}', ${item.qty + 1})">+</button>
          </div>
        </td>
        <td style="text-align:right;font-weight:700">${(item.price * item.qty).toFixed(2)} €</td>
      </tr>`).join('');
    updateSummary();
  }
};

function updateSummary() {
  const subtotalEl = document.getElementById('summary-subtotal');
  const totalEl    = document.getElementById('summary-total');
  const shippingEl = document.getElementById('summary-shipping');
  const sub = cart.total();
  const shipping = sub > 0 ? (sub >= 50 ? 0 : 5.99) : 0;
  if (subtotalEl) subtotalEl.textContent = sub.toFixed(2) + ' €';
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Gratuit' : shipping.toFixed(2) + ' €';
  if (totalEl)    totalEl.textContent    = (sub + shipping).toFixed(2) + ' €';
}

/* ---------- TOAST ---------- */
let toastTimer;
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  clearTimeout(toastTimer);
  requestAnimationFrame(() => { t.classList.add('show'); });
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ---------- CART DRAWER ---------- */
function openCart() {
  document.querySelector('.cart-drawer')?.classList.add('open');
  document.querySelector('.overlay')?.classList.add('open');
  cart.renderDrawer();
}
function closeCart() {
  document.querySelector('.cart-drawer')?.classList.remove('open');
  document.querySelector('.overlay')?.classList.remove('open');
}

/* ---------- SEARCH ---------- */
function openSearch() {
  const el = document.querySelector('.search-overlay');
  el?.classList.add('open');
  setTimeout(() => el?.querySelector('.search-input')?.focus(), 50);
}
function closeSearch() {
  document.querySelector('.search-overlay')?.classList.remove('open');
}

/* ---------- CAROUSEL ---------- */
function initCarousel(trackSel, visible = 3) {
  const track = document.querySelector(trackSel);
  if (!track) return;
  const items  = track.querySelectorAll('.artist-card');
  const total  = items.length;
  let current  = 0;
  const gap    = 20;

  function move(n) {
    const maxIdx = Math.max(0, total - visible);
    current = Math.max(0, Math.min(n, maxIdx));
    const itemW = track.parentElement.offsetWidth / visible - gap * (visible - 1) / visible;
    track.style.transform = `translateX(-${current * (itemW + gap)}px)`;
  }

  document.querySelector('.carousel-prev')?.addEventListener('click', () => move(current - 1));
  document.querySelector('.carousel-next')?.addEventListener('click', () => move(current + 1));
  window.addEventListener('resize', () => move(current));
}

/* ---------- FILTERS ---------- */
function initFilters() {
  const chips = document.querySelectorAll('.chip[data-filter]');
  const cards = document.querySelectorAll('[data-artist]');
  if (!chips.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const wasActive = chip.classList.contains('active');
      const group = chip.dataset.group || 'cat';
      document.querySelectorAll(`.chip[data-group="${group}"]`).forEach(c => c.classList.remove('active'));
      if (!wasActive) chip.classList.add('active');
      applyFilters();
    });
  });

  function applyFilters() {
    const activeCat    = document.querySelector('.chip[data-group="cat"].active')?.dataset.filter || 'all';
    const activeArtist = document.querySelector('.chip[data-group="artist"].active')?.dataset.filter || 'all';
    let shown = 0;
    cards.forEach(card => {
      const matchCat    = activeCat    === 'all' || card.dataset.cat    === activeCat;
      const matchArtist = activeArtist === 'all' || card.dataset.artist === activeArtist;
      const vis = matchCat && matchArtist;
      card.style.display = vis ? '' : 'none';
      if (vis) shown++;
    });
    const cnt = document.querySelector('.results-count');
    if (cnt) cnt.textContent = shown + ' produit' + (shown > 1 ? 's' : '');
  }
}

/* ---------- CONFIGURATOR PREVIEW ---------- */
let confOverlayCount = 0;

function getConfProductImg(cat, colorKey) {
  if (!cat || cat === '') return '';
  const map = CONF_IMAGES[cat];
  if (!map) return '';
  return map[colorKey] || map['default'] || '';
}

function initConfigurator() {
  const catSelect = document.getElementById('conf-cat');
  const preview   = document.getElementById('conf-preview-container') || document.getElementById('conf-preview');
  if (!catSelect || !preview) return;

  catSelect.addEventListener('change', updateConfPreview);

  document.querySelectorAll('#conf-color-wrap .swatch').forEach(s => s.addEventListener('click', function() {
    document.querySelectorAll('#conf-color-wrap .swatch').forEach(sw => sw.classList.remove('sel'));
    this.classList.add('sel');
    updateConfPreview();
  }));

  updateConfPreview();
}

function updateConfPreview() {
  const catSelect = document.getElementById('conf-cat');
  const baseImg   = document.getElementById('conf-base-img');
  const placeholder = document.getElementById('conf-preview-placeholder');
  if (!catSelect || !baseImg) return;

  const cat = catSelect.value;
  const selectedSwatch = document.querySelector('#conf-color-wrap .swatch.sel');
  const colorHex = selectedSwatch?.dataset.color || '#ffffff';
  const colorKey = CONF_COLOR_MAP[colorHex] || 'default';

  const noPrev = ['Badge', 'Patch'];
  if (!cat || noPrev.includes(cat)) {
    baseImg.style.display = 'none';
    if (placeholder) placeholder.style.display = 'flex';
    return;
  }

  const imgPath = getConfProductImg(cat, colorKey);
  if (imgPath) {
    baseImg.src = imgPath;
    baseImg.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
  } else {
    baseImg.style.display = 'none';
    if (placeholder) placeholder.style.display = 'flex';
  }
}

function makeDraggable(el, container) {
  let dragging = false, ox = 0, oy = 0, elx = 0, ely = 0;

  function onDown(e) {
    if (e.target.classList.contains('overlay-delete')) return;
    e.preventDefault();
    document.querySelectorAll('.overlay-item').forEach(i => i.classList.remove('selected'));
    el.classList.add('selected');
    dragging = true;
    const pt = e.touches ? e.touches[0] : e;
    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    elx = eRect.left - cRect.left;
    ely = eRect.top  - cRect.top;
    ox  = pt.clientX;
    oy  = pt.clientY;
    el.style.left = elx + 'px';
    el.style.top  = ely + 'px';
    el.style.transform = 'none';
  }
  function onMove(e) {
    if (!dragging) return;
    const pt = e.touches ? e.touches[0] : e;
    el.style.left = (elx + pt.clientX - ox) + 'px';
    el.style.top  = (ely + pt.clientY - oy) + 'px';
  }
  function onUp() { dragging = false; }

  el.addEventListener('mousedown',  onDown);
  el.addEventListener('touchstart', onDown, { passive: false });
  document.addEventListener('mousemove',  onMove);
  document.addEventListener('touchmove',  onMove, { passive: false });
  document.addEventListener('mouseup',    onUp);
  document.addEventListener('touchend',   onUp);
}

function addTextOverlay(text) {
  if (!text.trim()) return;
  const container = document.getElementById('conf-overlay-container');
  if (!container) return;
  confOverlayCount++;
  const item = document.createElement('div');
  item.className = 'overlay-item';
  item.id = 'overlay-' + confOverlayCount;
  item.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);';
  item.innerHTML = `<span class="overlay-text-content" contenteditable="true">${text}</span><button class="overlay-delete" onclick="document.getElementById('overlay-${confOverlayCount}').remove()">✕</button>`;
  makeDraggable(item, container);
  container.appendChild(item);
}

function addImageOverlay(src) {
  const container = document.getElementById('conf-overlay-container');
  if (!container) return;
  confOverlayCount++;
  const id = 'overlay-' + confOverlayCount;
  const item = document.createElement('div');
  item.className = 'overlay-item';
  item.id = id;
  item.style.cssText = 'position:absolute;top:20%;left:50%;transform:translate(-50%,0);width:40%;';
  item.innerHTML = `<img src="${src}" class="overlay-image-content" style="width:100%;pointer-events:none"><button class="overlay-delete" onclick="document.getElementById('${id}').remove()">✕</button>`;
  makeDraggable(item, container);
  container.appendChild(item);
}

function initProductBlockEvents(block) {
  block.querySelectorAll('.conf-cat-select').forEach(sel => {
    sel.addEventListener('change', updateConfPreview);
  });

  block.querySelectorAll('.swatch').forEach(s => s.addEventListener('click', function() {
    block.querySelectorAll('.swatch').forEach(sw => sw.classList.remove('sel'));
    this.classList.add('sel');
    updateConfPreview();
  }));

  block.querySelectorAll('.file-drop').forEach(fd => {
    fd.addEventListener('click', () => {
      const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'image/*,.pdf'; inp.click();
      inp.onchange = () => {
        const file = inp.files[0];
        if (!file) return;
        fd.querySelector('p').textContent = file.name;
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = e => addImageOverlay(e.target.result);
          reader.readAsDataURL(file);
        }
      };
    });
    fd.addEventListener('dragover', e => { e.preventDefault(); fd.style.borderColor = 'var(--text)'; });
    fd.addEventListener('dragleave', () => { fd.style.borderColor = ''; });
    fd.addEventListener('drop', e => {
      e.preventDefault(); fd.style.borderColor = '';
      const file = e.dataTransfer.files[0];
      if (!file) return;
      fd.querySelector('p').textContent = file.name;
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = ev => addImageOverlay(ev.target.result);
        reader.readAsDataURL(file);
      }
    });
  });

  block.querySelectorAll('.conf-text-input').forEach(inp => {
    inp.addEventListener('input', () => {
      const existing = block.querySelector('.live-text-overlay');
      if (existing) existing.querySelector('.overlay-text-content').textContent = inp.value;
      else if (inp.value) {
        const container = document.getElementById('conf-overlay-container');
        if (!container) return;
        confOverlayCount++;
        const id = 'overlay-' + confOverlayCount;
        const item = document.createElement('div');
        item.className = 'overlay-item live-text-overlay';
        item.id = id;
        item.style.cssText = 'position:absolute;bottom:20%;left:50%;transform:translateX(-50%);';
        item.innerHTML = `<span class="overlay-text-content">${inp.value}</span><button class="overlay-delete" onclick="document.getElementById('${id}').remove();this.closest('.product-block')?.querySelector('.conf-text-input') && (document.querySelector('.conf-text-input').value='')">✕</button>`;
        makeDraggable(item, container);
        container.appendChild(item);
        block._liveOverlayId = id;
      }
    });

    block.querySelector('.conf-text-add')?.addEventListener('click', () => {
      const val = inp.value.trim();
      if (!val) return;
      const existing = block.querySelector('.live-text-overlay');
      if (existing) { existing.classList.remove('live-text-overlay'); block._liveOverlayId = null; }
      inp.value = '';
    });
  });

  block.querySelector('.conf-add-layer-btn')?.addEventListener('click', () => {
    const layersDiv = block.querySelector('.extra-layers');
    if (!layersDiv) return;
    const n = layersDiv.children.length + 1;
    const div = document.createElement('div');
    div.style.cssText = 'margin-top:12px;border-top:1px dashed var(--border);padding-top:12px';
    div.innerHTML = `
      <label class="form-label" style="font-size:12px">Ajout ${n}</label>
      <div class="form-row" style="grid-template-columns:1fr auto;gap:8px;margin-bottom:8px">
        <input class="form-input conf-text-input" type="text" placeholder="Texte supplémentaire…">
        <button type="button" class="conf-text-add btn btn-outline" style="padding:8px 12px;white-space:nowrap">+ Ajouter</button>
      </div>
      <div class="file-drop" style="padding:14px">
        <div class="file-drop-icon" style="font-size:20px">☁</div>
        <p style="font-size:13px">Glissez ou cliquez pour ajouter un visuel</p>
        <small>PNG, JPG (max 10 Mo)</small>
      </div>`;
    layersDiv.appendChild(div);
    initProductBlockEvents(div.parentElement);
  });
}

/* ---------- PRODUCT PAGE ---------- */
function initProductPage() {
  const mainImg   = document.querySelector('.gallery-main img');
  const thumbs    = document.querySelectorAll('.gallery-thumb');
  const sizeBtns  = document.querySelectorAll('.size-btn');
  const qtyInput  = document.querySelector('.qty-big span');
  const addBtn    = document.querySelector('#add-to-cart');
  let qty = 1;
  let selectedSize = '';

  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      thumbs.forEach(th => th.classList.remove('active'));
      t.classList.add('active');
      if (mainImg && t.dataset.src) mainImg.src = t.dataset.src;
    });
  });
  sizeBtns.forEach(b => {
    b.addEventListener('click', () => {
      sizeBtns.forEach(sb => sb.classList.remove('sel'));
      b.classList.add('sel');
      selectedSize = b.textContent.trim();
    });
  });
  document.querySelector('.qty-big .minus')?.addEventListener('click', () => {
    if (qty > 1) { qty--; if (qtyInput) qtyInput.textContent = qty; }
  });
  document.querySelector('.qty-big .plus')?.addEventListener('click', () => {
    qty++; if (qtyInput) qtyInput.textContent = qty;
  });
  addBtn?.addEventListener('click', () => {
    const pid = parseInt(addBtn.dataset.id);
    const product = PRODUCTS.find(p => p.id === pid);
    if (!product) return;
    if (sizeBtns.length > 0 && !selectedSize) { showToast('Veuillez choisir une taille'); return; }
    cart.add(product, qty, selectedSize);
    openCart();
  });
}

/* ---------- AUTH / PROFILE ---------- */
const auth = {
  get user() { return JSON.parse(localStorage.getItem('rcc_user') || 'null'); },
  save(u)   { localStorage.setItem('rcc_user', JSON.stringify(u)); },
  logout()  { localStorage.removeItem('rcc_user'); window.location.reload(); },

  login(email, password) {
    const users = JSON.parse(localStorage.getItem('rcc_users') || '[]');
    const u = users.find(u => u.email === email && u.password === password);
    if (!u) return false;
    this.save(u); return true;
  },

  register(nom, prenom, email, password) {
    const users = JSON.parse(localStorage.getItem('rcc_users') || '[]');
    if (users.find(u => u.email === email)) return false;
    const u = { id: Date.now(), nom, prenom, email, password, orders: [], quotes: [] };
    users.push(u);
    localStorage.setItem('rcc_users', JSON.stringify(users));
    this.save(u); return true;
  },

  updateProfileIcon() {
    const user = this.user;
    document.querySelectorAll('.profil-icon-btn').forEach(btn => {
      btn.title = user ? (user.prenom + ' ' + user.nom) : 'Mon compte';
    });
  }
};

/* ---------- BOUTIQUE RENDERING ---------- */
function productCardHtml(p) {
  const img = p.img
    ? `<img src="${p.img}" alt="${p.name.replace(/"/g,"'")}" loading="lazy" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;background:#f3f4f6;display:flex;align-items:center;justify-content:center;font-size:32px\\'>◆</div>'">`
    : `<div style="width:100%;height:100%;background:#f3f4f6;display:flex;align-items:center;justify-content:center;font-size:32px">◆</div>`;
  const price = p.price.toLocaleString('fr-FR', { minimumFractionDigits:2 });
  return `<a href="produit.html?id=${p.id}" class="product-card" data-artist="${p.artist}" data-cat="${p.cat}">
  <div class="product-thumb">${img}</div>
  <div class="product-info">
    <span class="product-artist">${p.artist}</span>
    <span class="product-name">${p.name}</span>
    <div class="product-foot"><span class="product-price">${price} €</span><span class="btn-voir">Voir</span></div>
  </div>
</a>`;
}

/* ---------- HOMEPAGE RENDERING ---------- */
function renderHomepage() {
  // Hero cards – 1 produit représentatif par artiste
  const heroEl = document.getElementById('hero-visual');
  if (heroEl) {
    const heroConfig = [
      { artist:'Celkilt',              href:'boutique-celkilt.html',        offset:false },
      { artist:'The Sidh',             href:'boutique-thesidh.html',        offset:true  },
      { artist:'The Fallen Birds',     href:'boutique-thefallenbids.html',  offset:false },
      { artist:'Roanne Blues Festival',href:'boutique-rouanneblues.html',   offset:true  },
    ];
    heroEl.innerHTML = heroConfig.map(cfg => {
      const p = PRODUCTS.find(x => x.artist === cfg.artist && x.img && (x.cat === 'T-shirt' || x.cat === 'Sweat-shirt' || x.cat === 'Casquette'));
      if (!p) return '';
      return `<a href="${cfg.href}" class="hero-card${cfg.offset ? ' offset' : ''}">
        <img src="${p.img}" alt="${p.name.replace(/"/g,"'")}" loading="lazy" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'">
        <span class="hero-card-badge">${p.name.length > 28 ? p.name.substring(0,28)+'…' : p.name} · ${p.price.toFixed(2)} €</span>
      </a>`;
    }).join('');
  }

  // Sélection – 8 produits variés (2 par artiste principal)
  const selEl = document.getElementById('home-selection');
  if (selEl) {
    const picks = [];
    ['Celkilt','The Sidh','The Fallen Birds','Frederick Arno','Roanne Blues Festival'].forEach(artist => {
      const ap = PRODUCTS.filter(p => p.artist === artist && p.img);
      // Préfère T-shirts et sweats visuellement attractifs
      const tshirts = ap.filter(p => p.cat === 'T-shirt' || p.cat === 'Sweat-shirt');
      const pool = tshirts.length >= 2 ? tshirts : ap;
      picks.push(...pool.slice(0, 2));
    });
    selEl.innerHTML = picks.slice(0, 8).map(productCardHtml).join('');
  }
}

function renderBoutique() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const artistFilter = grid.dataset.artist || 'all';
  const list = artistFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.artist === artistFilter);
  grid.innerHTML = list.map(productCardHtml).join('');
  const cnt = document.querySelector('.results-count');
  if (cnt) cnt.textContent = list.length + ' produit' + (list.length > 1 ? 's' : '');
}

/* ---------- PRODUCT DETAIL PAGE ---------- */
function initProductDetailPage() {
  const mainVisual = document.getElementById('main-visual');
  if (!mainVisual) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  if (!id) return;
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  document.title = p.name + ' – RC Créations';

  // Main image
  mainVisual.innerHTML = `<img src="${p.img}" alt="${p.name.replace(/"/g,"'")}" style="width:100%;height:100%;object-fit:contain" onerror="this.src='';this.parentElement.style.background='#f3f4f6'">`;

  // Breadcrumb artist link
  const artistLink = document.getElementById('detail-artist-link');
  if (artistLink) {
    const artistSlug = { 'Celkilt':'boutique-celkilt.html','The Sidh':'boutique-thesidh.html','The Fallen Birds':'boutique-thefallenbids.html','Roanne Blues Festival':'boutique-rouanneblues.html','Frederick Arno':'boutique-frederickearno.html' };
    artistLink.href = artistSlug[p.artist] || 'boutique.html';
    artistLink.textContent = p.artist;
  }
  const detailName = document.getElementById('detail-crumb-name');
  if (detailName) detailName.textContent = p.name;

  // Product info
  const artistTag = document.getElementById('detail-artist-tag');
  if (artistTag) artistTag.textContent = p.artist;
  const nameEl = document.getElementById('detail-name');
  if (nameEl) nameEl.textContent = p.name;
  const priceEl = document.getElementById('detail-price');
  if (priceEl) priceEl.textContent = p.price.toLocaleString('fr-FR', { minimumFractionDigits:2 }) + ' €';
  const descEl = document.getElementById('detail-desc');
  if (descEl) descEl.textContent = p.desc || '';
  const addBtn = document.getElementById('add-to-cart');
  if (addBtn) addBtn.dataset.id = p.id;

  // Related products (same artist, exclude current)
  const relatedGrid = document.getElementById('related-grid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(x => x.artist === p.artist && x.id !== p.id).slice(0, 4);
    relatedGrid.innerHTML = related.map(productCardHtml).join('');
  }
}

/* ---------- INIT ON LOAD ---------- */
document.addEventListener('DOMContentLoaded', () => {
  cart.update();
  auth.updateProfileIcon();

  document.querySelectorAll('.cart-toggle').forEach(btn => btn.addEventListener('click', openCart));
  document.querySelector('.overlay')?.addEventListener('click', closeCart);
  document.querySelectorAll('.search-toggle').forEach(btn => btn.addEventListener('click', openSearch));
  document.querySelector('.search-overlay')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeSearch(); closeCart(); } });

  renderHomepage();
  renderBoutique();
  initCarousel('.carousel-track');
  initFilters();
  initConfigurator();
  initProductDetailPage();
  initProductPage();

  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      const pid = parseInt(btn.dataset.addToCart);
      const product = PRODUCTS.find(p => p.id === pid);
      if (product) { cart.add(product, 1); }
    });
  });

  let blockCount = 1;
  document.querySelector('.add-product-btn')?.addEventListener('click', () => {
    blockCount++;
    const container = document.getElementById('product-blocks');
    if (!container) return;
    const block = document.createElement('div');
    block.className = 'product-block';
    block.id = 'block-' + blockCount;
    block.innerHTML = buildProductBlock(blockCount);
    container.appendChild(block);
    initProductBlockEvents(block);
  });

  document.querySelectorAll('.product-block').forEach(initProductBlockEvents);
  document.querySelector('#send-quote')?.addEventListener('click', handleQuoteSend);

  cart.renderPage();
  updateSummary();

  initAuthPage();
  initProfilPage();
});

function buildProductBlock(n) {
  const swatchColors = [
    { hex:'#ffffff', key:'blanc',      label:'Blanc',      border:true },
    { hex:'#111827', key:'noir',       label:'Noir'       },
    { hex:'#1e3a5f', key:'bleu',       label:'Marine'     },
    { hex:'#7f1d1d', key:'bordeaux',   label:'Bordeaux'   },
    { hex:'#1b4332', key:'vert',       label:'Vert forêt' },
    { hex:'#e5e7eb', key:'gris-clair', label:'Gris clair', border:true },
    { hex:'#374151', key:'gris-fonce', label:'Gris foncé' },
    { hex:'#ef4444', key:'rouge',      label:'Rouge'      },
    { hex:'#3b82f6', key:'bleu',       label:'Bleu'       },
  ];
  const swatchHtml = swatchColors.map(c =>
    `<div class="swatch" data-color="${c.hex}" style="background:${c.hex}${c.border ? ';border:1.5px solid #e5e7eb' : ''}" title="${c.label}"></div>`
  ).join('') + `<div class="swatch swatch-multi" data-color="autre" title="Autre couleur"></div>`;

  return `
  <div class="product-block-head">
    <span class="product-block-title">Produit ${n}</span>
    <span class="remove-block" onclick="removeBlock('block-${n}')">Supprimer ce produit</span>
  </div>
  <div class="section-divider">Produit</div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">Catégorie <span class="req">*</span></label>
      <select class="form-select conf-cat-select">
        <option value="">-- Sélectionnez --</option>
        <option>T-shirt</option><option>Sweat-shirt</option><option>Casquette</option>
        <option>Sac / Tote bag</option><option>Mug</option><option>Badge</option><option>Patch</option><option>Autre</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Couleur <span class="req">*</span></label>
      <div class="swatches">${swatchHtml}</div>
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">Quantité estimée <span class="req">*</span></label>
    <input class="form-input" type="number" min="1" placeholder="Exacte ou estimation">
  </div>
  <div class="section-divider">Personnalisation</div>
  <div class="form-group">
    <label class="form-label">Ajouter un texte</label>
    <div class="form-row" style="grid-template-columns:1fr auto;gap:8px">
      <input class="form-input conf-text-input" type="text" placeholder="Votre texte ici…">
      <button type="button" class="conf-text-add btn btn-outline" style="padding:8px 12px">Ajouter</button>
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">Ajouter un visuel</label>
    <div class="file-drop">
      <div class="file-drop-icon">☁</div>
      <p>Glissez votre fichier ici ou cliquez pour parcourir</p>
      <small>PNG, JPG, PDF (max 10 Mo)</small>
    </div>
  </div>
  <div class="extra-layers"></div>
  <div class="layer-controls">
    <button type="button" class="conf-add-layer-btn">
      <svg viewBox="0 0 24 24" width="14" height="14" style="stroke:currentColor;fill:none;stroke-width:2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      Ajouter texte / visuel
    </button>
  </div>
  <div class="form-group" style="margin-top:16px">
    <label class="form-label">Description du projet</label>
    <textarea class="form-textarea" placeholder="Décrivez votre projet, votre événement, vos besoins, votre deadline…" style="min-height:100px"></textarea>
  </div>`;
}

function removeBlock(id) {
  document.getElementById(id)?.remove();
}

function handleQuoteSend() {
  const required = document.querySelectorAll('[required]');
  let valid = true;
  required.forEach(f => {
    if (!f.value.trim()) { f.style.borderColor = '#ef4444'; valid = false; }
    else f.style.borderColor = '';
  });
  if (!valid) { showToast('Veuillez remplir tous les champs obligatoires'); return; }

  const user = auth.user;
  if (user) {
    const quote = {
      id: 'DEV-' + Date.now(),
      date: new Date().toLocaleDateString('fr-FR'),
      status: 'pending',
      desc: document.querySelector('.form-textarea')?.value || 'Demande de devis'
    };
    const users = JSON.parse(localStorage.getItem('rcc_users') || '[]');
    const idx = users.findIndex(u => u.id === user.id);
    if (idx !== -1) { users[idx].quotes = users[idx].quotes || []; users[idx].quotes.unshift(quote); localStorage.setItem('rcc_users', JSON.stringify(users)); auth.save(users[idx]); }
  }

  showToast('Demande de devis envoyée ! Nous vous répondons sous 24h ✉');
  document.querySelector('#config-form')?.reset();
  document.getElementById('conf-overlay-container') && (document.getElementById('conf-overlay-container').innerHTML = '');
  updateConfPreview();
}

/* ---------- AUTH PAGE ---------- */
function initAuthPage() {
  const authPage = document.getElementById('auth-page');
  if (!authPage) return;

  if (auth.user) { authPage.style.display = 'none'; document.getElementById('profil-content')?.classList.remove('hidden'); return; }

  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.form)?.classList.add('active');
    });
  });

  document.getElementById('btn-login')?.addEventListener('click', () => {
    const email = document.getElementById('login-email').value.trim();
    const pass  = document.getElementById('login-pass').value;
    if (!email || !pass) { showToast('Veuillez remplir tous les champs'); return; }
    if (auth.login(email, pass)) { window.location.reload(); }
    else showToast('Email ou mot de passe incorrect');
  });

  document.getElementById('btn-register')?.addEventListener('click', () => {
    const nom    = document.getElementById('reg-nom').value.trim();
    const prenom = document.getElementById('reg-prenom').value.trim();
    const email  = document.getElementById('reg-email').value.trim();
    const pass   = document.getElementById('reg-pass').value;
    const pass2  = document.getElementById('reg-pass2').value;
    if (!nom || !prenom || !email || !pass) { showToast('Veuillez remplir tous les champs obligatoires'); return; }
    if (pass !== pass2) { showToast('Les mots de passe ne correspondent pas'); return; }
    if (pass.length < 6) { showToast('Le mot de passe doit contenir au moins 6 caractères'); return; }
    if (auth.register(nom, prenom, email, pass)) { window.location.reload(); }
    else showToast('Cet email est déjà utilisé');
  });
}

/* ---------- PROFIL PAGE ---------- */
function initProfilPage() {
  const profilContent = document.getElementById('profil-content');
  if (!profilContent) return;
  const user = auth.user;
  if (!user) { profilContent.style.display = 'none'; document.getElementById('auth-page')?.classList.remove('hidden'); return; }

  profilContent.style.display = '';
  document.getElementById('auth-page') && (document.getElementById('auth-page').style.display = 'none');

  document.getElementById('profil-nom') && (document.getElementById('profil-nom').textContent = user.prenom + ' ' + user.nom);
  document.getElementById('profil-email') && (document.getElementById('profil-email').textContent = user.email);

  const quotes = user.quotes || [];
  const quotesEl = document.getElementById('profil-quotes');
  if (quotesEl) {
    if (!quotes.length) {
      quotesEl.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg><p>Aucune demande de personnalisation pour le moment.</p><a href="personnaliser.html" class="btn btn-primary" style="margin-top:16px">Faire une demande</a></div>`;
    } else {
      quotesEl.innerHTML = quotes.map(q => `
        <div class="profil-card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
            <div>
              <span style="font-size:13px;color:var(--text2)">${q.date}</span>
              <p style="font-size:14px;font-weight:600;margin-top:4px">${q.desc?.substring(0,80) || 'Demande de personnalisation'}${q.desc?.length > 80 ? '…' : ''}</p>
            </div>
            <span class="status-badge ${q.status === 'done' ? 'done' : q.status === 'sent' ? 'sent' : 'pending'}">${q.status === 'done' ? 'Traité' : q.status === 'sent' ? 'Envoyé' : 'En attente'}</span>
          </div>
          <p style="font-size:12px;color:var(--text3);margin-top:8px">Réf. ${q.id}</p>
        </div>`).join('');
    }
  }

  const cartItems = cart.items;
  const cartEl = document.getElementById('profil-cart');
  if (cartEl) {
    if (!cartItems.length) {
      cartEl.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2"/></svg><p>Votre panier est vide.</p><a href="boutique.html" class="btn btn-primary" style="margin-top:16px">Voir la boutique</a></div>`;
    } else {
      cartEl.innerHTML = `<div style="margin-bottom:16px">${cartItems.map(i => `<div class="profil-card" style="display:flex;gap:16px;align-items:center"><div style="width:56px;height:56px;border-radius:8px;overflow:hidden;background:#f3f4f6;flex-shrink:0">${cart._imgHtml(i)}</div><div style="flex:1"><p style="font-size:14px;font-weight:600">${i.name}</p><p style="font-size:12px;color:var(--text2)">${i.artist} · qté: ${i.qty}</p></div><p style="font-weight:700">${(i.price*i.qty).toFixed(2)} €</p></div>`).join('')}</div><a href="panier.html" class="btn btn-primary">Voir le panier complet</a>`;
    }
  }

  document.querySelectorAll('.profil-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.profil-nav-item').forEach(n => n.classList.remove('active'));
      document.querySelectorAll('.profil-tab').forEach(t => t.classList.remove('active'));
      item.classList.add('active');
      document.getElementById(item.dataset.tab)?.classList.add('active');
    });
  });

  document.getElementById('btn-logout')?.addEventListener('click', () => { auth.logout(); });
}
