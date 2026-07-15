/* ==========================================================================
   Riley Ragains Portfolio Javascript Registry & Core Controllers
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Portfolio Artwork Registry Data
   -------------------------------------------------------------------------- */
const ARTWORK_REGISTRY = {
  "beetle-brews": {
    title: "Beetle Brews",
    category: "Design",
    description: `
      <p>Beetle Brews is a small coffee truck inspired by the coffee beetle’s love for java beans. The logo features a beetle illustration with the wings mimicking the shape of a coffee bean and "Beetle Brews" hand-lettered beneath.</p>
      <p>Each menu item is named for a beetle species native to Alabama and is set up in a three-row style.</p>
    `,
    metadata: {
      "Client": "Conceptual Brand Concept",
      "Medium": "Illustrator, Photoshop, Hand-Lettering",
      "Features": "Logo, Uniforms, Food Truck Wrap, Menus, Packaging",
      "Year": "2023"
    },
    images: [
      "sources/Design/Beetle Brew/Food Truck Mock-Up.jpg",
      "sources/Design/Beetle Brew/Beetle Brews logo.jpg",
      "sources/Design/Beetle Brew/BB Uniform.jpg",
      "sources/Design/Beetle Brew/Instagram Post Mockup 2023.jpg",
      "sources/Design/Beetle Brew/Menu and to go.jpg",
      "sources/Design/Beetle Brew/T Shirt Front.jpg",
      "sources/Design/Beetle Brew/T Shirt Back.jpg"
    ]
  },
  "poseidons-pearls": {
    title: "Poseidon’s Pearls",
    category: "Design",
    description: `
      <p>This is a pearl based jewelry brand influenced by the Greek god Poseidon.</p>
      <p>The logo is a modified type of “Poseidon” with the curve of the “d” meeting the tittle of the “i” in a pearl design. "Precious Pearls" is in a smaller, less script font tucked underneath “Poseidon”. The brand features a pearl and clam shell pattern and a simple jewelry box design.</p>
    `,
    metadata: {
      "Client": "Conceptual Brand Concept",
      "Medium": "Typography Design, Vector Illustration, Packaging Mockups",
      "Components": "Logo Mark, Clam Shell Pattern, Retail Box Layout",
      "Year": "2024"
    },
    images: [
      "sources/Design/Poseidon_s Pearls/PPP Mockup 1.jpg",
      "sources/Design/Poseidon_s Pearls/Posedion_s Pearls Logo.jpg",
      "sources/Design/Poseidon_s Pearls/PPP Mockup 2.jpg",
      "sources/Design/Poseidon_s Pearls/Posedion_s Pearls Logo (transparent).png"
    ]
  },
  "thible": {
    title: "Thible",
    category: "Design",
    description: `
      <p>French balloonist Élisabeth Thible was the first woman to fly, and sing, untethered. This airline takes its inspiration from her.</p>
      <p>The logo is typographic with the name typed out in meno and the tittle of the “I” is a star. The planes and uniforms are designed in their brand colors with the icon showing on the plane’s tail.</p>
    `,
    metadata: {
      "Client": "Conceptual Aviation Branding",
      "Medium": "Brand Identity Design, Aircraft Mockup, Editorial Layout",
      "Features": "Ticket UI, Uniform Concepts, Aircraft Livery, Ad Collateral",
      "Year": "2024"
    },
    images: [
      "sources/Design/Thible/thible bag tag.jpg",
      "sources/Design/Thible/ad.jpg",
      "sources/Design/Thible/Thible Mobile Ticket.jpg",
      "sources/Design/Thible/uniforms.jpg"
    ]
  },
  "thirteen-ways": {
    title: "Thirteen Ways",
    category: "Design",
    description: `
      <p>According to Michael Bierut, there are 13 reasons to pick a typeface. This book has all 13 reasons with a font to match the explanation. Bierut goes into extensive detail about each reason.</p>
      <p>The colors are true CMYK to mimic an overprint design to celebrate traditional print press aesthetics.</p>
    `,
    metadata: {
      "Medium": "Book Design, Typographic Editorial, Overprint CMYK Style",
      "Author Source": "Michael Bierut Essay Integration",
      "Pages Included": "15 Spreads",
      "Year": "2023",
      "pdf_link": "sources/Design/13 Ways/13 Ways to Look at a Typeface.pdf",
      "pdf_title": "13 Ways to Look at a Typeface.pdf"
    },
    images: [
      "sources/Design/13 Ways/13waysmockup2.jpg",
      "sources/Design/13 Ways/13reasonsmockup3jpg.jpg",
      "sources/Design/13 Ways/13reasonmockup4.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface2.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface3.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface4.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface5.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface6.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface7.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface8.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface9.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface10.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface11.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface12.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface14.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface15.jpg",
      "sources/Design/13 Ways/13 Ways to Look at a Typeface16.jpg"
    ]
  },
  "dishware": {
    title: "Dishware",
    category: "Ceramics",
    description: `
      <p>A mix of wheel thrown and hand-built dishware, ranging from bowls to a teapot and mostly fired at cone 6.</p>
      <p>This series experiments with reactive glazes, texture overlays, and organic forms suitable for both tabletop utility and artistic exhibition.</p>
    `,
    metadata: {
      "Process": "Wheel-thrown & hand-built custom clay bodies",
      "Glaze Type": "Cone 6 Oxidation Fired Reactive Glazes",
      "Pieces": "Bowls, cups, teacups, teapot, pitchers",
      "Year": "2024 - 2025"
    },
    images: [
      "sources/Ceramics/Dishware/Blueberry Cup.jpg",
      "sources/Ceramics/Dishware/Eye Cup 01.jpg",
      "sources/Ceramics/Dishware/teapot01.jpg",
      "sources/Ceramics/Dishware/teapot02.jpg",
      "sources/Ceramics/Dishware/teapot03.jpg",
      "sources/Ceramics/Dishware/teacup01.jpg",
      "sources/Ceramics/Dishware/teacup02.jpg",
      "sources/Ceramics/Dishware/Pitcher01.jpg",
      "sources/Ceramics/Dishware/Pitcher02.jpg",
      "sources/Ceramics/Dishware/Pitcher03.jpg",
      "sources/Ceramics/Dishware/Pitcher04.jpg",
      "sources/Ceramics/Dishware/bluebowl01.jpg",
      "sources/Ceramics/Dishware/bluebowl02.jpg",
      "sources/Ceramics/Dishware/bluebowl03.jpg",
      "sources/Ceramics/Dishware/Apollobowl01.jpg",
      "sources/Ceramics/Dishware/Apollobowl02.jpg",
      "sources/Ceramics/Dishware/Apollobowl03.jpg",
      "sources/Ceramics/Dishware/Apollobowl04.jpg",
      "sources/Ceramics/Dishware/Apollobowl05.jpg",
      "sources/Ceramics/Dishware/stackablebowl01.jpg",
      "sources/Ceramics/Dishware/stackablebowl02.jpg",
      "sources/Ceramics/Dishware/stackablebowl03.jpg",
      "sources/Ceramics/Dishware/stackablebowl04.jpg"
    ]
  },
  "sculpture": {
    title: "Sculptural Works",
    category: "Ceramics",
    description: `
      <p>Hand-built sculpture work done with varying techniques.</p>
      <p>The collection explores organic expressions of human appendages, animal figures (like green and brown dogs), custom trays, lamps, and tributes to classical characters.</p>
    `,
    metadata: {
      "Medium": "Stoneware clay, underglazes, glaze finishes",
      "Process": "Slab construction, pinch, and hollow coil modeling",
      "Key Pieces": "Apollo busts, Gojo sculpts, Hand-molded flower cups, Table Lamps",
      "Year": "2024"
    },
    images: [
      "sources/Ceramics/Sculpture/Hands 02.jpg",
      "sources/Ceramics/Sculpture/Green Dog.jpg",
      "sources/Ceramics/Sculpture/Brown Dog.jpg",
      "sources/Ceramics/Sculpture/flowerhand03.jpg",
      "sources/Ceramics/Sculpture/Tree Tray.jpg",
      "sources/Ceramics/Sculpture/Bigapollo01.jpg",
      "sources/Ceramics/Sculpture/Bigapollo02.jpg",
      "sources/Ceramics/Sculpture/Bigapollo03 copy.jpg",
      "sources/Ceramics/Sculpture/Gojo01.jpg",
      "sources/Ceramics/Sculpture/Gojo02.jpg",
      "sources/Ceramics/Sculpture/lamp05.jpg",
      "sources/Ceramics/Sculpture/lamp01.jpg",
      "sources/Ceramics/Sculpture/lamp02.jpg",
      "sources/Ceramics/Sculpture/lamp03.jpg"
    ]
  },
  "feline-skulls": {
    title: "Feline Skulls",
    category: "Ceramics",
    description: `
      <p>Felines vary in size from a tiny 12 inches long to a whopping 15 feet. The largest of all felines, the Siberian Tiger, can weigh anywhere from 303 to 990 lbs. The smallest of the group is the Rusty Spotted Cat which only weighs about 2 to 4 lbs.</p>
      <p>This ceramic project features hand-built anatomically comparative skulls of both the largest and smallest feline as well as a domestic cat, Mountain Lion, and African Lion, displaying variations in canine morphology and jaw arches.</p>
    `,
    metadata: {
      "Medium": "Terracotta & Stoneware clay bodies",
      "Technique": "Hand-carved hollow structure modeling",
      "Species Modeled": "Siberian Tiger, African Lion, Mountain Lion, Domestic Cat, Rusty Spotted Cat",
      "Year": "2024"
    },
    images: [
      "sources/Ceramics/Feline Skulls/All Skulls 01.jpg",
      "sources/Ceramics/Feline Skulls/All Skulls 02.jpg",
      "sources/Ceramics/Feline Skulls/All Skulls 03.jpg",
      "sources/Ceramics/Feline Skulls/All Skulls 04.jpg",
      "sources/Ceramics/Feline Skulls/Siberian Tiger 02.jpg",
      "sources/Ceramics/Feline Skulls/Siberian Tiger 03.jpg",
      "sources/Ceramics/Feline Skulls/Siberian Tiger 04.jpg",
      "sources/Ceramics/Feline Skulls/African Lion 01.jpg",
      "sources/Ceramics/Feline Skulls/African Lion 02.jpg",
      "sources/Ceramics/Feline Skulls/African Lion 03.jpg",
      "sources/Ceramics/Feline Skulls/Mountain lion 01.jpg",
      "sources/Ceramics/Feline Skulls/Mountain lion 02.jpg",
      "sources/Ceramics/Feline Skulls/Mountain lion 03.jpg",
      "sources/Ceramics/Feline Skulls/Domestic cat 01.jpg",
      "sources/Ceramics/Feline Skulls/Domestic cat 02.jpg",
      "sources/Ceramics/Feline Skulls/Domestic cat 03.jpg",
      "sources/Ceramics/Feline Skulls/Rusty Spotted Cat 01.jpg",
      "sources/Ceramics/Feline Skulls/Rusty Spotted Cat 02.jpg",
      "sources/Ceramics/Feline Skulls/Rusty Spotted Cat 03.jpg"
    ]
  },
  "first-time-project": {
    title: "First Time Project",
    category: "Photography",
    description: `
      <p>Hozier's album <i>Unreal, Unearth</i> tells the story of Dante's narrative poem <i>The Divine Comedy</i>. In this poem, the speaker journeys through hell and how he eventually reaches paradise. The song "First Time" is linked to the first circle of hell, Limbo. This circle is for those who weren't necessarily sinful but unbaptized and therefore cannot enter Heaven. Here souls wander aimlessly, wishing for the nirvana they will never reach.</p>
      <p>This song tells about the love that spurred on his journey into hell in the first place and the cycle of beginning and ending. Hozier said himself, “[it feels] like your world collapsing in on you, and then going again.”</p>
      <p>The singer begins by explaining how unfit he felt in his body and how he hated his name before his love uttered it. This love made him forget his whole life and eased the pain in his soul. He tells of how each time they say his name, part of him dies and is born again.</p>
      <p>He cuts off in a tangent about the gift of life and his presumable death. He lives on in the flowers his mother places on his grave and tells about how tumultuous and painful living is. How all creation inherently wishes and fights for the same thing.</p>
      <p>He resumes with the story of his love and its end. He mentions their final fight and explains that the emptiness he feels has been with him since he was young. He wonders when was the last time his love said his name and how the final piece of him died yet another came alive.</p>
      <p>The narrator's longing is akin to the idea of limbo - those in it are not being punished yet something will always be missing, something they will forever yearn for. Each time the lover calls to him the cycle begins and ends again.</p>
    `,
    metadata: {
      "Print Type": "DSLR Matte Prints",
      "Dimensions": "(4) 8x10, (6) 11x14, (1) 12x18",
      "Equipment": "Nikon DSLR D3300",
      "Concept Source": "Hozier's Album Track 'First Time' / Dante's Inferno (Limbo)",
      "Year": "2023"
    },
    images: [
      "sources/Photography/_First Time_/portfolio-01.jpg",
      "sources/Photography/_First Time_/portfolio-02.jpg",
      "sources/Photography/_First Time_/portfolio-12.jpg",
      "sources/Photography/_First Time_/portfolio-13.jpg",
      "sources/Photography/_First Time_/portfolio-14.jpg",
      "sources/Photography/_First Time_/portfolio-15.jpg",
      "sources/Photography/_First Time_/portfolio-16.jpg",
      "sources/Photography/_First Time_/portfolio-17.jpg",
      "sources/Photography/_First Time_/portfolio-18.jpg"
    ]
  },
  "who-we-are-project": {
    title: "Who We Are Project",
    category: "Photography",
    description: `
      <p>Another song from Hozier's album <i>Unreal, Unearth</i>, "Who We Are" correlates with the Fifth circle of Hell, the circle of Wrath. It is a song about identity and the terrifying imperfectness of the world. It tells the tale of the wrath of living, of learning who you are, and learning of all the time you have “wasted”.</p>
      <p>The speaker discusses how difficult it is to accept who you are. We are born unknowing and we spend our lives discovering and creating ourselves. They open up with, and constantly circle back to, that our life, our identity is constantly slipping through our fingers. Something the speaker says you do not even notice until it is too late. With this they mention how all anyone wants is to be held with care by someone comforting, like a person from their past. They want to be held either tenderly and with care or tightly with fierceness. They constantly reference the knife and water throughout the song.</p>
      <p>They touch on the way people waste their lives working on “someone else’s dream”, living up to expectations, or even their partner’s plans for them. You spend so much time thinking it is your dream and what you need to do only to discover it was not what you wanted at all. People think they are doing what they wanted or thought was necessary yet our interpretations are almost never completely accurate. It is hard to see through the haze and false notions, you almost never see the truth.</p>
    `,
    metadata: {
      "Print Type": "Silver Gelatin Prints (Darkroom Processed)",
      "Dimensions": "8x10",
      "Camera": "35mm SLR Nikon FE",
      "Concept Source": "Hozier's Album Track 'Who We Are' / Dante's Fifth Circle (Wrath)",
      "Year": "2025"
    },
    images: [
      "sources/Photography/_Who We Are_/Riley Ragains_Final01.jpg",
      "sources/Photography/_Who We Are_/Riley Ragains_Final02.jpg",
      "sources/Photography/_Who We Are_/Riley Ragains_Final03.jpg",
      "sources/Photography/_Who We Are_/Riley Ragains_Final04.jpg",
      "sources/Photography/_Who We Are_/Riley Ragains_Final05.jpg",
      "sources/Photography/_Who We Are_/Riley Ragains_Final06.jpg"
    ]
  },
  "portraiture": {
    title: "Portraiture",
    category: "Photography",
    description: `
      <p>In-studio portraits done as projects and for commissioned graduation photos.</p>
      <p>This gallery displays works of individuals, modeling shadows and lights to bring out expressions of quiet introspection and celebratory milestones.</p>
    `,
    metadata: {
      "Type": "Studio & Environmental Portraits",
      "Equipment": "Nikon DSLR D3300 / Studio Strobe Setup",
      "Applications": "Commissioned graduation & Fine Art portraiture studies",
      "Year": "2023 - 2025"
    },
    images: [
      "sources/Photography/Portraits/Ethan-1.jpg",
      "sources/Photography/Portraits/GradPhotos_03.jpg",
      "sources/Photography/Portraits/GradPhotos_24.jpg",
      "sources/Photography/Portraits/DSC_0017-1 copy.jpg"
    ]
  },
  "self-portraiture": {
    title: "Self Portraiture",
    category: "Photography",
    description: `
      <p>Two separate self-portrait based projects.</p>
      <p>The cork board collage takes a deeper look into me as a person and an artist, it is meant to be an abstract self-portrait. It features several short poems I wrote as well as photographs from important things in my living space.</p>
      <p>The other project is a series of images meant to convey the quiet joy of being alive, capturing light rays, simple moments, and soft shadows.</p>
    `,
    metadata: {
      "Sub-Projects": "Abstract Cork Board Collage & 'To Be Alive' Series",
      "Medium": "Archival Pigment Prints / DSLR Prints",
      "Dimensions": "8.5x11 (To Be Alive Prints)",
      "Poetry Integration": "Original written poems shown within the collages",
      "Year": "2023 - 2024"
    },
    images: [
      "sources/Photography/Self Portraits/Ragains Riley, To Be Alive 07, Archival Pigment Print, 8.5x11, 2023.jpg",
      "sources/Photography/Self Portraits/Ragains Riley, To Be Alive 01, Archival Pigment Print, 8.5x11, 2023.jpg",
      "sources/Photography/Self Portraits/Ragains Riley, To Be Alive 04, Archival Pigment Print, 8.5x11, 2023.jpg",
      "sources/Photography/Self Portraits/Ragains Riley, To Be Alive 05, Archival Pigment Print, 8.5x11, 2023.jpg",
      "sources/Photography/Self Portraits/IMG_6880.jpg",
      "sources/Photography/Self Portraits/DSC_0909.jpeg"
    ]
  },
  "nature": {
    title: "Nature",
    category: "Photography",
    description: `
      <p>Just a small collection of nature based photography mostly shot with a Nikon D3300.</p>
      <p>Focusing on macro closeups, insect wings, flora details, and high-depth forest patterns to reveal micro-ecosystem structures.</p>
    `,
    metadata: {
      "Camera": "Nikon DSLR D3300",
      "Lenses": "50mm Prime, 18-55mm Kit Lens",
      "Format": "Digital RAW capture",
      "Year": "2023 - 2024"
    },
    images: [
      "sources/Photography/Nature/DSC_0621_1.jpg",
      "sources/Photography/Nature/DSC_0622.jpg",
      "sources/Photography/Nature/DSC_0435(1).jpeg",
      "sources/Photography/Nature/DSC_0459.jpeg",
      "sources/Photography/Nature/DSC_0552.jpeg",
      "sources/Photography/Nature/DSC_0615.jpeg"
    ]
  },
  "film": {
    title: "Film Photography",
    category: "Photography",
    description: `
      <p>A collection of 35 mm film photographs shot almost entirely with Nikon FE although the still life was done using a hand-made pinhole camera.</p>
      <p>The two collages were crafted using found prints from Jax State’s studio and the longer, colored collage won <b>Honorable Mention in Photography</b> at Jacksonville State’s 53rd Annual Juried Student Art Show.</p>
    `,
    metadata: {
      "Camera": "35mm SLR Nikon FE & Hand-made Pinhole Camera",
      "Processes": "Silver Gelatin Darkroom Prints, Found Print Collage Layouts",
      "Recognition": "Honorable Mention (53rd JSU Annual Juried Student Art Show)",
      "Year": "2024 - 2025"
    },
    images: [
      "sources/Photography/Film/Riley Ragains_FracturedReality.jpg",
      "sources/Photography/Film/Riley Ragains_Print05.jpg",
      "sources/Photography/Film/Riley Ragains_Print04.jpg",
      "sources/Photography/Film/Riley Ragains_Print03.jpg",
      "sources/Photography/Film/Riley Ragains_PinholePos02.jpg",
      "sources/Photography/Film/Riley Ragains_Experimental01.jpg",
      "sources/Photography/Film/Riley Ragains_Experimental04.jpg",
      "sources/Photography/Film/Riley Ragains_Experimental06.jpg",
      "sources/Photography/Film/Riley Ragains_Experimental07.jpg"
    ]
  }
};

