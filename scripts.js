

  //--------------Planet data-----------------
const planetsArr = [
   {
    name: 'Mercury',

    diameter: 4879,
    size: 4,
    temperature: 350,
    weight: 0.055,
    distance: 58,
    imageURL: './assets/image/planet/Mercury.png'
  },
  {
    name: 'Venus',
    diameter: 12104,
    size: 12,
    temperature: 460,
    weight: 0.815,
    distance: 108,
    imageURL: './assets/image/planet/Venus.png'
  },
  {
    name: 'Earth',
    diameter: 12756,
    size: 12,
    temperature: 40,
    weight: 1,
    distance: 150,
    imageURL: './assets/image/planet/Earth.png'
  },
  {
    name: 'Mars',
    diameter: 6779,
    size: 6,
    temperature: -63,
    weight: 0.107,
    distance: 228,
    imageURL: './assets/image/planet/Mars.png'
  },
  {
    name: 'Jupiter',
    diameter: 139820,
    size: 139,
    temperature: -145,
    weight: 318,
    distance: 778,
    imageURL: './assets/image/planet/Jupiter.png'
  },
  {
    name: 'Saturn',
    diameter: 116460,
    size: 116,
    temperature: -180,
    weight: 95,
    distance: 1429,
    imageURL: './assets/image/planet/Saturn.png'
  },
  {
    name: 'Uranus',
    diameter: 50724,
    size: 50,
    temperature: -224,
    weight: 14.6,
    distance: 2875,
    imageURL: './assets/image/planet/Uranus.png'
  },
  {
    name: 'Neptune',
    diameter: 49244,
    size: 49,
    temperature: -220,
    weight: 17.2,
    distance: 4497,
    imageURL: './assets/image/planet/Neptune.png'
  }]
//-------------------------------------------------------------------------------
//---------------------Select---------------------------------------------------
const mySelects = document.querySelectorAll(".custom-select");    

for(let select of mySelects){

    let activeSelectValue = select.querySelector(".select-active-value");
    let listOption = select.querySelector(".option-list");
    let itemList = listOption.querySelectorAll(".option");
    let selectInput = select.querySelector(".select__input-hidden");
    let thisId = select.id
        activeSelectValue.addEventListener("click", function() {
            openSelect();
            hiddenElement();
        });

        for(let item of itemList) {


            item.addEventListener("click", () => {
                for(let el of itemList){
                    el.classList.remove("is-target")
                };
                activeSelectValue.children[0].textContent = item.textContent;
                selectInput.value = item.getAttribute('data-value');
                item.classList.toggle("is-target")
                closeSelect();
                setPlanets()
                
            });
        };

        function hiddenElement(){
          for (let item of itemList){
            switch (thisId) {
              case 'select_1':
                if(document.getElementById('select-right').value == item.getAttribute('data-value'))
                {
                  item.classList.add('hiden-el')
                }
                else{
                  item.classList.remove('hiden-el')
                }
                break;
              case 'select_2': 
              if(document.getElementById('select-left').value == item.getAttribute('data-value'))
                {
                  item.classList.add('hiden-el')
                }
                else{
                  item.classList.remove('hiden-el')
                }
              break;
            }
          }
        }

        function closeSelect () {
          listOption.classList.remove("show");
          activeSelectValue.classList.remove("is-activ");
          document.removeEventListener('click', (e) => {
            if(!select.contains(e.target)) {
              closeSelect();
            };
          });
        };

        function openSelect () {
          listOption.classList.toggle("show");
          activeSelectValue.classList.toggle("is-activ");

          document.addEventListener('click', (e) => {
            if(!select.contains(e.target)) {
              closeSelect();
            };
          });
        };
    };

    function hiddenPlanet () {
      if (document.getElementById('select-left').value != ''){
        document.querySelectorAll('')
      }
    }
//-----------------------------------------------------------------------------------
function setPlanets () {
  let leftSelect = document.getElementById('select-left');
  let rightSelect = document.getElementById('select-right');
  if (leftSelect.value != ''){
    if (rightSelect.value != ''){
      leftPlanet = planetsArr.find(planet => planet.name === leftSelect.value);
      rightPlanet = planetsArr.find(planet => planet.name === rightSelect.value);
      showInfo();
      document.querySelector('.flex-box').classList.remove('hiden-el')
    }
  }
}


