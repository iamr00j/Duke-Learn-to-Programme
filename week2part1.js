var img = new SimpleImage("hilton.jpg");
print(img);
print(img.getWidth());
var width = img.getWidth();

for(var pixel of img.values()){
    var x = pixel.getX();
    if(x <= width/3){
        pixel.setRed(255);
    }
    else if(x <= width*2/3){
        pixel.setGreen(255);
    }
    else{
        pixel.setBlue(255);
    }
}

print(img);