/* --------------------------------------------------------------------------
   2. DOM Elements & State Management
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  
  // Word Slider elements
  const wordSlider = document.getElementById('wordSlider');
  const wordSlides = document.querySelectorAll('.word-slide');
  
  // Card elements
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  
  // Modal elements
  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalMetaSection = document.getElementById('modalMetaSection');
  
  // Carousel elements
  const carouselSlide = document.getElementById('carouselSlide');
  const carouselImg = document.getElementById('carouselImg');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  const carouselIndicators = document.getElementById('carouselIndicators');
  const photoCounter = document.getElementById('photoCounter');
  
  // Contact Form elements
  const contactForm = document.getElementById('contactForm');
  const contactSubmit = document.getElementById('contactSubmit');
  const toastNotification = document.getElementById('toastNotification');
  
  // Carousel State variables
  let currentProjectKey = '';
  let currentSlideIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  // Word Slider State
  let currentWordIndex = 0;

  /* --------------------------------------------------------------------------
     3. Word Slider Animation (Hero Text animation)
     -------------------------------------------------------------------------- */
  function rotateHeroWords() {
    // Remove active class from previous
    wordSlides[currentWordIndex].classList.remove('active');
    
    // Advance index
    currentWordIndex = (currentWordIndex + 1) % wordSlides.length;
    
    // Set active class to new
    wordSlides[currentWordIndex].classList.add('active');
    
    // Calculate slide translation height (70px per slide)
    const translateHeight = -currentWordIndex * 70;
    wordSlider.style.transform = `translateY(${translateHeight}px)`;
  }

  // Rotate words every 2.5 seconds
  setInterval(rotateHeroWords, 2500);

  /* --------------------------------------------------------------------------
     4. Progressive Loading for Card Preview Images
     -------------------------------------------------------------------------- */
  portfolioCards.forEach(card => {
    const img = card.querySelector('.card-img');
    if (img) {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
      }
    }
  });

  /* --------------------------------------------------------------------------
     5. Scroll Reveal Intersection Observer (Scroll-triggered fade/slide ins)
     -------------------------------------------------------------------------- */
  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    revealObserver.observe(el);
  });

  /* --------------------------------------------------------------------------
     6. Carousel Slider Logic
     -------------------------------------------------------------------------- */
  function loadSlide(index) {
    const project = ARTWORK_REGISTRY[currentProjectKey];
    if (!project || !project.images || project.images.length === 0) return;
    
    // Boundary checks
    if (index >= project.images.length) index = 0;
    if (index < 0) index = project.images.length - 1;
    
    currentSlideIndex = index;
    const src = project.images[currentSlideIndex];
    
    // Trigger loader state
    carouselSlide.classList.add('loading');
    carouselImg.src = '';
    carouselImg.classList.remove('loaded');
    
    const preloader = new Image();
    preloader.src = src;
    preloader.onload = () => {
      if (src === project.images[currentSlideIndex]) {
        carouselImg.src = src;
        carouselImg.alt = `${project.title} - Slide ${currentSlideIndex + 1}`;
        carouselImg.classList.add('loaded');
        carouselSlide.classList.remove('loading');
      }
    };
    
    // Update counter display
    photoCounter.textContent = `${currentSlideIndex + 1} / ${project.images.length}`;
    
    // Update dots status
    const dots = carouselIndicators.querySelectorAll('.indicator-dot');
    dots.forEach((dot, idx) => {
      if (idx === currentSlideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    loadSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    loadSlide(currentSlideIndex - 1);
  }

  carouselNext.addEventListener('click', nextSlide);
  carouselPrev.addEventListener('click', prevSlide);

  function buildIndicators(imageCount) {
    carouselIndicators.innerHTML = '';
    if (imageCount <= 1) {
      carouselIndicators.style.display = 'none';
      return;
    }
    carouselIndicators.style.display = 'flex';
    
    for (let i = 0; i < imageCount; i++) {
      const dot = document.createElement('div');
      dot.className = `indicator-dot ${i === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => loadSlide(i));
      carouselIndicators.appendChild(dot);
    }
  }

  // Touch Swipe gestures inside viewport
  carouselSlide.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carouselSlide.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      nextSlide();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      prevSlide();
    }
  }

  /* --------------------------------------------------------------------------
     7. Modal Open & Close Controller
     -------------------------------------------------------------------------- */
  function openProjectModal(projectKey) {
    const project = ARTWORK_REGISTRY[projectKey];
    if (!project) return;
    
    currentProjectKey = projectKey;
    currentSlideIndex = 0;
    
    // Populate header tags
    modalTag.textContent = project.category;
    modalTitle.textContent = project.title;
    
    // Populate description content
    modalDescription.innerHTML = project.description;
    
    // Populate metadata lists
    modalMetaSection.innerHTML = '';
    Object.entries(project.metadata).forEach(([key, val]) => {
      if (key === 'pdf_link' || key === 'pdf_title') return;
      
      const metaEl = document.createElement('div');
      metaEl.className = 'meta-item';
      metaEl.innerHTML = `
        <span class="meta-label">${key}:</span>
        <span class="meta-value">${val}</span>
      `;
      modalMetaSection.appendChild(metaEl);
    });
    
    // PDF Link Action Card
    if (project.metadata.pdf_link) {
      const actionBtn = document.createElement('a');
      actionBtn.href = project.metadata.pdf_link;
      actionBtn.target = '_blank';
      actionBtn.className = 'modal-action-btn';
      actionBtn.ariaLabel = `Open ${project.metadata.pdf_title} PDF in a new tab`;
      actionBtn.innerHTML = `
        <div class="modal-action-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
        </div>
        <div class="modal-action-details">
          <span class="modal-action-title">Read Full Typeface Book</span>
          <span class="modal-action-subtitle">PDF Document &bull; 1.6 MB</span>
        </div>
      `;
      modalMetaSection.appendChild(actionBtn);
    }
    
    buildIndicators(project.images.length);
    loadSlide(0);
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
    
    document.addEventListener('keydown', handleKeyboardControls);
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = ''; // Unlock background scrolling
    
    carouselImg.src = '';
    carouselImg.classList.remove('loaded');
    carouselSlide.classList.remove('loading');
    
    document.removeEventListener('keydown', handleKeyboardControls);
  }

  function handleKeyboardControls(e) {
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  }

  // Attach card event listeners
  portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectKey = card.getAttribute('data-project');
      openProjectModal(projectKey);
    });
  });

  modalClose.addEventListener('click', closeProjectModal);
  
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  /* --------------------------------------------------------------------------
     8. Contact Form Validator & Sending Animation Simulation
     -------------------------------------------------------------------------- */
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputs = contactForm.querySelectorAll('.form-control');
    let isFormValid = true;
    
    inputs.forEach(input => {
      const formGroup = input.parentElement;
      let isValid = true;
      
      if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(input.value.trim());
      } else {
        isValid = input.value.trim() !== '';
      }
      
      if (!isValid) {
        formGroup.classList.add('invalid');
        isFormValid = false;
      } else {
        formGroup.classList.remove('invalid');
      }
      
      input.addEventListener('input', () => {
        formGroup.classList.remove('invalid');
      });
    });
    
    if (isFormValid) {
      contactSubmit.disabled = true;
      const originalText = contactSubmit.querySelector('.btn-text').textContent;
      contactSubmit.querySelector('.btn-text').textContent = 'Sending...';
      
      setTimeout(() => {
        contactSubmit.classList.add('success');
        toastNotification.classList.add('active');
        contactForm.reset();
        
        setTimeout(() => {
          contactSubmit.disabled = false;
          contactSubmit.classList.remove('success');
          contactSubmit.querySelector('.btn-text').textContent = originalText;
        }, 3000);
        
        setTimeout(() => {
          toastNotification.classList.remove('active');
        }, 4000);
        
      }, 1500);
    }
  });
});
