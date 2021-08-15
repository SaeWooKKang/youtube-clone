const header = document.querySelector('header');
const section = document.getElementById('main-section');

function makeHeader() {
  var template = `
    <div class="header-left">
      <button><i class="fas fa-bars"></i></button>
      <a href="#"><i class="fab fa-youtube"></i>Premium</a>
    </div>

    <div class="header-center">
      <input type="text" placeholder="검색">
      <button><i class="fas fa-microphone"></i></button>
    </div>

    <div class="header-right">
      <button><i class="fas fa-video"></i></button>
      <button><i class="fas fa-th"></i></button>
      <button><i class="fas fa-bell"></i></button>
      <button>
        <div>J</div>
      </button>
    </div>
  `;
  header.innerHTML = template;
}

function makeFeed() {
  makeHeader();
  let imgArray = [];
  const template = `
    <div class = 'container'>
      {{__img__}}
    </div>
  `;

  for (let i = 0; i < 8; i++) {
    imgArray.push(`
  <div>
    <a href="#/1"><img src= 'img/paint 🎨 (${i}).png'></a>
    <div class='metadata'>
      <a href="#"> <img class='icon' src='img/paint 🎨 (${i}).png'></a>
      <div class='data'>
        <a href="#/1" class='title'>title</a>
        <div class='channel'>channel</div>
        <div class='countAndTime'>countAndTime</div>
      </div>
    </div>
  </div>
  `);
  }
  section.innerHTML = template.replace('{{__img__}}', imgArray.join(''));
}

function videoDetail() {
  makeHeader();
  let vedioDetailArry = [];
  template = `
    <div class="vedioDetail-container">
        <!-- left -->
        <div class="left">
            <!-- Viedo-->
            <div class="viedo">
                <video controls src=""></video>
            </div>
        
            <!--MetaData-->
            <section class="metaData">
                <ul class="metaData_hashtags">
                    <li>#Lorem ipsum </li>
                    <li>#Lorem ipsum dolor sit.</li>
                    <li>#Lorem ipsum dolor</li>
                </ul>
                <div class="metaData_title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="metaData_countAndBtns">
                    <div class="count">
                        조회수 2,500회 <br> 2021.7.23.
                    </div>
                    <ul class="btns">
                        <li><i class="fas fa-thumbs-up"></i><span> 2.2천</span></li>
                        <li><i class="fas fa-thumbs-down"></i><span> 3</span></li>
                        <li><i class="fas fa-share"></i><span> 공유</span></li>
                        <li><i class="fas fa-ellipsis-h"></i></li>
                    </ul>
                </div>
            </section>

            <!--Info-->
            <section class="info">
                    <div class="info_channel">
                        <img src="img/paint 🎨 (5).png" alt="">
                        <div class="container">
                            <div class="channel_name">pac</div>
                            <div class="channel_subscribers">4.89만명</div>
                        </div>
                        <button class="channel_btn">구독</button>
                    </div>
                    <div class="info_Explanation">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores explicabo quo unde quod necessitatibus, hic sequi. Delectus accusantium deserunt atque, commodi, ex aliquid, accusamus recusandae veniam impedit iure vitae libero?
                        ---------------------------------------------------------------------------
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatum blanditiis repellendus asperiores corporis deserunt odit quia itaque dignissimos quae! Culpa aspernatur vitae ea atque ipsam, minus ipsa voluptatem quos.
                    </div>
            </section>
        </div>

        <!-- right -->
        <div class="right">
            <!-- Next Video-->
            <section class="nextVideo">
                <div class="nextVideo_container">
                    <img src="img/paint 🎨 (0).png">
                    <div class="metadata">
                        <div class="title">[4K] title</div>
                        <div class="channelName">channelName</div>
                        <div class="views">조회수 670만회 * 1년 전</div>
                    </div>
                </div>
                <div class="nextVideo_container">
                    <img src="img/paint 🎨 (1).png">
                    <div class="metadata">
                        <div class="title">[4k] titletitletitletitletitletitle</div>
                        <div class="channelName">channelName</div>
                        <div class="views">조회수 1만회 * 1년 전</div>
                    </div>  
                </div>
                <div class="nextVideo_container">
                    <img src="img/paint 🎨 (3).png">
                    <div class="metadata">
                        <div class="title">[4k] titletitletitletitle</div>
                        <div class="channelName">channelName</div>
                        <div class="views">조회수 70만회 * 1년 전</div>
                    </div>
                </div>
            </section>
        </div>
        
    </div>
  `;
  section.innerHTML = template;
}

function router() {
  var url = location.hash;
  console.log(url);

  if (url === '') {
    makeFeed();
  } else if (url == '#/1') {
    videoDetail();
  }
}

window.addEventListener("hashchange", router);

router();