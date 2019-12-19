jQuery(document).ready(function($){
 
 
  
  $('#searchBtn').on('click',function(e){
    e.preventDefault();
    var grad = $('.input').val();
    if (grad !== '') {
    $('#city-search').addClass('remove')
    $('.cont1').removeClass(['remove'])
      $.ajax({
        method : 'GET',
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + grad + '&appid=9baab7555706b27e3cacb8cd85efc056&units=metric',
        dataType : 'jsonp'
   }).done(function(response){
   main(response)
   })
  }else{
    $('.input').css('border', '2px solid red')
    $('input').attr('placeholder', 'Enter city: ')
  }
   
  })


    
    function main(data){
      if(data.list[0].main.temp < 0){
        $('.cont1').css('background-image', 'url(assets/realWinter.jpg)')
      }
      else if(data.list[0].main.temp < 10 && data.list[0].main.temp > 0){
        $('.cont1').css('background-image', 'url(assets/winter.jpg)')
      }else if(data.list[0].main.temp > 10 && data.list[0].main.temp < 20){
        $('.cont1').css('background-image', 'url(assets/spring.jpg)')
      }else if(data.list[0].main.temp > 20){
        $('.cont1').css('background-image', 'url(assets/summer.jpg)')
      }
        
      
      $('#city').append('<h1>'+data.city.name+'</h1>')
        $('#temp').append('<h1>'+data.list[0].main.temp+' °C</h1>')
        $('#min-max').append('<h6>' + data.list[0].main.temp_min + '° / ' + data.list[0].main.temp_max + '° | '+ 'Feels like: ' + data.list[0].main.feels_like+'°<h6>')
        
        
     
        

       
   
     $('.stepen').eq(0).append(data.list[0].main.temp + '°');
     $('.nebo').eq(0).append(data.list[0].weather[0].main);
     $('.vjetar').eq(0).append('Wind speed: '+ data.list[0].wind.speed);
     $('.wind-img').eq(0).append('<img class="windImg" src="assets/wind.svg">')
     if(data.list[0].weather[0].main === 'Rain'){
      $('.slika').eq(0).append('<img class="image" src="assets/rain.svg">')
    }else if(data.list[0].weather[0].main === 'Clouds'){
     $('.slika').eq(0).append('<img class="image" src="assets/clouds.svg">')
    }else if(data.list[0].weather[0].main === 'Clear'){
      $('.slika').eq(0).append('<img class="image" src="assets/sunrise.svg">')
     }else if(data.list[0].weather[0].main === 'Thunderstorm'){
      $('.slika').eq(0).append('<img class="image" src="assets/storm.svg">')
     }else if(data.list[0].weather[0].main === 'Snow'){
      $('.slika').eq(0).append('<img class="image" src="assets/snow.svg">')
     }
     


     $('.stepen').eq(1).append(data.list[8].main.temp + '°');
     $('.nebo').eq(1).append(data.list[8].weather[0].main);
     $('.vjetar').eq(1).append('Wind speed: '+ data.list[8].wind.speed);
     $('.wind-img').eq(1).append('<img class="windImg" src="assets/wind.svg">')
     if(data.list[8].weather[0].main === 'Rain'){
      $('.slika').eq(1).append('<img class="image" src="assets/rain.svg">')
    }else if(data.list[8].weather[0].main === 'Clouds'){
     $('.slika').eq(1).append('<img class="image" src="assets/clouds.svg">')
    }else if(data.list[8].weather[0].main === 'Clear'){
      $('.slika').eq(1).append('<img class="image" src="assets/sunrise.svg">')
     }else if(data.list[8].weather[0].main === 'Thunderstorm'){
      $('.slika').eq(1).append('<img class="image" src="assets/storm.svg">')
     }else if(data.list[8].weather[0].main === 'Snow'){
      $('.slika').eq(1).append('<img class="image" src="assets/snow.svg">')
     }



     $('.stepen').eq(2).append(data.list[16].main.temp + '°');
     $('.nebo').eq(2).append(data.list[16].weather[0].main);
     $('.vjetar').eq(2).append('Wind speed: '+ data.list[16].wind.speed);
     $('.wind-img').eq(2).append('<img class="windImg" src="assets/wind.svg">')
     if(data.list[16].weather[0].main === 'Rain'){
       $('.slika').eq(2).append('<img class="image" src="assets/rain.svg">')
     }else if(data.list[16].weather[0].main === 'Clouds'){
      $('.slika').eq(2).append('<img class="image" src="assets/clouds.svg">')
     }else if(data.list[16].weather[0].main === 'Clear'){
      $('.slika').eq(2).append('<img class="image" src="assets/sunrise.svg">')
     }else if(data.list[16].weather[0].main === 'Thunderstorm'){
      $('.slika').eq(2).append('<img class="image" src="assets/storm.svg">')
     }else if(data.list[16].weather[0].main === 'Snow'){
      $('.slika').eq(2).append('<img class="image" src="assets/snow.svg">')
     }




     $('.stepen').eq(3).append(data.list[24].main.temp + '°');
     $('.nebo').eq(3).append(data.list[24].weather[0].main);
     $('.vjetar').eq(3).append('Wind speed: '+ data.list[24].wind.speed);
     $('.wind-img').eq(3).append('<img class="windImg" src="assets/wind.svg">')
     if(data.list[24].weather[0].main === 'Rain'){
      $('.slika').eq(3).append('<img class="image" src="assets/rain.svg">')
    }else if(data.list[24].weather[0].main === 'Clouds'){
     $('.slika').eq(3).append('<img class="image" src="assets/clouds.svg">')
    }else if(data.list[24].weather[0].main === 'Clear'){
      $('.slika').eq(3).append('<img class="image" src="assets/sunrise.svg">')
     }else if(data.list[24].weather[0].main === 'Thunderstorm'){
      $('.slika').eq(3).append('<img class="image" src="assets/storm.svg">')
     }else if(data.list[24].weather[0].main === 'Snow'){
      $('..slika').eq(3).append('<img class="image" src="assets/snow.svg">')
     }
    





     $('.stepen').eq(4).append(data.list[32].main.temp + '°');
     $('.nebo').eq(4).append(data.list[32].weather[0].main);
     $('.vjetar').eq(4).append('Wind speed: '+ data.list[32].wind.speed);
     $('.wind-img').eq(4).append('<img class="windImg" src="assets/wind.svg">')
     if(data.list[32].weather[0].main === 'Rain'){
      $('.slika').eq(4).append('<img class="image" src="assets/rain.svg">')
    }else if(data.list[32].weather[0].main === 'Clouds'){
     $('.slika').eq(4).append('<img class="image" src="assets/clouds.svg">')
    }else if(data.list[32].weather[0].main === 'Clear'){
      $('.slika').eq(4).append('<img class="image" src="assets/sunrise.svg">')
     }else if(data.list[32].weather[0].main === 'Thunderstorm'){
      $('.slika').eq(4).append('<img class="image" src="assets/storm.svg">')
     }else if(data.list[32].weather[0].main === 'Snow'){
      $('.slika').eq(4).append('<img class="image" src="assets/snow.svg">')
     }


    }
  

  $('#days').on('click', function(){
     $('.cont2').removeClass('remove');
    $('html, body').animate({scrollTop: $(document).height()},2000);
    return false;
   })
   
  })
