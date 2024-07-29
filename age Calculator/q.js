function calculateAge() {

   let age = document.getElementById('dob').value;
   let result = document.getElementById("result");


   const currDate = new Date();

   const currMonth = currDate.getMonth();
   const currYear = currDate.getFullYear();
   const currDay = currDate.getDate();

   const birthyear = new Date(age).getFullYear();
   const birthmonth = new Date(age).getMonth();
   const birthday = new Date(age).getDay();

   let Age = currYear - birthyear;
   let Month = currMonth - birthmonth;
   let day = currDay - birthday;
   let sec = currsec - birthsec;
   if (Month < 0) {
      Month += 12;
   }

   result.innerText = (`${Age} Year's ${Month} Month ${day} day`);


}
