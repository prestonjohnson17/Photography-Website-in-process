let image = ['bible.jpg', 'crab.jpg', 'flag.jpg', 'girl.jpg', 'girl2.jpg',
'lighthouse.jpg', 'rings.jpg', 'roses.jpg', 'turtles.jpg', 'wine_glasses.jpg'],
 image_dir = 'C://Users/prest/Desktop/Atom/photosight/home_pictures/',
 secs = 5;

 image.forEach(function(img){
   new Image().src = image_dir + image;

 });

 function backgroundSequence() {
   window.clearTimeout();
   let k = 0;
   for (i = 0; i < image.length; i++) {
     setTimeout(function(){
       document.documentElement.style.background = "url(" + image_dir
        + image[k] + ") no-repeat center center fixed";

        document.documentElement.style.backgroundSize = 'cover';
          if((k + 1) === image.length) {
            setTimeout(function() { backgroundSequence() },
            (secs * 1000))}
            else {k++;}
          }, (secs * 1000) * i)
    }
  }
backgroundSequence();
