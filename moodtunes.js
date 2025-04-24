function setMood(mood) {
    const message = document.getElementById("message");
    const music = document.getElementById("music");
    let bgColor, msg, video;
  
    if (mood === "happy") {
      bgColor = "#FFEB3B";
      msg = "Stay smiling! Here's a tune to match your mood!";
      video = "https://www.youtube.com/embed/ZbZSe6N_BXs"; 
      tune = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?utm_source=generator";
    } else if (mood === "sad") {
      bgColor = "#90A4AE";
      msg = "It's okay to feel down. Take a breath and listen.";
      video = "https://www.youtube.com/embed/ho9rZjlsyYY";
    } else if (mood === "calm") {
      bgColor = "#AED581";
      msg = "Relax and find your inner peace.";
      video = "https://www.youtube.com/embed/2OEL4P1Rz04";
    } else if (mood === "energetic") {
      bgColor = "#FF7043";
      msg = "Let's gooo! Pump up your energy!";
      video = "https://www.youtube.com/embed/fLexgOxsZu0";
    }
    else if (mood === "Anger"){
        bgColor = "#32CD32";
        msg = "Take a deep breath — anger doesn't solve, it only burns";
        video = "https://www.youtube.com/embed/lFcSrYw-ARY";
    }
    else if (mood === "depressed"){
        bgColor = "#87CEEB";
        msg = "You're not alone. It's okay to feel this way. Take things one breath at a time.";
        video ="https://www.youtube.com/embed/1ZYbU82GVz4";    
          }
  
    document.body.style.background = bgColor;
    message.textContent = msg;
    music.innerHTML = `<iframe src="${video}" allowfullscreen></iframe>`;
    tune.innerHTML= `<iframe srd="${tune}"allowfullscreen></iframe> `
  }
  