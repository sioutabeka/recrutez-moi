# État du site — snapshot pour review

**Généré le 2026-09-24** — après passes #1, #2 et #3.

## Comment utiliser ce doc

- Chaque bloc = **ce qui est actuellement en ligne** sur http://localhost:5173
- `> blockquote` = **texte réel** affiché sur le site
- ✅ = décision validée par Essia
- 🟨 = à confirmer / question ouverte
- 🟥 = piste à retravailler / point faible identifié
- 📎 = information technique (chemin fichier, champ backend, etc.)

**Ton objectif review** : marque en marge ce qui doit changer, corrige les textes directement dans le doc, note les nouveaux `[À CONFIRMER]`. Je remonte tout dans la passe suivante.

---

## Décisions actées (référence rapide)

| # | Décision | Statut |
|---|---|---|
| 1 | Positionnement : "Marketing & Contenus" (axe principal), communauté + croissance = preuves | ✅ |
| 2 | 4 mots-clés portables : marque · contenu · communauté · croissance | ✅ |
| 3 | 3 postes visés : Responsable Marketing & Contenus / Head of Marketing / Growth & Community Manager senior | ✅ |
| 4 | Niveau revendiqué : confirmé / lead — middle management | ✅ |
| 5 | 7 ans d'expérience, partout | ✅ |
| 6 | Marques bannies : L'Oréal, MaxMara, Adobe, Klaviyo, Paula's Choice, Phe Phe, EP Jewels | ✅ |
| 7 | Un seul téléphone : `07 77 00 12 94` (affichage à confirmer) | ✅ |
| 8 | Email principal : essiabenkheder@gmail.com | ✅ |
| 9 | Ton : pro/friendly, direct, preuve avant l'adjectif, pas de superlatifs | ✅ |
| 10 | Freelance = ligne continue 2018→auj, structuré en OseCom 2026 | ✅ |
| 11 | Andros retiré des expériences (chevauchement KaliKado suspect) | 🟨 à trancher : client ou poste ? |
| 12 | Master 2 : "Marketing Digital & E-business" | ✅ |
| 13 | Portfolio 5 slots : LeGratin pilier + Nuxe/Pierre Fabre/Blissim placeholders + Bergamotte (agence) | ✅ |

---

# 🏠 PAGE HOME

## Top banner (haut de page, sur toutes les pages)

> **EN RECHERCHE ACTIVE · CDI MARKETING · DISPONIBLE IMMÉDIATEMENT**
>
> **PARIS · HYBRIDE / PRÉSENTIEL**

🟨 Formulation "HYBRIDE / PRÉSENTIEL" — préciser "2 à 3 jours sur site" ou laisser vague ?
📎 Fichier : `frontend/src/osecom/components/TopBanner.jsx`

---

## Nav (menu du haut)

- Home
- Parcours (`/about`)
- Expertises (`/services`)
- UGC (`/ugc`)
- Réalisations (`/portfolio`)

**CTA bouton** : `Me contacter` → `/contact`

🟨 Sur mobile, 5 items + burger. Un peu chargé. On peut en sortir ("UGC" par exemple, qui existerait toujours mais accessible par footer).
📎 Fichier : `frontend/src/osecom/components/Nav.jsx` + `config/site.js`

---

## Hero (H1)

**Meta (petit texte au-dessus du titre)** :

> HI · MOI C'EST ESSIA · MARKETING & CONTENUS
>
> · PARIS · EN RECHERCHE DE CDI

**Titre animé (MorphHeadline + WordRotator)** :

> Je transforme
>
> une marque en communauté,
>
> et une communauté en **[croissance / conversion / confiance / impact]**.

🟨 Le dernier mot tourne en boucle sur les 4 variantes. Note : impossible de faire tourner tes 4 mots-clés (marque · contenu · communauté · croissance) dans ce slot final car "contenu" est masculin et casse la grammaire. Tes 4 mots sont donc dans le **chip** juste en dessous.

**Sub (paragraphe sous le titre)** :

> 7 ans en marketing et communication, dont 3 comme Head of Marketing chez LeGratin.io — +20 000 utilisateurs acquis et activés en 1 an.
>
> Je construis des marques qui ont quelque chose à dire, et je mesure ce que ça change. Je produis aussi le contenu moi-même — stratégie, tournage, montage.

**CTAs** :
- 🟩 `Télécharger mon CV` (btn olive) → `/cv-essia-ben-kheder.pdf`
- ⬜ `Voir mon parcours` (btn ghost) → `/about`

**Chip décoratif** :

> marque · contenu · communauté · croissance

