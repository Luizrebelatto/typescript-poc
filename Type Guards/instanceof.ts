// verify if a instance is about that class

class Sony {
  ps4() {
    console.log("ps4");
  }
}

class Nintendo {
  nintendo64() {
    console.log("Meow!");
  }
}

function buy(videoGame: Sony | Nintendo) {
  if (videoGame instanceof Sony) {
    videoGame.ps4()
  } else {
    videoGame.nintendo64()
  }
}
