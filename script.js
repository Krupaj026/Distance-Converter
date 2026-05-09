(function(){
        let converttype="miles";
		const heading=document.querySelector("h1");
		const intro=document.querySelector("p");
		const answer=document.querySelector("h2");
		const myform=document.getElementById("convert");

		document.addEventListener("keydown",function(event){

			if(event.key=="k"||event.key=="K")
			{
				converttype="Kilometers";
				heading.innerHTML="Kilometers to  Miles Converter";
				intro.innerHTML="Type in a number of Kilometers and click the button to convert the distance to Miles.";

			}else if(event.key=="m"||event.key=="M"){

				converttype="Miles";
				heading.innerHTML="Miles to Kilometers Converter";
				intro.innerHTML="Type in a number of  Miles and click the button to convert the distance to Kilometers.";

			}
		});

		myform.addEventListener("submit",function(event){

				event.preventDefault();
				const distance=parseFloat(document.getElementById("distance").value);

				if(!isNaN(distance))
				{
					if(converttype=="Miles")
					{
						let conversion=(distance*1.609344).toFixed(3);
						answer.innerHTML=`${distance} Miles is converted to ${conversion} Kilometers`;
						answer.style.color="#5E548E";
					}else{
						let conversion=(distance*0.621371192).toFixed(3);
						answer.innerHTML=`${distance} Kilometers is converted to ${conversion} Miles`;
						answer.style.color="#5E548E";
					}
				}else{
					answer.innerHTML="Please Enter A Valid Number";
				}
		});
}());