**Chip visuel image** (à droite du portrait) — inchangé (utilise `assets/essiahome.webp`)

🟨 Le CV PDF n'existe pas encore. Placeholder en attente sous `frontend/public/cv-essia-ben-kheder.pdf`.
📎 Fichier : `frontend/src/osecom/pages/HomePage.jsx`

---

## DualPromise (juste après le hero)

**Bloc gauche (barré)** :

> **"ON A TOUJOURS FAIT COMME ÇA"**
>
> Reproduire des habitudes.
>
> Beaucoup d'équipes se lancent sur un canal parce qu'elles l'ont toujours fait, sans redemander pourquoi. Résultat : de l'exécution, pas d'impact.

**Bloc droit (mis en valeur)** :

> **DATA + OBJECTIF = LEVIER**
>
> Choisir ce qui compte, **mesurer ce qui bouge**.
>
> Je pars des données et de l'objectif — jamais du canal par habitude. Le levier arrive à la fin, pas au début.

🟨 Question de fond : est-ce que cette dichotomie "eux vs moi" est encore alignée sur ta posture "pro/friendly, preuve avant l'adjectif" ? Elle peut sonner accusatoire.
📎 Fichier : `frontend/src/osecom/components/DualPromise.jsx`

---

## Signature (4 piliers)

**Titre bloc** :

> MES QUATRE TERRAINS
>
> Marketing & Contenus — je tiens les quatre bouts.
>
> Marque, contenu, communauté, croissance : quatre terrains que je pratique en parallèle depuis 7 ans, en agence, en plateforme et en freelance.

**Les 4 cartes** :

1. **Marque** — Ligne éditoriale, positionnement, ton. Je tiens la voix de plusieurs marques en parallèle sans les faire se ressembler.
2. **Contenu** — Production autonome — je conçois, j'écris, je tourne, je monte. Stratégie le matin, montage l'après-midi.
3. **Communauté** — Activation de créateurs, écosystèmes communautaires, influence. Ce qui fait qu'une audience s'engage, pas juste qu'elle scrolle.
4. **Croissance** — Acquisition, CRM, paid, mesure. +20 000 utilisateurs acquis et activés en 1 an chez LeGratin.io — funnels multicanaux et process automatisés.

**CTA** : `Me contacter` (btn olive) → `/contact`

🟨 La carte "Croissance" cite déjà "+20k" comme la carte du hero et la section About. Sur-répétition ou juste bon ancrage ?
📎 Fichier : `frontend/src/osecom/pages/HomePage.jsx` (const SIGNATURE_PILLARS)

---

## Trust (ceinture de brands accompagnées)

**Titre** : `MARQUES & ENTREPRISES ACCOMPAGNÉES`

**Liste actuelle** :

> LeGratin.io · Nuxe · Pierre Fabre · Blissim · Bonne Maman · L'Or Espresso · L'Arbre Vert · Fun Radio