let leftPlanet;
let rightPlanet;
function showInfo () {
  
/*-----------------------------------------------------*/
  document.getElementById("left-dmtr").textContent = leftPlanet.diameter.toLocaleString();
  document.getElementById("left-img").src = leftPlanet.imageURL;
  document.getElementById("left-img").style.width = `${leftPlanet.size + 100}px`

  if(leftPlanet.diameter > rightPlanet.diameter){
    document.getElementById('comparison_diameter').src = './assets/image/type=right.svg'
  }   
  else {
     document.getElementById('comparison_diameter').src = './assets/image/type=left.svg'
  } 

  document.getElementById("right-dmtr").textContent = rightPlanet.diameter.toLocaleString();
  document.getElementById('right-img').src = rightPlanet.imageURL;
  document.getElementById('right-img').style.width = `${rightPlanet.size + 100}px`

/*-----------------------------------------------------*/
  document.getElementById('left-tmprt').textContent = leftPlanet.temperature;

  if(leftPlanet.temperature> rightPlanet.temperature){
    document.getElementById('comparison_temperature').src = './assets/image/type=right.svg'
  }   
  else {
     document.getElementById('comparison_temperature').src = './assets/image/type=left.svg'
  } 

  document.getElementById('right-tmprt').textContent = rightPlanet.temperature;
  fillEmoji ();

  /*-----------------------------------------------------*/
  let leftLineBlocIcon = document.getElementById('left-mass-icon');
  let leftLineIcon = document.getElementById('left-mass-icon_remainder');
  let rightLineBlocIcon = document.getElementById('right-mass-icon_remainder')
  let rightLineIcon = document.getElementById('right-mass-icon');

  document.getElementById('left-mass').textContent = leftPlanet.weight;
  vievErthMass (leftPlanet.weight, leftLineBlocIcon, leftLineIcon);

    if(leftPlanet.weight > rightPlanet.weight){
      document.getElementById('comparison_mass').src = './assets/image/type=right.svg'
    }   
    else {
      document.getElementById('comparison_mass').src = './assets/image/type=left.svg'
    } 

  document.getElementById('right-mass').textContent = rightPlanet.weight;
  vievErthMass (rightPlanet.weight, rightLineBlocIcon, rightLineIcon);

  /*-----------------------------------------------------*/
    document.getElementById('left-distance').textContent = leftPlanet.distance;
    let pxDistLeft = Math.trunc(leftPlanet.distance * 0.258);
    let pxDistRight = Math.trunc(rightPlanet.distance * 0.258);
      if(leftPlanet.distance > rightPlanet.distance){
        document.getElementById('comparison_distance').src = './assets/image/type=right.svg'
      }   
      else {
        document.getElementById('comparison_distance').src = './assets/image/type=left.svg'
      }
    
    document.getElementById('right-distance').textContent = rightPlanet.distance;

      document.getElementById('planet_1').src = leftPlanet.imageURL;
      document.getElementById('planet_2').src = rightPlanet.imageURL;
      document.getElementById('planet_1').style.width = `${leftPlanet.size}px`;
      document.getElementById('planet_1').style.height = `${leftPlanet.size}px`;
      document.getElementById('planet_2').style.width = `${rightPlanet.size}px`;
       document.getElementById('planet_2').style.height = `${rightPlanet.size}px`;
      document.getElementById('planet_1').style.marginLeft = `${pxDistLeft}px`;
      document.getElementById('planet_2').style.marginLeft = `${pxDistRight}px`;
      

  /*-----------------------------------------------------*/

  function fillEmoji () {
    let lt = leftPlanet.temperature;
    let rt = rightPlanet.temperature;

    if(lt >= 200){
      document.getElementById('left-emoji_1').src = './assets/image/emoji/fire.png';
      document.getElementById('left-emoji_2').src = './assets/image/emoji/skull.png';
      document.getElementById('left-emoji_1').style.display = 'block';
      document.getElementById('left-emoji_2').style.display = 'block';
    }
    else {
      if (lt > 40) {
        document.getElementById('left-emoji_1').src = './assets/image/emoji/hot-face.png';
        document.getElementById('left-emoji_1').style.display = 'block';

      }
      else {
        if (lt > -60) {
          document.getElementById('left-emoji_1').src = './assets/image/emoji/sunglasses.png';
          document.getElementById('left-emoji_1').style.display = 'block';
        }
        else{
          if (lt > -65 ) {
            document.getElementById('left-emoji_1').src = './assets/image/emoji/cold-face.png';
            document.getElementById('left-emoji_1').style.display = 'block';
          }
          else {
            document.getElementById('left-emoji_1').src = './assets/image/emoji/snowflake.png';
            document.getElementById('left-emoji_2').src = './assets/image/emoji/skull.png'; 
            document.getElementById('left-emoji_1').style.display = 'block';
            document.getElementById('left-emoji_2').style.display = 'block';
          }
        }
      }
    }

    if(rt >= 200){
      document.getElementById('right-emoji_1').src = './assets/image/emoji/fire.png'; 
      document.getElementById('right-emoji_2').src = './assets/image/emoji/skull.png';
      document.getElementById('right-emoji_1').style.display = 'block';
      document.getElementById('right-emoji_2').style.display = 'block';
    }
    else {
      if (rt > 40) {
        document.getElementById('right-emoji_1').src = './assets/image/emoji/hot-face.png';
        document.getElementById('right-emoji_1').style.display = 'block';

      }
      else {
        if (rt > -60) {
          document.getElementById('right-emoji_1').src = './assets/image/emoji/sunglasses.png';
          document.getElementById('right-emoji_1').style.display = 'block';
        }
        else{
          if (rt > -65 ) {
            document.getElementById('right-emoji_1').src = './assets/image/emoji/cold-face.png';
            document.getElementById('right-emoji_1').style.display = 'block';
          }
          else {
            document.getElementById('right-emoji_1').src = './assets/image/emoji/snowflake.png';
            document.getElementById('right-emoji_2').src = './assets/image/emoji/skull.png';
            document.getElementById('right-emoji_1').style.display = 'block';
            document.getElementById('right-emoji_2').style.display = 'block';
          }
        }
      }
    }
  }

  function vievErthMass (massValue, bigPlace, lilPlace) {

    bigPlace.style.height = `0px`;
    bigPlace.style.width = `0px`;
    lilPlace.style.width = `0px`;

    const fullLine = 7;
    let lilWidthPx;
    if (massValue >= 1){

      let mass = Math.trunc(massValue);

      if(mass > fullLine) {
        lilWidthPx = (mass % fullLine) * 30;
        let blocErthPx = ((mass - (mass % fullLine)) / fullLine) * 30
        
        bigPlace.style.height = `${blocErthPx}px`;
        bigPlace.style.width = `${30 * fullLine}px`;
        lilPlace.style.width = `${lilWidthPx}px`;
        lilPlace.style.height = '30px';
      }
      else {
        lilWidthPx = Math.trunc(mass) * 30
      lilPlace.style.width = `${lilWidthPx}px`;
      lilPlace.style.height = '30px';
      }
    }
    
  }
};

