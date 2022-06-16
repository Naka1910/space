fetch("https://api.themoviedb.org/3/movie/popular?api_key=78828dca7949b70ca50313e4d49660d1&language=en-US&page=1&fbclid=IwAR1tTH91h6jgRhNIw-a9Ruu4RMzf3gnWRNNnIHoYTYoTMIU-Cg25wPs5g64")
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
    kata(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

  function kata(data) {

  let firstBlock = document.getElementById("block");

    for(let i=0; i<data.results.length; i++){
      let title = data.results[i].title;
      let voteAverage = data.results[i].vote_average;
      let date = data.results[i].release_date;
      let imagePath = data.results[i].poster_path;

      let imgDiv = document.createElement("div");
      imgDiv.className ="img-div";
      let image = document.createElement("img");
      let info =document.createElement("div");
      info.className ="info";
      info.style ="display:none";
      info.id="info"+i;
      let titleh2=document.createElement("h2");
      titleh2.className ="info-title";
      titleh2.innerText = title;
      let voteAverageP= document.createElement("p");
      voteAverageP.className ="info-voteaverage";
      voteAverageP.innerText = voteAverage;
      let star =document.createElement("i");
      star.className ="fas fa-star"
      star.id="star-id"
      let dateP =document.createElement("p")
      dateP.className="info-date";
      dateP.innerText = date;
      image.className ="image";
      image.id=i;
      image.src="https://image.tmdb.org/t/p/w500"+imagePath;
      imgDiv.append(image);
      info.append(titleh2);
      info.append(dateP);
      info.append(voteAverageP);
      voteAverageP.append(star)
      imgDiv.append(info);
      firstBlock.append(imgDiv);
      image.onmouseover = showInfo;  
      image.onmouseout = hideInfo;
    }

  }


  function showInfo(e){
    let imgId = e.target.id;
    let infoId = "info"+imgId;
    console.log(imgId);
    console.log(infoId);
    let show = document.getElementById(infoId);
    show.style ="display:block"
  
  }
  function hideInfo(e){
    let imgId = e.target.id;
    let infoId = "info"+imgId;
    let hide =document.getElementById(infoId)
    hide.style="display:none";
    console.log(hide);
  }

const swiper = new Swiper('.swiper', {
   
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
    },

  });
   