🟨 Retirés volontairement : Axa, Macif, Matmut, Banque Populaire (Bergamotte) et FDJ (KaliKado) — droit de citation à valider pour clients d'agence.
🟨 Manque : logos réels (aujourd'hui juste des mots). Si tu veux des logos vectoriels, il faut me les fournir en SVG.
📎 Fichier : `frontend/src/osecom/config/site.js` (const BRANDS)

---

## PinnedServices (grand bloc animé scroll pinning · Desktop)

**Titre + intro implicites via les étapes** :

Les 4 étapes défilent en scroll (numéro + label + titre + texte + progress bar). Sur mobile → PinnedServicesMobile qui affiche les cartes empilées.

**Mobile eyebrow** :

> MES QUATRE TERRAINS
>
> Marque, contenu, communauté, croissance — je tiens les quatre bouts.

**Étape 01 · Marque**

> **Tenir la voix, poser le cap.**
> Positionnement, ligne éditoriale, ton. Je fais tenir une marque debout — sur une plateforme B2B comme sur un produit beauté ou food.

**Étape 02 · Contenu**

> **Produire soi-même, pas déléguer.**
> Stratégie éditoriale, tournage, montage, copy. Je passe du cadrage au montage sans changer de casquette — bootcamp full-stack en bonus pour le code.

**Étape 03 · Communauté**

> **Faire venir, faire rester, faire parler.**
> Activation de créateurs, écosystème communautaire, influence. Chez LeGratin.io : 20 000 freelances acquis et activés en un an via des funnels multicanaux.

**Étape 04 · Croissance**

> **Mesurer, itérer, scaler.**
> Acquisition, CRM, paid, growth ops. Je connecte la marque au business — et je lis les chiffres pour décider ce qui reste et ce qui saute.

**CTA final** : `Voir toutes mes expertises` → `/services`

🟨 Sur-répétition possible avec la section Signature juste au-dessus (mêmes 4 thématiques). Voir si on garde les deux ou si on fusionne.
📎 Fichiers : `frontend/src/osecom/components/PinnedServices.jsx` + `PinnedServicesMobile.jsx`

---

## ServicesOffer (bande "SERVICES I OFFER")

Grande liste flottante avec fleurs colorées entre chaque item. Affichée sur Home ET sur About.

**Titre** : `SERVICES I OFFER`

**Items** (fixes, code dans le composant) :

> Community Management · Social Media Strategy · UGC Content · Acquisition · Digital Strategy · Growth · & More

🟨 Décalé avec ta nouvelle nomenclature (Marque / Contenu / Communauté / Croissance). Anglais mixé français. À refondre.
🟨 Peut être supprimé si redondant avec Signature + PinnedServices.
📎 Fichier : `frontend/src/osecom/components/ServicesOffer.jsx`

---

## PortfolioStrip (3 teasers)

**Titre section** :

> RÉALISATIONS
>
> Mes réalisations

**3 cards** (chacune cliquable vers l'ancre correspondante dans `/portfolio`) :

1. **LeGratin.io — +20k utilisateurs** (cover = `about-hero.jpg`)
2. **Nuxe** (cover = `about-story.jpg`)
3. **Bergamotte — Secteur régulé** (cover = `epjewels-cover.jpg`)

🟨 Les covers sont des placeholders neutres. Vraie image par projet à fournir.
📎 Fichier : `frontend/src/osecom/components/PortfolioStrip.jsx`

---

# 👤 PAGE PARCOURS (`/about`)

## Hero About

**Meta** :

> HI, MOI C'EST ESSIA · MARKETING & CONTENUS

**Titre animé** :

> Je transforme
>
> une marque en communauté,
>
> et une communauté en **[croissance / conversion / confiance / impact]**.

🟨 Identique au H1 de Home. Sur-répétition intentionnelle ou on varie ?

**Sub** :

> Marque, contenu, communauté, croissance : les quatre bouts que je tiens en parallèle depuis 7 ans. Aujourd'hui en recherche d'un CDI à Paris pour ancrer cette expertise dans une vraie équipe.

**CTA** : `Télécharger mon CV` (btn olive)

**Chip visuel** : `meet essia · marketing & contenus`
**Photo** : `about-hero.jpg`

📎 Fichier : `frontend/src/osecom/pages/AboutPage.jsx` (fonction AboutHero)

---

## Bio longue (about-philo)

**Titre** : `Mon histoire.`

**Paragraphe 1 · D'où je viens** :

> **D'où je viens.** J'ai commencé en agence, du côté où l'on exécute : projets éditoriaux pour Axa, Macif, Matmut, Banque Populaire chez Bergamotte, puis développement commercial et campagnes de sampling chez KaliKado pour L'Arbre Vert, L'Or Espresso, la FDJ. J'ai appris là ce qu'un client attend vraiment : pas une idée brillante, une idée qui sort dans les temps et qui produit un chiffre.

**Paragraphe 2 · Ce que j'ai construit** :

> **Ce que j'ai construit.** Chez LeGratin.io, plateforme de freelances, je suis passée de l'exécution à la construction. Head of Marketing, membre du CODIR, j'ai piloté la stratégie d'acquisition et de conversion de bout en bout : SEO, contenu, outbound, automatisation LinkedIn, webinars, newsletters, écosystème communautaire. Résultat : plus de 20 000 freelances acquis et activés en un an, avec des process automatisés et scalables. C'est là que j'ai compris que la marque et la croissance ne sont pas deux métiers.

**Paragraphe 3 · Où je vais** :

> **Où je vais.** J'ai passé un an à apprendre à coder — bootcamp full-stack JavaScript — non pas pour devenir développeuse, mais pour arrêter de dépendre de quelqu'un d'autre pour faire exister une idée. Aujourd'hui je conçois des sites, j'automatise des process, je construis des agents IA, et je monte mes vidéos moi-même. Je cherche une équipe où la personne qui pense la marque est aussi celle qui a les mains dans le cambouis.

🟩 Ces 3 paragraphes sont TA proposition brief V1 reprise mot pour mot.
📎 Fichier : `frontend/src/osecom/pages/AboutPage.jsx` (section about-philo)

---

## FACTS (liste de 6 lignes chiffrées)

1. **BASÉE À PARIS 🇫🇷** · CDI · Disponible immédiatement
2. **MARKETING & CONTENUS ✨** · De la stratégie au montage
3. **7 ANS D'EXPÉRIENCE 💼** · Agence, plateforme, freelance en parallèle
4. **+20 000 UTILISATEURS ACQUIS 🚀** · En 1 an chez LeGratin.io · Membre du CODIR
5. **FR · EN · AR 🌍** · Trilingue (C2 · C1 · C1)
6. **12,8K ABONNÉS LINKEDIN 💬** · Prise de parole et communauté active

🟨 Manquant idéal : un chiffre 2ᵉ compagnon au +20k. Piste : budget paid max géré, nb marques accompagnées, volume contenu produit.
📎 Fichier : `AboutPage.jsx` (const FACTS)

---

## EXPERIENCES (chronologie complète)

**Titre section** :

> **Expériences.**
> Un parcours entre agence, start-up et freelance — trois univers qui m'ont formée à faire beaucoup, vite et avec exigence.

**Les 6 cartes** :

**1. 2018 → Aujourd'hui — Consultante · Founder & Creative Director · Freelance / OseCom (2026) · Paris**
> Une ligne freelance continue depuis 2018, structurée en société sous OseCom en 2026. Clients : Nuxe, Pierre Fabre, Blissim, L'Or Espresso, L'Arbre Vert, Fun Radio, Capsul, Maison Farida. Missions : stratégie social media & contenu, UGC et short-form, influence, Social Ads (Meta, TikTok), growth & performance. Cheffe de projet sur shootings et tournages.

**2. 2021 — 2024 — Head of Marketing & Growth · Membre du CODIR · LeGratin.io · Paris**
> Prise en charge complète du marketing d'une plateforme tech de mise en relation avec des freelances. Résultat clé : +20 000 freelances acquis et activés en 1 an, via funnels multicanaux (SEO, content, outbound, automatisation LinkedIn, webinars, newsletters, Slack) et process growth automatisés. Construction de la marque, de l'écosystème communautaire et des partenariats stratégiques B2B.

**3. 2019 — 2021 — Cheffe de projet & Business Developer · Agence KaliKado · Paris**
> Stratégie commerciale B2B de la prospection au closing (CRM, ciblage décideurs), campagnes de sampling, présentations clients, bilans de campagne, identité de marque, réseaux sociaux. Clients : L'Arbre Vert, L'Or Espresso, FDJ.

**4. 2018 — 2019 — Cheffe de projet Digital · Agence Bergamotte · Paris**
> Pilotage de projets éditoriaux digitaux de A à Z : cadrage, planning, coordination d'équipes internes et externes, budgets, qualité. Contenus SEO, newsletters, scripts vidéo, benchmarks, recommandations. Clients : Axa, Macif, Matmut, Banque Populaire — mon pont vers le secteur régulé.

**5. 2017 — 2018 — Chargée de communication & développement · EduSup · Paris**
> Stratégie de communication globale et digitale, contenus multi-formats, visibilité en ligne, suivi de performance, relations presse, publicité, organisation d'événements.

**6. 2015 — 2017 — Premiers pas · Community Manager · Planning stratégique · Univ. Nice Sophia Antipolis · Groupe Nice-Matin · Nice**
> Le terrain qui a tout lancé — community management à l'université, puis planning stratégique dans la régie du groupe Nice-Matin (analyse, veille médias, data, coordination de projets).

🟨 Andros retiré (chevauchement 2019-2020 avec KaliKado). Si Andros = client de KaliKado, à mentionner dans la description KaliKado. Si Andros = vrai poste distinct, à réintégrer.
🟨 Trous chrono : janv→sept 2021 et sept 2024→nov 2025. Non abordés. À expliquer avec la version "bootcamp GOMYCODE + lancement OseCom" si c'est la vraie.
📎 Fichier : `AboutPage.jsx` (const EXPERIENCES)

---

## EDUCATION (6 lignes)

**Titre section** :

> **Formation.**
> De la communication aux médias, du marketing digital au dev — chaque étape m'a donné une nouvelle façon de lire le métier.

**Les 6 cartes** :

1. **2024 — 2025 · Bootcamp Développeur Full Stack JavaScript · GOMYCODE**
   > Stack MERN (React, Node.js, MongoDB, SQL). Une double casquette marketing/tech pour dialoguer avec les équipes produit et dev.
2. **2018 — 2019 · Master 2 Marketing Digital & E-business · ESG Paris**
   > Stratégie digitale, SEO/SEA, e-commerce, data & automation, UX/UI, gestion de projet.
3. **2017 — 2018 · Master 1 Communication 360° · European Communication School · Toulouse**
   > Communication intégrée — un socle qui structure ma façon d'articuler stratégie et exécution.
4. **2014 — 2017 · Licence Information-Communication · Université Côte d'Azur · Nice**
   > Parcours Organisations & stratégies numériques. Fondamentaux : communication, art, anthropologie, web.
5. **2013 — 2014 · Anglais général · Kaplan International Languages · Londres**
   > Année anglophone pour ancrer un niveau opérationnel.
6. **2012 — 2013 · Baccalauréat Scientifique · Lycée Pierre Mendès France · Tunis**
   > Filière scientifique. Point de départ.

🟨 Aucune certif (Meta Blueprint, Google Ads/Analytics, HubSpot). Facile à combler et différenciant. Section vide pour l'instant.
📎 Fichier : `AboutPage.jsx` (const EDUCATION)

---

## PILLARS (Ma méthode)

**Titre section** :

> **Ma méthode.**
> Trois principes qui structurent la façon dont je prends une mission.

**Les 3 cartes** :

1. **01 · Partir des données**
   > Les données parlent. C'est ma première étape sur toute mission, avant même de discuter d'idées.
2. **02 · Partir de l'objectif**
   > Pas du canal. Je commence par le problème et le résultat visé, pas par le tool ou la plateforme.
3. **03 · Sortir des routines**
   > Je déteste "on fait comme ça parce qu'on a toujours fait comme ça". Le levier pertinent, on le choisit — on ne l'hérite pas.

🟨 Ces 3 principes dupliquent partiellement la DualPromise sur Home. À conserver comme couche plus fine ou fusionner ?
📎 Fichier : `AboutPage.jsx` (const PILLARS)

---

## CTA final About

**Titre** : `Un poste à me proposer ?`
**CTA** : `Télécharger mon CV` (btn olive)

---

# 🎯 PAGE EXPERTISES (`/services`)

## Hero Services

**Meta** : `MES EXPERTISES · MARKETING 360`

⚠️ **Encore "MARKETING 360" ici** — à harmoniser en "MARKETING & CONTENUS".

**Titre animé** :

> Un profil taillé pour
>
> **[croissance / audience / engagement / ventes]**
>
> sur les réseaux sociaux.

🟨 Formulation "un profil taillé pour" + focalisation "réseaux sociaux" est datée vs ta nouvelle posture 360 (marque/contenu/communauté/croissance).

**Description** :

> Cinq domaines pratiqués en agence, start-up et freelance. **Un profil transversal** qui pense stratégie ET met les mains dedans — avec l'envie d'approfondir l'acquisition et les campagnes social ads.

**Note en bas** : `Vue d'ensemble — le détail est dans le portfolio.`
**CTA** : `Me contacter` (btn rose)

📎 Fichier : `frontend/src/osecom/pages/ServicesPage.jsx`

---

## Les 5 fiches (SERVICES data)

Chaque fiche a : tag, titre, titre EN, tone couleur, copy, symptoms, delivers, duration/rythm/format, intro, problem/solution/offer/results/finalCta.

**⚠️ IMPORTANT** : cette page est **encore très "vends-toi à un client"**. Elle n'a pas été refondue pour la posture recruteur. Voici les 5 titres + résumés actuels :

1. **Strategy** (rose cream) — "Post more… won't fix your problem." — Pour les marques qui postent déjà, mais sans ligne claire.
2. **Community Management** (sky) — "Your brand deserves more than random posts." — Pour les marques qui veulent une présence régulière.
3. **UGC** (rose) — "Make your brand stay in their mind." — Pour les marques qui veulent du contenu incarné.
4. **Acquisition** (yellow) — "Being visible is not the goal. Getting clients is." — Pour les marques qui ont du contenu mais peu de demandes.
5. **Growth** (olive) — "Grow your brand through content. For real." — Pour les marques qui veulent une vision globale.

🟥 **Chantier majeur pour passe #4** : réécrire ces 5 fiches à la 1ʳᵉ personne, sur le mode "compétence pratiquée / réalisations / outils maîtrisés / envie de progresser". Ne rien supprimer, tout réécrire.

📎 Fichier : `frontend/src/osecom/data/services.js` + `pages/ServiceDetailPage.jsx`

---

## Foot Services

**Card en bas** :
> **UN PROFIL POLYVALENT ?**
> Vous cherchez quelqu'un qui pense stratégie ET met les mains dedans ?
> C'est exactement le profil que je cultive depuis 5 ans. Discutons de votre poste et voyons si mon parcours colle à vos enjeux.
> `Me contacter`

🟥 "**5 ans**" — incohérent avec le "7 ans" décidé. À corriger.

---

# 📁 PAGE RÉALISATIONS (`/portfolio`)

## Hero Portfolio

**Meta** : `RÉALISATIONS · CASE STUDIES`

**Titre** :

> Cinq projets qui racontent
>
> ma façon de bosser.

**Sub** :

> LeGratin.io en pilier (mission in-house, +20 000 utilisateurs acquis en 1 an), et quatre projets qui montrent le reste du spectre : freelance, agence, B2B régulé, beauté, plateforme. Chaque case répond à la même question : quelle preuve j'apporte ici ?

**Chips ancres** : `LeGratin.io · Nuxe · Pierre Fabre · Blissim · Bergamotte — Axa, Macif, Matmut, Banque Populaire`

---

## Les 5 case studies

**1. LeGratin.io** — `IN-HOUSE · GROWTH & CONTENU · 2021-2024`
> Head of Marketing & Growth, membre du CODIR. J'ai piloté la stratégie d'acquisition et de conversion de bout en bout : SEO, contenu, outbound, automatisation LinkedIn, webinars, newsletters, écosystème communautaire. Résultat : +20 000 freelances acquis et activés en 1 an, via funnels multicanaux et process growth automatisés. C'est là que j'ai compris que la marque et la croissance ne sont pas deux métiers.

**2. Nuxe** — `FREELANCE · SOCIAL ADS & UGC — À DOCUMENTER`
> Mission freelance récente sur du social media, du contenu UGC et des Social Ads. Détails, chiffres et visuels à venir — case study en cours de préparation.

**3. Pierre Fabre** — `FREELANCE · STRATÉGIE & CONTENU — À DOCUMENTER`
> Accompagnement stratégie digitale et contenu. Détails, périmètre et visuels à venir — case study en cours de préparation.

**4. Blissim** — `FREELANCE · CONTENU & INFLUENCE — À DOCUMENTER`
> Mission freelance sur du contenu social et de l'activation influence. Détails, chiffres et visuels à venir — case study en cours de préparation.

**5. Bergamotte — Axa, Macif, Matmut, Banque Populaire** — `AGENCE · SECTEUR RÉGULÉ · 2018-2019`
> Cheffe de projet Digital chez Bergamotte : pilotage de projets éditoriaux de A à Z pour des acteurs du secteur bancaire et assurantiel. Cadrage, planning, coordination des équipes internes et externes, contenus SEO, newsletters, scripts vidéo, benchmarks. Le seul pont vers le secteur régulé du portfolio.

🟨 Chaque case affiche 6 tuiles avec le même visuel dupliqué (placeholder). Pour un vrai portfolio, il faut 3-6 visuels **différents** par projet.
🟥 Les 3 case studies "À DOCUMENTER" utilisent aujourd'hui les vieux jpg (Phe Phe / MaxMara / EP Jewels) comme covers neutres. **Visuellement, ça reste bizarre.** Deux options : (a) tu me donnes de vrais visuels, (b) on remplace par un composant Placeholder abstrait coloré (les fichiers Phe Phe/MaxMara/EP jpg peuvent alors être supprimés du dossier `assets/`).

📎 Fichier : `frontend/src/osecom/data/portfolio.js`

---

## Foot Portfolio

**Card en bas** :
> **CE PROFIL VOUS PARLE ?**
> Discutons de votre poste.
> `Me contacter` (btn rose)

---

# 🎥 PAGE UGC (`/ugc`)

## Hero UGC

**Meta** : `CONTENU · CRÉATION · INFLUENCE`

**Titre animé** :

> Content
>
> & **[Influencing / Storytelling / Creating / Engaging]**.

**Sub** :

> Un aperçu de mon travail créatif : contenus, storytelling, design. Une facette du profil — utile pour comprendre comment je pense l'esthétique et l'attention.

**Pills réseaux** : Instagram, TikTok, YouTube (liens en dur vers `@osecom` — 🟨 tous les comptes existent-ils vraiment ?)

**Visuels** : 2 phones avec `instagram-screen.webp` (placeholder)

📎 Fichier : `frontend/src/osecom/pages/UGCPage.jsx`

---

## Sections portfolio (3 blocs)

Chaque bloc = pill couleur + titre + description + 5 tuiles Placeholder colorées.

**Bloc 1 · Beauté & Mode** — `PORTFOLIO CONTENU`
**Bloc 2 · Design graphique** — `PORTFOLIO CRÉATIF`
**Bloc 3 · Collaborations de marque** — `PORTFOLIO COLLABORATIONS`

🟥 **Les 15 tuiles sont des placeholders vides** (labels génériques "beauty 01", "design 03"…). Sans vrais visuels, cette page dessert plus qu'elle ne sert.
🟨 Trois options : (a) tu me fournis 15 vrais assets, (b) on réduit à 3-5 vrais visuels, (c) on masque temporairement la page (retirer du footer, laisser la route).

---

## CollabCta (foot UGC)

> **TRAVAILLONS ENSEMBLE**
> Vous cherchez un profil créatif qui pense contenu, marque et performance en même temps ?
> `Me contacter`

---

# 📬 PAGE CONTACT (`/contact`)

## Panneau gauche (ContactInfo)

> **CALLONS-NOUS · 30 MIN**
>
> **Discutons de votre poste.**
>
> Un appel de 30 minutes pour comprendre vos enjeux et voir si mon parcours colle à ce que vous cherchez.
>
> **FORMAT** · Visio · Google Meet · Téléphone
> **DURÉE** · 30 minutes
> **DISPONIBILITÉ** · Immédiate · CDI
> **POUR** · RH, hiring managers, recruteurs, fondateurs
>
> **OU DIRECTEMENT**
> essiabenkheder@gmail.com

🟨 Téléphone `07 77 00 12 94` : à afficher ici oui/non ?
📎 Fichier : `frontend/src/osecom/pages/ContactPage.jsx`

---

## Formulaire (3 étapes)

**Étape 01 · Date** — calendrier + créneaux (10:00, 11:30, 14:00, 15:30, 17:00)
🟥 Ce calendrier est un pattern "booking freelance / agence". Pour un CDI, la moitié des recruteurs préfèrent juste envoyer un message. Deux options : (a) supprimer l'étape date, (b) ajouter une option "envoi direct sans booking".

**Étape 02 · Détails** — champs :
- NOM * (input)
- EMAIL * (input)
- ENTREPRISE (input)
- SITE / LINKEDIN (input) — placeholder : `https://linkedin.com/company/...`
- **TYPE DE POSTE *** (chips) :
  - CDI Marketing / Growth
  - CDI Social Media / Content
  - CDI Communication / Brand
  - Mission freelance
  - Autre échange (RH, coffee, etc.)
- **TYPE D'ENTREPRISE** (chips) :
  - Startup / Early-stage
  - Scale-up
  - PME · ETI
  - Grand groupe
  - Agence
- **DÉCRIVEZ LE POSTE / VOTRE BESOIN *** (textarea)

🟨 Les options TYPE DE POSTE utilisent l'ancienne nomenclature (Growth / Social Media / Communication). À aligner avec les 3 postes visés : "Responsable Marketing & Contenus" / "Head of Marketing" / "Growth & Community Manager senior".

**Étape 03 · Confirmation** — message envoyé.

📎 Backend : POST `/api/contact` (fichier `backend/src/controllers/contact.controller.js`) — champs immuables : `name`, `email`, `businessName`, `website`, `budget`, `service`, `date`, `project`.

---

# 🦶 FOOTER (bas de toutes les pages)

**Section "FOLLOW ALONG"** :
> Restons connectés.

3 cards socials (3 premiers de la config) :
1. **LinkedIn** — `in/essiabenkheder`
2. **Instagram** — `@osecom`
3. **Email** — `essiabenkheder@gmail.com`

**Bloc central** : logo OseCom (via `logo-osecom.png`)

**Colonnes** :

**EXPERTISES** :
- Stratégie & Brand → `/services/strategy`
- Social Media & CM → `/services/cm`
- Contenu & UGC → `/ugc`
- Acquisition & Growth → `/services/acquisition`

**EXPLORER** :
- Parcours → `/about`
- Réalisations → `/portfolio`
- Contenu & UGC → `/ugc`
- Me contacter → `/contact`

**Bas** :
`© 2026 ESSIA BEN KHEDER · MARKETING & CONTENUS · PARIS · EN RECHERCHE DE CDI`

**Legal** : Mentions légales · Confidentialité · CGU · Cookies

🟨 Logo `logo-osecom.png` affiché en gros au milieu. Question : garde-t-on la marque OseCom en signature ou on la retire ?
🟨 Colonne EXPERTISES pointe vers des routes `/services/strategy` etc. Les slugs existent (SERVICES data) mais les libellés (Stratégie & Brand, etc.) ne matchent plus l'appellation Marque/Contenu/Communauté/Croissance.
📎 Fichiers : `frontend/src/osecom/components/Footer.jsx` + `config/site.js`

---

# 🧹 Éléments non affichés (retirés ou latents)

- **`/blog` Articles** : retiré du nav et du footer. Route et fichier `BlogPage.jsx` intacts (accessible en direct via URL).
- **Ancienne liste BRANDS** (L'Oréal, MaxMara, Adobe, Klaviyo, Paula's Choice, Station F) : retirée.
- **Téléphone** : non affiché sur le site.
- **Photo pro** : celles actuellement utilisées sont `essiahome.webp` (hero Home) et `about-hero.jpg` (About). Tu m'as pas confirmé si ces images sont OK ou si tu vas en fournir de nouvelles.
- **Assets vieux portfolio** (`phephe-cover.jpg`, `maxmara-cover.jpg`, `epjewels-cover.jpg`) : encore présents dans `assets/` mais réutilisés en placeholders pour les case studies "à documenter". À supprimer si on abandonne les marques associées.

---

# 🚦 Points ouverts par priorité

## 🟥 Bloquants — à traiter avant publication publique

1. **Réécrire services.js (5 fiches)** — encore "vends-toi à un client"
2. **"5 ans" → "7 ans"** dans le ServicesFoot
3. **Meta ServicesPage** : "MARKETING 360" → "MARKETING & CONTENUS"
4. **Portfolio visuels réels** : Nuxe, Pierre Fabre, Blissim (au moins 2-3 visuels par projet)
5. **CV PDF réel** à déposer dans `frontend/public/cv-essia-ben-kheder.pdf`
6. **Décision UGC** : garder / réduire / masquer (les 15 placeholders sont un point faible visuel)
7. **Décision Contact form** : calendrier de RDV ou juste message direct ?

## 🟨 Bloquants crédibilité — infos manquantes de ton brief V1

8. **Budget paid max géré** (à insérer dans FACTS)
9. **Outils emailing/CRM maîtrisés** (Klaviyo/Brevo/HubSpot ?)
10. **Outils social listening / programmation** (Later/Metricool/Sprout ?)
11. **Management** : nombre de personnes encadrées + durée
12. **2-3 résultats chiffrés freelance** (Nuxe prioritaire)
13. **Andros** : client de KaliKado ou vrai poste séparé ?
14. **LeGratin** : taille équipe encadrée, budget, lien avec Station F
15. **Trous chronologie** : janv→sept 2021, sept 2024→nov 2025

## 🟨 Ton & positionnement — à écrire par Essia

16. **B.3 "why"** — vrai, pas version d'entretien
17. **A.3** — 3 conditions non-négociables OUI
18. **A.4** — 3 deal-breakers NON
19. **B.6** — 2-4 recommandations LinkedIn citables (nom + poste)
20. **B.8** — talon d'Achille assumé
21. **J** — 2-3 anecdotes (moment fondateur / erreur / projet fierté)

## 🟨 Décisions ouvertes

22. **Signature OseCom** — garde-t-on visible (logo footer, "Founder & Creative Director" dans EXPERIENCES) ou on retire ?
23. **Bordeaux** — Paris only strict, ou une des offres ciblées en province élargit le périmètre ?
24. **Finance / gestion de patrimoine** — passe ou pas ?
25. **Téléphone `07 77 00 12 94`** — affiché sur `/contact` ou pas ?
26. **Adresse email pro** — `essiabenkheder@gmail.com` vs `essia@osecom...` ? Elle a dit "plus crédible si OseCom reste visible".

## 🟨 Assets à fournir

27. Photo pro hero (portrait 4/5)
28. Photo pro about (plus lifestyle)
29. CV PDF unifié (nom exact : `cv-essia-ben-kheder.pdf`)
30. 2-6 visuels réels par case study portfolio (5 projets)
31. Logo OseCom en SVG si conservé
32. Screenshots réels de campagnes pour UGC

## 🟨 Idées d'ajout (optionnel)

33. Section "Beyond marketing" : dev, montage, expo photo, e-commerce 2020, IA, running
34. Section "Culture perso" : marques admirées, refs créatives, hot takes marketing
35. Section "Ce que je veux apprendre" : SEA / management / attribution data
36. Certifs à ajouter (Meta Blueprint, Google Ads, HubSpot — vite obtenables)

---

# 🎯 Ma proposition d'ordre pour la passe #4

Si tu me donnes le feu vert, je propose de traiter dans cet ordre :

1. **Réécrire les 5 fiches services.js** (le plus gros chantier, cœur du site)
2. **Corriger ServicesPage** (5 ans → 7 ans, Marketing 360 → Marketing & Contenus)
3. **Réaligner Footer EXPERTISES** avec la nomenclature Marque/Contenu/Communauté/Croissance
4. **Remplacer les options CONTACT** (Type de poste) avec les 3 vrais postes visés
5. **Décision UGC** en fonction de ta réponse

Le reste attend tes réponses aux points 8-32.
