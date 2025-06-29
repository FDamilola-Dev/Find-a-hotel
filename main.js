
      document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menuToggle");
        const closeMenu = document.getElementById("closeMenu");
        const navMenu = document.getElementById("navMenu");

        function openMenu() {
          navMenu.classList.toggle("active");
        }

        // Toggle menu open
        menuToggle.addEventListener("click", openMenu);

        // Close menu
        closeMenu.addEventListener("click", openMenu);

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
          if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
          ) {
            navMenu.classList.remove("active");
          }
        });
      });

const whyChooseUsData = [
  {
    wrapperClass: "paymentWrapper",
    imgClass: "paymentImg",
    iconSrc: "./icon/advantages/payment.png",
    textClass: "paymentText",
    heading: "Payment methods",
    desc: "We have a lot of them, from cryptocurrencies to barter for potatoes"
  },
  {
    wrapperClass: "SearchWrapper",
    imgClass: "searchImg",
    iconSrc: "./Assets/search.png",
    textClass: "searchText",
    heading: "Simple search process",
    desc: "We checked it out, even the kid did it, but it was my mom's friend's son"
  },
  {
    wrapperClass: "supportWrapper",
    imgClass: "supportImg",
    iconSrc: "./Assets/support.png",
    textClass: "supportText",
    heading: "24/7 Support",
    desc: "Is there something you don't understand? Feel free to call us. Phone number in the footer"
  },
  {
    wrapperClass: "niceWrapper",
    imgClass: "niceImg",
    iconSrc: "./icon/advantages/nice.png",
    textClass: "niceText",
    heading: "We are nice",
    desc: "Fantasy is over, there will be something really convincing here"
  }
];

const whyContainer = document.querySelector(".whyChooseUs-container");
whyChooseUsData.forEach(item => {
  const wrapper = document.createElement("div");
  wrapper.className = item.wrapperClass;
  wrapper.innerHTML = `
    <div class="${item.imgClass}">
      <img src="./Assets/Ellipse 2 .png" alt="Background" />
      <img src="${item.iconSrc}" alt="${item.heading}" />
    </div>
    <div class="${item.textClass}">
      <h2>${item.heading}</h2>
      <p>${item.desc}</p>
    </div>
  `;
  whyContainer.appendChild(wrapper);
});


const specialOffers = [
  { img: "./Assets/special1.png" },
  { img: "./Assets/special2.png" },
  { img: "./Assets/special4.svg" }
];

const offerWrapper = document.querySelector(".specialOfferWrapper");
specialOffers.forEach(offer => {
  const div = document.createElement("div");
  div.className = "specialOfferImgOneWrapper";
  div.innerHTML = `
    <div class="specialOfferImgOne">
      <img src="${offer.img}" alt="Room Image" />
      <img src="./Assets/rating.png" alt="rating" />
      <img src="./Assets/favorite.png" alt="Favorite" />
      <div class="specialOfferText">
        <h3>Wilderness Club at Big Ceddar</h3>
        <p>28 October — 1 November</p>
        <p><span>$2016</span> / 6 night</p>
      </div>
    </div>
  `;
  offerWrapper.appendChild(div);
});

    //   review section
      const reviews = [
    {
      name: "Jannike Borg",
      role: "Publisher",
      image: "./Assets/reviewImg.png",
      text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again."
    },
    {
      name: "LeBron Durant",
      role: "Flight Attendant",
      image: "./Assets/review2.png",
      text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again."
    },
    {
      name: "Kaarel Piho",
      role: "Chiropodist",
      image: "./Assets/review2.png",
      text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again."
    }
  ];

  const container = document.getElementById("reviewImgs");


  reviews.forEach((r) => {
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `
      <img src="${r.image}" alt="Reviewer" />
      <p>${r.text}</p>
      <p><strong>${r.name}</strong>, ${r.role}</p>
    `;
    container.appendChild(div);
  });

  let index = 0;
  function slideReviews() {
    const total = reviews.length;
    index = (index + 1) % total;
    container.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(slideReviews, 5000); // change every 5 secs


const posts = [
  {
    img: "./Assets/recentImg2.svg",
    date: "May 23, 2022",
    time: "5 minutes",
    title: "My trip to Athens",
    desc: "Theseus, Plato and Epicurus once walked this city..."
  },
  {
    img: "./Assets/recentImg3.svg",
    date: "May 22, 2022",
    time: "1 minutes",
    title: "Vilnius resorts",
    desc: "There are wonderful people and pubs"
  },
  {
    img: "./Assets/recentImg.svg",
    date: "May 20, 2022",
    time: "15 minutes",
    title: "Tips for flying on a plane",
    desc: "Bring your co-pilot so you can take a nap while he steers"
  }
];

const recentSection = document.querySelector(".recentPostSection");
posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "cardWrapper";
  div.innerHTML = `
    <div><img src="${post.img}" alt="${post.title}" /></div>
    <div class="cardContent">
      <div class="date">
        <p>${post.date}</p>
        <div class="minutesWrapper">
          <div class="minuteImgWrapper">
            <img src="./Assets/Vector (2).png" class="circle" />
            <img src="./Assets/Vector (3).png" class="clockHands" />
          </div>
          <p>${post.time}</p>
        </div>
      </div>
      <div class="recentPostText">
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
      </div>
    </div>
  `;
  recentSection.appendChild(div);
});




  
